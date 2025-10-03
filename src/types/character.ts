export interface Character {
  id: string;
  name: string;
  nickname?: string;
  image: string;
  crew: string;
  role: string;
  devilFruit?: string;
  bounty?: string;
  facts: string[];
  description: string;
}