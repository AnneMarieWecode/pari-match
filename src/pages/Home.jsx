import React from "react";
import Match from "../component/Match";
import Navbar from "../component/Navbar";
import Filter from "../component/Filter";

export default function Home() {

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <section className="relative h-96">
        <img
          src="https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          className="w-full h-full object-cover"
          alt="Stadium"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
          <div className="container mx-auto">
            <div className="max-w-2xl">
              <h2 className="text-white text-4xl font-bold mb-2 leading-tight">WALES AND THE WORLD CUP</h2>
              <p className="text-gray-200 text-lg mb-4">Ben Woodburn mène l'équipe vers la victoire</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                Parier maintenant
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4 w-full overflow-y-scroll ">
              <div>
                <Filter />
              </div>
            </div>

            <div className="md:w-3/4 w-full">
              <div>
                <Match />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 py-8 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400 text-sm">© 2025 ParisSports. Tous droits réservés.</p>
            <p className="text-gray-500 text-xs mt-2">Jouer comporte des risques. Jouez responsable. 18+ uniquement.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}