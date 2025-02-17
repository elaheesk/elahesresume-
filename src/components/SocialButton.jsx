const SocialButton = ({ href, icon }) => (
    <button
        className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button"
    >
        <a href={href} rel="noreferrer" target="_blank">
            {icon}
        </a>
    </button>
);
export default SocialButton;