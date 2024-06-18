export default interface ICwiczenie {
  id: number;
  category: "chest" | "tricep" | "bicep" | "legs" | "back" | "shoulders";
  name: string;
  difficulty: string;
  instruction: string;
}
