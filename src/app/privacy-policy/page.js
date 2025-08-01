import Navbar from '@/app/coomponents/Navbar';
import Footer from '@/app/coomponents/Footer';
import styles from './privacyPolicy.module.scss';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Privacy Policy</h1>
          
          <div className={styles.content}>
            <h2 className={styles.subtitle}>Privacy Policy for Ezii</h2>
            
            <p className={styles.paragraph}>
              ResolveBiz Services & Apps Private Limited ("we," "us," or "our") respects your privacy and is committed to protecting the personal and business information you share with us through Ezii. This Privacy Policy explains how we collect, use, share, and protect your information when you use Ezii ("Platform") and its associated services ("Services").
            </p>
            
            <p className={styles.paragraph}>
              By accessing or using Ezii, you agree to the terms of this Privacy Policy. If you do not agree, please refrain from using the Platform.
            </p>

            <h3 className={styles.sectionTitle}>1. Information We Collect</h3>
            <p className={styles.paragraph}>
              We collect information to provide, improve, and secure our Services. The types of information we collect include:
            </p>

            <h4 className={styles.subsectionTitle}>1.1 Information You Provide:</h4>
            <ul className={styles.list}>
              <li><strong>Account Information:</strong> Your name, email address, phone number, company name, and other details provided during account creation or subscription.</li>
              <li><strong>Employee and Payroll Data:</strong> Names, roles, salaries, attendance records, leave details, and other HR data uploaded by Customers for use with the Services.</li>
              <li><strong>Payment Information:</strong> Billing details, payment method information, and other related data.</li>
            </ul>

            <h4 className={styles.subsectionTitle}>1.2 Automatically Collected Information:</h4>
            <ul className={styles.list}>
              <li><strong>Usage Data:</strong> Information about how you access and use the Platform, including IP addresses, device information, browser type, operating system, and activity logs.</li>
              <li><strong>Cookies and Tracking Technologies:</strong> Data collected through cookies or similar tools to enhance your user experience and analyze Platform performance.</li>
            </ul>

            <h4 className={styles.subsectionTitle}>1.3 Third-Party Information:</h4>
            <p className={styles.paragraph}>
              Information from third-party services integrated with Ezii, such as payroll processors or attendance systems, as permitted by those services.
            </p>

            <h3 className={styles.sectionTitle}>2. How We Use Your Information</h3>
            <p className={styles.paragraph}>We use the information collected to:</p>
            <ul className={styles.list}>
              <li>Provide and maintain the Platform and Services.</li>
              <li>Process payroll, attendance, leave, and other HR data as requested by Customers.</li>
              <li>Improve the functionality, security, and performance of the Platform.</li>
              <li>Communicate with you about your account, updates, and service improvements.</li>
              <li>Fulfill legal obligations and resolve disputes.</li>
            </ul>
            <p className={styles.paragraph}>
              We will not use your data for purposes beyond what is outlined in this Privacy Policy without your explicit consent.
            </p>

            <h3 className={styles.sectionTitle}>3. How We Share Your Information</h3>
            <p className={styles.paragraph}>We may share your information with:</p>

            <h4 className={styles.subsectionTitle}>3.1 Service Providers:</h4>
            <p className={styles.paragraph}>
              Third-party providers that help us deliver the Services, including payment processors, cloud storage providers, and IT support teams. These providers are bound by confidentiality agreements and are authorized to use your data only as necessary to provide services to us.
            </p>

            <h4 className={styles.subsectionTitle}>3.2 Legal and Regulatory Authorities:</h4>
            <p className={styles.paragraph}>
              When required by law, regulation, or legal process, we may disclose your information to comply with applicable legal obligations under the laws of the Republic of India or respond to lawful requests by public authorities.
            </p>

            <h4 className={styles.subsectionTitle}>3.3 Business Transfers:</h4>
            <p className={styles.paragraph}>
              In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction. We will notify you of any such transfer and any new privacy policy changes.
            </p>

            <h4 className={styles.subsectionTitle}>3.4 With Your Consent:</h4>
            <p className={styles.paragraph}>
              We may share your information for additional purposes if you provide explicit consent.
            </p>

            <h3 className={styles.sectionTitle}>4. Your Rights and Choices</h3>
            <p className={styles.paragraph}>You have the following rights regarding your data:</p>

            <h4 className={styles.subsectionTitle}>4.1 Access and Correction:</h4>
            <p className={styles.paragraph}>
              You can access and update your account information through the Platform. If you are an employee or user under a Customer account, you may need to contact your employer for certain updates.
            </p>

            <h4 className={styles.subsectionTitle}>4.2 Data Portability:</h4>
            <p className={styles.paragraph}>
              You may request a copy of your data in a structured, machine-readable format.
            </p>

            <h4 className={styles.subsectionTitle}>4.3 Deletion:</h4>
            <p className={styles.paragraph}>
              You may request the deletion of your personal data, subject to our legal obligations to retain certain records.
            </p>

            <h3 className={styles.sectionTitle}>5. Data Retention</h3>
            <p className={styles.paragraph}>
              We retain your information as long as your account is active or as necessary to provide the Services. We may retain data for longer periods as required by law in the Republic of India, for legitimate business purposes, or to resolve disputes.
            </p>
            <p className={styles.paragraph}>
              Upon termination of your subscription, we may delete or anonymize your data in accordance with our retention policy.
            </p>

            <h3 className={styles.sectionTitle}>6. Data Security</h3>
            <p className={styles.paragraph}>
              We implement robust security measures to protect your information, including encryption, access controls, and regular security audits. However, no system is completely secure, and we cannot guarantee the absolute security of your data. You are responsible for maintaining the security of your account credentials.
            </p>

            <h3 className={styles.sectionTitle}>7. Cookies and Tracking Technologies</h3>
            <p className={styles.paragraph}>
              Ezii uses cookies and similar technologies to enhance user experience, analyze performance, and provide tailored content. You can manage your cookie preferences through your browser settings. Disabling cookies may affect the functionality of the Platform.
            </p>

            <h3 className={styles.sectionTitle}>8. International Data Transfers</h3>
            <p className={styles.paragraph}>
              If you are accessing Ezii from outside the Republic of India, your data may be transferred to and processed in India, where our servers are located. By using the Platform, you consent to the transfer and processing of your data in accordance with this Privacy Policy.
            </p>

            <h3 className={styles.sectionTitle}>9. Children's Privacy</h3>
            <p className={styles.paragraph}>
              Ezii is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware of such data, we will delete it promptly.
            </p>

            <h3 className={styles.sectionTitle}>10. Changes to this Privacy Policy</h3>
            <p className={styles.paragraph}>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. Any changes will be posted on this page, and significant changes will be communicated to you. Your continued use of the Platform after such updates constitutes your acceptance of the revised Privacy Policy.
            </p>

            <h3 className={styles.sectionTitle}>11. Governing Law</h3>
            <p className={styles.paragraph}>
              This Privacy Policy is governed by the laws of the Republic of India. Any disputes arising from this Privacy Policy will be subject to the exclusive jurisdiction of the courts located in Bangalore, Karnataka.
            </p>

            <p className={styles.paragraph}>
              By using Ezii, you acknowledge that you have read, understood, and agreed to this Privacy Policy.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 