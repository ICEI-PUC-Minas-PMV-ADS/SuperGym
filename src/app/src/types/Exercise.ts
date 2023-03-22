export interface Exercise {
  _id: string;
  name: string;
  description: string;
  series: number;
  waitTime: string;
  imagePath: string;
  instructions: string[];
  category: string;
}
