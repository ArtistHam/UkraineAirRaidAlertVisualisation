import React, { useState, useEffect } from "react";
import Alerts from "../../data.json";

const ListOfAlerts = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const numberOfRaids = Alerts.map((raid) => {
      return { region: raid.region, numberOfRaids: raid.alerts.length };
    }).sort((a, b) => b.numberOfRaids - a.numberOfRaids);
    setData(numberOfRaids);
  }, []);

  return data
    ? data.map((raid) => (
        <div className="raid-row" key={raid.region}>
          <span className="raid-cell">{raid.region}</span>
          <span className="raid-cell">{raid.numberOfRaids}</span>
        </div>
      ))
    : "Loading...";
};

export default ListOfAlerts;
