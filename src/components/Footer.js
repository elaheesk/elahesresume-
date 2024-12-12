import { FaPhoneAlt, FaLinkedin, FaGithub, FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer class="relative bg-[#e9e9e9] mt-2 mb-2 pt-4 rounded ">
            <div class="container mx-auto px-4">
                <div class="flex flex-wrap text-left lg:text-left">
                    <div class="w-full lg:w-4/12 px-4">
                        <h4 class="text-3xl fonat-semibold text-[#505476]">Let's keep in touch!</h4>
                        <div class="mt-2 lg:mb-2 mb-6">
                            <button class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <a href="https://www.linkedin.com/in/elahe-eskandari/" rel="noreferrer" target="_blank">
                                    <FaLinkedin className="inline text-[#505476] size-6" />
                                </a>
                            </button>
                            <button class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <a href="mailto:elahe199108@gmail.com" rel="noreferrer" target="_blank">
                                    <MdEmail className="inline text-[#505476] size-6" />
                                </a>
                            </button>
                            <button class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <a href="https://github.com/elaheesk?tab=repositories" rel="noreferrer" target="_blank">
                                    <FaGithub className="inline text-[#505476] size-6" />
                                </a>
                            </button>
                        </div>
                    </div>
                    <div class="w-full lg:w-8/12 px-4">
                        <div class="flex flex-wrap items-top mb-6">
                            <div class="w-full lg:w-4/12 px-4 ml-auto">
                                <span class="block uppercase text-[#505476] text-sm font-semibold mb-2">Contact me</span>
                                <ul class="list-unstyled">
                                    <li>
                                        <a className="text-[#505476] font-semibold block pb-2 text-sm" rel="noreferrer" target="_blank" href="mailto:elahe199108@gmail.com">elahe199108@gmail.com</a>
                                    </li>
                                    <li>
                                        <p className="text-[#505476] font-semibold block pb-2 text-sm" rel="noreferrer">+46 738923888</p>
                                    </li>
                                </ul>
                            </div>
                            <div class="w-full lg:w-4/12 px-4">
                                <span class="block uppercase text-[#505476] text-sm font-semibold mb-2">Useful links</span>
                                <ul class="list-unstyled">
                                    <li>
                                        <a className="text-[#505476] font-semibold block pb-2 text-sm hover:underline" href="https://github.com/elaheesk?tab=repositories" rel="noreferrer" target="_blank">Github</a>
                                    </li>
                                    <li>
                                        <a className="text-[#505476] font-semibold block pb-2 text-sm hover:underline" href="https://www.linkedin.com/in/elahe-eskandari/" rel="noreferrer" target="_blank">Linkedin</a>
                                    </li>
                                    <li>
                                        <Link className="text-[#505476] font-semibold block pb-2 text-sm hover:underline"
                                            to="/details">About me</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </footer>
    )
}
export default Footer;