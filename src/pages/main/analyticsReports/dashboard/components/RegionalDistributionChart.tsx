import { useEffect, useRef } from "react";
import * as echarts from "echarts";

const RegionalDistributionChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Initialize chart
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
          "Greater Accra",
          "Ashanti",
          "Western",
          "Eastern",
          "Central",
          "Northern",
        ],
        axisLabel: {
          rotate: 45,
          fontSize: 12,
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
          name: "Staff Distribution",
          type: "bar",
          data: [70, 60, 45, 40, 35, 30],
          itemStyle: {
            color: "#4CAF50", // Green color similar to your original
          },
          label: {
            show: true,
            position: "top",
            formatter: "{c}%",
          },
        },
      ],
      grid: {
        containLabel: true,
        left: "3%",
        right: "4%",
        bottom: "3%",
        top: "20%",
      },
    };

    // Set options
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
    <div>
      {" "}
      <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Regional Distribution</h3>
          <p className="text-sm text-gray-500">
            Staff distribution across regions
          </p>
        </div>
        <div ref={chartRef} style={{ width: "100%", height: "400px" }} />
      </div>
    </div>
  );
};

export default RegionalDistributionChart;
