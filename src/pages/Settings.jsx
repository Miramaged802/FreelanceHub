import { useState }  from 'react';

function Settings() {
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      desktop: true,
      messages: true,
      proposals: true,
    },
    privacy: {
      profileVisibility: 'public',
      showEarnings: true,
      showActivity: true,
    },
    payment: {
      defaultMethod: 'paypal',
      autoWithdraw: false,
      minimumWithdraw: 100,
    },
  });

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

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>

      {/* Notifications Settings */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6">Notifications</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Email Notifications</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Receive notifications via email
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.notifications.email}
                onChange={() => handleNotificationChange('email')}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-light/20 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-light"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Desktop Notifications</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Show desktop push notifications
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.notifications.desktop}
                onChange={() => handleNotificationChange('desktop')}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-light/20 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-light"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Message Notifications</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Get notified about new messages
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.notifications.messages}
                onChange={() => handleNotificationChange('messages')}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-light/20 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-light"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Privacy Settings */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6">Privacy</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Profile Visibility</h3>
            <select
              value={settings.privacy.profileVisibility}
              onChange={(e) => handlePrivacyChange('profileVisibility', e.target.value)}
              className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-light dark:bg-gray-700"
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
              <option value="contacts">Contacts Only</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Show Earnings</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Display your earnings on your profile
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.privacy.showEarnings}
                onChange={() => handlePrivacyChange('showEarnings', !settings.privacy.showEarnings)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-light/20 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-light"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Payment Settings */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Payment</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Default Payment Method</h3>
            <select
              value={settings.payment.defaultMethod}
              onChange={(e) => handlePaymentChange('defaultMethod', e.target.value)}
              className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-light dark:bg-gray-700"
            >
              <option value="paypal">PayPal</option>
              <option value="bank">Bank Transfer</option>
              <option value="stripe">Stripe</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Automatic Withdrawal</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Automatically withdraw earnings when they reach the minimum amount
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.payment.autoWithdraw}
                onChange={() =>
                  handlePaymentChange('autoWithdraw', !settings.payment.autoWithdraw)
                }
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-light/20 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-light"></div>
            </label>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Minimum Withdrawal Amount</h3>
            <input
              type="number"
              value={settings.payment.minimumWithdraw}
              onChange={(e) =>
                handlePaymentChange('minimumWithdraw', parseInt(e.target.value, 10))
              }
              className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-light dark:bg-gray-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;