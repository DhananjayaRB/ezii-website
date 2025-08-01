"use client";

import React, { useState } from 'react';
import styles from './pricingSection.module.scss';
import Image from 'next/image';

const PricingSection = ({showHeading = false}) => {
  const [employeeCount, setEmployeeCount] = useState('1');

  return (
    <section className={styles.pricingSection}>
      <div className={styles.pricingContent}>
        {showHeading && (
          <h2 className={styles.mainHeading}>
            Get your Exact Price. No Hidden Fees.<br />Pay Only for What You Use!
          </h2>
        )}
        <div className={styles.pricingCardBg}>
          <div className={styles.pricingCardWrapper}>
            
            <div className={styles.responsibleInfo}>
              
              <div className={styles.responsibleImageWrapper}>
                <Image
                  src="/assets/pricing-1.webp"
                  alt="Pricing Illustration"
                  width={110}
                  height={110}
                  style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
                />
              </div>
              <h2>Responsible Pricing, Exceptional Value</h2>
              <p>At EZII, your costs align with your benefits. Just as EZII simplifies payroll, we simplify pricing. Pay only for what you use. Add employees, pay more. Reduce headcount, pay less. Need KYC integrations? Pay only for those you need. No rigid plans. Experience EZII’s flexible pricing.</p>
            </div>
            <div className={styles.pricingCalculator}>
              <div className={styles.pricingIcon}>
                <Image
                  src="/assets/employee.webp"
                  alt="User Icon"
                  width={40}
                  height={40}
                  style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
                />
              </div>
              <div className={styles.employeeInputWrapper}>
                <label htmlFor="employeeCountInput" className={styles.inputLabel}>
                  Enter Your Employee Count
                </label>
                <input
                  id="employeeCountInput"
                  type="number"
                  min={1}
                  value={employeeCount}
                  onChange={e => setEmployeeCount(e.target.value.replace(/^0+/, ''))}
                  onBlur={e => { if (!e.target.value || parseInt(e.target.value, 10) < 1) setEmployeeCount('1'); }}
                  className={styles.employeeInput}
                />
              </div>
              <div className={styles.employeeCount}>
                <span className={styles.countLabel}>Selected Employees:</span>
                <span className={styles.countValue}>{employeeCount}</span>
              </div>
              <div className={styles.priceDisplay}>
                <span className={styles.priceAmount}>₹{1000}/month</span>
              </div>
              <button className={styles.getStartedBtn}>Get Started</button>
              <p className={styles.minPriceNote}>*Min price 1000/month</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
