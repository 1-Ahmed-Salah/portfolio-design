// images
import Image from '../assets/avatar.png'
// icons
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa'
// type animation
import { TypeAnimation } from 'react-type-animation'
// motion
import { motion } from 'framer-motion'
//variants
import { fadeIn } from '../variants'

const Banner = () => {
  return (
    <section className=" min-h-[85vh] lg:min-h-[78vh] flex items-center" id='home'>
      <div className="container">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
              variants={fadeIn('up', 0.3)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}} 
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'
              >
                AHMED <span>SALAH</span>
              </motion.h1>
            <motion.div 
              variants={fadeIn('up', 0.3)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}} 
              className='mb-6 text-[36px] lg:text-[60px] font-semibold uppercase leading-[1]'
            >
              <span className='mr-6 text-white tracking-wide'>I am a</span>
              <TypeAnimation 
                sequence={[
                  'Front End',
                  2000,
                  'Developer',
                  2000
                ]}
                speed={40}
                repeat={Infinity}
                className='text-accent font-medium'
                wrapper='span'
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}} 
              className='mb-8 max-w-lg mx-auto lg:mx-0'
            >A Front-End Web Developer passionate about creating interactive applications and experiences on the web.</motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}} 
              className='flex items-center max-w-max gap-6 mx-auto lg:mx-0 mb-12'
            >
              <button className='btn btn-lg'>Contact Me</button>
              <a href="" className='text-gradient'>
                My Portfolio
              </a>
            </motion.div>

            {/* socials */}
            <motion.div
              variants={fadeIn('up', 0.7)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}} 
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
            >
              <a href="">
                <FaFacebook />
              </a>
              <a href="">
                <FaGithub />
              </a>
              <a href="">
                <FaLinkedin />
              </a>
            </motion.div>
          </div>

          {/* image */}
          <motion.div 
            variants={fadeIn('down', 0.5)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='hidden lg:flex lg:flex-1 max-w-[380px] lg:max-w-[482px] relative'
          >
            <img
              src={Image} 
              alt="" 
              
            />
            
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Banner;
