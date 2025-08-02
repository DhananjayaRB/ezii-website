"use client";

import React, { useState } from 'react';
import styles from './pricingSection.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const PricingSection = ({showHeading = false}) => {
  const [employeeCount, setEmployeeCount] = useState('1');
  const router = useRouter();

  // Function to calculate monthly cost based on employee count
  const calculateMonthlyCost = (count) => {
    // Handle empty or invalid input
    if (!count || count === '' || isNaN(count)) {
      return 1000; // Minimum price for empty/invalid input
    }
    
    const employeeCount = parseInt(count, 10);
    
    if (employeeCount <= 0) return 1000; // Minimum price
    
    let totalCost = 0;
    
    if (employeeCount <= 100) {
      // 1-100 employees: 50/employee
      totalCost = employeeCount * 50;
    } else if (employeeCount <= 300) {
      // 1-100: 50/employee, 101-300: 45/employee
      totalCost = (100 * 50) + ((employeeCount - 100) * 45);
    } else if (employeeCount <= 500) {
      // 1-100: 50/employee, 101-300: 45/employee, 301-500: 40/employee
      totalCost = (100 * 50) + (200 * 45) + ((employeeCount - 300) * 40);
    } else {
      // For more than 500 employees, use the 500 employee rate
      totalCost = (100 * 50) + (200 * 45) + (200 * 40);
    }
    
    // Ensure minimum price of 1000
    return Math.max(totalCost, 1000);
  };

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
                  max={9999999999}
                  value={employeeCount}
                  onChange={e => {
                    const value = e.target.value.replace(/^0+/, '');
                    const numValue = parseInt(value, 10);
                    
                    // Prevent negative numbers
                    if (numValue < 0) {
                      setEmployeeCount('1');
                    }
                    // Prevent numbers greater than max
                    else if (numValue > 9999999999) {
                      setEmployeeCount('9999999999');
                    } else {
                      setEmployeeCount(value);
                    }
                  }}
                  onBlur={e => { 
                    if (!e.target.value || parseInt(e.target.value, 10) < 1) {
                      setEmployeeCount('1');
                    }
                  }}
                  className={styles.employeeInput}
                />
              </div>
              <div className={styles.employeeCount}>
                <span className={styles.countLabel}>Selected Employees:</span>
                <span className={styles.countValue}>{employeeCount}</span>
              </div>
              <div className={styles.priceDisplay}>
                {parseInt(employeeCount, 10) > 500 ? (
                  <div className={styles.enterprisePricing}>
                    <Link href="/contact" className={styles.priceAmount}>
                      Contact Sales team for Enterprise Pricing
                    </Link>
                  </div>
                ) : (
                  <span className={styles.priceAmount}>₹{calculateMonthlyCost(employeeCount)}/month</span>
                )}
              </div>
              <button 
                className={styles.getStartedBtn}
                onClick={() => router.push('/onboarding')}
              >
                Get Started
              </button>
              <p className={styles.minPriceNote}>*Min price 1000/month</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
