
export const contactFormFieldsForHomePage = [
  {
    name: 'name',
    type: 'text',
    label: 'Full Name',
    placeholder: 'Bittu Kumar',
    isRequired: true,
    minLength: 2
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email Address',
    placeholder: 'bittu@company.com',
    isRequired: true
  },
  {
    name: 'phone',
    type: 'tel',
    label: 'Mobile Number',
    placeholder: '9876543210',
    isRequired: true
  },
  {
    name: 'companyName',
    type: 'text',
    label: 'Company Name',
    placeholder: 'ABC Tech Pvt Ltd',
    isRequired: true,
    minLength: 2
  },
  {
    name: 'service',
    type: 'select',
    label: 'Service Required',
    placeholder: 'Select Service',
    isRequired: true,
    options: ['Payroll Management'] // Default option, will be replaced by API
  },
  {
    name: 'designation',
    type: 'text',
    label: 'Designation',
    placeholder: 'HR Manager',
    isRequired: false,
    minLength: 2
  },
  {
    name: 'description',
    type: 'textarea',
    label: 'Brief Description',
    placeholder: 'Description (Optional)',
    isRequired: false,
    minLength: 10
  },

];

export const contactFormFieldsForBecomePartnerPage = [
  {
    name: 'name',
    type: 'text',
    label: 'Full Name',
    placeholder: 'Bittu Kumar',
    isRequired: true,
    minLength: 2
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email Address',
    placeholder: 'bittu@company.com',
    isRequired: true
  },
  {
    name: 'phone',
    type: 'tel',
    label: 'Mobile Number',
    placeholder: '9876543210',
    isRequired: true
  },
  {
    name: 'companyName',
    type: 'text',
    label: 'Company Name',
    placeholder: 'ABC Tech Pvt Ltd',
    isRequired: true,
    minLength: 2
  },
  {
    name: 'description',
    type: 'textarea',
    label: 'Brief Description',
    placeholder: 'Description (Optional)',
    isRequired: false,
    minLength: 10
  },

];

// Feature list for onboarding
export const featureList = [
  {
    key: 'isFbp',
    name: 'Flexible Benefit Plan',
    description: 'Customize and manage tax-saving benefits for employees with options like allowances and reimbursements.',
    popular: true
  },
  {
    key: 'isWorkFlow',
    name: 'Workflow Management',
    description: 'Automate payroll processes and approval hierarchies for efficient task management and reduced manual intervention.'
  },
  {
    key: 'isLoans',
    name: 'Loan & Advances',
    description: 'Manage employee loans and advance payments efficiently with automated calculations and tracking.'
  },
  {
    key: 'isPF',
    name: 'PF Management',
    description: 'Automated Provident Fund calculations and compliance with real-time updates and reporting.'
  },
  {
    key: 'isESI',
    name: 'ESI Management',
    description: 'Employee State Insurance calculations and reporting with automated compliance checks.'
  },
  {
    key: 'isMW',
    name: 'Minimum Wages',
    description: 'Ensure compliance with minimum wage regulations across different states and categories.'
  },
  {
    key: 'isPT',
    name: 'Professional Tax',
    description: 'Automated professional tax calculations based on state-specific rates and slabs.'
  },
  {
    key: 'isIT',
    name: 'Income Tax',
    description: 'Income tax calculations and TDS management with automated form generation.'
  },
  {
    key: 'isLW',
    name: 'Leave Management',
    description: 'Comprehensive leave tracking and management with policy enforcement and reporting.'
  },
  {
    key: 'isPQ',
    name: 'Payroll Queries',
    description: 'Handle employee payroll queries efficiently with automated response system.'
  },
  {
    key: 'isComp',
    name: 'Compliance',
    description: 'Select from ESI, Income Tax, Professional Tax, Labour Welfare Act, and Minimum Wages compliance features.'
  },
  {
    key: 'isTemp',
    name: 'Templates',
    description: 'Pre-built templates for various payroll documents with customization options.'
  },
  {
    key: 'isSubCon',
    name: 'Sub-contractor Payroll',
    description: 'Manage sub-contractor payments and compliance with specialized tracking.'
  },
  {
    key: 'isOT',
    name: 'Overtime Management',
    description: 'Track and calculate overtime payments with automated rate calculations.'
  }
];

// Pricing tabs for onboarding
export const pricingTabs = [
  { key: 'Monthly', label: 'Monthly', discount: 0, popular: true },
  { key: 'Quarterly', label: 'Quarterly', discount: 2, popular: false },
  { key: 'Half Yearly', label: 'Half Yearly', discount: 5, popular: false },
  { key: 'Annual', label: 'Annual', discount: 8, popular: false }
];

// Client logos for hero section
export const clientLogos = [
  'client-2.webp',
  'client-3.webp',
  'client-4.webp',
  'client-5.webp',
  'client-6.webp',
  'client-7.webp',
  'client-8.webp',
  'client-9.webp',
  'client-10.webp',
  'client-11.webp',
  'client-12.webp',
  'client-13.webp',
  'client-14.webp',
];

// Testimonials data
export const testimonialsData = [
  {
    id: 1,
    name: "Priya Bhat",
    designation: "HR Manager of a Services Company",
    testimonial: "EZII Payroll has been a game-changer for our HR department. We have significantly reduced the time spent on administrative tasks, allowing us to focus on more strategic initiatives like employee engagement and development."
  },
  {
    id: 2,
    name: "Ruchi Arora",
    designation: "Employee of a MNC",
    testimonial: "The flexibility of EZII's Flexi Benefit module is a game-changer. I can easily adjust my selections based on my changing needs throughout the year, ensuring that I'm always making the most of my benefits."
  },
  {
    id: 3,
    name: "Arvind",
    designation: "Manager of a Embedded Software Company",
    testimonial: "EZII has made tax planning a breeze. The intuitive declaration process and the ability to modify my declarations throughout the year give me peace of mind. I can easily submit the necessary proofs and feel confident that I'm optimizing my tax benefits within my pay package."
  }
];

