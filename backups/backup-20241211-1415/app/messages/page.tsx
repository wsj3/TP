'use client'

import { useState, useEffect } from 'react'
import { 
  HiChatBubbleLeftRight,
  HiEnvelope,
  HiPhone,
  HiEllipsisHorizontal,
  HiInboxStack,
  HiPaperAirplane,
  HiArchiveBox 
} from 'react-icons/hi2'

export default function MessagesPage() {
  const [showNewMessage, setShowNewMessage] = useState(false)
  const [activeType, setActiveType] = useState('text')
  const [activeFolder, setActiveFolder] = useState('inbox')
  const [messages, setMessages] = useState([])
  const [formData, setFormData] = useState({
    type: 'text',
    recipient: '',
    subject: '',
    content: ''
  })

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/messages')
      const result = await response.json()
      if (result.success) {
        setMessages(result.data)
      }
    } catch (error) {
      console.error('Error fetching messages:', error)
    }
  }

  useEffect(() => {
    fetchMessages()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()
      if (result.success) {
        setShowNewMessage(false)
        setFormData({
          type: 'text',
          recipient: '',
          subject: '',
          content: ''
        })
        fetchMessages() // Refresh messages after creating new one
      }
    } catch (error) {
      console.error('Error sending message:', error)
    }
  }

  // Filter messages based on active type and folder
  const filteredMessages = messages.filter((message: any) => {
    const typeMatch = activeType === 'all' || message.type === activeType
    const folderMatch = activeFolder === message.status || 
      (activeFolder === 'inbox' && message.status === 'sent')
    return typeMatch && folderMatch
  })

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl text-white">Messages</h2>
        <button 
          onClick={() => setShowNewMessage(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          New Message
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1 bg-gray-800 p-4 rounded-lg">
          <div className="space-y-2">
            <button className="w-full text-left text-white p-2 rounded hover:bg-gray-700">Text</button>
            <button className="w-full text-left text-gray-400 p-2 rounded hover:bg-gray-700">Email</button>
            <button className="w-full text-left text-gray-400 p-2 rounded hover:bg-gray-700">Phone</button>
            <button className="w-full text-left text-gray-400 p-2 rounded hover:bg-gray-700">Other</button>
            <hr className="border-gray-700 my-2" />
            <button className="w-full text-left text-white p-2 rounded hover:bg-gray-700">Inbox</button>
            <button className="w-full text-left text-gray-400 p-2 rounded hover:bg-gray-700">Sent</button>
            <button className="w-full text-left text-gray-400 p-2 rounded hover:bg-gray-700">Archived</button>
          </div>
        </div>

        <div className="col-span-3 bg-gray-800 p-4 rounded-lg">
          <div className="space-y-2">
            {filteredMessages.map((message: any) => (
              <div key={message._id} className="p-2 hover:bg-gray-700 rounded cursor-pointer">
                <div className="flex justify-between text-white">
                  <div className="flex items-center">
                    <span className="bg-blue-500 text-xs px-2 py-1 rounded mr-2 flex items-center">
                      {message.type === 'text' && <HiChatBubbleLeftRight className="w-3 h-3 mr-1" />}
                      {message.type === 'email' && <HiEnvelope className="w-3 h-3 mr-1" />}
                      {message.type === 'phone' && <HiPhone className="w-3 h-3 mr-1" />}
                      {message.type === 'other' && <HiEllipsisHorizontal className="w-3 h-3 mr-1" />}
                      {message.type.charAt(0).toUpperCase() + message.type.slice(1)}
                    </span>
                    <span>{message.recipient}</span>
                  </div>
                  <span className="text-gray-400">
                    {new Date(message.createdAt).toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit'
                    })}
                  </span>
                </div>
                <div className="text-gray-400 text-sm">
                  {message.subject}: {message.content.substring(0, 50)}...
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showNewMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg w-[500px]">
            <h3 className="text-white mb-4">New Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-700 text-white"
              >
                <option value="text">Text Message</option>
                <option value="email">Email</option>
                <option value="phone">Phone Call</option>
                <option value="other">Other</option>
              </select>

              <input
                type="text"
                name="recipient"
                placeholder="Recipient"
                value={formData.recipient}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-700 text-white"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-700 text-white"
              />

              <textarea
                name="content"
                placeholder="Message content"
                value={formData.content}
                onChange={handleChange}
                rows={4}
                className="w-full p-2 rounded bg-gray-700 text-white"
              />

              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowNewMessage(false)}
                  className="px-4 py-2 text-gray-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
} 
