"use client";
import { useState, useEffect } from 'react';
import styles from './navbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = ['Home', 'Features', 'Pricing', 'Resources', 'Partners', 'Contact'];

  return (
    <>
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/assets/header_logo.webp"
            alt="EZII Logo"
            width={120}
            height={40}
            style={{ objectFit: 'contain' }}
          />
        </Link>

        <ul className={styles.navLinks}>
          {navItems.map((item) => {
            const href = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
            const isActive = pathname === href;

            return (
              <li key={item}>
                <Link href={href}>
                  <span className={isActive ? styles.active : ''}>{item}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className={styles.navActions}>
          <button
            className={styles.loginBtn}
            onClick={() => window.open('https://ezii.co.in/log-in/', '_blank')}
          >
            Log In
          </button>

          <button
            className={`${styles.mobileMenuToggle} ${isMobileMenuOpen ? styles.active : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Side Panel */}
      <div className={`${styles.mobileSidePanel} ${isMobileMenuOpen ? styles.open : ''}`}>
        <div className={styles.mobileSidePanelOverlay} onClick={toggleMobileMenu}></div>
        <div className={styles.mobileSidePanelContent}>
          <div className={styles.mobileSidePanelHeader}>
            <Link href="/" className={styles.mobileLogo} onClick={toggleMobileMenu}>
              <Image
                src="/assets/header_logo.webp"
                alt="EZII Logo"
                width={100}
                height={35}
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <button
              className={styles.mobileCloseBtn}
              onClick={toggleMobileMenu}
              aria-label="Close mobile menu"
            >
              <span></span>
              <span></span>
            </button>
          </div>

          <ul className={styles.mobileNavLinks}>
            {navItems.map((item) => {
              const href = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
              const isActive = pathname === href;

              return (
                <li key={item}>
                  <Link href={href} onClick={toggleMobileMenu}>
                    <span className={isActive ? styles.active : ''}>{item}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className={styles.mobileLoginContainer}>
            <button
              className={styles.mobileLoginBtn}
              onClick={() => {
                window.open('https://ezii.co.in/log-in/', '_blank');
                toggleMobileMenu();
              }}
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
