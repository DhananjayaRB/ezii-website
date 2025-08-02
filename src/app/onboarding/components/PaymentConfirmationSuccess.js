"use client";
import React from 'react';
import { Card, Typography, Button, Space, Result } from 'antd';
import { CheckCircleOutlined, HomeOutlined, RocketOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import styles from '../onboarding.module.scss';

const { Title, Text, Paragraph } = Typography;

const PaymentConfirmationSuccess = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/');
  };

  const handleGetStarted = () => {
    router.push('/dashboard');
  };

  return (
    <div className={styles.successContainer}>
      <Card className={styles.successCard}>
        <Result
          status="success"
          icon={<CheckCircleOutlined className={styles.successIcon} />}
          title={
            <Title level={2} className={styles.successTitle}>
              Payment Successful!
            </Title>
          }
          subTitle={
            <div className={styles.successSubtitle}>
              <Text type="secondary" className={styles.successMessage}>
                Welcome to Ezii! Your account has been successfully activated.
              </Text>
              <Paragraph className={styles.successDetails}>
                You now have access to all the features you selected. Our team will be in touch 
                shortly to help you get started with your new payroll management system.
              </Paragraph>
            </div>
          }
          extra={[
            <Space key="actions" size="large">
              <Button
                type="primary"
                size="large"
                icon={<RocketOutlined />}
                onClick={handleGetStarted}
                className={styles.getStartedButton}
              >
                Get Started
              </Button>
              <Button
                size="large"
                icon={<HomeOutlined />}
                onClick={handleGoHome}
                className={styles.homeButton}
              >
                Go to Home
              </Button>
            </Space>
          ]}
        />
      </Card>
    </div>
  );
};

export default PaymentConfirmationSuccess; 