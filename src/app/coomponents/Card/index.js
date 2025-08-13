'use client';

import styles from './card.module.scss';
import Button from '../Button';
import Image from 'next/image';

export default function Card({
  image,
  title,
  buttonText,
  onClick,
  href,
  imageAlt = '',
  className = '',
  imageWidth = 400,
  imageHeight = 300
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
        <Image
          src={image}
          alt={imageAlt || title}
          width={imageWidth}
          height={imageHeight}
          className={styles.image}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
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