import { ContactFormData } from "../types/contacts";

export async function sendContactForm(data: ContactFormData) {
  try {
    const res = await fetch("http://localhost:4000/contact", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error('Failed to send message');
    }

    return await res.json();
  } catch (error) {
    throw error;
  }
}