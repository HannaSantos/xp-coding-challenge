import { useEffect, useState } from "react";
import { fetchChartData } from "@/src/services/chartService";
import { ChartData } from "@/src/types/Chart";

export function useChart() {
 
    const [data, setData] = useState<ChartData[]>([]);
    const [loading, setLoading] = useState(true);
    
        useEffect(() => {
            fetchChartData().then((res) => setData(res))
            .finally(() => setLoading(false));;
        }, []);

  return { data, loading };
}