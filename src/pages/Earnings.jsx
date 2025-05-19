import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import {
  FaMoneyBillWave,
  FaDownload,
  FaWallet,
  FaCreditCard,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Earnings() {
  const [timeRange, setTimeRange] = useState("month");
  const [isLoading, setIsLoading] = useState(true);

  // Sample data - In a real app, this would come from an API
  const earningsData = useMemo(
    () => ({
      totalEarned: 12500,
      pendingBalance: 2500,
      availableBalance: 8000,
      weeklyEarnings: [
        { week: "Week 1", amount: 800 },
        { week: "Week 2", amount: 1200 },
        { week: "Week 3", amount: 950 },
        { week: "Week 4", amount: 1100 },
      ],
      monthlyEarnings: [
        { month: "Jan", amount: 2500 },
        { month: "Feb", amount: 3200 },
        { month: "Mar", amount: 2800 },
        { month: "Apr", amount: 4000 },
      ],
      yearlyEarnings: [
        { year: "2020", amount: 25000 },
        { year: "2021", amount: 32000 },
        { year: "2022", amount: 28000 },
        { year: "2023", amount: 40000 },
      ],
      recentTransactions: [
        {
          id: 1,
          project: "E-commerce Website",
          client: "Tech Solutions Inc.",
          amount: 2500,
          date: "2024-03-15",
          status: "completed",
        },
        {
          id: 2,
          project: "Mobile App UI Design",
          client: "Foodie Express",
          amount: 1800,
          date: "2024-03-10",
          status: "pending",
        },
        {
          id: 3,
          project: "WordPress Blog",
          client: "Digital Marketing Co.",
          amount: 1200,
          date: "2024-03-05",
          status: "completed",
        },
      ],
    }),
    []
  );

  const chartData = useMemo(() => {
    switch (timeRange) {
      case "week":
        return earningsData.weeklyEarnings;
      case "month":
        return earningsData.monthlyEarnings;
      case "year":
        return earningsData.yearlyEarnings;
      default:
        return earningsData.monthlyEarnings;
    }
  }, [timeRange, earningsData]);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900">Earnings Overview</h1>
        <p className="text-gray-600 mt-2">
          Track your earnings and manage your finances
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
      >
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Earned</p>
              <h3 className="text-2xl font-bold text-gray-900">
                ${earningsData.totalEarned}
              </h3>
            </div>
            <FaMoneyBillWave className="text-3xl text-primary-500" />
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Pending Balance</p>
              <h3 className="text-2xl font-bold text-gray-900">
                ${earningsData.pendingBalance}
              </h3>
            </div>
            <FaWallet className="text-3xl text-yellow-500" />
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Available Balance</p>
              <h3 className="text-2xl font-bold text-gray-900">
                ${earningsData.availableBalance}
              </h3>
            </div>
            <FaCreditCard className="text-3xl text-green-500" />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 mb-8"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Earnings History</h2>
          <div className="flex space-x-2">
            {["week", "month", "year"].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  timeRange === range
                    ? "bg-primary-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {range.charAt(0).toUpperCase() + range.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey={
                  timeRange === "year"
                    ? "year"
                    : timeRange === "month"
                      ? "month"
                      : "week"
                }
                tick={{ fill: "#6B7280" }}
              />
              <YAxis
                tick={{ fill: "#6B7280" }}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip
                formatter={(value) => [`$${value}`, "Amount"]}
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #E5E7EB",
                  borderRadius: "0.5rem",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
              />
              <Line
                type="monotone"
                dataKey="amount"
                stroke="#4F46E5"
                strokeWidth={2}
                dot={{ fill: "#4F46E5", strokeWidth: 2 }}
                activeDot={{ r: 8, fill: "#4F46E5" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">
            Recent Transactions
          </h2>
          <button className="flex items-center text-primary-600 hover:text-primary-700">
            <FaDownload className="mr-2" /> Export
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Project
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {earningsData.recentTransactions.map((transaction) => (
                <motion.tr
                  key={transaction.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="hover:bg-gray-50"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {transaction.project}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {transaction.client}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      ${transaction.amount}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {transaction.date}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        transaction.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}

export default Earnings;
