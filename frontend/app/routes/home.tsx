import { useEffect, useState } from "react";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Image Section - Full width but limited height */}
                <div
                    className="relative w-full h-[50vh] md:h-[60vh]"
                    style={{
                        backgroundImage: "url('/img/FamiliaBg.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "end bottom"
                    }}
                >
                    {/* Subtle blur and overlay for image */}
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
                </div>

                {/* Content Section Below Image */}
                <div className="bg-white py-4">
                    <div className="container mx-auto px-6">
                        <div 
                            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                        >
                            <h1 className="mb-8 text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                                Lectura y educación para el campo
                            </h1>

                            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>

                            <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed mb-10">
                                Llegamos hasta los pliegues más apartados de las montañas y los
                                recodos escondidos de los ríos, para compartir sonrisas, alegrías y
                                nuevas experiencias con las familias del campo.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 mt-10">
                                <a 
                                    href="/books" 
                                    className="px-8 py-3 bg-secondary text-white rounded-md font-medium hover:bg-opacity-90 transition-all animate-pulse-slow"
                                >
                                    Explora libros
                                </a>
                                <a 
                                    href="/about" 
                                    className="px-8 py-3 bg-white border-2 border-primary text-primary rounded-md font-medium hover:bg-primary hover:text-white transition-all"
                                >
                                    Conócenos
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* You could add additional content sections here */}
            </main>

            <Footer />
        </div>
    );
}