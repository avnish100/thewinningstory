'use client';

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { submitNewsletter } from "@/lib/newsletter"
import { toast } from "sonner"

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await submitNewsletter(email);
      // Since we're using no-cors, we wait a moment to ensure the request completes
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Thanks for subscribing!');
      setEmail('');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 px-4 py-3 bg-transparent border border-black focus:outline-none focus:ring-1 focus:ring-red-900"
        />
        <Button 
          type="submit"
          disabled={loading}
          className="bg-black hover:bg-red-900 text-white rounded-none uppercase text-xs tracking-widest py-6 px-8 disabled:opacity-50"
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </div>
    </form>
  );
}