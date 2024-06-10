import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// interface ParallaxSectionProps {
//   children: ReactNode;
//   offset?: number;
// }

// const ParallaxSection: React.FC<ParallaxSectionProps> = ({
//   children,
//   offset = 0,
// }) => {
//   const { scrollY } = useScroll();
//   const y = useTransform(scrollY, [0, 1000], [0, offset * 50]);

//   return <motion.div style={{ y }}>{children}</motion.div>;
// };

const Home: React.FC = () => {
  return (
    <div className=''>
      <section className='grid grid-cols-12 h-screen w-screen serif home-background bg-fixed bg-cover bg-center'>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className='col-start-2 col-span-6 flex items-center justify-center min-h-screen text-white pt-36'
        >
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
        </motion.div>
      </section>
      <section className='h-screen bg-white flex justify-center items-center'>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <h1 className='text-5xl'>Section 2</h1>
        </motion.div>
      </section>
      <section className='h-screen flex justify-center items-center home-background bg-fixed bg-cover bg-center'>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <h1 className='text-5xl'>Section 3</h1>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
