import {ChartData} from "@/src/types/Chart";

const mockChartData: ChartData[] = [
  { name: "DUNNO", value: 4 },
  { name: "I ’m Boring", value: 45 },
  { name: "Money", value: 8 },
  { name: "Fun", value: 13 },
];

export function fetchChartData(): Promise<ChartData[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockChartData);
    }, 1000); 
  });
}