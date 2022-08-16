import React, { useState, useRef, useEffect } from 'react'
import './Navbar.css'

const ButtonHamburger = () => {
    const refHamburBtn = useRef()
    
    useEffect(()=>{
        window.addEventListener('mousedown', outsideHambur)
        return () => window.removeEventListener('mousedown', outsideHambur)
    })
    
    const outsideHambur = (e) => {
        const navMenu = document.getElementById('nav-menu')
        let menu = []
        navMenu.childNodes[0].childNodes.forEach((item) => menu.push(item.lastChild))
        if(!refHamburBtn.current.contains(e.target) && menu.indexOf(e.target) === -1){
            navMenu.classList.add('hidden')
        }
    }

    const toggleHamburger = () => {
        const hamburger = document.getElementById('hamburger')
        const navMenu = document.getElementById('nav-menu')
        hamburger.classList.toggle('hamburger-active')
        navMenu.classList.toggle('hidden')
    }

    return (
        <button id='hamburger' ref={refHamburBtn} className="w-[60px] h-[60px] rounded-full shadow-md transition-all transform linear duration-75 active:bg-gray-100 active:shadow active:scale-95 lg:hidden" onClick={toggleHamburger}>
            <div className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>
                <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300"></span>
                <span className="hamburger-line origin-bottom-left transition duration-300"></span>
            </div> 
        </button>
    )
}

const Navbar = () => {
    const [isWindowLarge, setIsWindowLarge] = useState(false)

    useEffect(() => {
        window.addEventListener("resize", windowHandler)
        return () => window.removeEventListener("resize", windowHandler)
    })

    const windowHandler = ()=>{
        if(window.matchMedia("(min-width: 1024px)").matches){
            setIsWindowLarge(true)
        }else{
            setIsWindowLarge(false)
        }
    }

    return (
        <header className="w-full fixed z-10">
            <div className="w-auto mt-4 mx-4 py-2 px-10 bg-white rounded-full flex justify-between items-center shadow-md shadow-slate-200 lg:mx-[100px] lg:mt-6 lg:px-14">
                <a href="#home" className="text-first text-lg font-bold py-1 px-5 md:text-[20px]">Universal <span className="block text-second -mt-2">Spices</span></a>

                {!isWindowLarge && <ButtonHamburger/>}

                <nav id='nav-menu' className="hidden absolute top-full w-full mt-2 right-14 max-w-[250px] rounded-lg py-2 text-black bg-white shadow-md shadow-gray-200 lg:block lg:static lg:bg-transparent lg:shadow-none lg:max-w-fit lg:mt-0">
                    <ul className='block lg:flex lg:justify-between'>
                        <li>
                            <a href="#about" className="bg-white hover:bg-red-100 py-3 px-5 flex">About</a>
                        </li>
                        <li>
                            <a href="#feature" className="bg-white hover:bg-red-100 py-3 px-5 flex">Feature</a>
                        </li>
                        <li>
                            <a href="#product" className='bg-white hover:bg-red-100 py-3 px-5 flex'>Product</a>
                        </li>
                        <li>
                            <a href="#team" className='bg-white hover:bg-red-100 py-3 px-5 flex'>Team</a>
                        </li>
                        <li>
                            <a href="#contact" className='bg-white hover:bg-red-100 py-3 px-5 flex'>Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar