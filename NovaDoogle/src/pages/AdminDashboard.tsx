import React from 'react'
import SelfEditor from '@/components/SelfEditor'
import AIPartnerChat from '@/components/AIPartnerChat'

const AdminDashboard = () => {
  return (
    <main className="min-h-screen bg-white px-6 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">🛠️ Admin Dashboard</h1>

      <section className="space-y-6">
        <SelfEditor />
        <AIPartnerChat />
      </section>

      <footer className="mt-12 text-center text-sm text-gray-400">
        Intern utviklingsvisning – kun for systemansvarlig
      </footer>
    </main>
  )
}

export default AdminDashboard