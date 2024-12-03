'use client' 
 
export default function LoginPage() { 
  return ( 
    <div className="min-h-screen flex items-center justify-center bg-[#1a1f2b]"> 
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96"> 
        <h2 className="text-2xl text-white mb-6 text-center">Welcome Back</h2> 
        <form className="space-y-4"> 
          <div> 
            <label className="block text-gray-300 mb-2">Email</label> 
            <input type="email" className="w-full bg-gray-700 text-white p-2 rounded" /> 
          </div> 
          <div> 
            <label className="block text-gray-300 mb-2">Password</label> 
            <input type="password" className="w-full bg-gray-700 text-white p-2 rounded" /> 
          </div> 
          <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Login</button> 
        </form> 
        <p className="text-gray-400 text-sm mt-4 text-center">New to Therapist's Friend? <a href="/signup" className="text-blue-400 hover:underline">Sign up</a></p> 
      </div> 
    </div> 
  ) 
} 
