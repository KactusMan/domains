/* eslint-disable jsx-a11y/anchor-is-valid */


// import { useState, useEffect } from 'react';
import { useState } from 'react';

import {Icon} from 'react-icons-kit'
import {menu} from 'react-icons-kit/feather/menu'
import {x} from 'react-icons-kit/feather/x'



export const Navbar = () => {


  


const [toggle, setToggle]=useState(false);

const handleToggle=()=>{
  setToggle(!toggle);
}


// const [theme, setTheme] = useState("light");
  
// useEffect(() => {
//   if (theme === 'dark') {
//   document.documentElement.classList.add("dark")
//    } else {
//     document.documentElement.classList.remove("dark")
//    }
// }, [theme])

// const handleThemeSwitch = (() => {
//   setTheme(theme === "dark" ? "light" : "dark");
// })






  return (
    <><div className="parent  md:w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[100%] text-center">

      {/* left div, div 1 of grid */}

      <div className="div1 sm:hidden  md:bottom-[50%]    lg:bottom-[37%] relative     2xl:bottom-[6%]">
        <hr className="hr-div-1 lg:w-[110%] lg:mb-[1em]  xl:w-[106%] xl:mb-[1.5em] 2xl:w-[100%] 2xl:mx-[2.2%] 2xl:mb-[1.5em]" />
        
        <a href="./assets/Turtle-Whitepaper.pdf" target="_blank" rel="noopener noreferrer">
        <span className=" manrope-light md:text-[10px]  md:p-4 lg:text-[12px] lg:-mx-[4%] xl:text-[20px] 2xl:text-[22px]   lg:p-8   xl:p-5 2xl:p-10 2xl:mx-[2%] relative  ">Whitepaper</span>
        </a>
        
        <a href="#roadmap">
          <span className=" manrope-light md:text-[10px]  md:p-4 lg:text-[12px] xl:text-[20px] 2xl:text-[22px]  lg:p-8  xl:p-5  2xl:p-10 2xl:mx-[2%] relative">Roadmap</span>
        </a>

        <a href="#faq">
          <span className=" manrope-light md:text-[10px]  md:p-4 lg:text-[12px] xl:text-[20px] 2xl:text-[22px] lg:p-8  xl:p-5  2xl:p-10 2xl:mx-[2%] relative">FAQ</span>
        </a>


        <a href="/mint">
          <span className=" manrope-light md:text-[10px]  md:p-4 lg:text-[12px] xl:text-[20px] 2xl:text-[22px] lg:p-8  xl:p-5  2xl:p-10 2xl:mx-[2%] relative">Team</span>
        </a>


      </div>


      <div className="logo-div bg-cover sm:w-[15%] sm:bg-cover sm:right-[3%] sm:bottom-[5%] sm:absolute  relative md:w-[100%] md:left-[10%] md:bottom-[100%] lg:w-[100%] lg:bottom-[80%] xl:w-[100%] xl:bottom-[44%] xl:left-[5%] lg:left-[15%]  2xl:w-[100%] 2x:w-[100%] 2xl:left-[20%] 2xl:bottom-[46%]">
      <img className="logo bg-cover" src="./assets/turtle-logo.svg" alt="turtles" />
    </div>

      {/* right div, div 2 of grid */}

      <div className="div2 md:bottom-[50%] sm:hidden    lg:bottom-[37%]  lg:mx-[-4.9%]  relative   ">
        <hr className="hr-div-2 lg:w-[86%] lg:mx-[5%] lg:mb-[1em] xl:w-[93%] xl:mt-[2%] 2xl:w-[100%]" />

        <a href="https://discord.gg/teachemturtles">
          <img className=" disc-img md:w-[6%] md:top-[10%] md:left-[70%]   lg:w-[5%]  lg:left-[70%] lg:top-[4%]    xl:w-[5.5%] xl:absolute xl:top-[28%] xl:left-[60%] 2xl:w-[5%] 2xl:absolute 2xl:left-[70%] 2xl:top-[15%]  relative" src="./assets/Discord-icon.svg" alt="discord" />
        </a>


        <a href="https://twitter.com/teachemturtles">
          <img className=" twitter-img md:w-[6%] md:left-[85%] md:-my-[2%] lg:w-[5%]  lg:left-[80%] lg:bottom-[12%]   xl:w-[5.5%] xl:absolute xl:top-[28%] xl:left-[70%] xl:bottom-[20%] 2xl:w-[5%] 2xl:absolute 2xl:top-[15.5%] 2xl:left-[80%]  relative" src="./assets/Twitter-icon.svg" alt="twitter" />
        </a>

        {/* <a href="https://opensea.io">
          <span className="os manrope-light md:text-[10px] md:p-4 md:left-[10%] md:top-[-17%]  xl:text-[15px]  xl:w-10  xl:p-8 lg:text-[12px] lg:mx-[9%] xl:mx-[7%] 2xl:mx-[14%]  lg:p-8 2xl:p-8 2xl:text-[22px] 2xl:mt-4 ">Opensea</span>
        </a>
        <span className="wallet manrope-light md:text-[10px] md:p-4 md:left-[10%] md:top-[-17%] xl:text-[15px]  xl:p-8 lg:text-[12px] lg:-mx-[14%] xl:mx-[-12%] 2xl:mx-[-14%] lg:p-8 2xl:p-8 2xl:text-[22px] ">Connect Wallet</span> */}

      </div>

      {/* mobile menu */}







    </div><nav className={toggle ? 'navbar expanded 2xl:hidden xl:hidden lg:hidden md:hidden sm:z-50' : 'navbar 2xl:hidden xl:hidden lg:hidden md:hidden sm:z-50'}>
        {/* <h2 className='logo'>NavBar</h2> */}
        <div className='toggle-icon' onClick={handleToggle}>
          {toggle ? <Icon icon={x} size={28} /> : <Icon icon={menu} size={28} />}
        </div>

        <div className= {toggle ? 'inner-div 2xl:hidden xl:hidden lg:hidden md:hidden' : '2xl:hidden xl:hidden lg:hidden md:hidden'}>
        <ul className='links batsand '>
          

        <a href="./assets/Turtle-Whitepaper.pdf" >
          <li>WHITEPAPER</li>
          </a>


          <a href="#roadmap" onClick={handleToggle}>
          <li>ROADMAP</li>
          </a>
          

          <a href="#poker" onClick={handleToggle}>
          <li>POKER</li>
          </a>
          <a href="#ecosystem" onClick={handleToggle}>
          <li>ECOSYSTEM</li>
          </a>
          <a href="#team" onClick={handleToggle}>
          <li>TEAM</li>
          </a>
          <a href="#faq" onClick={handleToggle}>
          <li>FAQ</li>
          </a>
        </ul>
        </div>
      </nav></>

    
  );
  }

