"use client";

import React, { useEffect, useState } from 'react';
import styles from './scrollableFeaturesSection.module.scss';
import Image from 'next/image';

const ScrollableFeaturesSection = ({ 
  contentBoxes = [],
  images = [],
  sectionTitle = "EZII Payroll Features",
  rotationInterval = 2000 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Default content if none provided
  const defaultContentBoxes = [
    {
      title: "Take Control of Your Payroll with EZII's DIY Pay Structures",
      subtitle: "Create and Modify Pay Structures with Ease",
      description: "Define multiple pay structures effortlessly – from high-salary employees with flexible benefits and tax optimization to lower-wage workers with varying PF compliances.",
      image: "/assets/x-left/feat_robust_control.webp",
      imageAlt: "EZII Robust Control",
      subsections: [
        {
          title: "Customize for Every Need",
          content: "Implement variable incentive schemes, handle restricted wages, and ensure compliance with all relevant labor laws."
        },
        {
          title: "No More Dependencies",
          content: "Eliminate the need to rely on back end software implementation teams. Configure your payroll system to perfectly align with your unique business requirements."
        }
      ]
    },
    {
      title: "Unified Payroll, Decentralized Management.",
      subtitle: "Centralized Control, Decentralized Action",
      description: "Empower local HR teams to manage key processes like onboarding, compensation setting, and leave approvals.",
      additionalContent: "Streamline workflows with automated approvals across different locations and levels of management.",
      image: "/assets/x-left/feat_multilocation.webp",
      imageAlt: "EZII Multi-location",
      subsections: [
        {
          title: "Seamless Data Flow",
          content: "Ensure accurate and timely data entry and updates across all locations."
        },
        {
          title: "Enhanced Collaboration",
          content: "Facilitate seamless communication and collaboration between HR teams and management across different locations."
        },
        {
          title: "Increased Efficiency",
          content: "Reduce administrative burden and free up HR teams to focus on strategic initiatives."
        }
      ]
    },
    {
      title: "Real-Time Payroll Processing",
      description: "Process payroll in minutes with real-time calculations for taxes, deductions, bonuses, and overtime. Eliminate errors and ensure accurate payments every cycle.",
      subtitle: "Error-Free Payroll Execution",
      image: "/assets/x-left/feat_flexible_payroll.webp",
      imageAlt: "EZII Flexible Payroll",
      listItems: [
        "Compliance with Tax Laws",
        "Reduced Processing Time",
        "Improved Accuracy and Transparency"
      ]
    },
    {
      title: "Customizable Reports",
      description: "Generate detailed payroll reports, including salary distribution, tax summaries, and workforce analytics, tailored to your business needs and audit requirements.",
      subtitle: "Comprehensive Reporting",
      image: "/assets/x-left/feat_sub-contractor-payroll.webp",
      imageAlt: "EZII Sub-contractor Payroll",
      listItems: [
        "Comprehensive Tax Summary Generation",
        "In-Depth Workforce Analytics",
        "Instant Adjustments",
        "Flexible Reporting Formats for Different Audiences"
      ]
    },
    {
      title: "Automated Compliance Updates",
      description: "Stay up-to-date with the latest labor laws and tax regulations. The system automatically updates to ensure compliance across locations without manual intervention.",
      subtitle: "Automatic Compliance",
      image: "/assets/x-left/feat_mobile_flexibility.webp",
      imageAlt: "EZII Mobile Flexibility",
      listItems: [
        "Automatic Updates for Labor Laws",
        "Seamless Tax Regulation Compliance",
        "No Manual Intervention Required"
      ]
    }
  ];

  // Default images if none provided
  const defaultImages = [
    { src: "/assets/x-fixed/33-1.webp", alt: "EZII Payroll Interface", width: 600, height: 400 },
    { src: "/assets/x-fixed/ill4.webp", alt: "EZII Dashboard", width: 600, height: 400 },
    { src: "/assets/x-fixed/ill55.webp", alt: "EZII Features", width: 600, height: 400 },
    { src: "/assets/x-fixed/Paystructure-1.webp", alt: "EZII Pay Structure", width: 600, height: 400 }
  ];

  const finalContentBoxes = contentBoxes.length > 0 ? contentBoxes : defaultContentBoxes;
  const finalImages = images.length > 0 ? images : defaultImages;

  // Image rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % finalImages.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [finalImages.length, rotationInterval]);

  return (
    <section className={styles.scrollableFeaturesSection}>
      <div className={styles.wLineOverlay}></div>
      <div className={styles.scrollableContainer}>
        <div className={styles.scrollableContent}>
          {finalContentBoxes.map((box, index) => (
            <div key={index} className={styles.contentBox}>
              <div className={styles.contentHeader}>
                <div className={styles.contentText}>
                  <h3>{box.title}</h3>
                  {box.subtitle && <h4>{box.subtitle}</h4>}
                </div>
                {box.image && (
                  <div className={styles.contentImage}>
                    <Image 
                      src={box.image}
                      alt={box.imageAlt || "Feature Image"}
                      width={80}
                      height={80}
                    />
                  </div>
                )}
              </div>
              
              {box.description && <p>{box.description}</p>}
              
              {box.additionalContent && <p>{box.additionalContent}</p>}
              
              {box.subsections && box.subsections.map((subsection, subIndex) => (
                <div key={subIndex}>
                  <h4>{subsection.title}</h4>
                  <p>{subsection.content}</p>
                </div>
              ))}
              
              {box.listItems && (
                <ul>
                  {box.listItems.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        
        <div className={styles.fixedImages}>
          <div className={styles.imageContainer}>
            <Image 
              key={currentImageIndex}
              src={finalImages[currentImageIndex].src} 
              alt={finalImages[currentImageIndex].alt} 
              width={finalImages[currentImageIndex].width} 
              height={finalImages[currentImageIndex].height}
              className={styles.fixedImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollableFeaturesSection; 