// FAQ data
export const faqData = [
  {
    id: 1,
    question: "What payroll compliances does EZII offer, and why are they important?",
    answer: "Payroll compliance involves adhering to all central and state regulations concerning employee compensation, tax withholdings, benefits, and deductions. Ensuring compliance is crucial to avoid potential legal penalties, financial losses, and reputational risks. EZII offers end-to-end payroll processing, compliance management, and tax calculations. Additionally, we provide access to attendance and leave tracking (coming soon) as part of an integrated HRMS solution, designed to streamline and ensure accurate compliance across payroll functions."
  },
  {
    id: 2,
    question: "How quickly can EZII Payroll software be implemented?",
    answer: "Our payroll software is designed for quick implementation, often faster than many competitors. The onboarding process is streamlined, and our team supports client setup and migration within just 3–5 days."
  },
  {
    id: 3,
    question: "What are the compliance features included in the EZII payroll solution?",
    answer: "Our payroll solution includes automated tax calculations, statutory deductions, Flexible Benefits Plan (FBP) declarations, savings declarations, and reporting to ensure compliance with local laws. The system also provides alerts and updates on regulatory changes to help your business stay compliant."
  },
  {
    id: 4,
    question: "Does the EZII payroll system handle multi-state payroll?",
    answer: "Yes, our platform is designed to handle multi-state payroll, allowing you to process payroll and ensure compliance for employees located in different states."
  },
  {
    id: 5,
    question: "Can EZII Payroll integrate with my existing HRMS or ERP systems?",
    answer: "EZII Payroll offers flexible integration options and can work seamlessly with most HRMS and ERP systems. Our team can assist in setting up integrations based on your organization's specific requirements."
  },
  {
    id: 6,
    question: "What support options are available with EZII payroll?",
    answer: "We offer comprehensive support, including customer assistance during implementation and ongoing support. Our team is available for technical support, compliance updates, and user training."
  },
  {
    id: 7,
    question: "What reports are available in EZII Payroll?",
    answer: "EZII Payroll offers customizable reporting options, including payroll summaries, tax reports, compliance reports, and employee earnings statements. These reports can be tailored to meet your organization's reporting needs."
  },
  {
    id: 8,
    question: "What makes EZII Payroll unique?",
    answer: "EZII offers a customizable solution that adapts to your organization's needs, whether you choose our outsourced service or SaaS platform. Our system is designed to streamline payroll, enhance compliance, and minimize manual work, backed by 25 years of experience in the field."
  },
  {
    id: 9,
    question: "Is there a grace period for payment? What happens to my data after my subscription has ended?",
    answer: "There is no grace period for non-payment, and we do not offer auto-renewal. The features within the application will automatically disable once the expiry date is reached, and you will only have access to reports. Currently, report access is perpetual but may change in the future."
  },
  {
    id: 10,
    question: "How would changes in employee headcount affect my subscription and how would this be managed?",
    answer: "Once the payment is made, no refund is provided in the case of a reduction in headcount. However, during your subscription renewal, you can reduce your headcount, but not midway through your billing cycle. Increasing headcount is simple via the subscription management module, with charges based on the number of months remaining in your billing cycle. For example, if you've paid for 30 employees for the period April 1st – June 30th and add 5 employees on May 15th, you will only be charged for the additional 5 employees in June, though they will have access starting May 15th."
  }
];

// Partner data
export const partnerData = [
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

// Features grid data
export const featuresGridData = [
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

// Scrollable features default content
export const scrollableFeaturesDefaultContent = [
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
    title: "Unified Payroll, Decentralized Management",
    subtitle: "Centralized Control, Decentralized Action",
    description: "Manage payroll across multiple locations while maintaining centralized control. Each location can process payroll independently while ensuring data consistency and compliance.",
    image: "/assets/x-left/feat_mobile_flexibility.webp",
    imageAlt: "EZII Mobile Flexibility",
    subsections: [
      {
        title: "Seamless Data Flow",
        content: "Real-time synchronization ensures all locations have access to the latest data and updates."
      },
      {
        title: "Enhanced Collaboration",
        content: "Enable better communication and coordination between different departments and locations."
      }
    ]
  },
  {
    title: "Real-Time Payroll Processing",
    subtitle: "Process Payroll in Minutes",
    description: "Process payroll in minutes with real-time calculations for taxes, deductions, bonuses, and overtime. No more waiting for batch processing or overnight runs.",
    image: "/assets/x-left/feat_multilocation.webp",
    imageAlt: "EZII Multi-location",
    listItems: [
      "Error-Free Payroll Execution",
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

// Scrollable features default images
export const scrollableFeaturesDefaultImages = [
  { src: "/assets/x-fixed/33-1.webp", alt: "EZII Payroll Interface", width: 600, height: 400 },
  { src: "/assets/x-fixed/ill4.webp", alt: "EZII Dashboard", width: 600, height: 400 },
  { src: "/assets/x-fixed/ill55.webp", alt: "EZII Features", width: 600, height: 400 },
  { src: "/assets/x-fixed/Paystructure-1.webp", alt: "EZII Pay Structure", width: 600, height: 400 }
];
