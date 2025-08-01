import styles from './problemSolutionSection.module.scss';
import Card from '../Card';

export default function ProblemSolutionSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.headline}>
          Payroll can be challenging & complex, but it doesn't have to be.
        </h2>
        
        <div className={styles.cards}>
          <Card variant="gradient" className={styles.card}>
            <h3>To Business Owners</h3>
            <p>
              EZII helps streamline payroll, reduce errors, and save time. 
              Focus on growing your business while we handle the complexity.
            </p>
            <ul>
              <li>Reduce administrative burden</li>
              <li>Minimize payroll errors</li>
              <li>Save valuable time</li>
              <li>Ensure compliance</li>
            </ul>
          </Card>
          
          <Card variant="gradient" className={styles.card}>
            <h3>To HR & Finance</h3>
            <p>
              Improve efficiency, ensure compliance, and enhance employee engagement 
              with our comprehensive payroll solution.
            </p>
            <ul>
              <li>Streamline processes</li>
              <li>Ensure regulatory compliance</li>
              <li>Enhance employee satisfaction</li>
              <li>Generate detailed reports</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
} 