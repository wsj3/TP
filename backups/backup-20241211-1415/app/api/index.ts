// API utility functions for making requests
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'

export async function fetchApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  })

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`)
  }

  return response.json()
}

export const api = {
  // Patients
  async getPatients() {
    return fetchApi('/patients')
  },
  
  async getPatient(id: string) {
    return fetchApi(`/patients/${id}`)
  },

  // Messages
  async getMessages() {
    return fetchApi('/messages')
  },

  async sendMessage(data: { recipient: string; content: string }) {
    return fetchApi('/messages', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  },

  // Sessions
  async getSessions() {
    return fetchApi('/sessions')
  },

  async createSession(data: any) {
    return fetchApi('/sessions', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  },

  // Diagnosis
  async getDiagnoses() {
    return fetchApi('/diagnosis')
  },

  async createDiagnosis(data: any) {
    return fetchApi('/diagnosis', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }
}
