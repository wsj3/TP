export default function TermsPage() {
  return (
    <div className="min-h-screen p-8 bg-[#1a1f2b] text-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <div className="space-y-4">
          <p>Last updated: [Date]</p>
          
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-3">1. Terms</h2>
            <p>By accessing Therapist's Friend, you agree to be bound by these terms of service and agree that you are responsible for compliance with any applicable local laws.</p>
    <div className="min-h-screen bg-[#121212] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300">
              By accessing and using Therapist's Friend, you accept and agree to be bound by the terms and conditions of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
            <p className="text-gray-300">
              Therapist's Friend is a platform designed to assist mental health professionals in managing their practice and client information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <p className="text-gray-300">
              Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Privacy and Data Protection</h2>
            <p className="text-gray-300">
              We are committed to protecting your privacy and handling your data in accordance with applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Modifications to Service</h2>
            <p className="text-gray-300">
              We reserve the right to modify or discontinue the service at any time, with or without notice.
            </p>
          </section>
        </div>

        <div className="mt-8 text-gray-400">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  )
} 