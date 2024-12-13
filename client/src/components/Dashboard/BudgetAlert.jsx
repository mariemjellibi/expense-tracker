
const BudgetAlerts = () => {
  const alerts = [
    { message: 'You exceeded your food budget!', type: 'warning' },
    { message: 'Transport spending is close to the limit.', type: 'info' },
  ];

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Budget Alerts</h2>
      {alerts.map((alert, index) => (
        <div
          key={index}
          className={`p-4 mb-4 rounded ${
            alert.type === 'warning'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-blue-100 text-blue-800'
          }`}
        >
          {alert.message}
        </div>
      ))}
    </div>
  );
};

export default BudgetAlerts;
