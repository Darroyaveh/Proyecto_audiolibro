export default function Footer() {
    return (
        <footer className="bg-primary text-white py-8 px-6 md:px-12">
            <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
                {/* Logo/Image Section - Now on the left */}
                <div className="w-full md:w-2/5 flex justify-center md:justify-start">
                    <div className="logo-pulse">
                        <img
                            src="/img/logoSecretosBlanco.png"
                            alt="Tesla Logo"
                            className="w-32 h-auto object-contain"
                        />
                    </div>
                </div>
                {/* Links Section - Now on the right */}
                <div className="w-full md:w-3/5">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-6 md:justify-items-end">                              
                       <a href="/home" className="footer-link hover:text-secondary transition-all">Home</a>
                        <a href="/books" className="footer-link hover:text-secondary transition-all">Books</a>                      
                        <a href="/about" className="footer-link hover:text-secondary transition-all">About</a>
                    </div>
                    <div className="mt-8 text-sm text-gray-400 md:text-right">
                        <p>© {new Date().getFullYear()} Tesla Library. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}