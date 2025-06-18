// app/components/navigation.js
'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [activeItem, setActiveItem] = useState('');

  const navItems = [
    { href: '/', label: 'หน้าแรก', icon: '🏠' },
    { href: '/about', label: 'เกี่ยวกับ', icon: '👥' },
    { href: '/service', label: 'บริการของเรา', icon: '⚙️' },
    { href: '/contact', label: 'ติดต่อ', icon: '📞' }
  ];

  return (
    <nav style={{
      background: 'linear-gradient(135deg, #ffeef8 0%, #f8d7da 50%, #e6b3ba 100%)',
      padding: '1rem 2rem',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backdropFilter: 'blur(10px)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Logo */}
        <div style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#8b5a6b',
          textShadow: '2px 2px 4px rgba(139,90,107,0.3)'
        }}>
          ⚽ Thanakrit 015
        </div>

        {/* Navigation Links */}
        <ul style={{ 
          display: 'flex', 
          gap: '0.5rem', 
          listStyle: 'none',
          margin: 0,
          padding: 0
        }}>
          {navItems.map((item, index) => (
            <li key={item.href}>
              <Link 
                href={item.href}
                onMouseEnter={() => setActiveItem(item.href)}
                onMouseLeave={() => setActiveItem('')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  color: '#8b5a6b',
                  textDecoration: 'none',
                  borderRadius: '50px',
                  background: activeItem === item.href 
                    ? 'rgba(199, 125, 148, 0.3)' 
                    : 'rgba(139, 90, 107, 0.1)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: activeItem === item.href ? 'translateY(-2px)' : 'translateY(0)',
                  boxShadow: activeItem === item.href 
                    ? '0 8px 25px rgba(0,0,0,0.15)' 
                    : '0 2px 10px rgba(0,0,0,0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(199, 125, 148, 0.2)',
                  fontWeight: '500',
                  fontSize: '0.95rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Hover effect background */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(45deg, rgba(199, 125, 148, 0.15), rgba(139, 90, 107, 0.08))',
                  opacity: activeItem === item.href ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                  zIndex: -1
                }} />
                
                {/* Icon with animation */}
                <span style={{
                  fontSize: '1.1rem',
                  transform: activeItem === item.href ? 'scale(1.2) rotate(10deg)' : 'scale(1)',
                  transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'inline-block'
                }}>
                  {item.icon}
                </span>
                
                {/* Text */}
                <span style={{
                  position: 'relative',
                  zIndex: 1
                }}>
                  {item.label}
                </span>

                {/* Ripple effect */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '0',
                  height: '0',
                  borderRadius: '50%',
                  background: 'rgba(199, 125, 148, 0.4)',
                  transform: 'translate(-50%, -50%)',
                  transition: 'width 0.6s, height 0.6s',
                  ...(activeItem === item.href && {
                    width: '300px',
                    height: '300px'
                  })
                }} />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button (optional) */}
        <div style={{
          display: 'none',
          '@media (max-width: 768px)': {
            display: 'block'
          }
        }}>
          <button style={{
            background: 'rgba(199, 125, 148, 0.3)',
            border: 'none',
            color: '#8b5a6b',
            padding: '0.5rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1.2rem'
          }}>
            ☰
          </button>
        </div>
      </div>

      {/* Animated underline */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: '3px',
        background: 'linear-gradient(90deg, #ffb3d1, #ffc0cb, #f8bbd9, #e6b3c7)',
        backgroundSize: '300% 100%',
        animation: 'gradient 3s ease infinite',
        width: '100%'
      }} />

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @media (max-width: 768px) {
          nav ul {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}