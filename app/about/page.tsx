'use client' 
 
export default function AboutPage() { 
  return ( 
    <div className="p-6 max-w-4xl mx-auto"> 
      <h2 className="text-2xl text-white mb-6">About Therapist's Friend</h2> 
      <div className="space-y-6 text-gray-300"> 
        <div className="bg-gray-800 p-6 rounded-lg"> 
          <h3 className="text-xl text-white mb-4">Our Mission</h3> 
          <p className="mb-4"> 
            Vistral AI has created the non-profit Therapist's Friend to support research 
            and enable mental health therapists in the use of Artificial Intelligence. 
            The goal is to streamline workflow, provide research and analytic guidance 
            to improve outcomes and to enable a 'mentor' to collaborate with the 
            therapists in their practice. 
          </p> 
        </div> 
        <div className="bg-gray-800 p-6 rounded-lg"> 
          <h3 className="text-xl text-white mb-4">AI-Powered Therapy Assistant</h3> 
          <p className="mb-4"> 
            Therapist's Friend leverages advanced AI technology to enhance the therapeutic process through: 
          </p> 
          <ul className="list-disc list-inside space-y-2 ml-4"> 
            <li>Real-time session analysis and insights</li> 
            <li>Automated documentation and note-taking</li> 
            <li>Research-based treatment recommendations</li> 
            <li>Outcome tracking and progress monitoring</li> 
            <li>HIPAA-compliant secure communication</li> 
          </ul> 
        </div> 
        <div className="bg-gray-800 p-6 rounded-lg"> 
          <h3 className="text-xl text-white mb-4">Research & Development</h3> 
          <p className="mb-4"> 
            Our team of AI researchers and mental health professionals work together to: 
          </p> 
          <ul className="list-disc list-inside space-y-2 ml-4"> 
            <li>Develop and validate AI models for therapy</li> 
            <li>Study the effectiveness of AI-assisted therapy</li> 
            <li>Create evidence-based treatment protocols</li> 
            <li>Ensure ethical AI implementation in mental health</li> 
          </ul> 
        </div> 
        <div className="bg-gray-800 p-6 rounded-lg"> 
          <h3 className="text-xl text-white mb-4">Privacy & Security</h3> 
          <p> 
            We maintain the highest standards of data protection and privacy, ensuring 
            all interactions are secure and HIPAA-compliant. Our commitment to ethical 
            AI use includes transparent data handling and regular security audits. 
          </p> 
        </div> 
        <div className="bg-gray-800 p-6 rounded-lg"> 
          <h3 className="text-xl text-white mb-4">Contact Us</h3> 
          <p> 
            For more information about Therapist's Friend or to get involved in our 
            research initiatives, please contact us at: 
          </p> 
          <div className="mt-4"> 
            <a href="mailto:info@therapistsfriend.org" className="text-blue-400 hover:underline"> 
              info@therapistsfriend.org 
            </a> 
          </div> 
        </div> 
      </div> 
    </div> 
  ) 
} 
