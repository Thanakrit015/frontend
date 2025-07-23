// Navigation.js
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    if (window.innerWidth <= 992) {
      setIsSearchActive(false);
    }
  };

  const handleSearchToggle = () => {
    setIsSearchActive(!isSearchActive);
    if (!isSearchActive) {
      setTimeout(() => {
        document.getElementById('desktopSearchInput')?.focus();
      }, 0);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isSearchActive &&
        !event.target.closest(`.${styles.searchContainer}`) &&
        !event.target.closest(`.${styles.searchIconBtn}`)
      ) {
        setIsSearchActive(false);
      }
    };

    if (isSearchActive) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchActive]);


  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          <span className={styles.logo}>MyBrand</span>
        </Link>

        <button
          className={`${styles.menuToggle} ${isMenuOpen ? styles.active : ''}`}
          type="button"
          onClick={handleMenuToggle}
          aria-expanded={isMenuOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        <div className={`${styles.navbarLinks} ${isMenuOpen ? styles.active : ''}`} id="navbarLinks">
          <ul className={styles.navbarNav}>
            <li className={styles.navItem}>
              <Link
                href="/"
                className={`${styles.navLink} ${pathname === '/' ? styles.activeLink : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                href="/about"
                className={`${styles.navLink} ${pathname === '/about' ? styles.activeLink : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                href="/contact"
                className={`${styles.navLink} ${pathname === '/contact' ? styles.activeLink : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                href="/service"
                className={`${styles.navLink} ${pathname === '/service' ? styles.activeLink : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Service
              </Link>
            </li>
          </ul>

          {/* Mobile Search Form (visible only when menu is open on mobile) */}
          <div className={styles.searchFormMobile}>
            <input
              type="text"
              placeholder="Search..."
              className={styles.searchInputMobile}
            />
            <button className={styles.searchButtonMobile} type="submit">
              {/* เปลี่ยนจาก "🔍" เป็น Font Awesome icon */}
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>

        {/* Desktop Search and Toggler on right */}
        <div className={styles.navbarActions}>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search..."
              className={`${styles.searchInput} ${isSearchActive ? styles.active : ''}`}
              id="desktopSearchInput"
            />
            <button className={styles.searchIconBtn} onClick={handleSearchToggle}>
              {/* เปลี่ยนจาก "🔍" เป็น Font Awesome icon */}
              <i className="fas fa-search"></i>
            </button>
          </div>
          {/* 👇 เพิ่มปุ่ม Login ตรงนี้ */}
          <Link href="/login" className={styles.loginButton}>
            LOGIN
          </Link>
        </div>
      </div>
    </nav>
  );
}