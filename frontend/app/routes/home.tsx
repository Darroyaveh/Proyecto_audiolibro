import Navbar from "../components/navbar";
import Footer from "../components/footer";
import BookSlider from "../components/BookSlider";

export default function Home() {


  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main>
        <section className="relative h-screen flex items-center justify-center bg-[#698cb1] bg-blend-multiply">
          <div className="absolute inset-0 bg-[#1d4371] opacity-60"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="title-font text-5xl md:text-6xl font-bold text-white mb-6">
              Libros mágicos para mentes curiosas
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Ayudamos a niños a descubrir el amor por la lectura.
            </p>
            <button
              type="button"
              className="bg-[#e7552f] hover:bg-[#f06a48] text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 inline-block"
              onClick={() =>
                alert("¡Gracias por tu interés en donar un libro!")
              }
            >
              ¡Donar un libro!
            </button>
          </div>
        </section>
        <section className="py-20 px-4 bg-[#ffffff]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="title-font text-4xl font-bold text-[#1d4371] mb-6">
              Nuestra Misión
            </h2>
            <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
              Promovemos el acceso a la lectura infantil en comunidades
              vulnerables, porque cada niño merece soñar a través de los libros.
            </p>
            <div className="flex flex-wrap justify-center gap-12">
              <div className="flex flex-col items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png"
                  alt="Libro"
                  className="w-20 h-20 mb-4"
                />
                <span className="text-[#1d4371] font-semibold">
                  +5,000 libros donados
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1029/1029177.png"
                  alt="Corazón"
                  className="w-20 h-20 mb-4"
                />
                <span className="text-[#1d4371] font-semibold">
                  100% sin fines de lucro
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 px-4 bg-[#698cb1]">
          <div className="max-w-6xl mx-auto">
            <h2 className="title-font text-4xl font-bold text-[#1d4371] mb-12 text-center">
              Libros Destacados
            </h2>
            <BookSlider />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
