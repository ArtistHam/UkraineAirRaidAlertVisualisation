import React, { useState } from "react";

import ArrowRight from "../../assets/icons/angle-right.svg";
import './Sidebar.css';

const Sidebar = ({activeTab, setActiveTab, minimized, setMinimized}) => {


  const onSelectMenuItem = (id) => (e) => {
    setActiveTab(id);
  }

  const onMinimize = () => {
    setMinimized(!minimized);
  }

  return (
    <div className={`sidebar-container ${minimized ? "minimized-sidebar" : ""}`}>
      <h2 className="sidebar-header">#StopWarInUkraine</h2>
      <div className="sidebar-menu">
        <div className="sidebar-menu-item" onClick={onSelectMenuItem(0)}>
          <span>Количество тревог (список)</span>
          <div className={`indicator ${activeTab === 0 ? "active" : ""}`} />
        </div>

        <div className="sidebar-menu-item" onClick={onSelectMenuItem(1)}>
          <span>Количество тревог (круговая диаграмма)</span>
          <div className={`indicator ${activeTab === 1 ? "active" : ""}`} />
        </div>
      </div>
      <div class="minimize" onClick={onMinimize}>
        <img alt="arrow" src={ArrowRight} />
      </div>
    </div>
  );
};

export default Sidebar;
