import { useEffect, useRef } from "react";
import * as echarts from "echarts";

const HiringTrendsChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Initialize chart
    const chart = echarts.init(chartRef.current);

    // Sample data - you can replace this with your actual data
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    const hiresData = months.map(() => Math.floor(Math.random() * 100) + 20);

    // Chart options
    const options = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: months,
        axisLabel: {
          color: "#6b7280", // gray-500
        },
        axisLine: {
          lineStyle: {
            color: "#e5e7eb", // gray-200
          },
        },
      },
      yAxis: {
        type: "value",
        axisLabel: {
          color: "#6b7280", // gray-500
        },
        splitLine: {
          lineStyle: {
            color: "#f3f4f6", // gray-100
          },
        },
      },
      series: [
        {
          name: "New Hires",
          type: "bar",
          data: hiresData,
          itemStyle: {
            color: "#8b5cf6", // purple-500
          },
          barWidth: "40%",
        },
      ],
    };

    chart.setOption(options);

    // Handle resize
    const handleResize = () => chart.resize();
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      chart.dispose();
    };
  }, []);

  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Hiring Trends</h3>
        <p className="text-sm text-gray-500">New hires by month</p>
      </div>
      <div ref={chartRef} className="h-[300px] w-full" />
    </div>
  );
};

export default HiringTrendsChart;
