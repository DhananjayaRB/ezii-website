"use client";
import React from 'react';
import { Spin, Typography, Card } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import styles from '../onboarding.module.scss';

const { Text } = Typography;

const SpinnerComponent = ({ text = "Processing..." }) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 48, color: 'var(--primary)' }} spin />;

  return (
    <div className={styles.loadingOverlay}>
      <Card className={styles.spinnerCard}>
        <div className={styles.spinnerContent}>
          <Spin indicator={antIcon} />
          <Text className={styles.spinnerText}>{text}</Text>
        </div>
      </Card>
    </div>
  );
};

export default SpinnerComponent; 