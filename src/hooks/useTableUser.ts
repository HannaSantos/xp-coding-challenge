import { useEffect, useState } from "react";
import { getEmployees } from "@/src/services/employeeService";
import { Employee } from "@/src/types/Employee";

export function useEmployees() {
  const [data, setData] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEmployees()
      .then((res) => setData(res))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}
