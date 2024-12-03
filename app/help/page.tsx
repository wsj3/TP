'use client' 
 
export default function HelpPage() { 
  return ( 
    <div className="p-6"> 
      <div className="max-w-4xl mx-auto"> 
        <h2 className="text-xl text-white mb-6">Help & Support</h2> 
        <div className="mb-6"> 
          <input type="search" placeholder="Search help articles..." className="w-full bg-gray-800 text-white p-3 rounded-lg" /> 
        </div> 
        <div className="grid grid-cols-2 gap-6"> 
          <div className="bg-gray-800 p-6 rounded-lg"> 
            <h3 className="text-lg text-white mb-4">Getting Started</h3> 
            <ul className="space-y-2 text-gray-300"> 
              <li className="hover:text-blue-400 cursor-pointer">• Quick Start Guide</li> 
              <li className="hover:text-blue-400 cursor-pointer">• Setting Up Your Profile</li> 
              <li className="hover:text-blue-400 cursor-pointer">• AI Assistant Overview</li> 
            </ul> 
          </div> 
          <div className="bg-gray-800 p-6 rounded-lg"> 
            <h3 className="text-lg text-white mb-4">Using AI Features</h3> 
            <ul className="space-y-2 text-gray-300"> 
              <li className="hover:text-blue-400 cursor-pointer">• Session Analysis</li> 
              <li className="hover:text-blue-400 cursor-pointer">• Treatment Recommendations</li> 
              <li className="hover:text-blue-400 cursor-pointer">• Progress Tracking</li> 
            </ul> 
          </div> 
          <div className="bg-gray-800 p-6 rounded-lg"> 
            <h3 className="text-lg text-white mb-4">Security & Privacy</h3> 
            <ul className="space-y-2 text-gray-300"> 
              <li className="hover:text-blue-400 cursor-pointer">• Data Protection</li> 
              <li className="hover:text-blue-400 cursor-pointer">• HIPAA Compliance</li> 
              <li className="hover:text-blue-400 cursor-pointer">• Privacy Settings</li> 
            </ul> 
          </div> 
          <div className="bg-gray-800 p-6 rounded-lg"> 
            <h3 className="text-lg text-white mb-4">Contact Support</h3> 
            <p className="text-gray-300 mb-4">Need additional help? Our support team is available 24/7.</p> 
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Contact Support</button> 
          </div> 
        </div> 
      </div> 
    </div> 
  ) 
} 
