'use client' 
 
export default function SignupPage() { 
  return ( 
    <div className="min-h-screen flex items-center justify-center bg-[#1a1f2b]"> 
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-[480px]"> 
        <h2 className="text-2xl text-white mb-6 text-center">Create Your Account</h2> 
        <form className="space-y-4"> 
          <div className="grid grid-cols-2 gap-4"> 
            <div> 
              <label className="block text-gray-300 mb-2">First Name</label> 
              <input type="text" className="w-full bg-gray-700 text-white p-2 rounded" required /> 
            </div> 
            <div> 
              <label className="block text-gray-300 mb-2">Last Name</label> 
              <input type="text" className="w-full bg-gray-700 text-white p-2 rounded" required /> 
            </div> 
          </div> 
          <div> 
            <label className="block text-gray-300 mb-2">Email</label> 
            <input type="email" className="w-full bg-gray-700 text-white p-2 rounded" required /> 
          </div> 
          <div> 
            <label className="block text-gray-300 mb-2">License Number</label> 
            <input type="text" className="w-full bg-gray-700 text-white p-2 rounded" required /> 
          </div> 
          <div> 
            <label className="block text-gray-300 mb-2">Password</label> 
            <input type="password" className="w-full bg-gray-700 text-white p-2 rounded" required /> 
          </div> 
          <div className="flex items-center space-x-2"> 
            <input type="checkbox" required /> 
            <label className="text-gray-300 text-sm">I agree to the Terms of Service and Privacy Policy</label> 
          </div> 
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Create Account</button> 
        </form> 
        <p className="text-gray-400 text-sm mt-4 text-center">Already have an account? <a href="/login" className="text-blue-400 hover:underline">Login</a></p> 
      </div> 
    </div> 
  ) 
} 
