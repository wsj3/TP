'use client' 
 
export default function HomePage() { 
  return ( 
    <div className="p-6"> 
      <h2 className="text-2xl text-white mb-6">Latest Updates</h2> 
      <div className="grid grid-cols-2 gap-6"> 
        <div className="bg-gray-800 p-6 rounded-lg"> 
          <h3 className="text-xl text-white mb-4">AI shown to be more reliable than doctors</h3> 
          <p className="text-gray-300 mb-4">Recent studies have demonstrated that AI-powered analysis of therapy sessions provides more consistent and accurate insights compared to traditional methods...</p> 
          <a href="#" className="text-blue-400 hover:underline">Read more</a> 
        </div> 
        <div className="bg-gray-800 p-6 rounded-lg"> 
          <h3 className="text-xl text-white mb-4">How to ensure reliability with your AI Assistant</h3> 
          <p className="text-gray-300 mb-4">Best practices for configuring and working with your AI therapy assistant to maximize effectiveness and maintain high standards of care...</p> 
          <a href="#" className="text-blue-400 hover:underline">Read more</a> 
        </div> 
      </div> 
    </div> 
  ) 
} 
