import Image from 'next/image';
import Link from 'next/link';
import { Game } from '@/types/game';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  const thumbnailUrl = game.game_thumbnail.startsWith('//')
    ? `https:${game.game_thumbnail}`
    : game.game_thumbnail;

  const isAnimatedGif = thumbnailUrl.toLowerCase().endsWith('.gif');

  return (
    <Link href={`/game/${game.slug}`}>
      <div className="group cursor-pointer bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg overflow-hidden hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
        <div className="relative aspect-square">
          <Image
            src={thumbnailUrl}
            alt={game.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            unoptimized={isAnimatedGif}
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 dark:text-white truncate">{game.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{game.game_provider.name}</p>
        </div>
      </div>
    </Link>
  );
}