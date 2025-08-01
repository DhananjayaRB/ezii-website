import styles from './eziiOverviewSection.module.scss';

export default function EziiOverviewSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>EZII Payroll: Where Complexity Meets Simplicity</h2>
          <p>
            EZII Payroll empowers you to effortlessly configure your unique payroll landscape. 
            From intricate organizational structures and diverse employee types to complex pay rules 
            and intricate compliance regulations, EZII provides the flexibility to tailor the system 
            to your exact needs.
          </p>
        </div>
        
        <div className={styles.dashboard}>
          <div className={styles.browserFrame}>
            <div className={styles.browserHeader}>
              <div className={styles.browserButtons}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className={styles.browserTitle}>EZII Dashboard</div>
            </div>
            <div className={styles.dashboardContent}>
              <div className={styles.dashboardGrid}>
                <div className={styles.dashboardCard}>
                  <span>👥</span>
                  <p>Employee Onboarding</p>
                </div>
                <div className={styles.dashboardCard}>
                  <span>📅</span>
                  <p>Leave Management</p>
                </div>
                <div className={styles.dashboardCard}>
                  <span>⏰</span>
                  <p>Attendance Tracking</p>
                </div>
                <div className={styles.dashboardCard}>
                  <span>💰</span>
                  <p>Payroll Summary</p>
                </div>
                <div className={styles.dashboardCard}>
                  <span>📋</span>
                  <p>Tax Filings</p>
                </div>
                <div className={styles.dashboardCard}>
                  <span>📊</span>
                  <p>Reports</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 