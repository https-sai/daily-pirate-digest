import { Character } from '@/types/character';

export const characters: Character[] = [
  {
    id: 'luffy',
    name: 'Monkey D. Luffy',
    nickname: 'Straw Hat Luffy',
    image: '/src/assets/luffy-character.jpg',
    crew: 'Straw Hat Pirates',
    role: 'Captain',
    devilFruit: 'Gomu Gomu no Mi (Hito Hito no Mi, Model: Nika)',
    bounty: '3,000,000,000 Berries',
    description: 'The rubber-bodied captain of the Straw Hat Pirates who dreams of becoming the Pirate King.',
    facts: [
      'His body is made of rubber after eating the Gomu Gomu no Mi',
      'Dreams of finding the legendary treasure One Piece',
      'Can stretch his body parts like rubber for combat',
      'Has conquered three of the Four Emperors territories',
      'His signature attack is the Gum-Gum Pistol',
      'Loves meat more than anything else (except adventure)',
      'Has the mysterious power of the Voice of All Things'
    ]
  },
  {
    id: 'zoro',
    name: 'Roronoa Zoro',
    nickname: 'Pirate Hunter Zoro',
    image: '/src/assets/zoro-character.jpg',
    crew: 'Straw Hat Pirates',
    role: 'Swordsman',
    bounty: '1,111,000,000 Berries',
    description: 'The three-sword wielding swordsman who aims to become the greatest swordsman in the world.',
    facts: [
      'Uses a unique Three Sword Style (Santoryu) fighting technique',
      'Was formerly a bounty hunter before joining Luffy',
      'Has an incredibly poor sense of direction',
      'Dreams of becoming the worlds greatest swordsman',
      'Wields three legendary swords: Wado Ichimonji, Sandai Kitetsu, and Enma',
      'Can cut through steel and even harder materials',
      'Has mastered advanced Armament and Conquerors Haki'
    ]
  },
  {
    id: 'nami',
    name: 'Nami',
    nickname: 'Cat Burglar Nami',
    image: '/src/assets/nami-character.jpg',
    crew: 'Straw Hat Pirates',
    role: 'Navigator',
    bounty: '366,000,000 Berries',
    description: 'The brilliant navigator who can predict weather patterns and draw incredibly accurate maps.',
    facts: [
      'Can sense weather changes and predict storms',
      'Creates incredibly detailed and accurate maps',
      'Wields the Clima-Tact weapon that controls weather',
      'Was forced to work for Arlong to save her village',
      'Dreams of drawing a map of the entire world',
      'Has an obsession with money and treasure',
      'Can navigate using the stars and ocean currents'
    ]
  }
];

export const getTodaysCharacter = (): Character => {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
  const characterIndex = dayOfYear % characters.length;
  return characters[characterIndex];
};