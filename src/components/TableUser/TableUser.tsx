"use client";

import { Table, TableHead, TableRow, TableCell, TableBody, Typography, CircularProgress, } from "@mui/material";
import styles from "./TableUser.module.css";
import { formatDate } from "@/src/utils/formatDate";
import { useEmployees } from "@/src/hooks/useTableUser";

export default function TableUser() {

  const { data, loading } = useEmployees();

  if (loading) return <CircularProgress />;

  return (
    <div className={styles.box}>
      <span>Employess</span>
      <div className={styles.table}>
        <Table>
        <TableHead>
          <TableRow>
            <TableCell>Employee</TableCell>
            <TableCell> </TableCell>
            <TableCell>Last Login</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((emp) => {
            const { full, relative } = formatDate(emp.lastLogin);

            return (
              <TableRow key={emp.department} >

                <TableCell>
                  <img src={emp.avatar} alt="User Avatar" />
                </TableCell>

                <TableCell className={styles.info}>
                  <strong>{emp.employee}</strong>
                  <div style={{ color: "#999", fontSize: "0.8rem" }}>
                    {emp.mail}
                  </div>
                </TableCell>


                <TableCell>
                  <div>
                    <strong>{full}</strong>
                    <div style={{ color: "#999", fontSize: "0.8rem" }}>{relative}</div>
                  </div>
                </TableCell>

                <TableCell>{emp.department}</TableCell>

                <TableCell>
                  <Typography
                    sx={{
                      color: emp.isActive ? "green" : "red",
                      fontWeight: 600,
                    }}
                  >
                    {emp.isActive ? "Active" : "Inactive"}
                  </Typography>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>

      </Table>
      </div>
    </div>

  );

}
