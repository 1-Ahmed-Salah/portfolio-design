// motion
import { motion } from 'framer-motion'
// variants for framer motion
import { fadeIn } from '../variants'

const Contact = () => {
  return (
    <div className="py-16 lg:section" id="contact">
      <div className="container">
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 '
          >
            <h4 className='text-xl uppercase text-accent tracking-wide font-semibold mb-2'>Get in touch</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's Work <br />together!</h2>
          </motion.div>
          {/* form */}
          <motion.form 
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.3 }}
            action="" 
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-20 p-9 items-start'
          >
            <input  
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent duration-300'
              type="text" 
              placeholder='Your name'
            />

            <input  
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent duration-300'
              type="text" 
              placeholder='Your email'
            />

            <textarea 
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent duration-300 resize-none'
              name="" 
              id=""
              placeholder='Your message'
            >
            </textarea>
            <button className='btn btn-lg'>Send message</button>
          </motion.form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
