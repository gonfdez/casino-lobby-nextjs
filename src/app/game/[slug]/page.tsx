import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import { GamesData } from '@/types/game';
import gamesData from '@/data/games.json';

interface GamePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params;
  const games = gamesData as GamesData;
  const game = games[slug];

  if (!game) {
    notFound();
  }

  const backgroundUrl = game.game_background.startsWith('//')
    ? `https:${game.game_background}`
    : game.game_background;

  const cleanContent = game.content
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .trim();

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 z-0">
        <Image
          src={backgroundUrl}
          alt={`${game.title} background`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 min-h-screen">
        <Header />

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/"
            className="inline-flex items-center text-white hover:text-gray-200 mb-6 transition-colors backdrop-blur-sm bg-black/20 px-3 py-2 rounded-lg"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to lobby
          </Link>

          <div className="text-center py-8 px-6 backdrop-blur-md bg-black/20 text-white rounded-lg mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">{game.title}</h1>
            <p className="text-lg opacity-90 drop-shadow-md">by {game.game_provider.name}</p>
          </div>

          <div className="bg-white/95 backdrop-blur-md rounded-lg shadow-xl overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-900">Description</h2>
                <p className="text-gray-700 leading-relaxed">
                  {cleanContent || 'No description available for this game.'}
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-900">Game Information</h2>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-gray-700">Provider:</span>
                    <Link
                      href={game.game_provider.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                    >
                      {game.game_provider.name}
                    </Link>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Devices:</span>
                    <span className="ml-2 text-gray-600 capitalize">
                      {game.device_type.join(', ')}
                    </span>
                  </div>
                  {game.game_width && game.game_height && (
                    <div>
                      <span className="font-medium text-gray-700">Resolution:</span>
                      <span className="ml-2 text-gray-600">
                        {game.game_width} x {game.game_height}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <Link
                href={game.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-lg transition-all duration-200 text-center shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Play Now
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const games = gamesData as GamesData;
  return Object.keys(games).map((slug) => ({
    slug,
  }));
}