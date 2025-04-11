import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, ArrowLeft, Lock, Mail } from 'lucide-react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto max-w-md">
        <div className="flex items-center mb-8">
          <Link to="/" className="text-gray-300 hover:text-white mr-4">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-3xl font-bold text-center flex-1">
            <span className='text-red-500'>P</span>ARI <span className='text-red-500'>M</span>ATCH
          </h1>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Connexion</h2>
          <p className="text-gray-400 mt-2">Accédez à votre compte</p>
        </div>

        <form className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail size={18} className="text-gray-500" />
              </div>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-700 text-white pl-10 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="votre@email.com"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
              Mot de passe
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock size={18} className="text-gray-500" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full bg-gray-700 text-white pl-10 px-3 py-2 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Votre mot de passe"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
              />
              <span className="text-sm text-gray-300">Se souvenir de moi</span>
            </label>
            <Link to="/reset-password" className="text-sm text-blue-400 hover:text-blue-300">
              Mot de passe oublié?
            </Link>
          </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300"
            >
              SE CONNECTER
            </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-400">
            Vous n'avez pas de compte?{' '}
            <Link to="/register" className="text-blue-400 hover:text-blue-300 font-medium">
              Inscrivez-vous
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}