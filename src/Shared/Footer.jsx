import Container from "./Container";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineEmail, MdAddIcCall } from "react-icons/md";
const Footer = () => {
    return (
        <div className="py-16 px-4 bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center md:text-left  ">
                    <div className="text-white px-2">
                        <h1 className="text-3xl font-bold ">RoutineMAKER</h1>
                        <p className="text-lg mt-6 ">© 2023 RoutineMAKER <br />
                            All Rights Reserved</p>
                    </div>

                    <div className="text-white px-2">
                        <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
                        <div className="flex items-center gap-3 text-2xl text-white">
                            <a href=""><FaWhatsapp></FaWhatsapp></a>
                            <a href=""><FaFacebook></FaFacebook></a>
                            <a href=""><FaInstagram ></FaInstagram></a>
                        </div>
                        <p className="ml-6 mt-3">Or</p>
                        <p className="text-lg mt-3 flex items-center gap-2"><MdOutlineEmail className="text-xl"></MdOutlineEmail> routinemaker@gmail.com</p>
                        <p className="text-lg flex items-center gap-2"><MdAddIcCall className="text-xl"></MdAddIcCall>+880 01788 000 000</p>
                    </div> 

                    <div className="text-white px-2 mt-4 lg:mt-0">
                        <h2 className="text-2xl font-semibold mb-3">Learn More</h2>

                        <li className="list-none"><a className="text-lg mt-3">FAQ</a></li>
                        <li className="list-none"><a className="text-lg mt-3">Mobile App</a></li>
                        <li className="list-none"><a className="text-lg mt-3">Package</a></li>
                        <li className="list-none"><a className="text-lg mt-3">Terms of Use</a></li>
                        <li className="list-none"><a className="text-lg mt-3">Privacy Policy</a></li>
                    </div>

                    <div className="text-white px-2 mt-4 lg:mt-0 mx-auto">
                        <h2 className="text-2xl font-semibold mb-3">Our Newsletter</h2>
                        <p className="text-lg text-justify max-w-[300px]">Subscribe to our newsletter to get our news & deals delivered to your inbox!</p>
                        <div className="flex justify-between items-center max-w-[300px] mt-4">
                            <input className="px-2 py-3 rounded-lg" placeholder="Email" type="email" name="" id="" />
                            <button className="btn btn-outline bg-violet-600 text-white">Join</button>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default Footer;