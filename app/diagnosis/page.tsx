'use client' 
 
import { useState } from 'react' 
 
export default function DiagnosisPage() { 
  return ( 
    <div className="p-6"> 
      <div className="flex justify-between items-center mb-6"> 
        <h2 className="text-xl text-white">Diagnosis & Assessment</h2> 
      </div> 
      <div className="grid grid-cols-3 gap-6"> 
        <div className="col-span-2 space-y-6"> 
          <div className="bg-gray-800 p-4 rounded-lg"> 
            <h3 className="text-white mb-4">AI-Assisted Assessment</h3> 
            <div className="space-y-4"> 
              <div className="bg-gray-700 p-3 rounded"> 
                <h4 className="text-blue-400">Symptom Analysis</h4> 
                <p className="text-gray-300 text-sm mt-2">AI-powered analysis of reported symptoms and session transcripts.</p> 
                <button className="mt-2 text-blue-400 text-sm hover:underline">Run Analysis</button> 
              </div> 
            </div> 
          </div> 
        </div> 
      </div> 
    </div> 
  ) 
} 
