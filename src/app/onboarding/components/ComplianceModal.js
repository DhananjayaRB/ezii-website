import React, { useState } from 'react';
import { Modal, Checkbox, Card, Typography, Space, Button } from 'antd';
import { SafetyCertificateOutlined } from '@ant-design/icons';
import styles from '../onboarding.module.scss';

const { Title, Text } = Typography;

const ComplianceModal = ({ visible, onCancel, onConfirm, selectedCompliances, onComplianceChange }) => {
  const complianceOptions = [
    {
      key: 'isPF',
      name: 'Provident Fund',
      description: 'Automated Provident Fund calculations and compliance with real-time updates and reporting.',
      price: 0
    },
    {
      key: 'isESI',
      name: 'ESI (Employee State Insurance)',
      description: 'Employee State Insurance calculations and reporting with automated compliance checks.',
      price: 0
    },
    {
      key: 'isIT',
      name: 'Income Tax',
      description: 'Income tax calculations and TDS management with automated form generation.',
      price: 0
    },
    {
      key: 'isPT',
      name: 'Professional Tax',
      description: 'Automated professional tax calculations based on state-specific rates and slabs.',
      price: 0
    },
    {
      key: 'isLW',
      name: 'Labour Welfare Act',
      description: 'Comprehensive compliance with labour welfare regulations and reporting.',
      price: 0
    },
    {
      key: 'isMW',
      name: 'Minimum Wages',
      description: 'Ensure compliance with minimum wage regulations across different states and categories.',
      price: 0
    }
  ];

  const handleCheckboxChange = (complianceKey, checked) => {
    onComplianceChange(complianceKey, checked);
  };

  const handleConfirm = () => {
    onConfirm();
  };

  const totalCompliancePrice = complianceOptions.reduce((total, option) => {
    return total + (selectedCompliances[option.key] ? option.price : 0);
  }, 0);

  return (
    <Modal
      title={
        <div className={styles.complianceModalTitle}>
          <SafetyCertificateOutlined className={styles.complianceModalIcon} />
          <span>Select Compliance Features</span>
        </div>
      }
      open={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button 
          key="confirm" 
          type="primary" 
          onClick={handleConfirm}
          className={styles.complianceModalConfirmButton}
        >
          Confirm Selection ({totalCompliancePrice === 0 ? 'Free' : `₹${totalCompliancePrice}/month`})
        </Button>
      ]}
      width={800}
      className={styles.complianceModal}
    >
      <div className={styles.complianceModalContent}>
        <Text type="secondary" className={styles.complianceModalDescription}>
          Choose the compliance features you need for your organization. Each feature includes automated calculations, 
          reporting, and compliance monitoring.
        </Text>
        
        <div className={styles.complianceOptions}>
          {complianceOptions.map((option) => (
            <Card 
              key={option.key}
              className={`${styles.complianceOptionCard} ${selectedCompliances[option.key] ? styles.complianceOptionCardActive : ''}`}
              hoverable
            >
              <div className={styles.complianceOptionContent}>
                <div className={styles.complianceOptionHeader}>
                  <Checkbox
                    checked={selectedCompliances[option.key] || false}
                    onChange={(e) => handleCheckboxChange(option.key, e.target.checked)}
                    className={styles.complianceCheckbox}
                  />
                  <div className={styles.complianceOptionInfo}>
                    <Title level={5} className={styles.complianceOptionName}>
                      {option.name}
                    </Title>
                    <Text type="secondary" className={styles.complianceOptionDescription}>
                      {option.description}
                    </Text>
                  </div>
                </div>
                <div className={styles.complianceOptionPrice}>
                  <Text strong className={styles.compliancePrice}>
                    {option.price === 0 ? 'Free' : `₹${option.price}/month`}
                  </Text>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className={styles.complianceSummary}>
          <div className={styles.complianceSummaryHeader}>
            <Text strong>Selected Compliances:</Text>
            <Text type="secondary">
              {Object.values(selectedCompliances).filter(Boolean).length} of {complianceOptions.length} selected
            </Text>
          </div>
          <div className={styles.complianceSummaryList}>
            {complianceOptions.map((option) => (
              selectedCompliances[option.key] && (
                <Text key={option.key} className={styles.complianceSummaryItem}>
                  • {option.name} ({option.price === 0 ? 'Free' : `₹${option.price}/month`})
                </Text>
              )
            ))}
            {Object.values(selectedCompliances).filter(Boolean).length === 0 && (
              <Text type="secondary">No compliances selected</Text>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ComplianceModal; 