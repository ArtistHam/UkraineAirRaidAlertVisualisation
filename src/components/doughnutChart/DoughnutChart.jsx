import React, { useState, useEffect } from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import Alerts from "../../data.json";

const DoughnutChart = () => {
  const [data, setData] = useState(null);
  const [chartData, setChartData] = useState(null);

  const [selectOne, setSelectOne] = useState("Харківська область");
  const [selectTwo, setSelectTwo] = useState("Львівська область");
  const [selectThree, setSelectThree] = useState("");

  useEffect(() => {
    const numberOfRaids = Alerts.map((raid) => {
      return { region: raid.region, numberOfRaids: raid.alerts.length };
    }).sort((a, b) => b.numberOfRaids - a.numberOfRaids);
    setData(numberOfRaids);
  }, []);

  useEffect(() => {
    let doughnutData = {
      labels: [],
      datasets: [
        {
          label: "lol",
          backgroundColor: [
            "rgb(0, 91, 187)",
            "rgb(255, 213, 0)",
            "rgb(204, 0, 0)",
          ],
          data: [],
        },
      ],
    };

    console.log(data);
    data?.forEach((item) => {
      if (
        item.region === selectOne ||
        item.region === selectTwo ||
        item.region === selectThree
      ) {
        doughnutData.labels.push(item.region);
        doughnutData.datasets[0].data.push(item.numberOfRaids);
      }
    });
    setChartData(doughnutData);
  }, [selectOne, selectTwo, selectThree, data]);

  const onSelectChange = (id) => (e) => {
    switch (id) {
      case 0:
        setSelectOne(e.target.value);
        break;
      case 1:
        setSelectTwo(e.target.value);
        break;
      case 2:
        setSelectThree(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="selects-wrapper">
        <select onChange={onSelectChange(0)} value={selectOne}>
          <option value="">Выберите регион</option>
          {data
            ? data.map((raid) => {
                if (raid.region !== selectTwo && raid.region !== selectThree) {
                  return (
                    <option key={raid.region} value={raid.region}>
                      {raid.region}
                    </option>
                  );
                }
                return null;
              })
            : "Loading..."}
        </select>

        <select onChange={onSelectChange(1)} value={selectTwo}>
          <option value="">Выберите регион</option>
          {data
            ? data.map((raid) => {
                if (raid.region !== selectOne && raid.region !== selectThree) {
                  return (
                    <option key={raid.region} value={raid.region}>
                      {raid.region}
                    </option>
                  );
                }
                return null;
              })
            : "Loading..."}
        </select>

        <select onChange={onSelectChange(2)} value={selectThree}>
          <option value="">Выберите регион</option>
          {data
            ? data.map((raid) => {
                if (raid.region !== selectOne && raid.region !== selectTwo) {
                  return (
                    <option key={raid.region} value={raid.region}>
                      {raid.region}
                    </option>
                  );
                }
                return null;
              })
            : "Loading..."}
        </select>
      </div>
      {chartData ? (
        <Doughnut
          data={chartData}
          options={{ plugins: { legend: { onClick: () => {} } } }}
        />
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default DoughnutChart;
