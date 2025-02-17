import { Link } from "react-router-dom";
import { usefulLinks, socialLinks } from "../data/linksData";
import SocialButton from "../components/SocialButton"


const Footer = () => {
    return (
        <footer className="relative bg-[#505476] mt-2 mb-2 pt-4 rounded ">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-4/12 px-4">
                        <h4 className="text-3xl font-semibold text-white">Let's keep in touch!</h4>
                        <div className="mt-2 lg:mb-2 mb-6">
                            {socialLinks.map((link, index) => (
                                <SocialButton key={index} href={link.href} icon={link.icon} />
                            ))}
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
                                <span className="block uppercase text-white text-sm font-semibold mb-2">
                                    Useful links
                                </span>
                                <ul className="list-unstyled">
                                    {usefulLinks.map((link, index) => (
                                        <li key={index}>
                                            {link.isInternal ? (
                                                <Link className="text-white font-semibold block pb-2 text-sm hover:underline" to={link.to}>
                                                    {link.label}
                                                </Link>
                                            ) : (
                                                <a
                                                    className="text-white font-semibold block pb-2 text-sm hover:underline"
                                                    href={link.href}
                                                    rel="noreferrer"
                                                    target="_blank"
                                                >
                                                    {link.label}
                                                </a>
                                            )}
                                        </li>
                                    ))}
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