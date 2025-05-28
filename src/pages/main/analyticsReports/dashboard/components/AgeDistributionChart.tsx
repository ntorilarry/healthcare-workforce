import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const AgeDistributionChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Initialize the chart
    const chart = echarts.init(chartRef.current);

    // Chart options
    const options = {
  
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      xAxis: {
        type: "category",
        data: [
          "20-25",
          "26-30",
          "31-35",
          "36-40",
          "41-45",
          "46-50",
          "51-55",
          "56-60",
          "60+",
        ],
        axisLabel: {
          rotate: 45,
        },
      },
      yAxis: {
        type: "value",
        name: "Percentage",
        max: 100,
        axisLabel: {
          formatter: "{value}%",
        },
      },
      series: [
        {
          name: "Age Distribution",
          type: "bar",
          data: [15, 25, 35, 45, 55, 40, 30, 20, 10],
          itemStyle: {
            color: "#3b82f6", // blue-500
          },
          label: {
            show: true,
            position: "top",
            formatter: "{c}%",
          },
        },
      ],
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
    };

    // Set the options
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
    <div className="rounded-lg border border-neutral-200 bg-white p-4">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Age Distribution</h3>
        <p className="text-sm text-gray-500">Workforce age demographics</p>
      </div>
     
      <div ref={chartRef} style={{ width: "100%", height: "400px" }} />
    
    </div>
  );
};

export default AgeDistributionChart;
