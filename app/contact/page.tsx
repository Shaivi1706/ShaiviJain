"use client";
import { useState } from "react";
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle, X } from "lucide-react";

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
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setShowSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: Mail,
      label: "Email",
      value: "shaivicseai@gmail.com",
      href: "mailto:shaivicseai@gmail.com"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Shaivi1706",
      href: "https://github.com/shaivi1706"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Shaivi Jain",
      href: "https://linkedin.com/in/shaivi-jain"
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
      <section className="min-h-screen flex items-center justify-center px-4 py-20 text-white font-sans relative overflow-hidden">
        {/* Cosmic background effects */}
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent" style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(96, 165, 250, 0.08), transparent 50%)'
        }} />
        <div className="absolute inset-0 bg-gradient-radial from-blue-400/5 via-transparent to-transparent" style={{
          background: 'radial-gradient(circle at 70% 80%, rgba(59, 130, 246, 0.08), transparent 50%)'
        }} />
        
        {/* Twinkling stars effect */}
        <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-40 left-1/4 w-2 h-2 bg-blue-200 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-60 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-40 left-10 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl bg-black/40 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-blue-400/20 shadow-2xl relative z-10" style={{
          boxShadow: '0 0 40px rgba(96, 165, 250, 0.1), 0 0 80px rgba(59, 130, 246, 0.05)'
        }}>
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                Let's Connect
              </h2>
              <p className="text-blue-200/80 text-lg">
                Ready to bring your ideas to life? Drop me a message and let's create something amazing together.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/30 border border-blue-400/20 hover:border-blue-300/40 transition-all duration-300 hover:bg-slate-900/50" style={{
                    boxShadow: 'inset 0 1px 0 rgba(96, 165, 250, 0.1)'
                  }}>
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20" style={{
                      background: 'radial-gradient(circle, rgba(96, 165, 250, 0.2) 0%, rgba(59, 130, 246, 0.1) 70%)',
                      boxShadow: '0 0 20px rgba(96, 165, 250, 0.1)'
                    }}>
                      <Icon className="text-blue-300 text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-200/60">{item.label}</p>
                      <p className="text-blue-100 font-medium">{item.value}</p>
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

            <div className="p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-400/30" style={{
              background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.08) 0%, rgba(59, 130, 246, 0.08) 100%)',
              boxShadow: 'inset 0 1px 0 rgba(96, 165, 250, 0.2)'
            }}>
              <h3 className="font-semibold mb-2 text-blue-200">Quick Response</h3>
              <p className="text-sm text-blue-200/70">
                I typically respond within 24 hours. For urgent matters, feel free to reach out directly via email.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-3 text-blue-200">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your full name"
                className={`w-full px-4 py-4 rounded-xl bg-slate-900/40 border transition-all duration-300 focus:outline-none focus:ring-2 text-blue-100 placeholder-blue-300/50 ${
                  errors.name 
                    ? 'border-red-400/50 focus:ring-red-400/30 focus:border-red-400/50' 
                    : 'border-blue-400/30 hover:border-blue-300/50 focus:ring-blue-400/30 focus:border-blue-300/50'
                }`}
                style={{
                  background: 'rgba(15, 23, 42, 0.4)',
                  boxShadow: 'inset 0 1px 0 rgba(96, 165, 250, 0.1)'
                }}
              />
              {errors.name && <p className="text-red-300 text-sm mt-2">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-3 text-blue-200">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                className={`w-full px-4 py-4 rounded-xl bg-slate-900/40 border transition-all duration-300 focus:outline-none focus:ring-2 text-blue-100 placeholder-blue-300/50 ${
                  errors.email 
                    ? 'border-red-400/50 focus:ring-red-400/30 focus:border-red-400/50' 
                    : 'border-blue-400/30 hover:border-blue-300/50 focus:ring-blue-400/30 focus:border-blue-300/50'
                }`}
                style={{
                  background: 'rgba(15, 23, 42, 0.4)',
                  boxShadow: 'inset 0 1px 0 rgba(96, 165, 250, 0.1)'
                }}
              />
              {errors.email && <p className="text-red-300 text-sm mt-2">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-3 text-blue-200">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project, ideas, or just say hello..."
                rows={5}
                className={`w-full px-4 py-4 rounded-xl bg-slate-900/40 border transition-all duration-300 focus:outline-none focus:ring-2 resize-none text-blue-100 placeholder-blue-300/50 ${
                  errors.message 
                    ? 'border-red-400/50 focus:ring-red-400/30 focus:border-red-400/50' 
                    : 'border-blue-400/30 hover:border-blue-300/50 focus:ring-blue-400/30 focus:border-blue-300/50'
                }`}
                style={{
                  background: 'rgba(15, 23, 42, 0.4)',
                  boxShadow: 'inset 0 1px 0 rgba(96, 165, 250, 0.1)'
                }}
              />
              {errors.message && <p className="text-red-300 text-sm mt-2">{errors.message}</p>}
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] hover:shadow-lg"
              style={{
                boxShadow: '0 0 20px rgba(96, 165, 250, 0.3), 0 8px 32px rgba(96, 165, 250, 0.1)'
              }}
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            <p className="text-sm text-blue-200/60 text-center">
              Your message will be sent directly to my email. I'll get back to you soon!
            </p>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-slate-900/90 border border-blue-400/30 rounded-2xl p-8 max-w-md w-full relative animate-in fade-in duration-300" style={{
            background: 'rgba(15, 23, 42, 0.9)',
            boxShadow: '0 0 40px rgba(96, 165, 250, 0.2)'
          }}>
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute top-4 right-4 text-blue-300/60 hover:text-blue-200 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4" style={{
                boxShadow: '0 0 30px rgba(96, 165, 250, 0.2)'
              }}>
                <CheckCircle className="w-8 h-8 text-blue-300" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2 text-blue-100">Message Sent!</h3>
              <p className="text-blue-200/70 mb-6">
                Thank you for reaching out! I'll get back to you within 24 hours.
              </p>
              
              <button
                onClick={() => setShowSuccess(false)}
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                style={{
                  boxShadow: '0 0 20px rgba(96, 165, 250, 0.3)'
                }}
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