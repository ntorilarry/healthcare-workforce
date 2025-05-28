import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const RetentionRateChart = () => {
  const chartRef = useRef(null);
  const retentionData = [
    { month: "Jan", rate: 92 },
    { month: "Feb", rate: 91 },
    { month: "Mar", rate: 90 },
    { month: "Apr", rate: 89 },
    { month: "May", rate: 88 },
    { month: "Jun", rate: 87 },
    { month: "Jul", rate: 86 },
    { month: "Aug", rate: 87 },
    { month: "Sep", rate: 88 },
    { month: "Oct", rate: 89 },
    { month: "Nov", rate: 90 },
    { month: "Dec", rate: 91 },
  ];

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);

      const option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          formatter: "{b}<br/>Retention: {c}%",
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: "25%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: retentionData.map((item) => item.month),
          axisLine: {
            lineStyle: {
              color: "#e5e7eb",
            },
          },
          axisLabel: {
            color: "#6b7280",
          },
        },
        yAxis: {
          type: "value",
          min: 80,
          max: 100,
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              color: "#f3f4f6",
              type: "dashed",
            },
          },
          axisLabel: {
            formatter: "{value}%",
            color: "#6b7280",
          },
        },
        series: [
          {
            name: "Retention Rate",
            type: "bar",
            data: retentionData.map((item) => item.rate),
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#3b82f6" }, // blue-500
                { offset: 1, color: "#60a5fa" }, // blue-400
              ]),
              borderRadius: [4, 4, 0, 0],
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#2563eb" }, // blue-600
                  { offset: 1, color: "#3b82f6" }, // blue-500
                ]),
              },
            },
            label: {
              show: true,
              position: "top",
              formatter: "{c}%",
              color: "#3b82f6",
              fontWeight: "bold",
            },
          },
        ],
      };

      chart.setOption(option);

      // Handle window resize
      const handleResize = () => chart.resize();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        chart.dispose();
      };
    }
  }, []);
  return (
    <div>
      {" "}
      <div className="rounded-lg border border-neutral-200 bg-white p-6">
        <div>
          <h3 className="text-lg font-semibold">Retention Rate</h3>
          <p className="text-sm text-gray-500">Staff retention over time</p>
        </div>
        <div ref={chartRef} style={{ width: "100%", height: "300px" }} />
      </div>
    </div>
  );
};

export default RetentionRateChart;
