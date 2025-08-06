import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="w-10"></div>

          <Link href="/" className="flex items-center">
            <div className="text-center">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-yellow-400 rounded-sm mr-1 flex items-center justify-center">
                  <Image
                    src="/apple-touch-icon.png"
                    alt="Premier Gaming Crown"
                    width={25}
                    height={25}
                    className="object-contain"
                  />
                </div>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">Premier</span>
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 tracking-widest">GAMING</div>
            </div>
          </Link>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}