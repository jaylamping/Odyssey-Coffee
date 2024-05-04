import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='fixed-navbar flex justify-between sm:px-8 px-4 py-6 z-10 w-full'>
      <Link to='/menu'>Menu</Link>
      <Link to='/order'>Order Ahead</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
    </nav>
  );
};

export default Navbar;
