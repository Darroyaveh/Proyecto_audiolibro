import { useState } from "react";
import { Link } from "@remix-run/react";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";

export default function Donations() {
  const [donationAmount, setDonationAmount] = useState<number | "">("");
  const [donationType, setDonationType] = useState("monthly");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // You would normally process the donation here
    alert(`¡Gracias por tu donación de $${donationAmount}! Te enviaremos un correo con los detalles.`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero section */}
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tu donación transforma vidas
            </h1>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-xl max-w-3xl mx-auto">
              Ayúdanos a llevar libros, educación y esperanza a las comunidades rurales más apartadas de Colombia.
            </p>
          </div>
        </div>

        {/* Impact section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Tu aporte hace la diferencia</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-all">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Libros para todos</h3>
                <p className="text-gray-600">
                  Con $50.000 pesos, proporcionamos 3 libros a niños que nunca han tenido acceso a material de lectura.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-all">
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Bibliotecas rurales</h3>
                <p className="text-gray-600">
                  Con $200.000 pesos, ayudas a crear un rincón de lectura en una escuela rural para más de 30 estudiantes.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-all">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Talleres de lectura</h3>
                <p className="text-gray-600">
                  Con $150.000 pesos, financias un taller de lectura para familias que fortalece los vínculos a través de la literatura.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}