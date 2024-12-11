import { useState, useEffect } from 'react'
import { useAppStore } from '../store'

export const useDebounce = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

export const usePatient = (patientId: string | null) => {
  const [patient, setPatient] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (!patientId) return

    const fetchPatient = async () => {
      try {
        setLoading(true)
        const data = await fetch(`/api/patients/${patientId}`).then(res => res.json())
        setPatient(data)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch patient'))
      } finally {
        setLoading(false)
      }
    }

    fetchPatient()
  }, [patientId])

  return { patient, loading, error }
}

export const useAuth = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check authentication status
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/session')
        const data = await response.json()
        setUser(data.user)
      } catch (error) {
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

  return { user, loading, setUser }
}
