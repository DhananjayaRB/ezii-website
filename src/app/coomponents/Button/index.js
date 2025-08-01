'use client';

import styles from './button.module.scss';
import Link from 'next/link';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  type = 'button',
  disabled = false,
  className = '',
  href,
  target,
  rel,
  fullWidth = false,
  loading = false,
  icon,
  iconPosition = 'left'
}) {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    loading && styles.loading,
    className
  ].filter(Boolean).join(' ');
  
  const buttonContent = (
    <>
      {loading && <span className={styles.spinner} />}
      {icon && iconPosition === 'left' && !loading && (
        <span className={styles.icon}>{icon}</span>
      )}
      <span className={styles.text}>{children}</span>
      {icon && iconPosition === 'right' && !loading && (
        <span className={styles.icon}>{icon}</span>
      )}
    </>
  );
  
  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href} target={target} rel={rel}>
        <button
          type={type}
          className={buttonClasses}
          onClick={onClick}
          disabled={disabled || loading}
        >
          {buttonContent}
        </button>
      </Link>
    );
  }
  
  // Otherwise render as regular button
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {buttonContent}
    </button>
  );
} 