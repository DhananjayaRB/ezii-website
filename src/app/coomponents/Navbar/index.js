"use client";
import { useState, useEffect } from 'react';
import styles from './navbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
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
        {['Home', 'Features', 'Pricing', 'Resources', 'Partners', 'Contact'].map((item) => {
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

      <button className={styles.loginBtn}>
         Log In
      </button>
    </nav>
  );
}
