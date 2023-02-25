import React from "react";
import PageLayout from "../../layout/default-layout";
import Sidebar from "../../components/sidebar";
import DashboardCard from "../../components/Dashboard-card";
import dashboardData from "../Dashboard/Dashboard-data.js";
const Dashboard = () => {
  return (
    <PageLayout>
      <div className="container">
        <div className="d-flex justify-content-center">
        <input
          className="my-3 dashboard-input"
          type="text"
          placeholder="Search Newway"
        />
        </div>
      
        <div className="d-flex">
          <Sidebar />
        </div>
        <div className=" row">
          {dashboardData.map((data, id) => {
            return (
              <DashboardCard
                img={data.img}
                DashboardText={data.DashboardText}
                DashboardName={data.DashboardName}
                DashboardImage={data.DashboardImage}
              />
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
