import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full z-50'>
      <div className='p-12' style={{ height: '150px' }}>
        <div className='container mx-auto'>
          <div
            className='grid grid-cols-12 items-center'
            style={{ height: '100%' }}
          >
            <div className='col-span-1'></div>
            <div className='col-span-3 flex justify-between items-center'>
              <Link to='/'>Home</Link>
              <Link to='/menu'>Menu</Link>
              <Link to='/rewards'>Rewards</Link>
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
            <div className='col-span-3 flex justify-between items-center'>
              <Link to='/order'>Order Online</Link>
              <Link to='/about'>About</Link>
              <Link to='/contact'>Contact Us</Link>
            </div>
            <div className='col-span-1'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
