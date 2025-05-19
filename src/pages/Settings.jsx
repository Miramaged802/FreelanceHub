import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  FaBell,
  FaLock,
  FaCreditCard,
  FaUser,
  FaPalette,
} from "react-icons/fa";

function Settings() {
  const { isAuthenticated, userType } = useSelector((state) => state.auth);
  const [activeTab, setActiveTab] = useState("notifications");
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      desktop: true,
      messages: true,
      proposals: true,
      jobAlerts: true,
      contractUpdates: true,
    },
    privacy: {
      profileVisibility: "public",
      showEarnings: true,
      showActivity: true,
      showSkills: true,
      showPortfolio: true,
    },
    payment: {
      defaultMethod: "paypal",
      autoWithdraw: false,
      minimumWithdraw: 100,
      currency: "USD",
      taxInfo: {
        taxId: "",
        taxCountry: "US",
      },
    },
    appearance: {
      theme: "light",
      fontSize: "medium",
    },
    client: {
      companyInfo: {
        name: "Acme Corp",
        website: "www.acmecorp.com",
        industry: "Technology",
      },
      hiringPreferences: {
        autoApprove: false,
        minimumRating: 4.0,
        preferredSkills: ["React", "Node.js", "Python"],
      },
    },
    freelancer: {
      availability: {
        status: "available",
        hoursPerWeek: 40,
        preferredProjects: ["Web Development", "Mobile Apps"],
      },
      rates: {
        hourlyRate: 50,
        minimumProjectBudget: 500,
        preferredPaymentMethods: ["PayPal", "Bank Transfer"],
      },
    },
  });

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const handleNotificationChange = (key) => {
    setSettings({
      ...settings,
      notifications: {
        ...settings.notifications,
        [key]: !settings.notifications[key],
      },
    });
  };

  const handlePrivacyChange = (key, value) => {
    setSettings({
      ...settings,
      privacy: {
        ...settings.privacy,
        [key]: value,
      },
    });
  };

  const handlePaymentChange = (key, value) => {
    setSettings({
      ...settings,
      payment: {
        ...settings.payment,
        [key]: value,
      },
    });
  };

  const handleAppearanceChange = (key, value) => {
    setSettings({
      ...settings,
      appearance: {
        ...settings.appearance,
        [key]: value,
      },
    });
  };

  const tabs = [
    { id: "notifications", label: "Notifications", icon: <FaBell /> },
    { id: "privacy", label: "Privacy", icon: <FaLock /> },
    { id: "payment", label: "Payment", icon: <FaCreditCard /> },
    { id: "appearance", label: "Appearance", icon: <FaPalette /> },
  ];

  if (userType === "client") {
    tabs.push({ id: "company", label: "Company", icon: <FaUser /> });
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "notifications":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(settings.notifications).map(([key, value]) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-lg p-4 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {key === "email" && "Receive notifications via email"}
                        {key === "desktop" && "Show desktop push notifications"}
                        {key === "messages" &&
                          "Get notified about new messages"}
                        {key === "proposals" &&
                          "Receive notifications for new proposals"}
                        {key === "jobAlerts" &&
                          "Get alerts for new job postings"}
                        {key === "contractUpdates" &&
                          "Receive updates about contract changes"}
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={value}
                        onChange={() => handleNotificationChange(key)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-light/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-light"></div>
                    </label>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "privacy":
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold mb-4">Profile Visibility</h3>
              <select
                value={settings.privacy.profileVisibility}
                onChange={(e) =>
                  handlePrivacyChange("profileVisibility", e.target.value)
                }
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-light"
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
                <option value="contacts">Contacts Only</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(settings.privacy)
                .filter(([key]) => key !== "profileVisibility")
                .map(([key, value]) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-lg p-4 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {key === "showEarnings" &&
                            "Display your earnings on your profile"}
                          {key === "showActivity" &&
                            "Show your recent activity"}
                          {key === "showSkills" &&
                            "Display your skills on your profile"}
                          {key === "showPortfolio" &&
                            "Show your portfolio items"}
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={value}
                          onChange={() => handlePrivacyChange(key, !value)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-light/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-light"></div>
                      </label>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        );

      case "payment":
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold mb-4">Payment Method</h3>
              <select
                value={settings.payment.defaultMethod}
                onChange={(e) =>
                  handlePaymentChange("defaultMethod", e.target.value)
                }
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-light"
              >
                <option value="paypal">PayPal</option>
                <option value="bank">Bank Transfer</option>
                <option value="stripe">Stripe</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg p-4 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Automatic Withdrawal</h3>
                    <p className="text-sm text-gray-500">
                      Automatically withdraw earnings when they reach the
                      minimum amount
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.payment.autoWithdraw}
                      onChange={() =>
                        handlePaymentChange(
                          "autoWithdraw",
                          !settings.payment.autoWithdraw
                        )
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-light/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-light"></div>
                  </label>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg p-4 shadow-sm"
              >
                <h3 className="font-semibold mb-2">
                  Minimum Withdrawal Amount
                </h3>
                <input
                  type="number"
                  value={settings.payment.minimumWithdraw}
                  onChange={(e) =>
                    handlePaymentChange(
                      "minimumWithdraw",
                      parseInt(e.target.value, 10)
                    )
                  }
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-light"
                />
              </motion.div>
            </div>
          </div>
        );

      case "appearance":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg p-4 shadow-sm"
              >
                <h3 className="font-semibold mb-4">Theme</h3>
                <select
                  value={settings.appearance.theme}
                  onChange={(e) =>
                    handleAppearanceChange("theme", e.target.value)
                  }
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-light"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="system">System</option>
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg p-4 shadow-sm"
              >
                <h3 className="font-semibold mb-4">Font Size</h3>
                <select
                  value={settings.appearance.fontSize}
                  onChange={(e) =>
                    handleAppearanceChange("fontSize", e.target.value)
                  }
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-light"
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </motion.div>
            </div>
          </div>
        );

      case "company":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(settings.client.companyInfo).map(
                ([key, value]) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-lg p-4 shadow-sm"
                  >
                    <h3 className="font-semibold mb-2 capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </h3>
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => {
                        setSettings({
                          ...settings,
                          client: {
                            ...settings.client,
                            companyInfo: {
                              ...settings.client.companyInfo,
                              [key]: e.target.value,
                            },
                          },
                        });
                      }}
                      className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-light"
                    />
                  </motion.div>
                )
              )}
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold mb-4">Hiring Preferences</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Auto-approve Proposals</h4>
                    <p className="text-sm text-gray-500">
                      Automatically approve proposals that meet your criteria
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.client.hiringPreferences.autoApprove}
                      onChange={(e) => {
                        setSettings({
                          ...settings,
                          client: {
                            ...settings.client,
                            hiringPreferences: {
                              ...settings.client.hiringPreferences,
                              autoApprove: e.target.checked,
                            },
                          },
                        });
                      }}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-light/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-light"></div>
                  </label>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Minimum Rating</h4>
                  <input
                    type="number"
                    value={settings.client.hiringPreferences.minimumRating}
                    onChange={(e) => {
                      setSettings({
                        ...settings,
                        client: {
                          ...settings.client,
                          hiringPreferences: {
                            ...settings.client.hiringPreferences,
                            minimumRating: parseFloat(e.target.value),
                          },
                        },
                      });
                    }}
                    min="0"
                    max="5"
                    step="0.1"
                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-light"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-gray-600 mt-2">
          Manage your account settings and preferences
        </p>
      </motion.div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="grid grid-cols-12">
          {/* Sidebar */}
          <div className="col-span-12 md:col-span-3 border-b md:border-b-0 md:border-r">
            <nav className="p-4 space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? "bg-primary-50 text-primary-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="col-span-12 md:col-span-9 p-6">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
