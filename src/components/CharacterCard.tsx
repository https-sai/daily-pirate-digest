import { Character } from '@/types/character';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <Card className="treasure-glow border-2 border-amber-400/30 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm overflow-hidden">
      <CardHeader className="text-center pb-4">
        <div className="relative mx-auto w-48 h-48 mb-6">
          <img 
            src={character.image}
            alt={character.name}
            className="w-full h-full object-cover rounded-full border-4 border-amber-400 shadow-xl"
          />
          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
            Today's Pirate!
          </div>
        </div>
        <CardTitle className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
          {character.name}
        </CardTitle>
        {character.nickname && (
          <p className="text-amber-300 text-lg italic">"{character.nickname}"</p>
        )}
      </CardHeader>
      
      <CardContent className="space-y-6">
        <p className="text-gray-300 text-lg leading-relaxed text-center">
          {character.description}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-amber-400 font-semibold">Crew:</span>
              <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-400/30">
                {character.crew}
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-amber-400 font-semibold">Role:</span>
              <Badge variant="secondary" className="bg-green-600/20 text-green-300 border-green-400/30">
                {character.role}
              </Badge>
            </div>
            {character.bounty && (
              <div className="flex items-center justify-between">
                <span className="text-amber-400 font-semibold">Bounty:</span>
                <Badge variant="secondary" className="bg-red-600/20 text-red-300 border-red-400/30">
                  {character.bounty}
                </Badge>
              </div>
            )}
            {character.devilFruit && (
              <div className="flex items-center justify-between">
                <span className="text-amber-400 font-semibold">Devil Fruit:</span>
                <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-400/30">
                  {character.devilFruit}
                </Badge>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
            ⚔️ Fun Facts & Abilities
          </h3>
          <ul className="space-y-3">
            {character.facts.map((fact, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-amber-400 font-bold text-lg">•</span>
                <span className="text-gray-300 leading-relaxed">{fact}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};