// react intersection observer ==> this hook tell you when an element enters or leaves the viewport
import { useInView } from 'react-intersection-observer';
// react countup ==> React component wrapper around CountUp.js => to count number or numbers of array
import CountUp from 'react-countup'
// motion
import { motion } from 'framer-motion'
// variants for framer motion
import { fadeIn } from '../variants'

const About = () => {

  const { ref, inView } = useInView({
    threshold: 0.5
  })

  return <div className="section" id="about" ref={ref}>
    <div className="container">
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* img */}
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
        >
        </motion.div>
        {/* text */}
        <motion.div 
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1'
        >
          <h2 className='h2 text-accent'>About me.</h2>
          <h3 className='h3 mb-4'>
            I'm a Front-end Developer with over 2 years of experience
          </h3>
          <p className='mb-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sunt illo aperiam corporis dolore, quos a libero mollitia aliquid autem veniam, in quo soluta modi fugiat, cum blanditiis repellat expedita.
          </p>
          {/* stats */}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView && <CountUp start={0} end={2} duration={3} /> 
                }
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years of <br/>Experience
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView && <CountUp start={0} end={15} duration={3} /> 
                }
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Projects <br/>Completed
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView && <CountUp start={0} end={12} duration={3} /> 
                }
                
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Satisfied <br/>Clients
              </div>
            </div>
          </div>
          <div className='flex items-center gap-x-8'>
            <button className='btn btn-lg'>
              Contact me
            </button>
            <a href="#" className='text-gradient btn-link'>
              My Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
}

export default About;
