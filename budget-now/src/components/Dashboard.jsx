import React from 'react';
import ExpenseSummary from './ExpenseSummary';
import ExpenseChart from './ExpenseChart';

const Dashboard = () => {
  return (
    <div>
      {/* exapense summary */}
      <ExpenseSummary />

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        <div>
          <ExpenseChart />
        </div>
        <div>{/* expense form */}</div>
      </div>
      {/* exapense summary */}
    </div>
  );
};

export default Dashboard;