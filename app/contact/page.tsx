"use client";
import { useState } from "react";
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle, X } from "lucide-react";
import emailjs from '@emailjs/browser';

// Type definitions
interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string | null;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({});

  // EmailJS configuration with proper type checking
  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
  const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    // Check if environment variables are set
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error('EmailJS environment variables not set');
      alert('Email service not configured. Please check environment variables.');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "shaivijain17@gmail.com",
          sent_date: new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })
        },
        EMAILJS_PUBLIC_KEY
      );
      
      console.log('Email sent successfully:', result.text);
      
      setShowSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: Mail,
      label: "Email",
      value: "shaivijain17@gmail.com",
      href: "mailto:shaivijain17@gmail.com"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@shaivijain",
      href: "https://github.com/shaivijain"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "shaivijain",
      href: "https://linkedin.com/in/shaivijain"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Delhi, India",
      href: null
    }
  ];

  return (
    <>
      <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-[#0a0a0b] via-[#0e0e10] to-[#1a0b1a] text-white font-sans relative overflow-hidden">
        {/* Subtle background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.05),transparent_50%)] pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl bg-[#131316]/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-purple-600/20 shadow-2xl relative z-10">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Let's Connect
              </h2>
              <p className="text-gray-400 text-lg">
                Ready to bring your ideas to life? Drop me a message and let's create something amazing together.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-[#1c1c20]/50 border border-purple-600/10 hover:border-purple-600/30 transition-all duration-300 hover:bg-[#1c1c20]/70">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-purple-600/20 to-pink-600/20">
                      <Icon className="text-purple-400 text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a 
                    key={index}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block transform hover:scale-[1.02] transition-transform duration-200"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index}>
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-600/20">
              <h3 className="font-semibold mb-2 text-purple-300">Quick Response</h3>
              <p className="text-sm text-gray-400">
                I typically respond within 24 hours. For urgent matters, feel free to reach out directly via email.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-3 text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your full name"
                className={`w-full px-4 py-4 rounded-xl bg-[#1c1c20]/70 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 ${
                  errors.name ? 'border-red-500/50' : 'border-purple-600/30 hover:border-purple-600/50'
                }`}
              />
              {errors.name && <p className="text-red-400 text-sm mt-2">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-3 text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                className={`w-full px-4 py-4 rounded-xl bg-[#1c1c20]/70 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 ${
                  errors.email ? 'border-red-500/50' : 'border-purple-600/30 hover:border-purple-600/50'
                }`}
              />
              {errors.email && <p className="text-red-400 text-sm mt-2">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-3 text-gray-300">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project, ideas, or just say hello..."
                rows={5}
                className={`w-full px-4 py-4 rounded-xl bg-[#1c1c20]/70 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 resize-none ${
                  errors.message ? 'border-red-500/50' : 'border-purple-600/30 hover:border-purple-600/50'
                }`}
              />
              {errors.message && <p className="text-red-400 text-sm mt-2">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/25"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            <p className="text-sm text-gray-400 text-center">
              Your message will be sent directly to my email. I'll get back to you soon!
            </p>
          </form>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-[#131316] border border-purple-600/30 rounded-2xl p-8 max-w-md w-full relative animate-in fade-in duration-300">
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2 text-white">Message Sent!</h3>
              <p className="text-gray-400 mb-6">
                Thank you for reaching out! I'll get back to you within 24 hours.
              </p>
              
              <button
                onClick={() => setShowSuccess(false)}
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-600 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}