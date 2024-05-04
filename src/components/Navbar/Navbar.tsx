import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full z-50'>
      <div className='bg-gray-800 text-white p-12' style={{ height: '150px' }}>
        <div className='container mx-auto'>
          {/* Navbar container */}
          <div
            className='grid grid-cols-12 items-center'
            style={{ height: '100%' }}
          >
            <div className='col-span-4 flex justify-center items-center space-x-6'>
              <Link className='px-6' to='/'>
                Home
              </Link>
              <Link className='px-6' to='/menu'>
                Menu
              </Link>
              <Link className='px-6' to='/rewards'>
                Rewards
              </Link>
            </div>
            <div className='col-span-4 flex justify-center items-center'>
              <img
                src='../../../public/logo.svg'
                alt='Logo'
                style={{
                  height: '150px', // Set the logo height to 300px
                  width: 'auto', // Maintain the aspect ratio of the logo
                  position: 'absolute', // Position absolutely to overlay it over the navbar without affecting the navbar's height
                  top: '50%', // Center vertically
                  transform: 'translateY(-50%) scale(2.5)',
                }}
              />
            </div>
            <div className='col-span-4 flex justify-center items-center space-x-6'>
              <Link className='px-6' to='/order'>
                Order Online
              </Link>
              <Link className='px-6' to='/about'>
                About
              </Link>
              <Link className='px-6' to='/contact'>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
