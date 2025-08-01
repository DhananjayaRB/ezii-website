'use client';

import styles from './card.module.scss';
import Button from '../Button';

export default function Card({ 
  image, 
  title, 
  buttonText, 
  onClick, 
  href,
  imageAlt = '',
  className = ''
}) {
  const cardClasses = `${styles.card} ${className}`;
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={cardClasses} onClick={handleClick}>
      <div className={styles.imageContainer}>
        <img 
          src={image} 
          alt={imageAlt || title} 
          className={styles.image}
          loading="lazy"
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.buttonContainer}>
          <Button 
            variant="secondary" 
            href={href}
            onClick={onClick}
            className={styles.cardButton}
          >
            {buttonText} →
          </Button>
        </div>
      </div>
    </div>
  );
} 