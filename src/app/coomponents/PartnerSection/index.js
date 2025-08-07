"use client";

import React from 'react';
import Image from 'next/image';
import styles from './partnerSection.module.scss';
import { partnerData } from '@/app/constants';

export default function PartnerSection() {
  const handlePartnerClick = () => {
    window.location.href = '/onboarding';
  };

  return (
    <section className={styles.partnerSection}>
      <div className={styles.container}>
        <h2 className={styles.mainHeading}>Partner with us</h2>
        <div className={styles.partnerGrid}>
          {partnerData.map((partner) => (
            <div key={partner.id} className={styles.partnerCard}>
              <div className={styles.partnerIcon}>
                <Image
                  src={partner.icon}
                  alt={partner.title}
                  width={80}
                  height={80}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3 className={styles.partnerTitle}>{partner.title}</h3>
              <p className={styles.partnerDescription}>{partner.description}</p>
              <button
                className={styles.partnerButton}
                onClick={handlePartnerClick}
              >
                {partner.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 