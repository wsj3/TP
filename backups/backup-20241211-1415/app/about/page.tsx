'use client' 
 
export default function AboutPage() { 
  return ( 
    <div className="p-6 max-w-4xl mx-auto"> 
      <h2 className="text-2xl text-white mb-6">About Therapist's Friend</h2> 
      <div className="space-y-6 text-gray-300"> 
        <div className="bg-gray-800 p-6 rounded-lg"> 
          <h3 className="text-xl text-white mb-4">AI-Powered Therapy Assistant</h3> 
          <p>Therapist's Friend is an innovative AI-powered platform designed to enhance the therapeutic process through intelligent session analysis, real-time insights, and comprehensive treatment planning support.</p> 
        </div> 
        <div className="bg-gray-800 p-6 rounded-lg"> 
          <h3 className="text-xl text-white mb-4">Key Features</h3> 
          <ul className="list-disc list-inside space-y-2"> 
            <li>Real-time session analysis and insights</li> 
            <li>Automated session transcription and summarization</li> 
            <li>Treatment progress tracking and recommendations</li> 
            <li>HIPAA-compliant secure communication</li> 
          </ul> 
        </div> 
      </div> 
    </div> 
  ) 
} 
