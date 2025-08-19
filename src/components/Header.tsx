import { Button } from '@/components/ui/button';

export const Header = () => {
  return (
    <header className="relative py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-block mb-6">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent animate-pulse">
            ⚓ Daily Pirate Digest ⚓
          </h1>
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mt-4"></div>
        </div>
        
        <p className="text-xl md:text-2xl text-amber-200 mb-8 font-medium">
          Discover a new One Piece character every day and learn amazing facts about your favorite pirates!
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="treasure" size="lg" className="text-lg px-8">
            🏴‍☠️ Explore Characters
          </Button>
          <Button variant="adventure" size="lg" className="text-lg px-8">
            ⚔️ Random Pirate
          </Button>
          <Button variant="ocean" size="lg" className="text-lg px-8">
            🗺️ Crew Navigator
          </Button>
        </div>
      </div>
      
      {/* Floating treasure effect */}
      <div className="absolute top-20 left-10 text-amber-400 text-2xl animate-bounce">💰</div>
      <div className="absolute top-32 right-16 text-amber-400 text-3xl animate-pulse">⚓</div>
      <div className="absolute bottom-10 left-20 text-amber-400 text-2xl animate-bounce delay-1000">🏴‍☠️</div>
      <div className="absolute bottom-20 right-10 text-amber-400 text-3xl animate-pulse delay-500">⚔️</div>
    </header>
  );
};