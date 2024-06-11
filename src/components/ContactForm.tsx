'use client'
import React, { ChangeEvent, FormEvent, useState } from "react"
import { Html,Text } from "@react-email/components"


type TFormData= {
  name: string;
  email: string;
  message: string;
}


type TProps = {
  message: string
}

export const Email = ({ message }:TProps):JSX.Element => { 

  return (
    <Html lang="en">
      <Text>{ message }</Text>
    </Html>
  );
}

const INITIAL_FORM_STATE = {
  name: '',
  email: '',
  message: '',
}

export const ContactForm = ():JSX.Element => {
  const [formData, setFormData] = useState<TFormData>(INITIAL_FORM_STATE);

  const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e:FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const response = await fetch('/api/send', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),     
     })
    console.log(response.ok)
     if (response.ok) {
       setFormData(INITIAL_FORM_STATE)
     }
  };

  return (
    <form id='contactForm' onSubmit={handleSubmit} className="max-w-md mx-auto p-6 my-4">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-slate-400">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-teal-400 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-slate-400">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-teal-400 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-slate-400">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-teal-400 sm:text-sm"
        />
      </div>
      <button type="submit" className="w-full px-4 py-2 text-teal-400 bg-teal-400/10 border-teal-400/10 rounded-md hover:bg-teal-400 hover:text-teal-50 focus:outline-none">Submit</button>
    </form>
  )
}
