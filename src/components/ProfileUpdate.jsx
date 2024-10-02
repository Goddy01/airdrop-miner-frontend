import React, { useState } from 'react';
import { AlertCircle, CreditCard, User, Bell, Settings, Power, CheckCircle2, Menu } from 'lucide-react';

export default function ProfileUpdate() {
  const [activeTab, setActiveTab] = useState('profile');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = [
    { id: 'profile', icon: User, label: 'Profile' },
    { id: 'billing', icon: CreditCard, label: 'Billing' },
    { id: 'notifications', icon: Bell, label: 'Notifications' },
    { id: 'security', icon: Settings, label: 'Security' },
    { id: 'disconnect', icon: Power, label: 'Disconnect Airdrops' },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="md:hidden bg-gray-900 p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-yellow-400">Profile Settings</h1>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-yellow-400 hover:text-yellow-500">
          <Menu size={24} />
        </button>
      </div>
      <div className={`md:w-64 bg-gray-900 shadow-md ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
        <div className="flex flex-col h-full space-y-1 p-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setIsMobileMenuOpen(false);
              }}
              className={`flex items-center justify-start px-4 py-3 rounded-lg text-left transition-colors duration-200 ease-in-out ${
                activeTab === tab.id ? 'bg-blue-800 text-yellow-400' : 'text-white hover:bg-blue-800 hover:text-yellow-400'
              }`}
            >
              <tab.icon className="mr-3 h-5 w-5" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 p-4 md:p-8 overflow-auto">
        <div className="max-w-3xl mx-auto">
          {activeTab === 'profile' && (
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Profile Information</h2>
              <p className="text-gray-300 mb-6">Update your profile details to personalize your account.</p>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                  <input id="name" className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="John Doe" defaultValue="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                  <input id="email" type="email" className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="john.doe@example.com" defaultValue="john.doe@example.com" />
                </div>
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-1">Username</label>
                  <input id="username" className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="johndoe" defaultValue="johndoe" />
                </div>
                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-gray-300 mb-1">Bio</label>
                  <textarea id="bio" className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" rows="4" placeholder="Tell us about yourself" defaultValue="Crypto enthusiast and airdrop hunter..." />
                </div>
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-1">Website</label>
                  <input id="website" type="url" className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="https://yourwebsite.com" defaultValue="https://johndoe-crypto.com" />
                </div>
                <div>
                  <label htmlFor="twitter" className="block text-sm font-medium text-gray-300 mb-1">Twitter Handle</label>
                  <input id="twitter" className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="@yourtwitter" defaultValue="@johndoe_crypto" />
                </div>
                <button className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded-md transition duration-300">Save Profile Changes</button>
              </div>
            </div>
          )}

          {activeTab === 'billing' && (
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Billing Information</h2>
              <p className="text-gray-300 mb-6">Manage your billing details and subscription plan.</p>
              <div className="space-y-4">
                <div>
                  <label htmlFor="card" className="block text-sm font-medium text-gray-300 mb-1">Card Information</label>
                  <input id="card" className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="**** **** **** 1234" defaultValue="**** **** **** 5678" />
                </div>
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                  <div className="flex-1">
                    <label htmlFor="expiry" className="block text-sm font-medium text-gray-300 mb-1">Card Expiry</label>
                    <input id="expiry" className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="MM/YY" defaultValue="12/25" />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-300 mb-1">CVV</label>
                    <input id="cvv" type="password" className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="***" />
                  </div>
                </div>
                <div>
                  <label htmlFor="plan" className="block text-sm font-medium text-gray-300 mb-1">Current Plan</label>
                  <select id="plan" className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400">
                    <option value="free">Free - $0/month</option>
                    <option value="pro" selected>Pro - $19.99/month</option>
                    <option value="enterprise">Enterprise - $99.99/month</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Billing Cycle</label>
                  <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                    <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">Monthly</button>
                    <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">Annually (Save 20%)</button>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between mt-6 space-y-4 sm:space-y-0">
                  <button className="w-full sm:w-auto bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300">Cancel Subscription</button>
                  <button className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded-md transition duration-300">Update Billing</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Notification Settings</h2>
              <p className="text-gray-300 mb-6">Customize how and when you receive notifications about airdrops and platform updates.</p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-yellow-400">Email Notifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label htmlFor="new-airdrops" className="text-sm font-medium text-gray-300">New Airdrop Opportunities</label>
                      <input type="checkbox" id="new-airdrops" className="rounded text-yellow-400 focus:ring-yellow-400" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="airdrop-reminders" className="text-sm font-medium text-gray-300">Airdrop Claim Reminders</label>
                      <input type="checkbox" id="airdrop-reminders" className="rounded text-yellow-400 focus:ring-yellow-400" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="successful-claims" className="text-sm font-medium text-gray-300">Successful Airdrop Claims</label>
                      <input type="checkbox" id="successful-claims" className="rounded text-yellow-400 focus:ring-yellow-400" defaultChecked />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-yellow-400">Push Notifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label htmlFor="push-new-airdrops" className="text-sm font-medium text-gray-300">New Airdrop Alerts</label>
                      <input type="checkbox" id="push-new-airdrops" className="rounded text-yellow-400 focus:ring-yellow-400" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="push-price-alerts" className="text-sm font-medium text-gray-300">Price Alerts</label>
                      <input type="checkbox" id="push-price-alerts" className="rounded text-yellow-400 focus:ring-yellow-400" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-yellow-400">SMS Notifications</h3>
                  <div className="flex items-center justify-between">
                    <label htmlFor="sms-critical-updates" className="text-sm font-medium text-gray-300">Critical Updates</label>
                    <input type="checkbox" id="sms-critical-updates" className="rounded text-yellow-400 focus:ring-yellow-400" />
                  </div>
                </div>
                <div>
                  <label htmlFor="notification-frequency" className="block text-sm font-medium text-gray-300 mb-1">Notification Frequency</label>
                  <select id="notification-frequency" className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400">
                    <option value="realtime">Real-time</option>
                    <option value="daily" selected>Daily Digest</option>
                    <option value="weekly">Weekly Summary</option>
                  </select>
                </div>
                <button className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded-md transition duration-300">Save Notification Preferences</button>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Security Settings</h2>
              <p className="text-gray-300 mb-6">Manage your account security and permissions to keep your assets safe.</p>
              <div className="space-y-6">
                <div>
                  <label htmlFor="current-password" className="block text-sm font-medium text-gray-300 mb-1">Current Password</label>
                  <input id="current-password" type="password" className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                </div>
                <div>
                  <label htmlFor="new-password" className="block text-sm font-medium text-gray-300 mb-1">New Password</label>
                  <input id="new-password" type="password" className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                </div>
                <div>
                  <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-300 mb-1">Confirm New Password</label>
                  <input id="confirm-password" type="password" className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                </div>
                <div className="flex items-center space-x-2">
                  <input id="2fa" type="checkbox" className="rounded text-yellow-400 focus:ring-yellow-400" defaultChecked />
                  <label htmlFor="2fa" className="text-sm font-medium text-gray-300">Two-Factor Authentication (2FA)</label>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-yellow-400">Connected Devices</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">MacBook Pro - New York</span>
                      <button className="text-sm text-red-400 hover:text-red-300">Revoke</button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">iPhone 12 - Los Angeles</span>
                      <button className="text-sm text-red-400 hover:text-red-300">Revoke</button>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-yellow-400">Login History</h3>
                  <div className="space-y-2 text-sm text-gray-400">
                    <p>Last login: 2023-08-15 14:30 UTC from 192.168.1.1</p>
                    <p>Previous login: 2023-08-14 09:15 UTC from 10.0.0.1</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
                  <button className="w-full sm:w-auto bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">Enable Biometric Login</button>
                  <button className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded-md transition duration-300">Update Security Settings</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'disconnect' && (
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Disconnect Airdrops</h2>
              <p className="text-gray-300 mb-6">Manage your connected airdrops and automation settings. Be cautious, as disconnecting may affect your rewards.</p>
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border border-gray-700 rounded-lg">
                    <div>
                      <h3 className="font-medium text-white">Ethereum 2.0 Beacon Chain Airdrop</h3>
                      <p className="text-sm text-gray-400">Connected on 2023-05-01</p>
                      <div className="flex items-center mt-2">
                        <CheckCircle2 className="h-4 w-4 text-green-400 mr-2" />
                        <span className="text-sm text-green-400">Active - 150 ETH claimed</span>
                      </div>
                    </div>
                    <button className="mt-2 sm:mt-0 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300">Disconnect</button>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border border-gray-700 rounded-lg">
                    <div>
                      <h3 className="font-medium text-white">Uniswap V3 Retroactive Airdrop</h3>
                      <p className="text-sm text-gray-400">Connected on 2023-06-15</p>
                      <div className="flex items-center mt-2">
                        <CheckCircle2 className="h-4 w-4 text-green-400 mr-2" />
                        <span className="text-sm text-green-400">Active - 5000 UNI claimed</span>
                      </div>
                    </div>
                    <button className="mt-2 sm:mt-0 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300">Disconnect</button>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border border-gray-700 rounded-lg">
                    <div>
                      <h3 className="font-medium text-white">Optimism Governance Token Airdrop</h3>
                      <p className="text-sm text-gray-400">Connected on 2023-07-22</p>
                      <div className="flex items-center mt-2">
                        <AlertCircle className="h-4 w-4 text-yellow-400 mr-2" />
                        <span className="text-sm text-yellow-400">Pending - Claim available in 3 days</span>
                      </div>
                    </div>
                    <button className="mt-2 sm:mt-0 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300">Disconnect</button>
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="auto-claim" className="flex items-center space-x-2">
                    <input type="checkbox" id="auto-claim" className="rounded text-yellow-400 focus:ring-yellow-400" defaultChecked />
                    <span className="text-sm font-medium text-gray-300">Automatically claim airdrops when available</span>
                  </label>
                </div>
                <div className="space-y-2">
                  <label htmlFor="claim-threshold" className="block text-sm font-medium text-gray-300 mb-1">Minimum Claim Threshold</label>
                  <div className="flex items-center space-x-2">
                    <input id="claim-threshold" type="number" className="w-24 px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="100" defaultValue="100" />
                    <span className="text-sm text-gray-400">USD equivalent</span>
                  </div>
                </div>
                <div className="flex items-start space-x-2 mt-6">
                  <AlertCircle className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-400">Disconnecting airdrops may affect your future rewards and eligibility. Please review the terms for each airdrop before disconnecting.</p>
                </div>
                <button className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded-md transition duration-300">Save Airdrop Settings</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}