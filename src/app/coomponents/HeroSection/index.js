import React from 'react';
import styles from './heroSection.module.scss';
import Image from 'next/image';
import Button from '../Button';
import { StarOutlined, FileTextOutlined, DollarOutlined, SafetyCertificateOutlined, TeamOutlined } from '@ant-design/icons';
import ScrollableFeaturesSection from '../ScrollableFeaturesSection';
import PricingSection from '../PricingSection';
import PartnerSection from '../PartnerSection';
import TestimonialsSection from '../TestimonialsSection';
import ContactForm from '../ContactForm';
import FAQSection from '../FAQSection';
import Footer from '../Footer';
import { clientLogos } from '@/app/constants';
// import {BlogPost} from '../articles/test';

const firstRowLogos = clientLogos.slice(0, 6);
const secondRowLogos = clientLogos.slice(6);

export default function HeroSection() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1>Payroll, Simplified</h1>
          <h2 style={{ color: '#F05A00', marginBottom: '1.5rem' }}>The EZII Way</h2>
          <p className={styles.description}>
            Backed by 20+ years of experience, EZII helps you get it right—payroll, leave management, or attendance—without hassle.
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <Button
              href="/onboarding"
              variant="brand"
              size="medium"
              icon="→"
              iconPosition="right"
            >
              Get Started
            </Button>
          </div>
        </div>
        <div className={styles.visual} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Image
            src="/assets/banner-ezii.webp"
            alt="EZII Payroll Banner"
            width={1035}
            height={695}
            style={{ borderRadius: '1.5rem', maxWidth: '100%', height: 'auto' }}
            priority
          />
        </div>
      </section>
      <div className={styles.clientMarqueeWrapper}>
        <div className={`${styles.clientMarquee} ${styles.leftToRight} ${styles.slow}`}>
          {[...firstRowLogos, ...firstRowLogos].map((logo, idx) => (
            <div className={styles.clientLogo} key={`ltr-${idx}`}>
              <Image src={`/assets/clients/${logo}`} alt={`Client ${logo}`} width={120} height={60} />
            </div>
          ))}
        </div>
        <div className={`${styles.clientMarquee} ${styles.rightToLeft} ${styles.slow}`}>
          {[...secondRowLogos, ...secondRowLogos].map((logo, idx) => (
            <div className={styles.clientLogo} key={`rtl-${idx}`}>
              <Image src={`/assets/clients/${logo}`} alt={`Client ${logo}`} width={120} height={60} />
            </div>
          ))}
        </div>
      </div>
      {/* New Section: Business Owners & HR/Finance */}
      <section className={styles.dualCardSection}>
        <h2 className={styles.dualCardHeading}>
          Payroll can be challenging & complex, but it<br />doesn't have to be.
        </h2>
        <div className={styles.dualCardGrid}>
          <div className={styles.dualCard}>
            <div className={styles.dualCardContent}>
              <div className={styles.dualCardHeader}>
                <div>
                  <span className={styles.dualCardFor}>For</span>
                  <h3 className={styles.dualCardTitle}>Business Owners</h3>
                  <div className={styles.dualCardUnderline}></div>
                </div>
                <div className={styles.dualCardIcon}>
                  <DollarOutlined style={{ fontSize: '30px', color: '#667eea' }} />
                </div>
              </div>
              <div className={styles.dualCardBody}>
                <p className={styles.dualCardDesc}>
                  Reduce payroll errors and compliance risks, gain control and real-time insights into your workforce costs, drive growth, the future of payroll is here.
                </p>
                <Button
                  href="/onboarding"
                  variant="black"
                  size="medium"
                  icon="→"
                  iconPosition="right"
                  className={styles.dualCardLink}
                >
                  Get started
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.dualCard}>
            <div className={styles.dualCardContent}>
              <div className={styles.dualCardHeader}>
                <div>
                  <span className={styles.dualCardFor}>For</span>
                  <h3 className={styles.dualCardTitle}>HR/Finance</h3>
                  <div className={styles.dualCardUnderline}></div>
                </div>
                <div className={styles.dualCardIcon}>
                  <TeamOutlined style={{ fontSize: '30px', color: '#667eea' }} />
                </div>
              </div>
              <div className={styles.dualCardBody}>
                <p className={styles.dualCardDesc}>
                  Free your team from payroll tasks. Focus on strategic HR initiatives. Improve employee engagement. Drive better people outcomes.
                </p>
                <Button
                  href="/onboarding"
                  variant="black"
                  size="medium"
                  icon="→"
                  iconPosition="right"
                  className={styles.dualCardLink}
                >
                  Get started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section: EZII Payroll Complexity Meets Simplicity */}
      <section className={styles.complexitySection}>
        <div className={styles.complexityContainer}>
          <div className={styles.complexityContent}>
            <div className={styles.gearIcons}>
              <Image
                src="/assets/feat_robust_control.webp"
                alt="Robust Control Feature"
                width={80}
                height={60}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <h5 className={styles.complexityHeading}>
              EZII Payroll: Where Complexity Meets Simplicity
            </h5>
            <p className={styles.complexityDescription}>
              EZII Payroll empowers you to effortlessly configure your unique payroll landscape. From intricate organizational structures and diverse employee types to complex pay rules and intricate compliance regulations, EZII provides the flexibility to tailor the system to your exact needs.
            </p>
          </div>
          <div className={styles.complexityVisual}>
            <Image
              src="/assets/browser_2x-3-768x576.webp"
              alt="EZII Payroll Interface"
              width={768}
              height={576}
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '0.5rem'
              }}
            />
          </div>
        </div>
      </section>

      {/* New Section: EZII Payroll Features with Scrollable Content */}
      <ScrollableFeaturesSection />

      {/* New Section: Pricing Section */}

      <PricingSection showHeading={true} />

      {/* New Section: Partner Section */}
      <PartnerSection />

      {/* New Section: Testimonials Section */}
      <TestimonialsSection />

      {/* New Section: Contact Section */}
      <ContactForm />

      {/* New Section: FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />
      {/* <BlogPost /> */}


    </>
  );
}
