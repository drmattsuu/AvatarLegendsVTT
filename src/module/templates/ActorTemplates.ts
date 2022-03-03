interface Base {
  name: string;
  description: string;
}

interface Stat {
  value: number;
  min: number;
  max: number;
}

interface Stats {
  creativity: Stat;
  focus: Stat;
  harmony: Stat;
  passion: Stat;
}

interface Resources {
  fatigue: object;
  conditions: Item[];
}

interface Principle {
  value: number;
  principle: string;
}

interface Principles {
  value: number;
  center: number;
  xPrinciple: string;
  yPrinciple: string;
}

interface Details {
  biography: string;
  demeanor: string;
  history: string;
  connections: string;
  notes: string;
}

interface Moves {
  moves: Item[];
}

interface Techniques {
  techniques: Item[];
}

export interface CampaignData extends Base {
  era: string;
  scope: string;
  focus: { groupFocus: string; detail: string };
  incitingIncident: {
    location: string;
    act1: {
      act: string;
      detail: string;
    };
    act2: {
      act: string;
      detail: string;
    };
    act3: {
      act: string;
      detail: string;
    };
  };
  npcs: string[];
}

export interface PlayerData extends Base, Stats, Resources, Principles, Details, Moves, Techniques {}

export interface NpcData extends Base, Resources, Principle, Details, Techniques {
  relationship: string;
}
