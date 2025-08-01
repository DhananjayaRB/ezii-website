import Navbar from '@/app/coomponents/Navbar';
import Footer from '@/app/coomponents/Footer';
import styles from './termsConditions.module.scss';

export default function TermsConditionsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Terms & Conditions</h1>
          
          <div className={styles.content}>
            <h2 className={styles.subtitle}>Terms and Conditions for Use of Ezii</h2>
            
            <p className={styles.paragraph}>
              Welcome to Ezii, a software-as-a-service (SaaS) platform wholly owned and operated by ResolveBiz Services & Apps Private Limited. Ezii provides a range of HR and management products, including payroll processing, leave management, attendance, and other related services (collectively referred to as the "Services").
            </p>
            
            <p className={styles.paragraph}>
              These Terms and Conditions ("Terms") govern your access to and use of the Ezii platform, website, and related services ("Platform"). By accessing or using the Platform, you agree to comply with and be bound by these Terms. If you do not agree with any part of these Terms, you must refrain from using the Platform.
            </p>
            
            <p className={styles.paragraph}>
              These Terms constitute a legally binding agreement between you (the "User" or "Customer") and ResolveBiz Services & Apps Private Limited.
            </p>

            <h3 className={styles.sectionTitle}>1. Definitions</h3>
            <h4 className={styles.subsectionTitle}>1.1 "Ezii":</h4>
            <p className={styles.paragraph}>
              Refers to the software platform developed and owned by ResolveBiz Services & Apps Private Limited.
            </p>

            <h4 className={styles.subsectionTitle}>1.2 "Services":</h4>
            <p className={styles.paragraph}>
              The range of HR, payroll, attendance tracking, leave management, and other solutions provided by Ezii.
            </p>

            <h4 className={styles.subsectionTitle}>1.3 "User":</h4>
            <p className={styles.paragraph}>
              Any individual or entity accessing or using the Platform, including administrators, managers, and employees.
            </p>

            <h4 className={styles.subsectionTitle}>1.4 "Customer":</h4>
            <p className={styles.paragraph}>
              The organization or business entity that subscribes to the Services and allows its employees or agents to access and use the Platform.
            </p>

            <h4 className={styles.subsectionTitle}>1.5 "Subscription Plan":</h4>
            <p className={styles.paragraph}>
              Refers to the pricing and features associated with the Customer's chosen subscription package for the Services.
            </p>

            <h3 className={styles.sectionTitle}>2. Account Creation and Access</h3>
            <h4 className={styles.subsectionTitle}>2.1 Eligibility:</h4>
            <p className={styles.paragraph}>
              You must be at least 18 years of age and capable of entering into legally binding agreements to use the Platform. By creating an account, you represent and warrant that you meet these eligibility criteria.
            </p>

            <h4 className={styles.subsectionTitle}>2.2 Registration:</h4>
            <p className={styles.paragraph}>
              To use Ezii, you must create an account by providing accurate and complete information. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.
            </p>

            <h4 className={styles.subsectionTitle}>2.3 Restrictions:</h4>
            <p className={styles.paragraph}>
              Unauthorized access, reverse engineering, or any form of tampering with the Platform is strictly prohibited. You agree to use the Services only for lawful purposes and in accordance with these Terms.
            </p>

            <h3 className={styles.sectionTitle}>3. Subscription and Payment</h3>
            <h4 className={styles.subsectionTitle}>3.1 Subscription Plans:</h4>
            <p className={styles.paragraph}>
              The Services are offered on a subscription basis, and pricing details are available on our website or as agreed upon during onboarding. By selecting a Subscription Plan, you agree to the associated fees and terms.
            </p>

            <h4 className={styles.subsectionTitle}>3.2 Payment Terms:</h4>
            <p className={styles.paragraph}>
              Payment for Subscription Plans is due in advance, and you agree to pay all applicable fees, including any taxes. Payments are processed via a third-party payment gateway, and ResolveBiz Services & Apps Private Limited is not liable for payment processing issues.
            </p>

            <h4 className={styles.subsectionTitle}>3.3 Refunds:</h4>
            <p className={styles.paragraph}>
              Subscription fees are generally non-refundable. Any exceptions, such as refunds for service interruptions or errors, will be addressed on a case-by-case basis and at the discretion of ResolveBiz Services & Apps Private Limited.
            </p>

            <h4 className={styles.subsectionTitle}>3.4 Renewals:</h4>
            <p className={styles.paragraph}>
              Subscription plans renew automatically unless canceled prior to the renewal date. Customers are responsible for ensuring sufficient funds for payment.
            </p>

            <h3 className={styles.sectionTitle}>4. Use of Services</h3>
            <h4 className={styles.subsectionTitle}>4.1 License Grant:</h4>
            <p className={styles.paragraph}>
              ResolveBiz Services & Apps Private Limited grants you a non-exclusive, non-transferable, revocable license to use Ezii for your internal business operations.
            </p>

            <h4 className={styles.subsectionTitle}>4.2 Data Usage:</h4>
            <p className={styles.paragraph}>
              You retain ownership of the data you input into Ezii. By using the Platform, you grant ResolveBiz Services & Apps Private Limited the right to process, analyze, and use your data solely to provide and enhance the Services.
            </p>

            <h4 className={styles.subsectionTitle}>4.3 Prohibited Use:</h4>
            <p className={styles.paragraph}>You may not use Ezii to:</p>
            <ul className={styles.list}>
              <li>Violate any applicable laws or regulations.</li>
              <li>Distribute harmful code, such as viruses or malware.</li>
              <li>Interfere with or disrupt the functionality of the Platform.</li>
              <li>Access the Services in an unauthorized manner.</li>
            </ul>

            <h3 className={styles.sectionTitle}>5. Privacy and Security</h3>
            <h4 className={styles.subsectionTitle}>5.1 Data Protection:</h4>
            <p className={styles.paragraph}>
              Ezii adheres to applicable data protection laws and implements reasonable security measures to protect user data. However, we cannot guarantee complete data security due to the inherent risks of online data transmission.
            </p>

            <h4 className={styles.subsectionTitle}>5.2 Privacy Policy:</h4>
            <p className={styles.paragraph}>
              The collection, use, and storage of your data are governed by our Privacy Policy. By using the Services, you consent to the data practices outlined in our Privacy Policy.
            </p>

            <h4 className={styles.subsectionTitle}>5.3 Data Retention:</h4>
            <p className={styles.paragraph}>
              User data will be retained for as long as necessary to provide the Services or as required by law. Upon termination of your subscription, you will have view only access to already processed data.
            </p>

            <h3 className={styles.sectionTitle}>6. Intellectual Property</h3>
            <h4 className={styles.subsectionTitle}>6.1 Ownership:</h4>
            <p className={styles.paragraph}>
              All intellectual property rights in Ezii, including the software, trademarks, and related materials, are owned by ResolveBiz Services & Apps Private Limited. No part of the Platform may be reproduced, modified, or distributed without explicit permission.
            </p>

            <h4 className={styles.subsectionTitle}>6.2 Customer Content:</h4>
            <p className={styles.paragraph}>
              Customers retain ownership of all content they upload to the Platform. By uploading content, you grant us a license to use the content as necessary for providing the Services.
            </p>

            <h3 className={styles.sectionTitle}>7. Third-Party Services</h3>
            <h4 className={styles.subsectionTitle}>7.1 Integrations:</h4>
            <p className={styles.paragraph}>
              Ezii may integrate with third-party applications or services. Your use of such services is subject to the terms and conditions of the respective providers. ResolveBiz Services & Apps Private Limited is not liable for third-party service disruptions.
            </p>

            <h4 className={styles.subsectionTitle}>7.2 External Links:</h4>
            <p className={styles.paragraph}>
              The Platform may include links to third-party websites. These links are provided for convenience, and we are not responsible for the content or practices of these external sites.
            </p>

            <h3 className={styles.sectionTitle}>8. Termination</h3>
            <h4 className={styles.subsectionTitle}>8.1 Termination by Customer:</h4>
            <p className={styles.paragraph}>
              Customers may terminate their subscription by providing written notice or by using the subscription management module within the platform. Termination will take effect at the end of the current billing cycle.
            </p>

            <h4 className={styles.subsectionTitle}>8.2 Termination by Ezii:</h4>
            <p className={styles.paragraph}>
              ResolveBiz Services & Apps Private Limited reserves the right to suspend or terminate access to Ezii for violations of these Terms, non-payment, or misuse of the Services.
            </p>

            <h4 className={styles.subsectionTitle}>8.3 Post-Termination:</h4>
            <p className={styles.paragraph}>
              Upon termination, you will have view only access to already processed data for a limited time, and all data associated with your account may be deleted in accordance with our data retention policy.
            </p>

            <h3 className={styles.sectionTitle}>9. Limitation of Liability</h3>
            <h4 className={styles.subsectionTitle}>9.1 No Warranty:</h4>
            <p className={styles.paragraph}>
              Ezii is provided "as is" without any warranties, express or implied. ResolveBiz Services & Apps Private Limited does not guarantee uninterrupted or error-free operation of the Platform.
            </p>

            <h4 className={styles.subsectionTitle}>9.2 Liability Cap:</h4>
            <p className={styles.paragraph}>
              To the maximum extent permitted by law, the liability of ResolveBiz Services & Apps Private Limited for any damages shall not exceed the total fees paid by the Customer in the preceding 1 month.
            </p>

            <h3 className={styles.sectionTitle}>10. Indemnification</h3>
            <p className={styles.paragraph}>
              You agree to indemnify and hold harmless ResolveBiz Services & Apps Private Limited, its affiliates, and agents from any claims, liabilities, or expenses arising from your use of the Services or violation of these Terms.
            </p>

            <h3 className={styles.sectionTitle}>11. Governing Law and Dispute Resolution</h3>
            <h4 className={styles.subsectionTitle}>11.1 Governing Law:</h4>
            <p className={styles.paragraph}>
              These Terms are governed by the laws of the Republic of India.
            </p>

            <h4 className={styles.subsectionTitle}>11.2 Dispute Resolution:</h4>
            <p className={styles.paragraph}>
              Any disputes will be resolved through arbitration in Republic of India in accordance with the rules of Republic of India.
            </p>

            <h3 className={styles.sectionTitle}>12. Changes to Terms</h3>
            <p className={styles.paragraph}>
              ResolveBiz Services & Apps Private Limited reserves the right to modify these Terms at any time. Changes will be effective upon posting the updated Terms on our website. Continued use of Ezii constitutes acceptance of the modified Terms.
            </p>

            <p className={styles.paragraph}>
              By using Ezii, you acknowledge that you have read, understood, and agree to these Terms and Conditions.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 