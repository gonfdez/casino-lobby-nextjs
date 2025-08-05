import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          <Link href="/" className="flex items-center">
            <div className="text-center">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-yellow-400 rounded-sm mr-1 flex items-center justify-center">
                  <span className="text-xs text-gray-900">👑</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">Premier</span>
              </div>
              <div className="text-xs text-gray-600 tracking-widest">GAMING</div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}