import { useEffect, useState } from "react";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";

export default function About() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const animationClass = isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10";

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow">
                {/* Hero section */}
                <div className="bg-primary text-white py-16 md:py-24">
                    <div className="container mx-auto px-6 text-center">
                        <h1 
                            className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 ${animationClass}`}
                        >
                            Fundación Secretos para Contar
                        </h1>
                        <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
                        <p 
                            className={`text-xl max-w-3xl mx-auto transition-all duration-700 delay-300 ${animationClass}`}
                        >
                            Somos una organización educativa colombiana dedicada a llevar conocimiento y fomentar la lectura 
                            en las comunidades rurales del país, democratizando el acceso al conocimiento.
                        </p>
                    </div>
                </div>

                {/* Mission and Vision section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div 
                                className={`transition-all duration-700 delay-500 ${animationClass}`}
                            >
                                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl font-bold mb-4 text-gray-900">Misión</h2>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Acercar el conocimiento y la lectura a las familias que habitan en zonas rurales de Colombia,
                                    a través de la edición, producción y entrega personal de libros y materiales pedagógicos 
                                    que responden a las necesidades específicas de estas poblaciones.
                                </p>
                            </div>

                            <div 
                                className={`transition-all duration-700 delay-700 ${animationClass}`}
                            >
                                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl font-bold mb-4 text-gray-900">¿Qué hacemos?</h2>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Creamos y distribuimos bibliotecas rurales con libros escritos en lenguaje accesible,
                                    desarrollamos materiales pedagógicos para educadores, y promovemos el diálogo
                                    y la construcción comunitaria a través de nuestras colecciones y actividades.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* History section with image */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <div className="mb-12 text-center">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Historia</h2>
                            <div className="w-24 h-1 bg-secondary mx-auto"></div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                            <div 
                                className={`md:w-1/2 transition-all duration-700 delay-900 ${animationClass}`}
                            >
                                <img 
                                    src="img/HistoriaSecretos.png" 
                                    alt="Historia de Secretos para Contar" 
                                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                                />
                            </div>
                            <div 
                                className={`md:w-1/2 transition-all duration-700 delay-1000 ${animationClass}`}
                            >
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Secretos Para Contar nació en el año 2004 con la publicación del primer libro y la entrega del mismo 
                                    a familias campesinas de las zonas rurales de Antioquia. Desde entonces, hemos llegado a miles de 
                                    hogares llevando educación, cultura y entretenimiento.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Nuestra biblioteca se divide en dos colecciones principales: la Colección Familiar, con libros
                                    de mayor tamaño para adultos, y la Colección La Vaca Colorada, con libros más pequeños 
                                    enfocados a niños y escuelas.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Hoy en día, Secretos Para Contar ha beneficiado a más de 500,000 personas en Colombia, 
                                    entregando más de un millón de libros y formando a miles de docentes en metodologías 
                                    educativas innovadoras.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Nuestras Colecciones section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="mb-12 text-center">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestras Colecciones</h2>
                            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
                            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                                Nuestros libros y materiales están diseñados para enriquecer y alegrar la vida de las familias del campo,
                                promoviendo el hábito de la lectura y el acceso al conocimiento.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className={`bg-white rounded-lg p-8 shadow-md transition-all duration-1000 hover:shadow-lg ${animationClass} delay-300`}>
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-900">Colección Familiar</h3>
                                <p className="text-gray-700">
                                    Compuesta por libros de mayor tamaño y número de páginas, abordando temas de particular
                                    interés para los adultos, como labores del campo, literatura, historia, geografía y
                                    diversas culturas.
                                </p>
                            </div>

                            <div className={`bg-white rounded-lg p-8 shadow-md transition-all duration-1000 hover:shadow-lg ${animationClass} delay-400`}>
                                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-900">Colección La Vaca Colorada</h3>
                                <p className="text-gray-700">
                                    Formada por libros de menor tamaño, está específicamente enfocada a los niños y a la escuela.
                                    Incluye títulos como "Todo lo contrario", "Cuentos para desenredar enredos" y "La finca viva".
                                </p>
                            </div>

                            <div className={`bg-white rounded-lg p-8 shadow-md transition-all duration-1000 hover:shadow-lg ${animationClass} delay-500`}>
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-900">Guías Pedagógicas</h3>
                                <p className="text-gray-700">
                                    Materiales didácticos diseñados para el trabajo en el aula que respetan la secuencia metodológica
                                    de las pedagogías activas, permitiendo trabajos grupales orientados por maestros con diferentes
                                    niveles de complejidad.
                                </p>
                            </div>

                            <div className={`bg-white rounded-lg p-8 shadow-md transition-all duration-1000 hover:shadow-lg ${animationClass} delay-600`}>
                                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-900">Valores y Ciencias</h3>
                                <p className="text-gray-700">
                                    Materiales pedagógicos específicos para las áreas de Educación Ética y en Valores Humanos,
                                    así como Ciencias Naturales y Educación Ambiental, que invitan al diálogo entre estudiantes,
                                    maestros y la comunidad.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact information */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <div className="mb-12 text-center">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Información de Contacto</h2>
                            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
                        </div>
                        
                        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className={`bg-white rounded-lg p-8 shadow-md transition-all ${animationClass} delay-700`}>
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-black">Email</h3>
                                        <a href="mailto:fundasecretos@une.net.co" className="text-primary hover:underline">fundasecretos@une.net.co</a>
                                    </div>
                                </div>
                                
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-black">Teléfono</h3>
                                        <p className="text-slate-700">57 (4) 3220690</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={`bg-white rounded-lg p-8 shadow-md transition-all ${animationClass} delay-800`}>
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-black">Ubicación</h3>
                                        <p className="text-slate-700">Medellín - Colombia</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-black">Sitio web</h3>
                                        <a href="https://www.secretosparacontar.org" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                                            www.secretosparacontar.org
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA section */}
                <section className="py-16 bg-primary text-white">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold mb-6">¿Quieres ser parte de nuestra misión?</h2>
                        <p className="text-xl mb-8 max-w-3xl mx-auto">
                            Únete a nosotros para llevar educación de calidad a más comunidades rurales de Colombia.
                            Tu apoyo puede transformar vidas a través de la lectura y el conocimiento.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a 
                                href="/donations" 
                                className="px-8 py-3 bg-secondary text-white rounded-md font-medium hover:bg-opacity-90 transition-all"
                            >
                                Apoya nuestros programas
                            </a>
                            <a 
                                href="mailto:fundasecretos@une.net.co" 
                                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-md font-medium hover:bg-white/10 transition-all"
                            >
                                Contáctanos
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}