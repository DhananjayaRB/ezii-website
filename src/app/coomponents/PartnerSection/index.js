"use client";

import React from 'react';
import Image from 'next/image';
import styles from './partnerSection.module.scss';

const partnerData = [
  {
    id: 1,
    title: "Service Partner",
    description: "Operate with full brand autonomy",
    icon: "/assets/patners/service.png",
    buttonText: "Get Started →"
  },
  {
    id: 2,
    title: "Sales Partner",
    description: "Attractive commission structure",
    icon: "/assets/patners/sales.png",
    buttonText: "Get Started →"
  },
  {
    id: 3,
    title: "Technology Partner",
    description: "Co-branding opportunities for greater visibility",
    icon: "/assets/patners/tech.png",
    buttonText: "Get Started →"
  },
  {
    id: 4,
    title: "Referral Partner",
    description: "Minimal effort, maximum returns",
    icon: "/assets/patners/refral.png",
    buttonText: "Get Started →"
  }
];

export default function PartnerSection() {
  const handlePartnerClick = () => {
    window.location.href = 'https://ezii.co.in/onboarding/';
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