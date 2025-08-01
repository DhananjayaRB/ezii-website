import styles from './featuresSection.module.scss';

export default function FeaturesSection() {
  const features = [
    {
      title: "Take Control of Your Payroll with EZII's DIY Pay Structures",
      icon: "⚙️",
      items: [
        "Create and Modify Pay Structures with Ease",
        "Customize for Every Need",
        "No More Dependencies"
      ]
    },
    {
      title: "Unified Payroll, Decentralized Management.",
      icon: "🌐",
      items: [
        "Centralized Control, Decentralized Action",
        "Seamless Data Flow",
        "Enhanced Collaboration",
        "Increased Efficiency"
      ]
    },
    {
      title: "Real-Time Payroll Processing",
      icon: "⚡",
      description: "Process payroll in minutes with real-time calculations for taxes, deductions, bonuses, and overtime.",
      items: [
        "Error-Free Payroll Execution",
        "Compliance with Tax Laws",
        "Reduced Processing Time",
        "Improved Accuracy and Transparency"
      ]
    },
    {
      title: "Customizable Reports",
      icon: "📊",
      items: [
        "Comprehensive Tax Summary Generation",
        "In-Depth Workforce Analytics",
        "Instant Adjustments",
        "Flexible Reporting Formats for Different Audiences"
      ]
    },
    {
      title: "Automated Compliance Updates",
      icon: "🔄",
      items: [
        "Automatic Updates for Labor Laws",
        "Seamless Tax Regulation Compliance",
        "No Manual Intervention Required"
      ]
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.features}>
          {features.map((feature, index) => (
            <div key={index} className={styles.feature}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              {feature.description && <p>{feature.description}</p>}
              <ul>
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 