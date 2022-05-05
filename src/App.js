import { useState } from "react";
import "./App.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import ListOfAlerts from "./components/listOfAlerts/ListOfAlerts.jsx";
import DoughnutChart from "./components/doughnutChart/DoughnutChart.jsx";
import Sidebar from "./components/sidebar/Sidebar";

const firebaseConfig = {
  apiKey: "AIzaSyCCpILgEZuzRktzWkxtzi4XUFNo7xAlEWw",
  authDomain: "ukraineairalertsvisualization.firebaseapp.com",
  projectId: "ukraineairalertsvisualization",
  storageBucket: "ukraineairalertsvisualization.appspot.com",
  messagingSenderId: "99769260838",
  appId: "1:99769260838:web:0bf82b596b089b0bb5ffe7",
  measurementId: "G-8KVQQ1HD4J",
};

function App() {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  console.log(analytics);

  const [activeTab, setActiveTab] = useState(0);
  const [minimized, setMinimized] = useState(false);

  return (
      <div className="App">
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          minimized={minimized}
          setMinimized={setMinimized}
        />
        <div
          className={`main-container ${minimized ? "minimized-sidebar" : ""}`}
        >
          {(() => {
            switch (activeTab) {
              case 0:
                return <ListOfAlerts />;
              case 1:
                return <DoughnutChart />;
              default:
                return null;
            }
          })()}
        </div>
        <div className="footer">
          <span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/Artist149"
            >
              Разработчик
            </a>
          </span>
          <span>Последнее обновление данных: 13:13 04.05.2022</span>
        </div>
      </div>
  );
}

export default App;
