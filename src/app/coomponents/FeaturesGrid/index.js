import styles from './featuresGrid.module.scss';
import { featuresGridData } from '@/app/constants';
import {
  SettingOutlined,
  UserOutlined,
  BranchesOutlined,
  SyncOutlined,
  CheckCircleOutlined,
  SafetyCertificateOutlined,
  CalculatorOutlined,
  FileTextOutlined,
  TeamOutlined,
  FileProtectOutlined,
  FormOutlined,
  FileDoneOutlined,
  BankOutlined,
  GiftOutlined,
  HeartOutlined,
  CalendarOutlined,
  LogoutOutlined,
  BankOutlined as BankAdviseOutlined,
  ExclamationCircleOutlined,
  WalletOutlined
} from '@ant-design/icons';

export default function FeaturesGrid() {
  const features = featuresGridData;

  // Icon mapping based on feature titles
  const getIconForFeature = (title) => {
    const iconMap = {
      'Configurable Modules': <SettingOutlined />,
      'Customizable User Profile': <UserOutlined />,
      'Instant Pay Structuring': <WalletOutlined />,
      'Customizable Workflow Management': <BranchesOutlined />,
      'Real-Time Payroll Processing': <SyncOutlined />,
      'Effortless Payroll Reconciliation': <CheckCircleOutlined />,
      'Comprehensive Payroll Controls': <SafetyCertificateOutlined />,
      'Instant PF Computations': <CalculatorOutlined />,
      'Seamless ESI Computations & Upload Files': <FileTextOutlined />,
      'Flexible Pay for All Work Contracts': <TeamOutlined />,
      'Multiple Payslip template formats': <FileProtectOutlined />,
      'Effortless Form 16 Generation': <FormOutlined />,
      'Streamlined Quarterly eTDS Filing': <FileDoneOutlined />,
      'Loans & Advance Management': <BankOutlined />,
      'ESOP Perquisite valuation': <GiftOutlined />,
      'Gratuity Computation': <HeartOutlined />,
      'Efficient Leave Encashment Computation': <CalendarOutlined />,
      'Full and Final Settlements': <LogoutOutlined />,
      'Customizable Bank Advise Templates': <BankAdviseOutlined />,
      'Comprehensive Non-Routine Payroll Management': <ExclamationCircleOutlined />
    };

    return iconMap[title] || <SettingOutlined />;
  };

  return (
    <section className={styles.featuresSection}>
      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                {getIconForFeature(feature.title)}
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