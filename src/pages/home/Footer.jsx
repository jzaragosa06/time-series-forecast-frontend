const Footer = () => {
    return (
        <footer className="bg-white  py-6 mt-12">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 text-sm">
                <span className="text-gray-500">
                    © 2025 <span className="font-semibold text-blue-800">DataForesight</span>. All rights reserved.
                </span>
                <div className="flex space-x-6 mt-3 md:mt-0">
                    <a
                        href="https://github.com/jzaragosa06"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-400 hover:text-blue-800 transition-colors"
                    >
                        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="inline-block"><path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.932 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.119 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.015 2.902-.015 3.293 0 .322.218.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z" /></svg>
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;