"use client";
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setGeneralDetails,
  setCompanyInfo,
  setBusinessType,
  setIndustry,
  setLoading,
} from '../store/onboardingSlice';
import {
  getBusinessType,
  getIndustryType,
  saveCompanyInfo,
  saveHeadCountInfo,
  saveValidateInfo,
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
  Divider,
  message,
  Space,
  Tooltip
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
  ExclamationCircleOutlined
} from '@ant-design/icons';
import styles from '../onboarding.module.scss';

const { Title, Text } = Typography;
const { Option } = Select;

const GeneralDetails = ({ onNext }) => {
  const dispatch = useDispatch();
  const { generalDetails, businessType, industry } = useSelector((state) => state.onboarding);
  const [form] = Form.useForm();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const panPattern = /^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/;

  useEffect(() => {
    const fetchBusinessAndIndustry = async () => {
      try {
        const businessInfo = await getBusinessType();
        const industryInfo = await getIndustryType();

        dispatch(setBusinessType(businessInfo.organization_info || []));
        dispatch(setIndustry(industryInfo.industry_info || []));
      } catch (error) {
        console.error('Error fetching business and industry types:', error);
        message.error('Failed to load business and industry options');
      }
    };
    fetchBusinessAndIndustry();
  }, [dispatch]);

  // Set form values when generalDetails changes
  useEffect(() => {
    form.setFieldsValue(generalDetails);
  }, [generalDetails, form]);

  const validatePan = (_, value) => {
    if (!value) {
      return Promise.reject(new Error('PAN is required'));
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
      return Promise.reject(new Error('Phone number is required'));
    }
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(value)) {
      return Promise.reject(new Error('Phone number must be 10 digits'));
    }
    return Promise.resolve();
  };

  const handleFormChange = (changedValues, allValues) => {
    dispatch(setGeneralDetails(allValues));
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      dispatch(setLoading(true));

      // Save company info
      await saveCompanyInfo({
        organization_name: values.organisationName,
        business_type: values.businessType,
        industry: values.industry,
        pan_card_no: values.panCardNo,
        gst_no: values.gstNo,
        address1: values.address1,
        address2: values.address2,
      });

      // Save head count info
      await saveHeadCountInfo({
        taxable_count: values.taxableEmployees,
        nontaxable_count: values.nonTaxableEmployees,
      });

      // Save validation info
      await saveValidateInfo({
        keyholder_name: values.keyholderName,
        designation: values.designation,
        email: values.email,
        phone_number: values.phoneNumber,
      });

      dispatch(setLoading(false));
      message.success('General details saved successfully!');
      onNext();
    } catch (error) {
      dispatch(setLoading(false));
      if (error.errorFields) {
        message.error('Please fill in all required fields correctly');
      } else {
        console.error('Error saving general details:', error);
        message.error('Failed to save general details. Please try again.');
      }
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.antdFormContainer}>
      <Card className={styles.formCard}>
        <div className={styles.formHeader}>
          <Title level={3} className={styles.formTitle}>
            <BankOutlined className={styles.formIcon} />
            Company Information
          </Title>
          <Text type="secondary" className={styles.formSubtitle}>
            Please provide your company details to get started
          </Text>
        </div>

        <Divider />

        <Form
          form={form}
          layout="vertical"
          onValuesChange={handleFormChange}
          initialValues={generalDetails}
          className={styles.antdForm}
        >
          <Row gutter={[24, 16]}>
            {/* Company Details Section */}
            <Col xs={24} lg={12}>
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
                  className={styles.antdInput}
                />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12}>
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
                  className={styles.antdSelect}
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

            <Col xs={24} lg={12}>
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
                  className={styles.antdSelect}
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

            <Col xs={24} lg={12}>
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
                  placeholder="ABCDE1234F"
                  size="large"
                  className={styles.antdInput}
                  maxLength={10}
                />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12}>
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
                  className={styles.antdInput}
                />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12}>
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
                  { type: 'number', min: 0, message: 'Must be a positive number' }
                ]}
              >
                <Input 
                  type="number"
                  placeholder="0"
                  size="large"
                  className={styles.antdInput}
                />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12}>
              <Form.Item
                name="nonTaxableEmployees"
                label={
                  <Space>
                    <TeamOutlined />
                    Non-Taxable Employees
                  </Space>
                }
                rules={[
                  { required: true, message: 'Please enter number of non-taxable employees' },
                  { type: 'number', min: 0, message: 'Must be a positive number' }
                ]}
              >
                <Input 
                  type="number"
                  placeholder="0"
                  size="large"
                  className={styles.antdInput}
                />
              </Form.Item>
            </Col>

            {/* Keyholder Details Section */}
            <Col xs={24}>
              <Divider orientation="left">
                <Title level={4} className={styles.sectionTitle}>
                  <UserOutlined />
                  Keyholder Information
                </Title>
              </Divider>
            </Col>

            <Col xs={24} lg={12}>
              <Form.Item
                name="keyholderName"
                label={
                  <Space>
                    <UserOutlined />
                    Keyholder Name
                  </Space>
                }
                rules={[{ required: true, message: 'Please enter keyholder name' }]}
              >
                <Input 
                  placeholder="Enter keyholder full name"
                  size="large"
                  className={styles.antdInput}
                />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12}>
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
                  placeholder="e.g., CEO, Manager, Director"
                  size="large"
                  className={styles.antdInput}
                />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12}>
              <Form.Item
                name="email"
                label={
                  <Space>
                    <MailOutlined />
                    Email Address
                  </Space>
                }
                rules={[{ validator: validateEmail }]}
              >
                <Input 
                  placeholder="keyholder@company.com"
                  size="large"
                  className={styles.antdInput}
                />
              </Form.Item>
            </Col>

            <Col xs={24} lg={12}>
              <Form.Item
                name="phoneNumber"
                label={
                  <Space>
                    <PhoneOutlined />
                    Phone Number
                  </Space>
                }
                rules={[{ validator: validatePhone }]}
              >
                <Input 
                  placeholder="9876543210"
                  size="large"
                  className={styles.antdInput}
                  maxLength={10}
                />
              </Form.Item>
            </Col>

            {/* Address Section */}
            <Col xs={24}>
              <Divider orientation="left">
                <Title level={4} className={styles.sectionTitle}>
                  <EnvironmentOutlined />
                  Address Information
                </Title>
              </Divider>
            </Col>

            <Col xs={24}>
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
                  className={styles.antdInput}
                />
              </Form.Item>
            </Col>

            <Col xs={24}>
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
                  className={styles.antdInput}
                />
              </Form.Item>
            </Col>
          </Row>

          <Divider />

          <div className={styles.formActions}>
            <Button
              type="primary"
              size="large"
              onClick={handleSubmit}
              className={styles.submitButton}
              icon={<CheckCircleOutlined />}
            >
              Continue to Features
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default GeneralDetails; 