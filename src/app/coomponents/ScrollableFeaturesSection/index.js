"use client";

import React, { useEffect, useState } from 'react';
import styles from './scrollableFeaturesSection.module.scss';
import Image from 'next/image';
import { scrollableFeaturesDefaultContent, scrollableFeaturesDefaultImages } from '@/app/constants';

const ScrollableFeaturesSection = ({
  contentBoxes = [],
  images = [],
  sectionTitle = "EZII Payroll Features",
  rotationInterval = 2000
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Default content if none provided
  const defaultContentBoxes = scrollableFeaturesDefaultContent;

  // Default images if none provided
  const defaultImages = scrollableFeaturesDefaultImages;

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