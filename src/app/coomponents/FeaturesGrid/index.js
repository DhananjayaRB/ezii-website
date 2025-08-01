import Image from 'next/image';
import styles from './featuresGrid.module.scss';

export default function FeaturesGrid() {
  const features = [
    {
      title: "Configurable Modules",
      description: "Each customer can have a personalised Payroll Software based on what is applicable. Say you have Loans and Advances, you can pick this module and Loans and Advances screens, process and reports will appear for you while another customer who does not offer Loans and Advances will not have this module in his app. Similarly on Flexi Benefits and other modules. Payroll Software at another level of personalisation!"
    },
    {
      title: "Customizable User Profile",
      description: "Employee/ User Data is also personalised to each organisation needs from basic information right up to Employee Online presence. From Simple & Basic to Complex and Sophisticated, you decide what you need!"
    },
    {
      title: "Instant Pay Structuring",
      description: "EZII enables instant pay structuring without the need for backend support or complex setups. HR teams can easily modify and implement changes on the go, eliminating wait times and ensuring seamless payroll management. Simplify your pay structure adjustments in real-time with no delays."
    },
    {
      title: "Customizable Workflow Management",
      description: "Each process is either unique or can be grouped together and follow very distinct approval processes and workflows or as a common workflow. A software malleable to exactly the way you want it and is right for your organisation. You decide and a software that follows!"
    },
    {
      title: "Real-Time Payroll Processing",
      description: "Payroll processing batch mode and time pressure is busted. EZII payroll is real time, any time and all time. Payroll cut off date is to freeze the monthly cycle for payroll processing not to stress your payroll and HR teams."
    },
    {
      title: "Effortless Payroll Reconciliation",
      description: "Reverse flow of monthly payroll controls. Your Payroll processor can pull out a Change management report each month for a quick review and approval of the monthly payroll. No need for any time consuming reconciliations."
    },
    {
      title: "Comprehensive Payroll Controls",
      description: "All types of controls are a finger tip away , be it head count, tax computations, CTC comparative analysis etc. The way to Payroll peace of mind!"
    },
    {
      title: "Instant PF Computations",
      description: "EZII provides ready-to-use PF computations, ensuring smooth and accurate calculations every time. With ECR (Electronic Challan-cum-Return) ready integration, you can easily generate the required files for submission. Simplify your payroll process with seamless, compliant PF handling, all at your fingertips."
    },
    {
      title: "Seamless ESI Computations & Upload Files",
      description: "EZII offers ready-to-use ESI computations, ensuring precise and efficient calculations. It automatically generates the required ESI upload files for easy submission. Streamline your payroll process with hassle-free, compliant ESI management."
    },
    {
      title: "Flexible Pay for All Work Contracts",
      description: "Pay against any type of work contract, Full time or Part time Employee, Consultant, Gig Worker, Sub Contract Staff, Freelancer or any output based type of work."
    },
    {
      title: "Multiple Payslip template formats",
      description: "EZII offers multiple payslip template formats to suit your organization's needs. Customize the layout to align with your company's style and preferences. Whether you need a simple or detailed format, easily generate payslips that meet your requirements."
    },
    {
      title: "Effortless Form 16 Generation",
      description: "EZII simplifies Form 16 generation with accurate, automated calculations. Easily generate and distribute Form 16 to your employees at year-end. Ensure compliance and reduce manual errors with hassle-free Form 16 processing."
    },
    {
      title: "Streamlined Quarterly eTDS Filing",
      description: "EZII simplifies quarterly eTDS filing with automated calculations and timely submissions. Stay compliant with seamless generation of eTDS returns and tax deduction details. Save time and reduce errors with a hassle-free eTDS management system."
    },
    {
      title: "Loans & Advance Management",
      description: "EZII offers a comprehensive system for managing employee loans and advances. Automate approval processes, track repayments, and ensure accurate deductions. Streamline your financial management and maintain clear records with ease."
    },
    {
      title: "ESOP Perquisite valuation",
      description: "EZII simplifies ESOP perquisite valuation with accurate, automated calculations. Ensure compliance and generate precise reports for tax purposes. Streamline the management of employee stock options and their associated benefits effortlessly."
    },
    {
      title: "Gratuity Computation",
      description: "EZII ensures precise gratuity computations based on the latest legal requirements. Automatically calculate and track gratuity liabilities for all employees. Simplify the process and maintain accurate records for compliance and planning."
    },
    {
      title: "Efficient Leave Encashment Computation",
      description: "EZII automates leave encashment computations with accurate calculations based on company policies. Track and manage employee leave balances seamlessly. Simplify the encashment process and ensure timely, error-free payouts."
    },
    {
      title: "Full and Final Settlements",
      description: "EZII simplifies the full and final settlement process with automated calculations for dues and deductions. Ensure smooth and timely settlement of employee accounts upon exit. Reduce errors and administrative burden with accurate, hassle-free settlements"
    },
    {
      title: "Customizable Bank Advise Templates",
      description: "EZII offers multiple bank advise templates tailored for leading banks. Streamline payroll processing with pre-configured formats for easy bank submissions. Ensure accuracy and compliance with bank-specific requirements, all in one place."
    },
    {
      title: "Comprehensive Non-Routine Payroll Management",
      description: "Non routine payroll incident management viz Exit with payment on hold, Exit awaiting clearance for processing, Exit with next month processing, Exit and employee returns back to employment i.e. Paused Exit, Loss of Pay recorded and due to Employee representations HR modifies the extent of LOP in either same month or subsequent month, Compensation revision with retrospective effect, Partial payment. HR and Employee circumstances are never all predictable. EZII Payroll is your best HR armour!"
    }
  ];

  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
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
      </div>
    </section>
  );
} 