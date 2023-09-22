// icons
import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Nav = () => {

  return (
    <div 
      className='fixed bottom-4 w-full overflow-hidden z-50 lg:w-auto lg:top-[50%] lg:translate-y-[-50%] lg:left-4 lg:bottom-auto duration-300'
    >
      
        <div className='w-full p-3 bg-black/20 max-w-[320px] mx-auto flex justify-between backdrop-blur-2xl rounded-full text-xl text-white/40 lg:flex-col lg:w-auto '>
          <Link 
            to='home' 
            activeClass='active'
            smooth={true} 
            delay={500}
            spy={true}
            offset={-200}
            className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center hover:bg-pink-700 rounded-full duration-500'>
            <BiHomeAlt />
          </Link>
          <Link 
            to='about' 
            activeClass='active'
            smooth={true} 
            delay={500}  
            spy={true}
            className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center hover:bg-pink-700 rounded-full duration-500'>
            <BiUser />
          </Link>
          <Link 
            to='services' 
            activeClass='active'
            smooth={true} 
            delay={500} 
            spy={true}
            className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center hover:bg-pink-700 rounded-full duration-500'>
            <BsClipboardData />
          </Link>
          <Link 
            to='work' 
            activeClass='active'
            smooth={true} 
            delay={500} 
            spy={true}
            className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center hover:bg-pink-700 rounded-full duration-500'>
            <BsBriefcase />
          </Link>
          <Link 
            to='contact' 
            activeClass='active'
            smooth={true} 
            delay={500}
            spy={true}
            className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center hover:bg-pink-700 rounded-full duration-500'>
            <BsChatSquare />
          </Link>
        </div>
      
    </div>
  )
}

export default Nav;
