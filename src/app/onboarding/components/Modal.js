import React from 'react';
import styles from '../onboarding.module.scss';

const Modal = ({ show, onHide, title, children, footer }) => {
  if (!show) return null;

  return (
    <div className={styles.modalOverlay} onClick={onHide}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>{title}</h3>
          <button className={styles.modalClose} onClick={onHide}>
            ×
          </button>
        </div>
        <div className={styles.modalBody}>
          {children}
        </div>
        {footer && (
          <div className={styles.modalFooter}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal; 