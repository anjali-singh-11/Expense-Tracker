import React from "react";
import { ExpenseProvider } from "../context/ExpenseContext";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../components/Dashboard";

const index = () => {
  return (
    <ExpenseProvider>
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    </ExpenseProvider>
  );
};

export default index;
