import { Link } from "react-router-dom";
import { Trophy, Calendar, Star } from "lucide-react";

export default function Match() {
  const liveMatch = [
    {
      id: 1,
      equipe1: "Paris SG",
      equipe2: "Marseille",
      equipe1Score: 2,
      equipe2Score: 1,
      time: "72'",
      league: "Ligue 1"
    },
    {
      id: 2,
      equipe1: "Real Madrid",
      equipe2: "Barcelona",
      equipe1Score: 1,
      equipe2Score: 1,
      time: "55'",
      league: "La Liga"
    },
    {
      id: 3,
      equipe1: "Manchester Utd",
      equipe2: "Liverpool",
      equipe1Score: 0,
      equipe2Score: 2,
      time: "81'",
      league: "Premier League"
    }
  ];

  const prochainMatch = [
    {
      id: 4,
      equipe1: "Bayern Munich",
      equipe2: "Dortmund",
      date: "Demain",
      time: "20:45",
      league: "Bundesliga"
    },
    {
      id: 5,
      equipe1: "Inter Milan",
      equipe2: "AC Milan",
      date: "Dim 14 Avr",
      time: "20:45",
      league: "Serie A"
    }
  ];

  return (
    <div className=" min-h-screen text-white">
      <div className="container mx-auto px-2">
        <h1 className="text-3xl font-bold mb-8 border-b border-gray-700 pb-4">
          <span className="text-red-500">Match</span>es du jour
        </h1>

        <div className="mb-10">
          <div className="flex items-center mb-6">
            <div className="flex items-center bg-red-600 text-white px-4 py-2 rounded-md">
              <span className="animate-pulse mr-2">●</span>
              <h2 className="text-xl font-bold">EN DIRECT</h2>
            </div>
            <div className="ml-4 text-gray-400">Suivez l'action en temps réel</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveMatch.map(match => (
              <div
                key={match.id}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-103 transition-all duration-300 cursor-pointer border border-gray-700"
              >
                <div className="bg-gray-700 px-4 py-2 flex justify-between items-center">
                  <div className="flex items-center">
                    <Trophy size={16} className="text-yellow-500 mr-2" />
                    <span className="text-sm font-medium text-gray-300">{match.league}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-red-500 animate-pulse mr-1">●</span>
                    <span className="text-sm font-medium text-red-400">{match.time}</span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-center w-2/5">
                      <p className="text-lg font-bold mb-1 truncate">{match.equipe1}</p>
                      <span className="text-3xl font-bold text-white">{match.equipe1Score}</span>
                    </div>
                    <div className="text-center">
                      <span className="text-gray-400 font-medium">VS</span>
                    </div>
                    <div className="text-center w-2/5">
                      <p className="text-lg font-bold mb-1 truncate">{match.equipe2}</p>
                      <span className="text-3xl font-bold text-white">{match.equipe2Score}</span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Link to={'/login'} className="w-full text-center bg-red-600 hover:bg-red-700 text-white text-[11px] font-medium py-2 px-2 rounded-md transition-colors duration-300">
                      <button>
                        {match.equipe1}
                      </button>
                    </Link>
                    <Link to={'/login'} className="w-full text-center bg-red-600 hover:bg-red-700 text-white text-[11px] font-medium py-2 px-2 rounded-md transition-colors duration-300">
                      <button>
                        null
                      </button>
                    </Link>
                    <Link to={'/login'} className="w-full text-center bg-red-600 hover:bg-red-700 text-white text-[11px] font-medium py-2 px-2 rounded-md transition-colors duration-300">
                      <button>
                        {match.equipe2}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <div className="flex items-center mb-6">
            <div className="flex items-center">
              <Calendar size={18} className="mr-2" />
              <h2 className="text-xl font-bold">À VENIR</h2>
            </div>
            <div className="ml-4 text-gray-400">Préparez vos paris à l'avance</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prochainMatch.map(match => (
              <div
                key={match.id}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-103 transition-all duration-300 cursor-pointer border border-gray-700"
              >
                <div className="bg-gray-700 px-4 py-2 flex justify-between items-center">
                  <div className="flex items-center">
                    <Trophy size={16} className="text-yellow-500 mr-2" />
                    <span className="text-sm font-medium text-gray-300">{match.league}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-300">{match.date} · {match.time}</span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-center w-2/5">
                      <p className="text-lg font-bold mb-1 truncate">{match.equipe1}</p>
                    </div>
                    <div className="text-center">
                      <span className="text-gray-400 font-medium">VS</span>
                    </div>
                    <div className="text-center w-2/5">
                      <p className="text-lg font-bold mb-1 truncate">{match.equipe2}</p>
                    </div>
                  </div>

                  <Link to={'/login'}>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300">
                      Parier
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <section className="py-8">
          <div className="flex items-center mb-6">
            <div className="flex items-center">
              <Star size={18} className="mr-2 text-yellow-300" />
              <h2 className="text-xl font-bold">PROMOTIONS</h2>
            </div>
            <div className="ml-4 text-gray-400">Offres spéciales et bonus exclusifs</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-700 rounded-lg overflow-hidden shadow-lg">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">100% de bonus</h3>
                <p className="text-gray-200 mb-4">Sur votre premier dépôt jusqu'à 100€</p>
                <button className="bg-white text-blue-800 hover:bg-gray-100 font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                  En savoir plus
                </button>
              </div>
            </div>

            <div className="bg-blue-700 rounded-lg overflow-hidden shadow-lg">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Pari sans risque</h3>
                <p className="text-gray-200 mb-4">Récupérez votre mise si votre premier pari est perdant</p>
                <button className="bg-white text-blue-800 hover:bg-gray-100 font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                  En savoir plus
                </button>
              </div>
            </div>

            <div className="bg-blue-700 rounded-lg overflow-hidden shadow-lg">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Cotes boostées</h3>
                <p className="text-gray-200 mb-4">Tous les jours sur les matchs sélectionnés</p>
                <button className="bg-white text-indigo-800 hover:bg-gray-100 font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                  En savoir plus
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}