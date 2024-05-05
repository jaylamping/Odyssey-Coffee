import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div
      className='w-full p-10 fixed top-0 left-0 z-50'
      style={{ height: '150px' }}
    >
      <div
        className='grid grid-cols-12 items-center'
        style={{ height: '100%' }}
      >
        <div className='col-span-4 flex justify-between items-center pl-16'>
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
        <Link className='col-span-4 flex justify-center items-center' to='/'>
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
        </Link>
        <div className='col-span-4 flex justify-between items-center pr-16'>
          <Link
            className='px-10 py-3 bg-yellow-600 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded-xl'
            to='/order'
          >
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
