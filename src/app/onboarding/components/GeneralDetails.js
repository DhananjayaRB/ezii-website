"use client";
import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setGeneralDetails,
  setBusinessType,
  setIndustry,
} from '../store/onboardingSlice';
import {
  getBusinessType,
  getIndustryType,
  saveCompanyInfo,
  saveHeadCountInfo,
  validateOrganization,
} from '../api_helpers';
import {
  Form,
  Input,
  Select,
  Button,
  Card,
  Row,
  Col,
  Typography,
  message,
  Space,
} from 'antd';
import {
  BankOutlined,
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  IdcardOutlined,
  TeamOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';
import styles from '../onboarding.module.scss';

const { Title, Text } = Typography;
const { Option } = Select;

const GeneralDetails = ({ onNext }) => {
  const dispatch = useDispatch();
  const { generalDetails, businessType, industry } = useSelector((state) => state.onboarding);
  const [form] = Form.useForm();
  const hasFetched = useRef(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const panPattern = /^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/;

  useEffect(() => {
    const fetchBusinessAndIndustry = async () => {
      try {
        const businessInfo = await getBusinessType();
        const industryInfo = await getIndustryType();

        dispatch(setBusinessType(businessInfo.organization_info || []));
        dispatch(setIndustry(industryInfo.industry_info || []));
      } catch (error) {
        message.error('Failed to load business and industry options');
      }
    };

    if (!hasFetched.current) {
      hasFetched.current = true;
      fetchBusinessAndIndustry();
    }
  }, []);

  useEffect(() => {
    form.setFieldsValue(generalDetails);
  }, [generalDetails, form]);

  const validatePan = (_, value) => {
    if (!value) {
      return Promise.resolve();
    }
    if (!panPattern.test(value)) {
      return Promise.reject(new Error('Invalid PAN format (e.g., ABCDE1234F)'));
    }
    return Promise.resolve();
  };

  const validateEmail = (_, value) => {
    if (!value) {
      return Promise.reject(new Error('Email is required'));
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return Promise.reject(new Error('Please enter a valid email address'));
    }
    return Promise.resolve();
  };

  const validatePhone = (_, value) => {
    if (!value) {
      return Promise.resolve();
    }
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(value)) {
      return Promise.reject(new Error('Phone number must be 10'));
    }
    return Promise.resolve();
  };

  const handleFormChange = (changedValues, allValues) => {
    dispatch(setGeneralDetails(allValues));
  };

  const handleSubmit = async () => {
    try {
      setErrorMessage('');
      setIsSubmitting(true);

      const values = await form.validateFields();

      const requiredFields = [
        'organisationName',
        'businessType',
        'industry',
        'taxableEmployees',
        'keyholderName',
        'designation',
        'email',
        'phoneNumber',
        'address1'
      ];

      const missingFields = requiredFields.filter(field => !values[field]);
      if (missingFields.length > 0) {
        setErrorMessage('Please fill in all required fields');
        setIsSubmitting(false);
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(values.email)) {
        setErrorMessage('Please enter a valid email address');
        setIsSubmitting(false);
        return;
      }

      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(values.phoneNumber)) {
        setErrorMessage('Phone number must be 10 digits');
        setIsSubmitting(false);
        return;
      }

      if (values.panCardNo && values.panCardNo.trim() !== '') {
        const panPattern = /^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/;
        if (!panPattern.test(values.panCardNo)) {
          setErrorMessage('Invalid PAN format (e.g., ABCDE1234F)');
          setIsSubmitting(false);
          return;
        }
      }

      const taxableCount = parseInt(values.taxableEmployees, 10);
      const nonTaxableCount = parseInt(values.nonTaxableEmployees, 10);

      if (isNaN(taxableCount) || taxableCount < 0) {
        setErrorMessage('Taxable employees must be a positive number');
        setIsSubmitting(false);
        return;
      }

      if (isNaN(nonTaxableCount) || nonTaxableCount < 0) {
        setErrorMessage('Non-taxable employees must be a positive number');
        setIsSubmitting(false);
        return;
      }

      localStorage.setItem("GeneralDetails", JSON.stringify(values));

      const companyInfo = {
        organizationName: values.organisationName,
        taxableCount: values.taxableEmployees,
        nontaxablecount: values.nonTaxableEmployees,
        keyholder_name: values.keyholderName,
        designation: values.designation,
        email: values.email,
        phone: values.phoneNumber,
        address1: values.address1,
        address2: values.address2,
        is_active: false,
      };

      const companyInfoPayload = {
        organization_name: values.organisationName,
        pan_no: values.panCardNo,
        gst_no: values.gstNo || "",
        email: values.email,
        phone: values.phoneNumber,
      };

      const totalHeadCount = taxableCount + nonTaxableCount;

      const HeadCountPayload = {
        HeadCount: totalHeadCount,
      };

      try {
        const response1 = await validateOrganization(companyInfoPayload);

        if (response1.success === false) {
          setErrorMessage(response1.message || 'Validation failed');
          setIsSubmitting(false);
          return;
        } else {
          const response = await saveHeadCountInfo(HeadCountPayload);

          let abc;
          if (typeof response === "string") {
            try {
              abc = JSON.parse(response);
            } catch (parseError) {
              setErrorMessage('Invalid response from server');
              setIsSubmitting(false);
              return;
            }
          } else {
            abc = response;
          }

          if (!abc || !abc.pricing) {
            setErrorMessage('No pricing data received from server');
            setIsSubmitting(false);
            return;
          }

          const pricing = abc.pricing;
          await saveCompanyInfo(companyInfo);

          localStorage.setItem("CompanyInfo", JSON.stringify(companyInfo));
          localStorage.setItem("HeadcountInfo", JSON.stringify(pricing));

          setIsSubmitting(false);
          setErrorMessage('');

          onNext();
        }
      } catch (error) {
        setErrorMessage('Failed to save general details. Please try again.');
        setIsSubmitting(false);
      }
    } catch (error) {
      setIsSubmitting(false);
      if (error.errorFields) {
        setErrorMessage('Please fill in all required fields correctly');
      } else {
        setErrorMessage('Failed to save general details. Please try again.');
      }
    }
  };

  return (
    <Card className={styles.modernFormCard}>
      <Title level={3} className={styles.modernFormTitle}>
        <BankOutlined className={styles.modernFormIcon} />
        Company Information
      </Title>

      <Form
        form={form}
        layout="vertical"
        onValuesChange={handleFormChange}
        initialValues={generalDetails}
        className={styles.modernAntdForm}
      >
        <Row gutter={[12, 12]}>
          <Col xs={24} sm={12} md={8}>
            <Form.Item
              name="organisationName"
              label={
                <Space>
                  <BankOutlined />
                  Organization Name
                </Space>
              }
              rules={[{ required: true, message: 'Please enter organization name' }]}
            >
              <Input
                placeholder="Enter your organization name"
                size="large"
              />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Form.Item
              name="businessType"
              label={
                <Space>
                  <BankOutlined />
                  Business Type
                </Space>
              }
              rules={[{ required: true, message: 'Please select business type' }]}
            >
              <Select
                placeholder="Select business type"
                size="large"
                showSearch
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                {businessType.map((type) => (
                  <Option key={type.id} value={type.id}>
                    {type.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Form.Item
              name="industry"
              label={
                <Space>
                  <BankOutlined />
                  Industry
                </Space>
              }
              rules={[{ required: true, message: 'Please select industry' }]}
            >
              <Select
                placeholder="Select industry"
                size="large"
                showSearch
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                {industry.map((ind) => (
                  <Option key={ind.id} value={ind.id}>
                    {ind.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Form.Item
              name="panCardNo"
              label={
                <Space>
                  <IdcardOutlined />
                  PAN Card Number
                </Space>
              }
              rules={[{ validator: validatePan }]}
            >
              <Input
                placeholder="ABCDE1234F (optional)"
                size="large"
                maxLength={10}
              />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Form.Item
              name="gstNo"
              label={
                <Space>
                  <IdcardOutlined />
                  GST Number
                </Space>
              }
            >
              <Input
                placeholder="Enter GST number (optional)"
                size="large"
              />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Form.Item
              name="taxableEmployees"
              label={
                <Space>
                  <TeamOutlined />
                  Taxable Employees
                </Space>
              }
              rules={[
                { required: true, message: 'Please enter number of taxable employees' },
                {
                  validator: (_, value) => {
                    if (value === '' || value === null || value === undefined) {
                      return Promise.reject(new Error('Please enter number of taxable employees'));
                    }
                    const numValue = Number(value);
                    if (isNaN(numValue) || numValue < 0) {
                      return Promise.reject(new Error('Must be a positive number'));
                    }
                    return Promise.resolve();
                  }
                }
              ]}
            >
              <Input
                type="number"
                placeholder="0"
                size="large"
              />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Form.Item
              name="nonTaxableEmployees"
              label={
                <Space>
                  <TeamOutlined />
                  Non-Taxable Employees
                </Space>
              }
              rules={[
                {
                  validator: (_, value) => {
                    if (value === '' || value === null || value === undefined) {
                      return Promise.reject(new Error('Please enter number of non-taxable employees'));
                    }
                    const numValue = Number(value);
                    if (isNaN(numValue) || numValue < 0) {
                      return Promise.reject(new Error('Must be a positive number'));
                    }
                    return Promise.resolve();
                  }
                }
              ]}
            >
              <Input
                type="number"
                placeholder="Enter 0 if none"
                size="large"
              />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Form.Item
              name="keyholderName"
              label={
                <Space>
                  <UserOutlined />
                  Name
                </Space>
              }
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input
                placeholder="name"
                size="large"
              />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Form.Item
              name="designation"
              label={
                <Space>
                  <UserOutlined />
                  Designation
                </Space>
              }
              rules={[{ required: true, message: 'Please enter designation' }]}
            >
              <Input
                placeholder="CEO, Manager, Director"
                size="large"
              />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Form.Item
              name="email"
              label={
                <Space>
                  <MailOutlined />
                  Email Address
                </Space>
              }
              rules={[{ required: true, validator: validateEmail }]}
            >
              <Input
                placeholder="Enter your mail"
                size="large"
              />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Form.Item
              name="phoneNumber"
              label={
                <Space>
                  <PhoneOutlined />
                  Phone Number
                </Space>
              }
              rules={[{ required: true, validator: validatePhone }]}
            >
              <Input
                placeholder="Phone number"
                size="large"
                maxLength={10}
              />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Form.Item
              name="address1"
              label={
                <Space>
                  <EnvironmentOutlined />
                  Address Line 1
                </Space>
              }
              rules={[{ required: true, message: 'Please enter address' }]}
            >
              <Input
                placeholder="Enter your complete address"
                size="large"
              />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Form.Item
              name="address2"
              label={
                <Space>
                  <EnvironmentOutlined />
                  Address Line 2
                </Space>
              }
            >
              <Input
                placeholder="Apartment, suite, etc. (optional)"
                size="large"
              />
            </Form.Item>
          </Col>
        </Row>

        <div className={styles.modernFormActions}>
          <Button
            type="primary"
            size="large"
            onClick={handleSubmit}
            className={styles.modernSubmitButton}
            icon={<CheckCircleOutlined />}
            loading={isSubmitting}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processing...' : 'Continue to Features'}
          </Button>

          {errorMessage && (
            <div className={styles.errorMessage}>
              {errorMessage}
            </div>
          )}
        </div>
      </Form>
    </Card>
  );
};

export default GeneralDetails; 