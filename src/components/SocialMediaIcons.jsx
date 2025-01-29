const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com/in/shivansh-srivastava-/"
                target="_blank"
                rel="noreferrer"
            >
                <img src="../assets/linkedin.png" alt="linkedIn-link" />

            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://x.com/roskom_"
                target="_blank"
                rel="noreferrer"
            >
                <img src="../assets/x.png" alt="x-link" />

            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.facebook.com/profile.php?id=100076019318394"
                target="_blank"
                rel="noreferrer"
            >
                <img src="../assets/facebook.png" alt="facebook-link" />

            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.instagram.com/_roskom/"
                target="_blank"
                rel="noreferrer"
            >
                <img src="../assets/instagram.png" alt="instagram-link" />

            </a>

        </div>
    )
}

export default SocialMediaIcons;