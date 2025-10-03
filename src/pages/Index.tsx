import { Header } from '@/components/Header';
import { CharacterCard } from '@/components/CharacterCard';
import { getTodaysCharacter } from '@/data/characters';

const Index = () => {
  const todaysCharacter = getTodaysCharacter();

  return (
    <div className="min-h-screen wave-animation">
      {/* Header Section */}
      <Header />
      
      {/* Main Character Section */}
      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-400 mb-4">
              🌟 Today's Featured Pirate 🌟
            </h2>
            <p className="text-lg text-amber-200">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
          
          <CharacterCard character={todaysCharacter} />
        </div>
      </main>
      
      {/* Footer */}
      <footer className="py-8 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-amber-300/70 text-sm">
            ⚓ Set sail for adventure! Come back tomorrow for a new pirate to discover! ⚓
          </p>
          <p className="text-amber-400/50 text-xs mt-2">
            Based on the amazing world of One Piece by Eiichiro Oda
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
