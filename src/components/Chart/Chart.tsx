"use client";

import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import { useChart } from "@/src/hooks/useChart";
import { Typography, CircularProgress } from "@mui/material";
import styles from "./Chart.module.css";


const COLORS = ["#c7b6f3", "#7d5df6", "#1f1f1f", "#e0e0e0"];

export default function StartupChart() {

    const { data, loading } = useChart();

    if (loading) return <CircularProgress />;

    return (
        <div className={styles.box}>
            <span >
                Why do you create a startup?
            </span>
            <Typography color="text.secondary" mb={2}>
                Trends
            </Typography>
            <div className={styles.chart}>
                <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={3}
                            dataKey="value"
                            nameKey="name"
                        >
                            {data.map((_, index) => (
                                <Cell key={index} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend
                            verticalAlign="bottom"
                            align="center"
                            iconType="circle"
                            formatter={(value) => (
                                <span style={{ fontSize: "14px", color: "#555" }}>{value}</span>
                            )}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>

    );
}
