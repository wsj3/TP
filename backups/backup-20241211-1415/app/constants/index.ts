// Application constants
export const APP_NAME = "Therapist's Friend"

export const PATIENT_STATUS = {
  ACTIVE: 'Active',
  INACTIVE: 'Inactive',
} as const

export const SESSION_TYPES = {
  REGULAR: 'Regular',
  EMERGENCY: 'Emergency',
  INITIAL: 'Initial',
} as const

export const MESSAGE_TYPES = {
  TEXT: 'text',
  VOICE: 'voice',
  VIDEO: 'video',
} as const

export const ROUTES = {
  HOME: '/',
  PATIENTS: '/patients',
  MESSAGES: '/messages',
  SESSIONS: '/sessions',
  DIAGNOSIS: '/diagnosis',
  SETTINGS: '/settings',
  BILLING: '/billing',
} as const

export const ERROR_MESSAGES = {
  GENERIC: 'An error occurred. Please try again.',
  NOT_FOUND: 'Resource not found.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  VALIDATION: 'Please check your input and try again.',
} as const
