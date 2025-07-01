export enum Level {
  Beginner = 'အခြေခံ',
  Intermediate = 'အလယ်အလတ်',
  Advanced = 'အဆင့်မြင့်',
}

export enum CostModel {
  Free = 'အခမဲ့',
  Freemium = 'အခမဲ့နှင့် အခပေး',
  Paid = 'အခပေး',
  Mixed = 'ရောနှော',
}

export interface Resource {
  name: string;
  description: string;
  technologies: string[];
  level: Level;
  costModel: CostModel;
  url: string;
  logo: string;
}

export interface User {
  email: string;
}

export type Progress = {
  [resourceName: string]: number;
};

export enum SortOption {
  Default = 'မူလအစီအစဉ်',
  Alphabetical = 'အက္ခရာစဉ် (A-Z)',
  Progress = 'တိုးတက်မှု (အများဆုံး)',
}