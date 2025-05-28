import { useRef, useEffect } from "react";
import * as echarts from "echarts";

const WorkforceGrowthChart = () => {
  const chartRef = useRef(null);
  const growthData = [
    { month: "Jan", count: 2850 },
    { month: "Feb", count: 2900 },
    { month: "Mar", count: 2950 },
    { month: "Apr", count: 3020 },
    { month: "May", count: 3100 },
    { month: "Jun", count: 3150 },
    { month: "Jul", count: 3200 },
    { month: "Aug", count: 3250 },
    { month: "Sep", count: 3300 },
    { month: "Oct", count: 3350 },
    { month: "Nov", count: 3400 },
    { month: "Dec", count: 3450 },
  ];

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);

      const option = {
        tooltip: {
          trigger: "axis",
          formatter: "{b}: {c} employees",
        },
        grid: {
          left: "10%",
          right: "5%",
          bottom: "15%",
          top: "25%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: growthData.map((item) => item.month),
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
          min: Math.min(...growthData.map((item) => item.count)) - 200,
          axisLine: {
            show: true,
            lineStyle: {
              color: "#e5e7eb",
            },
          },
          axisLabel: {
            color: "#6b7280",
            formatter: "{value}",
          },
          splitLine: {
            lineStyle: {
              color: "#f3f4f6",
            },
          },
        },
        series: [
          {
            name: "Workforce Growth",
            type: "line",
            data: growthData.map((item) => item.count),
            symbol: "circle",
            symbolSize: 6,
            itemStyle: {
              color: "#3B82F6",
            },
            lineStyle: {
              color: "#3B82F6",
              width: 3,
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(59, 130, 246, 0.2)",
                },
                {
                  offset: 1,
                  color: "rgba(59, 130, 246, 0.01)",
                },
              ]),
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
        <div className="">
          <h3 className="text-lg font-semibold">Workforce Growth Trend</h3>
          <p className="text-sm text-gray-500">
            Staff count over the last 12 months
          </p>
        </div>
        <div ref={chartRef} style={{ width: "100%", height: "400px" }} />
      </div>
    </div>
  );
};

export default WorkforceGrowthChart;
