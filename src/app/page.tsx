'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import GameCard from '@/components/GameCard';
import { Game, GamesData } from '@/types/game';
import gamesData from '@/data/games.json';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const games = gamesData as GamesData;
  
  const filteredGames = useMemo(() => {
    const gamesList = Object.values(games);
    if (!searchTerm.trim()) {
      return gamesList;
    }
    
    return gamesList.filter((game: Game) =>
      game.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [games, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        
        {filteredGames.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">
              No games found matching "{searchTerm}"
            </div>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Clear search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6">
            {filteredGames.map((game: Game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}