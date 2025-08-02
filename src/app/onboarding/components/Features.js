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
  Alert,
  Progress,
  Tooltip,
  message
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
  CrownOutlined
} from '@ant-design/icons';
import styles from '../onboarding.module.scss';

const { Title, Text, Paragraph } = Typography;
const { TabPane } = Tabs;

// Import feature images (you'll need to add these to your public folder)
const flexiblePlanImg = '/assets/FBP.svg';
const loansImg = '/assets/Loan & Advances.svg';
const templateImg = '/assets/templates.svg';
const workflowImg = '/assets/workflow.svg';
const subContractorImg = '/assets/sub contract payroll (1).svg';
const overtimeImg = '/assets/overtime 1.svg';
const yellowWalletImg = '/assets/yellow wallet with money (1).svg';
const complianceImg = '/assets/Compliance.svg';

const Features = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { features, pricing, companyInfo } = useSelector((state) => state.onboarding);
  const [orgId, setOrgId] = useState('');

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
    dispatch(setFeatures({ isCompliancePlanActive: !features.isCompliancePlanActive }));
  };

  const totalAmount = () => {
    const baseAmount = pricing.amounts?.monthlyAmount || 0;
    let total = baseAmount;

    // Add feature costs
    if (features.isFbp) total += 500;
    if (features.isWorkFlow) total += 300;
    if (features.isLoans) total += 400;
    if (features.isPF) total += 200;
    if (features.isESI) total += 200;
    if (features.isMW) total += 150;
    if (features.isPT) total += 150;
    if (features.isIT) total += 250;
    if (features.isLW) total += 300;
    if (features.isPQ) total += 200;
    if (features.isComp) total += 350;
    if (features.isTemp) total += 250;
    if (features.isSubCon) total += 400;
    if (features.isOT) total += 200;
    if (features.isCompliancePlanActive) total += 600;

    return total;
  };

  const formatNumber = (input) => {
    const number = parseFloat(input);
    if (isNaN(number)) return '0';
    return number.toLocaleString('en-IN');
  };

  const handleSubmit = async () => {
    try {
      dispatch(setLoading(true));
      const total = totalAmount();

      const paymentData = {
        org_id: orgId,
        amount: total,
        features: features,
        payment_method: 'online',
        currency: 'INR',
      };

      const response = await confirmPayment(paymentData);
      
      if (response.success) {
        dispatch(setFormData(paymentData));
        
        // Disable menu info
        await disableMenuInfo({ org_id: orgId });
        
        // Check payment status
        const checkPaymentStatus = async () => {
          try {
            const statusResponse = await paymentStatus({ org_id: orgId });
            
            if (statusResponse.status === 'success') {
              dispatch(setLoading(false));
              dispatch(setCurrentStep('paymentSuccess'));
              message.success('Payment successful! Welcome to Ezii!');
            } else if (statusResponse.status === 'failed') {
              dispatch(setLoading(false));
              dispatch(setCurrentStep('paymentFailure'));
              message.error('Payment failed. Please try again.');
            } else {
              // Continue checking
              setTimeout(checkPaymentStatus, 2000);
            }
          } catch (error) {
            console.error('Error checking payment status:', error);
            setTimeout(checkPaymentStatus, 2000);
          }
        };

        checkPaymentStatus();
      } else {
        dispatch(setLoading(false));
        message.error('Payment initiation failed. Please try again.');
      }
    } catch (error) {
      dispatch(setLoading(false));
      console.error('Error processing payment:', error);
      message.error('An error occurred. Please try again.');
    }
  };

  const featureList = [
    {
      key: 'isFbp',
      name: 'Flexible Benefit Plan',
      description: 'Customize employee benefits with flexible spending accounts',
      icon: <DollarOutlined />,
      price: 500,
      image: flexiblePlanImg,
      popular: true
    },
    {
      key: 'isWorkFlow',
      name: 'Workflow Management',
      description: 'Streamline approval processes with automated workflows',
      icon: <RocketOutlined />,
      price: 300,
      image: workflowImg
    },
    {
      key: 'isLoans',
      name: 'Loan & Advances',
      description: 'Manage employee loans and advance payments efficiently',
      icon: <SafetyCertificateOutlined />,
      price: 400,
      image: loansImg
    },
    {
      key: 'isPF',
      name: 'PF Management',
      description: 'Automated Provident Fund calculations and compliance',
      icon: <TeamOutlined />,
      price: 200,
      image: yellowWalletImg
    },
    {
      key: 'isESI',
      name: 'ESI Management',
      description: 'Employee State Insurance calculations and reporting',
      icon: <SafetyCertificateOutlined />,
      price: 200,
      image: yellowWalletImg
    },
    {
      key: 'isMW',
      name: 'Minimum Wages',
      description: 'Ensure compliance with minimum wage regulations',
      icon: <ClockCircleOutlined />,
      price: 150,
      image: yellowWalletImg
    },
    {
      key: 'isPT',
      name: 'Professional Tax',
      description: 'Automated professional tax calculations',
      icon: <TrophyOutlined />,
      price: 150,
      image: yellowWalletImg
    },
    {
      key: 'isIT',
      name: 'Income Tax',
      description: 'Income tax calculations and TDS management',
      icon: <FireOutlined />,
      price: 250,
      image: yellowWalletImg
    },
    {
      key: 'isLW',
      name: 'Leave Management',
      description: 'Comprehensive leave tracking and management',
      icon: <ClockCircleOutlined />,
      price: 300,
      image: yellowWalletImg
    },
    {
      key: 'isPQ',
      name: 'Payroll Queries',
      description: 'Handle employee payroll queries efficiently',
      icon: <TeamOutlined />,
      price: 200,
      image: yellowWalletImg
    },
    {
      key: 'isComp',
      name: 'Compliance',
      description: 'Stay compliant with all labor laws and regulations',
      icon: <SafetyCertificateOutlined />,
      price: 350,
      image: complianceImg
    },
    {
      key: 'isTemp',
      name: 'Templates',
      description: 'Pre-built templates for various payroll documents',
      icon: <StarOutlined />,
      price: 250,
      image: templateImg
    },
    {
      key: 'isSubCon',
      name: 'Sub-contractor Payroll',
      description: 'Manage sub-contractor payments and compliance',
      icon: <CrownOutlined />,
      price: 400,
      image: subContractorImg
    },
    {
      key: 'isOT',
      name: 'Overtime Management',
      description: 'Track and calculate overtime payments',
      icon: <ClockCircleOutlined />,
      price: 200,
      image: overtimeImg
    }
  ];

  const pricingTabs = [
    { key: 'Monthly', label: 'Monthly', discount: 0 },
    { key: 'Quarterly', label: 'Quarterly', discount: 2 },
    { key: 'Half Yearly', label: 'Half Yearly', discount: 5 },
    { key: 'Annual', label: 'Annual', discount: 8 }
  ];

  return (
    <div className={styles.featuresContainer}>
      <Card className={styles.featuresCard}>
        <div className={styles.featuresHeader}>
          <Title level={2} className={styles.featuresTitle}>
            <RocketOutlined className={styles.featuresIcon} />
            Choose Your Features
          </Title>
          <Text type="secondary" className={styles.featuresSubtitle}>
            Select the features that best suit your organization's needs
          </Text>
        </div>

        <Divider />

        <Row gutter={[24, 24]}>
          {/* Features Selection */}
          <Col xs={24} lg={16}>
            <Card title="Available Features" className={styles.featuresListCard}>
              <Row gutter={[16, 16]}>
                {featureList.map((feature) => (
                  <Col xs={24} sm={12} key={feature.key}>
                    <Card 
                      className={`${styles.featureCard} ${features[feature.key] ? styles.featureCardActive : ''}`}
                      hoverable
                    >
                      <div className={styles.featureHeader}>
                        <div className={styles.featureIcon}>
                          {feature.icon}
                        </div>
                        <div className={styles.featureInfo}>
                          <Title level={5} className={styles.featureName}>
                            {feature.name}
                            {feature.popular && (
                              <Tag color="gold" className={styles.popularTag}>
                                Popular
                              </Tag>
                            )}
                          </Title>
                          <Text type="secondary" className={styles.featureDescription}>
                            {feature.description}
                          </Text>
                        </div>
                      </div>
                      
                      <div className={styles.featureFooter}>
                        <Text strong className={styles.featurePrice}>
                          ₹{feature.price}/month
                        </Text>
                        <Switch
                          checked={features[feature.key]}
                          onChange={handleSwitchChange(feature.key)}
                          className={styles.featureSwitch}
                        />
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>

              {/* Compliance Plan */}
              <Divider />
              <Card className={styles.complianceCard}>
                <div className={styles.complianceHeader}>
                  <div className={styles.complianceIcon}>
                    <CrownOutlined />
                  </div>
                  <div className={styles.complianceInfo}>
                    <Title level={4} className={styles.complianceTitle}>
                      Compliance Plan
                      <Tag color="purple" className={styles.premiumTag}>
                        Premium
                      </Tag>
                    </Title>
                    <Text type="secondary">
                      Comprehensive compliance management with expert support
                    </Text>
                  </div>
                </div>
                <div className={styles.complianceFooter}>
                  <Text strong className={styles.compliancePrice}>
                    ₹600/month
                  </Text>
                  <Switch
                    checked={features.isCompliancePlanActive}
                    onChange={handleSwitchChangeComp}
                    className={styles.complianceSwitch}
                  />
                </div>
              </Card>
            </Card>
          </Col>

          {/* Pricing Summary */}
          <Col xs={24} lg={8}>
            <Card title="Pricing Summary" className={styles.pricingCard}>
              <div className={styles.pricingTabs}>
                <Tabs 
                  activeKey={pricing.activeTab} 
                  onChange={handleTabClick}
                  className={styles.pricingTabsComponent}
                >
                  {pricingTabs.map((tab) => (
                    <TabPane 
                      tab={
                        <div className={styles.pricingTab}>
                          <div>{tab.label}</div>
                          {tab.discount > 0 && (
                            <Tag color="green" size="small">
                              {tab.discount}% OFF
                            </Tag>
                          )}
                        </div>
                      } 
                      key={tab.key}
                    />
                  ))}
                </Tabs>
              </div>

              <div className={styles.pricingSummary}>
                <div className={styles.basePrice}>
                  <Text>Base Price:</Text>
                  <Text strong>₹{formatNumber(pricing.amounts?.monthlyAmount || 0)}</Text>
                </div>
                
                <div className={styles.featuresPrice}>
                  <Text>Selected Features:</Text>
                  <Text strong>₹{formatNumber(totalAmount() - (pricing.amounts?.monthlyAmount || 0))}</Text>
                </div>

                <Divider />

                <div className={styles.totalPrice}>
                  <Title level={4}>Total Amount</Title>
                  <Title level={3} className={styles.totalAmount}>
                    ₹{formatNumber(totalAmount())}
                  </Title>
                </div>

                <Alert
                  message="Selected Features"
                  description={`${Object.values(features).filter(Boolean).length} features selected`}
                  type="info"
                  showIcon
                  className={styles.featuresAlert}
                />

                <Button
                  type="primary"
                  size="large"
                  onClick={handleSubmit}
                  className={styles.proceedButton}
                  icon={<CheckCircleOutlined />}
                  block
                >
                  Proceed to Payment
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Features; 