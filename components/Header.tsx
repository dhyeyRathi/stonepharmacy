"use client"
import Logo from './Icons/Logo'
import Link from 'next/link'
import ArrowDown from './Icons/ArrowDown'
import SearchIcon from './Icons/Search'
import CartIcon from './Icons/Cart'
import UserCircleIcon from './Icons/UserCircle'
import Button from './Button'
import LocationIcon from './Icons/Location'
import { useState } from 'react'

const navItems = [
    {
        id: 1,
        label: "NHS Care & Support",
        href: "#",
        dropdown: true
    },
    {
        id: 2,
        label: "Lifestyle Treatments",
        href: "#",
        dropdown: true
    },
    {
        id: 3,
        label: "Everyday Ailments",
        href: "#",
        dropdown: true
    },
    {
        id: 4,
        label: "Shop",
        href: "#",
        dropdown: false
    }
]

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className='fixed z-[100] inset-x-0 top-3 sm:top-4 lg:top-[20px] px-3 sm:px-6 lg:px-[60px] pointer-events-none'>
            <div className=' max-w-[1440px] mx-auto pointer-events-auto'>
                <nav className='w-full stone-shadow bg-white
                    px-4 py-3 sm:px-6 sm:py-4 lg:px-24 lg:py-20
                    rounded-2xl lg:rounded-full
                    stone-stroke flex items-center justify-between relative'>

                    <div className='flex items-center gap-4 lg:gap-20 shrink-0'>
                        <Link href="/" className="flex items-center" aria-label="Stone Pharmacy Home">
                            <Logo className="w-[115px] sm:w-[135px] lg:w-[151px] h-auto" />
                        </Link>
                        <div className='hidden lg:flex gap-8 font-clash'>
                            {navItems.map((item) => (
                                <Link
                                    href={item.href}
                                    key={item.id}
                                    className='p-8 text-14 flex gap-8 items-center group cursor-pointer hover:text-primary transition-all duration-300'
                                >
                                    {item.label}
                                    {item.dropdown && (
                                        <ArrowDown className='group-hover:rotate-180 group-hover:fill-primary transition-all duration-200' />
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className='flex items-center gap-2.5 sm:gap-4 lg:gap-24 shrink-0'>
                        <button type="button" aria-label="Search" className="p-1 cursor-pointer hover:opacity-75 transition-opacity">
                            <SearchIcon className='cursor-pointer w-5 h-5 sm:w-6 sm:h-6' />
                        </button>
                        <button type="button" aria-label="Cart" className="p-1 cursor-pointer hover:opacity-75 transition-opacity">
                            <CartIcon className='cursor-pointer w-5 h-5 sm:w-6 sm:h-6' />
                        </button>
                        <button type="button" aria-label="Account" className="p-1 cursor-pointer hover:opacity-75 transition-opacity hidden sm:block">
                            <UserCircleIcon className='cursor-pointer w-5 h-5 sm:w-6 sm:h-6' />
                        </button>

                        <div className='hidden md:block'>
                            <Button><LocationIcon /> Pharmacy Finder</Button>
                        </div>

                        <button
                            type="button"
                            className='lg:hidden flex flex-col justify-center items-center w-9 h-9 rounded-lg border border-button-text/40 hover:bg-black/5 cursor-pointer p-1.5 transition-colors'
                            onClick={() => setMobileMenuOpen(prev => !prev)}
                            aria-expanded={mobileMenuOpen}
                            aria-label="Toggle navigation menu"
                        >
                            <span className={`block w-5 h-[2px] bg-dark-bg rounded-full transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
                            <span className={`block w-5 h-[2px] bg-dark-bg rounded-full my-[4px] transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                            <span className={`block w-5 h-[2px] bg-dark-bg rounded-full transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
                        </button>
                    </div>
                </nav>

                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-[380px] opacity-100 mt-2' : 'max-h-0 opacity-0 pointer-events-none'
                        }`}
                >
                    <div className='bg-white stone-shadow stone-stroke rounded-2xl p-4 flex flex-col gap-2 font-clash'>
                        {navItems.map((item) => (
                            <Link
                                href={item.href}
                                key={item.id}
                                onClick={() => setMobileMenuOpen(false)}
                                className='p-3 text-15 font-medium flex items-center justify-between rounded-xl hover:bg-primary/10 hover:text-primary transition-colors text-dark-bg'
                            >
                                <span>{item.label}</span>
                                {item.dropdown && <ArrowDown className='rotate-0' />}
                            </Link>
                        ))}
                        <div className='pt-2 border-t border-button-text/30 flex flex-col gap-2 md:hidden'>
                            <Button className='w-full justify-center'>
                                <LocationIcon /> Pharmacy Finder
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
