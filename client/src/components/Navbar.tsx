import React from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <div className='sticky top-0 z-10 bg-gray-200  backdrop-blur-sm bg-opacity-30 '>
            <div className='md:w-[80%] mx-auto py-4  px-4 relative'>
                <div className="flex justify-between items-center">
                    <div className="">
                        {/* <img src={assets.DigiTools} alt="" /> */}
                        <h1>DigiTools</h1>
                    </div>

                    <div className=' hidden md:flex' >
                        <ul className=' flex gap-4'>
                            <li className=' cursor-pointer'><a >Products</a></li>
                            <li className=' cursor-pointer'><a >Features</a></li>
                            <li className=' cursor-pointer'><a >Pricing</a></li>
                            <li className=' cursor-pointer'><a >Testimonials</a></li>
                            <li className=' cursor-pointer'><a >FAQ</a></li>
                        </ul>
                    </div>

                    <div className="
                 flex justify-center items-center gap-4  ">
                        <div className='flex relative cursor-pointer '>
                            <ShoppingCart />
                            <div className=' absolute -right-2 -top-2.5 text-white w-4 h-4 rounded-full flex justify-center items-center bg-red-500'>{0}</div>
                        </div>
                        <div className=' hidden lg:flex'>
                            <button className='hidde  btn btn-ghost'>loging</button>
                            <button className="btn  w-auto rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
                                Get Started
                            </button>
                        </div>

                    </div>
                    {
                        open ? <X className=' md:hidden sm:flex cursor-pointer' onClick={() => setOpen(!open)} /> : <Menu className=' md:hidden sm:flex cursor-pointer' onClick={() => setOpen(!open)} />
                    }
                    {/* mobile menu */}
                    <ul className={`flex flex-col fixed top-16  items-center w-1/2 h-screen ${open ? "right-0" : '-right-164'}  bg-linear-to-r from-[#632EE3] to-[#9F62F2] gap-4 py-4 md:hidden transition-all duration-300 text-white`}>
                        <li className=' cursor-pointer'><a >Products</a></li>
                        <li className=' cursor-pointer'><a >Features</a></li>
                        <li className=' cursor-pointer'><a >Pricing</a></li>
                        <li className=' cursor-pointer'><a >Testimonials</a></li>
                        <li className=' cursor-pointer'><a >FAQ</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;