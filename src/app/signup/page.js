'use client';

import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import Script from 'next/script';

export default function SignupPage() {
   useEffect(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', 'SignupPageVisited');
    }
  }, []);
  const router = useRouter();

  const [form, setForm] = useState({
    name: '',
    email: '',
    gender: '',
    dob: '',
    password: '',
    confirmPassword: '',
    phone: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    router.push('/charts'); // Redirect after sign-up
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center p-6">
      <Card className="w-full max-w-3xl shadow-2xl">
        <CardContent className="p-8">
          <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Create Your Account</h1>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
            <Input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />

            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md text-gray-600"
              required
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <Input type="date" name="dob" value={form.dob} onChange={handleChange} required />
            <Input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
            <Input type="password" name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} required />
            <Input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />
            <Input name="city" placeholder="City" value={form.city} onChange={handleChange} required />
            <Input name="state" placeholder="State" value={form.state} onChange={handleChange} required />
            <Input name="zip" placeholder="Zip Code" value={form.zip} onChange={handleChange} required />
            <Input name="country" placeholder="Country" value={form.country} onChange={handleChange} required />

            <div className="md:col-span-2 mt-4">
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg">
                Sign Up
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
{/* 
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          fbq('init', '1068740558110633', {
            em: '${form.email}',
            ph: '${form.phone}',
            fn: '${form.name}',
            ge: '${form.gender}',
            external_id: '${form.email}'
          });
          fbq('track', 'PageView');
        `}
      </Script> */}
    </div>
  );
}
