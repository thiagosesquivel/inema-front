import React from 'react';
import {Link, animateScroll as scroll} from 'react-scroll'

function Header({items}) {
  console.log(items)
  return(
    <>
      <header className="bg-blue w-full h-12 flex items-center justify-center lg:justify-start lg:pl-32">
          {items.map((item)=>
          <Link 
            className="uppercase cursor-pointer text-lightBlue text-sm hover:text-opacity-90 mr-6" 
            to={item.target}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >
              {item.title}
            </Link>)}
      </header>
    </>
  )
}

export default Header; 