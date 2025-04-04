import { useState, useEffect } from "react";
import { Link, useNavigate } from "@remix-run/react";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing again
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = "El nombre es requerido";
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = "El apellido es requerido";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es requerido";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Formato de correo electrónico inválido";
    }
    
    if (!formData.password) {
      newErrors.password = "La contraseña es requerida";
    } else if (formData.password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    }
    
    if (!agreedToTerms) {
      newErrors.terms = "Debes aceptar los términos y condiciones";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes we'll just log the data
      console.log("Registration data:", formData);
      
      // Redirect to login page on success
      navigate("/login");
    } catch (err) {
      setErrors({
        ...errors,
        form: "Error al crear la cuenta. Por favor, inténtalo nuevamente."
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow flex items-center justify-center bg-gray-50 px-4 py-12">
        <div 
          className={`max-w-lg w-full bg-white rounded-lg shadow-lg transition-all duration-700 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="p-6 sm:p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Crear cuenta</h1>
              <p className="text-gray-600">Completa los campos para registrarte</p>
            </div>

            {errors.form && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 animate-fadeIn">
                <p>{errors.form}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    className={`w-full py-3 px-4 border ${
                      errors.firstName ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-primary"
                    } rounded-md focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600 animate-fadeIn">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Apellido
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    className={`w-full py-3 px-4 border ${
                      errors.lastName ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-primary"
                    } rounded-md focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600 animate-fadeIn">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo electrónico
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className={`pl-10 w-full py-3 px-4 border ${
                      errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-primary"
                    } rounded-md focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
                    placeholder="ejemplo@mail.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 animate-fadeIn">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Contraseña
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    className={`pl-10 w-full py-3 px-4 border ${
                      errors.password ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-primary"
                    } rounded-md focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600 animate-fadeIn">{errors.password}</p>
                )}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirmar contraseña
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    className={`pl-10 w-full py-3 px-4 border ${
                      errors.confirmPassword ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-primary"
                    } rounded-md focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-600 animate-fadeIn">{errors.confirmPassword}</p>
                )}
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className={`h-4 w-4 ${
                      errors.terms ? "border-red-500 text-red-600" : "border-gray-300 text-primary"
                    } focus:ring-primary rounded transition-all`}
                    checked={agreedToTerms}
                    onChange={() => setAgreedToTerms(!agreedToTerms)}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-medium text-gray-700">
                    Acepto los{" "}
                    <a href="#" className="text-secondary hover:underline">
                      términos y condiciones
                    </a>{" "}
                    y la{" "}
                    <a href="#" className="text-secondary hover:underline">
                      política de privacidad
                    </a>
                  </label>
                  {errors.terms && (
                    <p className="mt-1 text-sm text-red-600 animate-fadeIn">{errors.terms}</p>
                  )}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all ${
                    isLoading ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creando cuenta...
                    </span>
                  ) : (
                    "Crear cuenta"
                  )}
                </button>
              </div>
            </form>

            <p className="mt-8 text-center text-sm text-gray-600">
              ¿Ya tienes una cuenta?{" "}
              <Link
                to="/login"
                className="font-medium text-secondary hover:text-secondary/80 transition-all"
              >
                Inicia sesión
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}