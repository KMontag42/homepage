"use client";

import { useEffect, useState } from "react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { useMobile } from "@/hooks/use-mobile";

const generateInitialData = (points = 20) => {
  let value = 100;

  return Array.from({ length: points }, (_, time) => {
    value = Math.max(75, Math.min(125, value + Math.random() * 12 - 6));
    return {
      time,
      value,
    };
  });
};

export default function AnimatedStockBackground() {
  const [data, setData] = useState(generateInitialData());
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);
  const isMobile = useMobile();
  const dataPoints = isMobile ? 10 : 20;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    setData(generateInitialData(dataPoints));
  }, [dataPoints]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let timeout: ReturnType<typeof setTimeout>;

    const scheduleUpdate = () => {
      if (document.hidden) return;

      timeout = setTimeout(() => {
        setData((previousData) => {
          const lastPoint = previousData[previousData.length - 1];
          const value = Math.max(
            70,
            Math.min(130, lastPoint.value + Math.random() * 16 - 8),
          );

          return [
            ...previousData.slice(1),
            { time: lastPoint.time + 1, value },
          ];
        });
        scheduleUpdate();
      }, 2500 + Math.random() * 500);
    };

    const handleVisibilityChange = () => {
      clearTimeout(timeout);
      scheduleUpdate();
    };

    scheduleUpdate();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [prefersReducedMotion]);

  return (
    <div className="h-full w-full text-muted-foreground opacity-40">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
        >
          <defs>
            <linearGradient id="chart-atmosphere" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="currentColor" stopOpacity={0.22} />
              <stop offset="100%" stopColor="currentColor" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke="currentColor"
            strokeOpacity={0.45}
            strokeWidth={1.5}
            fill="url(#chart-atmosphere)"
            dot={false}
            activeDot={false}
            isAnimationActive={!prefersReducedMotion}
            animationDuration={1400}
            animationEasing="ease-in-out"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
