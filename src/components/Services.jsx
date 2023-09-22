// icon
import { BsArrowUpRight } from 'react-icons/bs'
// motion
import { motion } from 'framer-motion'
// variants for framer motion
import { fadeIn } from '../variants'

const services = [
  {
    id: 1,
    title: 'UI/UX Design',
    discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ante porta tristique cursus.',
    link: 'Learn more',
  },
  {
    id: 2,
    title: 'Development',
    discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ante porta tristique cursus.',
    link: 'Learn more',
  },
  {
    id: 3,
    title: 'Digital Marketing',
    discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ante porta tristique cursus.',
    link: 'Learn more',
  },
  {
    id: 4,
    title: 'Product Branding',
    discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ante porta tristique cursus.',
    link: 'Learn more',
  },
]

const Services = () => {
  return (
    <div className="section" id="services">
      <div className="container">
        <div className='flex flex-col lg:flex-row'>
          {/* text & image */}
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
          >
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>I'm a Front-end Developer with over 2 years of experience</h3>
            <button className='btn btn-sm'>See my work</button>
          </motion.div>
          {/* services */}
          <motion.div 
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            {/* services list */}
            <div>
              {
                services.map(service => {
                  // destructre service
                  const { title, discription, link } = service
                  return (
                    <div className='border-b border-white/20 h-[145px] mb-[38px] flex' key={service.id}>
                      <div className='max-w-[476px]'>
                        <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{title}</h4>
                        <p className='font-secondary leading-tight'>{discription}</p>
                      </div>
                      <div className='flex flex-col flex-1 items-end'>
                        <a className='btn w-9 h-9 mb-[42px] flex justify-center items-center' href="#">
                          <BsArrowUpRight />
                        </a>
                        <a className='text-gradient text-sm' href="#">
                          {link}
                        </a>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Services;
