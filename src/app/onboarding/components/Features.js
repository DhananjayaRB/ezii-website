"use client";
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  setFeatures,
  setPricing,
  setAmounts,
  setActiveTab,
  setFormData,
  setLoading,
  setCurrentStep,
} from '../store/onboardingSlice';
import {
  confirmPayment,
  disableMenuInfo,
  paymentStatus,
} from '../api_helpers';
import {
  Card,
  Row,
  Col,
  Typography,
  Switch,
  Button,
  Tabs,
  Tag,
  Space,
  Divider,
  Progress,
  Tooltip,
  message,
  Modal
} from 'antd';
import {
  CheckCircleOutlined,
  DollarOutlined,
  StarOutlined,
  RocketOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
  ClockCircleOutlined,
  TrophyOutlined,
  FireOutlined,
  CrownOutlined,
  PhoneOutlined,
  ExclamationCircleOutlined,
  LoadingOutlined
} from '@ant-design/icons';
import { featureList, pricingTabs } from '@/app/constants';
import ComplianceModal from './ComplianceModal';
import styles from '../onboarding.module.scss';

const { Title, Text, Paragraph } = Typography;

const Features = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { features, pricing, companyInfo, loading } = useSelector((state) => state.onboarding);
  const [orgId, setOrgId] = useState('');
  const [keyHolderName, setKeyHolderName] = useState('Valued Customer');
  const [shouldShowPricingSummary, setShouldShowPricingSummary] = useState(true);
  const [complianceModalVisible, setComplianceModalVisible] = useState(false);
  const [paymentProcessingModalVisible, setPaymentProcessingModalVisible] = useState(false);
  const [selectedCompliances, setSelectedCompliances] = useState({
    isPF: false,
    isESI: false,
    isIT: false,
    isPT: false,
    isLW: false,
    isMW: false
  });


  // Helper function to get icon for each feature
  const getFeatureIcon = (featureKey) => {
    const iconMap = {
      'isFbp': <DollarOutlined />,
      'isWorkFlow': <RocketOutlined />,
      'isLoans': <SafetyCertificateOutlined />,
      'isPF': <TeamOutlined />,
      'isESI': <SafetyCertificateOutlined />,
      'isMW': <ClockCircleOutlined />,
      'isPT': <TrophyOutlined />,
      'isIT': <FireOutlined />,
      'isLW': <ClockCircleOutlined />,
      'isPQ': <TeamOutlined />,
      'isComp': <SafetyCertificateOutlined />,
      'isTemp': <StarOutlined />,
      'isSubCon': <CrownOutlined />,
      'isOT': <ClockCircleOutlined />
    };
    return iconMap[featureKey] || <StarOutlined />;
  };

  useEffect(() => {
    // Get orgId from localStorage or Redux state
    const storedCompanyInfo = localStorage.getItem('CompanyInfo');
    if (storedCompanyInfo) {
      const parsedInfo = JSON.parse(storedCompanyInfo);
      setOrgId(parsedInfo.org_id || '');
    }
  }, []);

  useEffect(() => {
    const storedHeadCountInfo = localStorage.getItem('HeadcountInfo');
    if (storedHeadCountInfo) {
      dispatch(setPricing({ headcountPricing: storedHeadCountInfo }));
      calculateAmounts(parseInt(storedHeadCountInfo));
    }
  }, [dispatch]);

  // Enterprise logic - check company size
  useEffect(() => {
    const storedCompanyInfo = localStorage.getItem('CompanyInfo');
    if (storedCompanyInfo) {
      try {
        const companyInfo = JSON.parse(storedCompanyInfo);

        // Get keyholder name
        if (companyInfo.keyholder_name) {
          setKeyHolderName(companyInfo.keyholder_name);
        }

        // Calculate total employees
        const taxableCount = Number(companyInfo.taxableCount ?? 0);
        const nontaxablecount = Number(companyInfo.nontaxablecount ?? 0);
        const total = taxableCount + nontaxablecount;

        // Show pricing summary only for companies with 500 or fewer employees
        setShouldShowPricingSummary(total <= 500);
      } catch (error) {
        console.error('Failed to parse company info:', error);
      }
    }
  }, []);

  const calculateAmounts = (monthlyAmount) => {
    if (!monthlyAmount || isNaN(monthlyAmount)) return;

    const gstRate = 0.18;
    const quarterlyAmount = calculateAmount(monthlyAmount * 3, 2);
    const halfYearlyAmount = calculateAmount(monthlyAmount * 6, 5);
    const annualAmount = calculateAmount(monthlyAmount * 12, 8);

    const quarterlyAmountWithGst = addGst(quarterlyAmount, gstRate);
    const halfYearlyAmountWithGst = addGst(halfYearlyAmount, gstRate);
    const annualAmountWithGst = addGst(annualAmount, gstRate);

    dispatch(setAmounts({
      monthlyAmount: monthlyAmount,
      quarterlyAmount: quarterlyAmount,
      halfYearlyAmount: halfYearlyAmount,
      annualAmount: annualAmount,
      quarterlyAmountWithGst: quarterlyAmountWithGst,
      halfYearlyAmountWithGst: halfYearlyAmountWithGst,
      annualAmountWithGst: annualAmountWithGst,
    }));
  };

  const calculateAmount = (baseAmount, discountPercent) => {
    baseAmount = parseNumber(String(baseAmount));
    discountPercent = parseNumber(String(discountPercent));

    if (baseAmount === 0 || discountPercent < 0) {
      return 0;
    }

    const discountAmount = (baseAmount * discountPercent) / 100;
    return baseAmount - discountAmount;
  };

  const parseNumber = (value) => {
    const number = parseFloat(value);
    return isNaN(number) ? 0 : number;
  };

  const addGst = (amount, gstRate) => {
    return amount * gstRate;
  };

  const handleTabClick = (tabName) => {
    dispatch(setActiveTab(tabName));
  };

  const handleSwitchChange = (featureName) => (checked) => {
    dispatch(setFeatures({ [featureName]: checked }));
  };

  const handleSwitchChangeComp = () => {
    if (!features.isComp) {
      // If compliance is not selected, show the modal
      setComplianceModalVisible(true);
    } else {
      // If compliance is already selected, deselect it and clear all compliance features
      dispatch(setFeatures({
        isComp: false,
        isPF: false,
        isESI: false,
        isIT: false,
        isPT: false,
        isLW: false,
        isMW: false
      }));
      setSelectedCompliances({
        isPF: false,
        isESI: false,
        isIT: false,
        isPT: false,
        isLW: false,
        isMW: false
      });
    }
  };

  const handleComplianceModalConfirm = () => {
    // Apply all selected compliances to the features state
    const complianceUpdates = {};
    Object.keys(selectedCompliances).forEach(key => {
      complianceUpdates[key] = selectedCompliances[key];
    });
    complianceUpdates.isComp = true; // Enable the main compliance feature

    dispatch(setFeatures(complianceUpdates));
    setComplianceModalVisible(false);
  };

  const handleComplianceModalCancel = () => {
    setComplianceModalVisible(false);
    // Reset selected compliances to current state
    setSelectedCompliances({
      isPF: features.isPF || false,
      isESI: features.isESI || false,
      isIT: features.isIT || false,
      isPT: features.isPT || false,
      isLW: features.isLW || false,
      isMW: features.isMW || false
    });
  };

  // Initialize selected compliances when modal opens
  useEffect(() => {
    if (complianceModalVisible) {
      setSelectedCompliances({
        isPF: features.isPF || false,
        isESI: features.isESI || false,
        isIT: features.isIT || false,
        isPT: features.isPT || false,
        isLW: features.isLW || false,
        isMW: features.isMW || false
      });
    }
  }, [complianceModalVisible, features]);

  const handleComplianceChange = (complianceKey, checked) => {
    setSelectedCompliances(prev => ({
      ...prev,
      [complianceKey]: checked
    }));
  };

  const totalAmount = () => {
    if (pricing.activeTab == "Monthly") {
      return (
        pricing.amounts?.monthlyAmount + addGst(pricing.amounts?.monthlyAmount || 0, 0.18)
      ).toFixed(2);
    } else if (pricing.activeTab == "Quarterly") {
      return (
        pricing.amounts?.quarterlyAmount + addGst(pricing.amounts?.quarterlyAmount || 0, 0.18)
      ).toFixed(2);
    } else if (pricing.activeTab == "Half Yearly") {
      return (
        pricing.amounts?.halfYearlyAmount + addGst(pricing.amounts?.halfYearlyAmount || 0, 0.18)
      ).toFixed(2);
    } else if (pricing.activeTab == "Annual") {
      return (
        pricing.amounts?.annualAmount + addGst(pricing.amounts?.annualAmount || 0, 0.18)
      ).toFixed(2);
    }
    return "0.00"; // Default value if no tab is selected
  };

  const formatNumber = (input) => {
    const number = parseFloat(input);
    if (isNaN(number)) return '0';
    return number.toLocaleString('en-IN');
  };



  const handleSubmit = async () => {
    try {
      dispatch(setLoading(true));
      setPaymentProcessingModalVisible(true);

      // Get company info from localStorage
      const storedCompanyInfo = localStorage.getItem('CompanyInfo');
      const storedGeneralDetails = localStorage.getItem('GeneralDetails');

      if (!storedCompanyInfo || !storedGeneralDetails) {
        message.error('Company information not found. Please complete company details first.');
        dispatch(setLoading(false));
        setPaymentProcessingModalVisible(false);
        return;
      }

      const companyInfo = JSON.parse(storedCompanyInfo);
      const generalDetails = JSON.parse(storedGeneralDetails);

      // Prepare data object with all features
      const data = {
        is_fbp: features.isFbp,
        isWorkFlow: features.isWorkFlow,
        isLoans: features.isLoans,
        isPF: features.isPF,
        isESI: features.isESI,
        isMW: features.isMW,
        isPT: features.isPT,
        isIT: features.isIT,
        isLW: features.isLW,
        isPQ: features.isPQ,
        isTemp: features.isTemp,
        isOT: features.isOT,
        isSubCon: features.isSubCon,
        isComp: features.isComp,
        totalAmount: parseFloat(totalAmount()),
        plan: pricing.activeTab,
      };

      // Store form data in localStorage
      localStorage.setItem("formData", JSON.stringify(data));

      // Get profile details
      const getProfileDetails = () => {
        const profileDetails = localStorage.getItem("GeneralDetails");
        return profileDetails ? JSON.parse(profileDetails) : {};
      };

      const profileDetails = getProfileDetails();

      // Prepare payment payload
      const payload = {
        customer_details: {
          customer_phone: profileDetails?.phoneNumber,
          customer_email: profileDetails?.email,
          customer_name: profileDetails?.keyholderName,
        },
        link_notify: {
          send_sms: false,
          send_email: false,
        },
        link_id: "",
        link_amount: data.totalAmount,
        link_currency: "INR",
        link_purpose: "subscribe",
      };

      // Call confirm payment API
      const response = await confirmPayment(payload);

      if (response) {
        const link_url = response.link_url;
        const link_id = response.link_id;

        if (link_url) {
          window.open(link_url, "_blank");
          message.success('Redirecting to payment page...');
        }

        if (link_id) {
          const checkPaymentStatus = async () => {
            try {
              const payment_status = await paymentStatus(link_id);

              if (
                payment_status.link_status == "PAID" ||
                payment_status.link_status == "FAILED"
              ) {
                setTimeout(() => clearInterval(intervalId));
                dispatch(setLoading(false));
                setPaymentProcessingModalVisible(false);
              }

              if (payment_status.link_status == "PAID") {
                localStorage.setItem(
                  "Payment Status",
                  JSON.stringify(payment_status)
                );

                const storedPaymentInfoString = localStorage.getItem("PaymentInfo");

                if (storedPaymentInfoString) {
                  const storedPaymentInfo = JSON.parse(storedPaymentInfoString);
                  // Use storedPaymentInfo here
                } else {
                  // Handle the case where PaymentInfo is not found in localStorage
                }

                localStorage.setItem("Link Id", JSON.stringify(link_id));

                // Determine the disabled menu IDs based on selected features
                const DisabledMenuIds = [];

                if (!data.is_fbp) {
                  DisabledMenuIds.push(
                    58,
                    59,
                    60,
                    116,
                    117,
                    119,
                    120,
                    555,
                    556,
                    557,
                    559,
                    560,
                    558
                  );
                }
                if (!data.isLoans) {
                  DisabledMenuIds.push(78, 167, 168, 169, 170, 565, 566);
                }
                if (!data.isPQ) {
                  DisabledMenuIds.push(25, 65, 108, 525, 526);
                }
                if (!data.isWorkFlow) {
                  DisabledMenuIds.push(17, 50);
                }
                if (!data.isOT) {
                  DisabledMenuIds.push(77);
                }
                if (!data.isTemp) {
                  DisabledMenuIds.push(524);
                }

                const disableMenuPayload = {
                  DisabledMenuIds,
                  OrgId: orgId,
                };

                // Call disableMenuInfo API
                try {
                  await disableMenuInfo(disableMenuPayload);
                } catch (error) {
                  // Error updating menu settings
                }

                message.success('Payment successful! Welcome to Ezii!');
                dispatch(setCurrentStep('paymentSuccess'));
                router.push("/paymentConfirmationSuccess");
              }

              if (payment_status.link_status == "FAILED") {
                message.error('Payment failed. Please try again.');
                dispatch(setCurrentStep('paymentFailure'));
                router.push("/paymentConfirmationFailure");
              }
            } catch (error) {
              dispatch(setLoading(false));
              setPaymentProcessingModalVisible(false);
              // Error checking payment status
            }
          };

          const intervalId = setInterval(checkPaymentStatus, 10000);
        } else {
          // link_id is missing in the response
          message.error('Payment link not received from server');
          setPaymentProcessingModalVisible(false);
        }
      } else {
        // Response is undefined
        message.error('Payment link not received from server');
        setPaymentProcessingModalVisible(false);
      }

      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      setPaymentProcessingModalVisible(false);
      // Error during payment confirmation or status check
      message.error('An error occurred. Please try again.');
    }
  };

  return (
    <div className={styles.modernFeaturesContainer}>
      <div className={styles.modernFeaturesHeader}>
        <Title level={3} className={styles.modernFeaturesTitle}>
          <RocketOutlined className={styles.modernFeaturesIcon} />
          Choose Your Features
        </Title>
        <Text type="secondary" className={styles.modernFeaturesSubtitle}>
          Select the features that best suit your organization's needs
        </Text>
      </div>

      {shouldShowPricingSummary ? (
        <Row gutter={[20, 20]}>
          {/* Features Selection */}
          <Col xs={24} lg={16}>
            <Card title="Available Features" className={styles.modernFeaturesListCard}>
              <Row gutter={[12, 12]}>
                {featureList.map((feature) => (
                  <Col xs={24} sm={12} md={8} key={feature.key}>
                    <Card
                      className={`${styles.modernFeatureCard} ${features[feature.key] ? styles.modernFeatureCardActive : ''}`}
                      hoverable
                      size="small"
                    >
                      {/* Header: Logo and Title side by side */}
                      <div className={styles.modernFeatureHeader}>
                        <div className={styles.modernFeatureIcon}>
                          {getFeatureIcon(feature.key)}
                        </div>
                        <div className={styles.modernFeatureInfo}>
                          <Title level={5} className={styles.modernFeatureName}>
                            {feature.name}
                            {feature.popular && (
                              <Tag color="gold" className={styles.modernPopularTag}>
                                Popular
                              </Tag>
                            )}
                          </Title>
                        </div>
                      </div>

                      {/* Content: Description below header */}
                      <div className={styles.modernFeatureContent}>
                        <Text type="secondary" className={styles.modernFeatureDescription}>
                          {feature.description}
                        </Text>
                      </div>

                      {/* Footer: Price and Button */}
                      <div className={styles.modernFeatureFooter}>
                        <Text strong className={styles.modernFeaturePrice}>
                          {feature.key === 'isComp' ? 'Select Features' : 'Free'}
                        </Text>
                        <Switch
                          checked={features[feature.key]}
                          onChange={feature.key === 'isComp' ? handleSwitchChangeComp : handleSwitchChange(feature.key)}
                          className={styles.modernFeatureSwitch}
                        />
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card>
          </Col>

          {/* Pricing Summary */}
          <Col xs={24} lg={8}>
            <Card title="Pricing Summary" className={styles.modernPricingCard} size="small">
              <div className={styles.modernPricingTabs}>
                <Tabs
                  activeKey={pricing.activeTab}
                  onChange={handleTabClick}
                  className={styles.modernPricingTabsComponent}
                  size="small"
                  items={pricingTabs.map((tab) => ({
                    key: tab.key,
                    label: (
                      <div className={styles.modernPricingTab}>
                        <div className={styles.modernTabLabel}>{tab.label}</div>
                        <div className={styles.modernPricingTabTags}>
                          {tab.discount > 0 && (
                            <Tag color="green" size="small">
                              {tab.discount}% Off
                            </Tag>
                          )}
                          {tab.popular && (
                            <Tag color="gold" size="small" className={styles.modernPopularTag}>
                              Popular
                            </Tag>
                          )}
                        </div>

                        <div className={styles.modernTabAmount}>
                          ₹{formatNumber(
                            tab.key === 'Monthly' ? (pricing.amounts?.monthlyAmount || 0) :
                              tab.key === 'Quarterly' ? (pricing.amounts?.quarterlyAmount || 0) :
                                tab.key === 'Half Yearly' ? (pricing.amounts?.halfYearlyAmount || 0) :
                                  (pricing.amounts?.annualAmount || 0)
                          )}
                        </div>

                      </div>
                    ),
                    children: null
                  }))}
                />
              </div>

              <div className={styles.modernPricingSummary}>
                <div className={styles.modernBasePrice}>
                  <Text>Base Price:</Text>
                  <Text strong>₹{formatNumber(
                    pricing.activeTab === 'Monthly' ? (pricing.amounts?.monthlyAmount || 0) :
                      pricing.activeTab === 'Quarterly' ? (pricing.amounts?.quarterlyAmount || 0) :
                        pricing.activeTab === 'Half Yearly' ? (pricing.amounts?.halfYearlyAmount || 0) :
                          (pricing.amounts?.annualAmount || 0)
                  )}</Text>
                </div>

                <div className={styles.modernGstPrice}>
                  <Text>GST 18%:</Text>
                  <Text strong>₹{formatNumber(
                    pricing.activeTab === 'Monthly' ? (pricing.amounts?.monthlyAmount || 0) * 0.18 :
                      pricing.activeTab === 'Quarterly' ? (pricing.amounts?.quarterlyAmount || 0) * 0.18 :
                        pricing.activeTab === 'Half Yearly' ? (pricing.amounts?.halfYearlyAmount || 0) * 0.18 :
                          (pricing.amounts?.annualAmount || 0) * 0.18
                  )}</Text>
                </div>

                {/* Selected Features List */}
                <div className={styles.modernSelectedFeaturesSection}>
                  <div className={styles.modernSelectedFeaturesHeader}>
                    <Text strong className={styles.modernSelectedFeaturesTitle}>
                      Selected Features
                    </Text>
                    <Text type="secondary" className={styles.modernSelectedFeaturesCount}>
                      {Object.values(features).filter(Boolean).length} features selected
                    </Text>
                  </div>
                  <div className={styles.modernSelectedFeaturesList}>
                    {Object.entries(features).map(([key, isSelected]) => {
                      if (!isSelected) return null;

                      const feature = featureList.find(f => f.key === key);
                      if (!feature) return null;

                      return (
                        <Tag
                          key={key}
                          color="blue"
                          className={styles.modernSelectedFeatureTag}
                        >
                          {feature.name}
                        </Tag>
                      );
                    })}

                    {/* Show compliance features when compliance is selected */}
                    {features.isComp && (
                      <>
                        {features.isPF && (
                          <Tag color="purple" className={styles.modernSelectedFeatureTag}>
                            Provident Fund
                          </Tag>
                        )}
                        {features.isESI && (
                          <Tag color="purple" className={styles.modernSelectedFeatureTag}>
                            ESI
                          </Tag>
                        )}
                        {features.isIT && (
                          <Tag color="purple" className={styles.modernSelectedFeatureTag}>
                            Income Tax
                          </Tag>
                        )}
                        {features.isPT && (
                          <Tag color="purple" className={styles.modernSelectedFeatureTag}>
                            Professional Tax
                          </Tag>
                        )}
                        {features.isLW && (
                          <Tag color="purple" className={styles.modernSelectedFeatureTag}>
                            Labour Welfare Act
                          </Tag>
                        )}
                        {features.isMW && (
                          <Tag color="purple" className={styles.modernSelectedFeatureTag}>
                            Minimum Wages
                          </Tag>
                        )}
                      </>
                    )}

                    {Object.values(features).filter(Boolean).length === 0 && (
                      <Text type="secondary" className={styles.modernNoFeaturesSelected}>
                        No features selected
                      </Text>
                    )}
                  </div>
                </div>

                <Divider className={styles.modernDivider} />

                <div className={styles.modernTotalPrice}>
                  <Title level={4}>Total Amount</Title>
                  <Title level={3} className={styles.modernTotalAmount}>
                    ₹{formatNumber(
                      (pricing.activeTab === 'Monthly' ? (pricing.amounts?.monthlyAmount || 0) :
                        pricing.activeTab === 'Quarterly' ? (pricing.amounts?.quarterlyAmount || 0) :
                          pricing.activeTab === 'Half Yearly' ? (pricing.amounts?.halfYearlyAmount || 0) :
                            (pricing.amounts?.annualAmount || 0)) * 1.18
                    )}
                  </Title>
                </div>

                <Button
                  type="primary"
                  size="large"
                  onClick={handleSubmit}
                  className={styles.modernProceedButton}
                  icon={<CheckCircleOutlined />}
                  block
                  loading={loading}
                  disabled={loading || paymentProcessingModalVisible}
                >
                  make payment
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      ) : (
        <Card className={styles.modernEnterpriseMessage}>
          <Title level={3} className={styles.modernEnterpriseTitle}>
            Dear {keyHolderName},
          </Title>
          <Text className={styles.modernEnterpriseText}>
            We understand that managing a large enterprise like yours comes with its own set of complex challenges,
            particularly when it comes to payroll, compliance, and organizational efficiency.
          </Text>
          <Text className={styles.modernEnterpriseText}>
            Your organization's unique needs require tailored solutions. We would love to learn more about the
            specific pain points you were facing in these areas.
          </Text>
          <Text className={styles.modernEnterpriseText}>
            Our Payroll Customer team is ready to discuss your requirements and explore how we can provide a
            customized solution to address your enterprise's specific needs.
          </Text>
          <Text className={styles.modernEnterpriseText}>
            Would you be available for a brief call to discuss and take this further?
          </Text>
          <Text className={styles.modernEnterpriseText}>
            Best regards,<br />
            Resolvepay Team
          </Text>

          <div className={styles.modernEnterpriseActions}>
            <Button
              type="primary"
              size="large"
              className={styles.modernContactSalesButton}
              icon={<PhoneOutlined />}
              onClick={() => {
                window.open('mailto:sales@resolvepay.in?subject=Enterprise%20Inquiry', '_blank');
              }}
            >
              Contact Sales Team
            </Button>
          </div>
        </Card>
      )}

      {/* Payment Processing Modal */}
      <Modal
        title={
          <div className={styles.paymentProcessingModalTitle}>
            <ExclamationCircleOutlined className={styles.paymentProcessingModalIcon} />
            <span>Payment Processing</span>
          </div>
        }
        open={paymentProcessingModalVisible}
        footer={null}
        closable={false}
        maskClosable={false}
        width={500}
        className={styles.paymentProcessingModal}
      >
        <div className={styles.paymentProcessingModalContent}>
          <div className={styles.paymentProcessingIcon}>
            <LoadingOutlined style={{ fontSize: '48px', color: '#1890ff' }} />
          </div>

          <Title level={4} className={styles.paymentProcessingTitle}>
            Please Don't Refresh or Go Back
          </Title>

          <Text className={styles.paymentProcessingDescription}>
            Your payment is being processed. Please wait while we complete your transaction.
            Do not refresh the page or navigate away from this page until the process is complete.
          </Text>

          <div className={styles.paymentProcessingWarning}>
            <ExclamationCircleOutlined className={styles.paymentProcessingWarningIcon} />
            <Text strong className={styles.paymentProcessingWarningText}>
              Important: Closing this page may interrupt your payment process
            </Text>
          </div>
        </div>
      </Modal>

      {/* Compliance Modal */}
      <ComplianceModal
        visible={complianceModalVisible}
        onCancel={handleComplianceModalCancel}
        onConfirm={handleComplianceModalConfirm}
        selectedCompliances={selectedCompliances}
        onComplianceChange={handleComplianceChange}
      />
    </div>
  );
};

export default Features; 