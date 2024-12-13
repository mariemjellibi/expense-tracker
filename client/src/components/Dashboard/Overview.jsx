
const Overview = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Financial Overview</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded shadow">
          <h3 className="font-semibold">Income</h3>
          <p className="text-xl font-bold text-blue-600">$4,500</p>
        </div>
        <div className="bg-red-100 p-4 rounded shadow">
          <h3 className="font-semibold">Expenses</h3>
          <p className="text-xl font-bold text-red-600">$3,200</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow">
          <h3 className="font-semibold">Savings</h3>
          <p className="text-xl font-bold text-green-600">$1,300</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
