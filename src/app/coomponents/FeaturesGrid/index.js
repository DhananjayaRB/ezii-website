import Image from 'next/image';
import styles from './featuresGrid.module.scss';
import { featuresGridData } from '@/app/constants';

export default function FeaturesGrid() {
  const features = featuresGridData;

  return (
    <section className={styles.featuresSection}>
      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                <Image
                  src="/assets/features/feat_flexible_payroll.webp"
                  alt="Feature Icon"
                  width={60}
                  height={60}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
            </div>
            <p className={styles.cardDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 