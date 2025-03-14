"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer";
import { ResponsiveContainer, ComposedChart, Bar, Line } from "recharts";
import { useMobile } from "@/hooks/use-mobile";
import { useCallback } from "react";

// Generate initial random data for bar and line chart
const generateInitialData = (points = 20) => {
  const baseValue = 1000;
  return Array.from({ length: points }, (_, i) => {
    const value1 = Math.random() * 300 + 100;
    const value2 = Math.random() * 200 + 50;
    const lineValue = baseValue + Math.random() * 400;

    return {
      time: i,
      value1,
      value2,
      total: value1 + value2,
      lineValue,
    };
  });
};

export default function AnimatedStockBackground() {
  const [data, setData] = useState(generateInitialData());
  const timeoutRef = useRef<NodeJS.Timeout>();
  const isMobile = useMobile();

  // Function to update data with new points
  const updateData = useCallback(() => {
    setData((prevData) => {
      const newData = [...prevData];
      // Remove first point
      newData.shift();

      // Get last data point for reference
      const lastPoint = newData[newData.length - 1];

      // Occasionally create dramatic spikes or dips (20% chance)
      const volatilityFactor = Math.random() > 0.8 ? 3 : 1;

      // Create new data point with much larger movements
      const value1 = Math.max(
        50,
        Math.min(
          800,
          lastPoint.value1 + (Math.random() * 200 - 100) * volatilityFactor,
        ),
      );
      const value2 = Math.max(
        30,
        Math.min(
          600,
          lastPoint.value2 + (Math.random() * 160 - 80) * volatilityFactor,
        ),
      );

      // Line value with more dramatic swings
      const lineValue = Math.max(
        600,
        Math.min(
          2000,
          lastPoint.lineValue + (Math.random() * 300 - 150) * volatilityFactor,
        ),
      );

      newData.push({
        time: lastPoint.time + 1,
        value1,
        value2,
        total: value1 + value2,
        lineValue,
      });

      return newData;
    });

    // Continue animation loop with a longer delay (3 seconds)
    timeoutRef.current = setTimeout(updateData, 1000);
  }, []);

  useEffect(() => {
    // Start animation loop with initial delay
    timeoutRef.current = setTimeout(updateData, 1000);

    // Clean up timeout on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [updateData]);

  // Determine number of data points based on screen size
  const dataPoints = isMobile ? 10 : 20;

  // Ensure we have the right number of data points
  useEffect(() => {
    setData(generateInitialData(dataPoints));
  }, [dataPoints]);

  return (
    <motion.div
      className="h-full w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ duration: 1 }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
        >
          {/* Stacked bar chart */}
          <Bar
            dataKey="value1"
            stackId="stack"
            fill="#3b82f6"
            opacity={0.8}
            isAnimationActive={false}
          />
          <Bar
            dataKey="value2"
            stackId="stack"
            fill="#06b6d4"
            opacity={0.8}
            isAnimationActive={false}
          />

          {/* Line chart overlay */}
          <Line
            type="monotone"
            dataKey="lineValue"
            stroke="#f97316"
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
