import { useEffect, useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';

const Navbar = () => {
  /* Local State */
  const [isScrolled, setIsScrolled] = useState(false);

  /* Hooks */
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const location = useLocation();
  useMotionValueEvent(scrollY, 'change', () => updateNavbar());

  /* Functions */
  const updateNavbar = useCallback(() => {
    setIsScrolled(true);
    if (scrollY.get() > 150 || location.pathname !== '/') {
      controls.start({
        backgroundColor: '#ffffff',
        height: '70px',
        transition: { duration: 0.3 },
      });
    } else {
      setIsScrolled(false);
      controls.start({
        backgroundColor: 'transparent',
        height: '150px',
        width: '100%',
        transition: { duration: 0.3 },
      });
    }
  }, [controls, location.pathname, scrollY]);

  /* Effects */
  useEffect(() => {
    updateNavbar();
  }, [location.pathname, updateNavbar]);

  return (
    <motion.nav
      initial={{
        backgroundColor: 'transparent',
        height: '150px',
      }}
      animate={controls}
      style={{
        position: 'fixed',
        width: '100%',
        top: 0,
        left: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        padding: '0',
      }}
    >
      <div
        className='grid grid-cols-12 items-center w-full'
        style={{
          height: '100%',
          boxShadow: isScrolled ? '0 8px 16px rgba(0, 0, 0, 0.1)' : 'none',
        }}
      >
        <div className='col-span-4 flex justify-between items-center pl-16'>
          <Link
            className={isScrolled ? 'scrolled-nav-link' : 'nav-link'}
            to='/'
          >
            Home
          </Link>
          <Link
            className={isScrolled ? 'scrolled-nav-link' : 'nav-link'}
            to='/menu'
          >
            Menu
          </Link>
          <Link
            className={isScrolled ? 'scrolled-nav-link' : 'nav-link'}
            to='/rewards'
          >
            Rewards
          </Link>
        </div>
        <Link className='col-span-4 flex justify-center items-center' to='/'>
          {!isScrolled && (
            <img
              src='/logo.svg'
              alt='Logo'
              className='white-logo'
              style={{
                height: '150px',
                width: 'auto',
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%) scale(2.7)',
              }}
            />
          )}
        </Link>
        <div className='col-span-4 flex justify-between items-center pr-16'>
          <Link
            className='px-10 py-3 bg-yellow-600 hover:bg-yellow-800 text-white font-bold rounded-xl'
            to='/order'
          >
            Order Online
          </Link>
          <Link
            className={isScrolled ? 'scrolled-nav-link' : 'nav-link'}
            to='/about'
          >
            About
          </Link>
          <Link
            className={isScrolled ? 'scrolled-nav-link' : 'nav-link'}
            to='/contact'
          >
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
