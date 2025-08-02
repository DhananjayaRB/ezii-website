"use client";
import React from 'react';
import { Card, Typography, Button, Space, Result } from 'antd';
import { CloseCircleOutlined, ReloadOutlined, HomeOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import styles from '../onboarding.module.scss';

const { Title, Text, Paragraph } = Typography;

const PaymentConfirmationFailure = () => {
  const router = useRouter();

  const handleRetry = () => {
    router.push('/onboarding');
  };

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <div className={styles.failureContainer}>
      <Card className={styles.failureCard}>
        <Result
          status="error"
          icon={<CloseCircleOutlined className={styles.failureIcon} />}
          title={
            <Title level={2} className={styles.failureTitle}>
              Payment Failed
            </Title>
          }
          subTitle={
            <div className={styles.failureSubtitle}>
              <Text type="secondary" className={styles.failureMessage}>
                We're sorry, but your payment could not be processed at this time.
              </Text>
              <Paragraph className={styles.failureDetails}>
                This could be due to insufficient funds, network issues, or other technical problems. 
                Please try again or contact our support team if the problem persists.
              </Paragraph>
            </div>
          }
          extra={[
            <Space key="actions" size="large">
              <Button
                type="primary"
                size="large"
                icon={<ReloadOutlined />}
                onClick={handleRetry}
                className={styles.retryButton}
              >
                Try Again
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

export default PaymentConfirmationFailure; 