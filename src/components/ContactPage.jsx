"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pesan dikirim!\nNama: ${formData.name}\nEmail: ${formData.email}\nPesan: ${formData.message}`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-lg p-6 bg-white shadow-lg rounded-2xl">
        <CardContent>
          <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="w-full" />
            <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full" />
            <Textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required className="w-full" />
            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl">
              Send
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
