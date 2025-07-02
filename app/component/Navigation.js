'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <div className="container-fluid">
        <Link href="/" className={`navbar-brand ${styles.brand}`}>MyBrand</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                href="/"
                className={`nav-link ${pathname === '/' ? styles.active : styles.link}`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/about"
                className={`nav-link ${pathname === '/about' ? styles.active : styles.link}`}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/contact"
                className={`nav-link ${pathname === '/contact' ? styles.active : styles.link}`}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/service"
                className={`nav-link ${pathname === '/service' ? styles.active : styles.link}`}
              >
                Service
              </Link>
            </li>
          </ul>

          <form className={`d-flex ${styles.searchForm}`} role="search">
            <input
              className={`form-control me-2 ${styles.searchInput}`}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className={`btn ${styles.searchBtn}`} type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}
