import {FaLinkedin, FaGithub, FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="relative bg-[#505476] mt-2 mb-2 pt-4 rounded ">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-4/12 px-4">
                        <h4 className="text-3xl fonat-semibold text-white">Let's keep in touch!</h4>
                        <div className="mt-2 lg:mb-2 mb-6">
                            <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <a href="https://www.linkedin.com/in/elahe-eskandari/" rel="noreferrer" target="_blank">
                                    <FaLinkedin className="inline text-[#505476] size-6" />
                                </a>
                            </button>
                            <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <a href="mailto:elahe199108@gmail.com" rel="noreferrer" target="_blank">
                                    <MdEmail className="inline text-[#505476] size-6" />
                                </a>
                            </button>
                            <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <a href="https://github.com/elaheesk?tab=repositories" rel="noreferrer" target="_blank">
                                    <FaGithub className="inline text-[#505476] size-6" />
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-8/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-white text-sm font-semibold mb-2">Contact me</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="text-white font-semibold block pb-2 text-sm" rel="noreferrer" target="_blank" href="mailto:elahe199108@gmail.com">elahe199108@gmail.com</a>
                                    </li>
                                    <li>
                                        <p className="text-white font-semibold block pb-2 text-sm" rel="noreferrer">+46 738923888</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <span className="block uppercase text-white text-sm font-semibold mb-2">Useful links</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="text-white font-semibold block pb-2 text-sm hover:underline" href="https://github.com/elaheesk?tab=repositories" rel="noreferrer" target="_blank">Github</a>
                                    </li>
                                    <li>
                                        <a className="text-white font-semibold block pb-2 text-sm hover:underline" href="https://www.linkedin.com/in/elahe-eskandari/" rel="noreferrer" target="_blank">Linkedin</a>
                                    </li>
                                    <li>
                                        <Link className="text-white font-semibold block pb-2 text-sm hover:underline"
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