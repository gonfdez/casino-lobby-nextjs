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

  return (
    <Link href={`/game/${game.slug}`}>
      <div className="group cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative aspect-square">
          <Image
            src={thumbnailUrl}
            alt={game.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 truncate">{game.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{game.game_provider.name}</p>
        </div>
      </div>
    </Link>
  );
}