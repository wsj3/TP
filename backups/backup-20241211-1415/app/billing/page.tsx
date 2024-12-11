'use client' 
 
export default function BillingPage() { 
  return ( 
    <div className="p-6"> 
      <h2 className="text-xl text-white mb-6">Client Billing & Insurance</h2> 
      <div className="grid grid-cols-2 gap-6"> 
        <div className="bg-gray-800 p-6 rounded-lg"> 
          <h3 className="text-lg text-white mb-4">Create New Bill</h3> 
          <form className="space-y-4"> 
            <div> 
              <label className="block text-gray-300 mb-2">Client</label> 
              <select className="w-full bg-gray-700 text-white p-2 rounded"> 
                <option>Select Client</option> 
                <option>John Doe</option> 
              </select> 
            </div> 
            <div> 
              <label className="block text-gray-300 mb-2">Service Type</label> 
              <select className="w-full bg-gray-700 text-white p-2 rounded"> 
                <option>Individual Therapy (90837)</option> 
                <option>Group Therapy (90853)</option> 
              </select> 
            </div> 
            <div> 
              <label className="block text-gray-300 mb-2">Insurance Provider</label> 
              <select className="w-full bg-gray-700 text-white p-2 rounded"> 
                <option>Blue Cross</option> 
                <option>Aetna</option> 
                <option>Self-Pay</option> 
              </select> 
            </div> 
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Generate Bill</button> 
          </form> 
        </div> 
        <div className="bg-gray-800 p-6 rounded-lg"> 
          <h3 className="text-lg text-white mb-4">Recent Bills</h3> 
          <div className="space-y-3"> 
            <div className="bg-gray-700 p-3 rounded"> 
              <div className="flex justify-between text-white"> 
                <span>John Doe</span> 
                <span>$150.00</span> 
              </div> 
              <div className="text-sm text-gray-400">Insurance: Blue Cross - Pending</div> 
            </div> 
          </div> 
        </div> 
      </div> 
    </div> 
  ) 
} 
