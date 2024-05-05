import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div
      className='container mx-auto p-12 fixed top-0 left-0 z-50'
      style={{ height: '150px' }}
    >
      <div
        className='grid grid-cols-12 items-center'
        style={{ height: '100%' }}
      >
        <div className='col-span-4 flex justify-between items-center'>
          <Link className='nav-link' to='/'>
            Home
          </Link>
          <Link className='nav-link' to='/menu'>
            Menu
          </Link>
          <Link className='nav-link' to='/rewards'>
            Rewards
          </Link>
        </div>
        <div className='col-span-4 flex justify-center items-center'>
          <img
            src='/logo.svg'
            alt='Logo'
            style={{
              height: '150px',
              width: 'auto',
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%) scale(2.5)',
            }}
          />
        </div>
        <div className='col-span-4 flex justify-between items-center'>
          <Link className='nav-link' to='/order'>
            Order Online
          </Link>
          <Link className='nav-link' to='/about'>
            About
          </Link>
          <Link className='nav-link' to='/contact'>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
