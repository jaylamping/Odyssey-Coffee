import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='grid grid-cols-12 bg-cover bg-center h-screen w-screen bg-no-repeat home-background serif'>
      <div className='col-start-2 col-span-6 flex items-center justify-center min-h-screen text-white pt-36'>
        <div>
          <h1 className='text-9xl'>Your Journey Starts Here.</h1>
          <div className='space-x-12 pt-14 pl-4'>
            <Link
              className='px-10 py-3 bg-yellow-600 hover:bg-yellow-800 text-white font-bold rounded-xl'
              to='/menu'
            >
              View Menu
            </Link>
            <Link
              className='px-10 py-3 bg-yellow-600 hover:bg-yellow-800 text-white font-bold rounded-xl'
              to='/order'
            >
              Order Ahead
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
