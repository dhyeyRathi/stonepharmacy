import Logo from './Icons/Logo'
import Link from 'next/link'
import ArrowDown from './Icons/ArrowDown'
import SearchIcon from './Icons/Search'
import CartIcon from './Icons/Cart'
import UserCircleIcon from './Icons/UserCircle'
import Button from './Button'
import LocationIcon from './Icons/Location'

const navItems = [
    {
        id: 1,
        label: "NHS Care & Support",
        href: "",
        dropdown: true
    },
    {
        id: 2,
        label: "Lifestyle Treatments",
        href: "",
        dropdown: true
    },
    {
        id: 3,
        label: "Everyday Ailments",
        href: "",
        dropdown: true
    },
    {
        id: 4,
        label: "Shop",
        href: "",
        dropdown: false
    }
]

const Header = () => {
    return (
        <nav className=' fixed z-[100] flex stone-shadow bg-white inset-x-0 top-[20px] left-[60px] right-[60px] px-24 py-20 rounded-full 
        stone-stroke items-center justify-between'>
            <div className='flex items-center gap-20'>
                <Logo />
                <div className='flex gap-8 font-clash'>
                    {navItems.map((item) => (
                        <Link href={item.href} key={item.id} className='p-8 text-14 flex gap-8 items-center group
                        cursor-pointer
                        hover:text-primary transition-all duration-300'>
                            {item.label}
                            {item.dropdown && <ArrowDown className='group-hover:rotate-180 group-hover:fill-primary transition-all duration-200' />}
                        </Link>
                    ))}
                </div>

            </div>
            <div className='flex items-center gap-24'>
                <SearchIcon className='cursor-pointer' />
                <CartIcon className='cursor-pointer' />
                <UserCircleIcon className='cursor-pointer' />
                <Button><LocationIcon /> Pharmacy Finder</Button>
            </div>

        </nav>
    )
}

export default Header
