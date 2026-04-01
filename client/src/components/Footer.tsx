

const Footer = () => {
    return (
        <div className=' bg-[#101727] text-white'>
            <div className=' lg:w-[80%] mx-auto'>
                <footer className="footer sm:footer-horizontal  text-white  p-10 bg-[#101727]'">
                    <aside>
                        <p>DigiTools</p>
                        <p>
                            Premium digital tools for creators,<br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.
                        </p>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Product</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Resources</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Social Links</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
                <hr className=' h-1 bg-gray-400 border-none' />
                <div className=' p-10 flex justify-between items-center'>
                    <p>© 2026 Digitools. All rights reserved.</p>
                    <ul className=' flex justify-center items-center gap-10'>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Cookies</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;