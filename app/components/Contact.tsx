"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, PhoneCall, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { useState, useRef, useCallback } from "react";
import { toast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  const validateForm = useCallback((data: ContactFormData): FormErrors => {
    const newErrors: FormErrors = {};
    
    if (!data.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (data.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!data.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!data.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (data.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
    }
    
    if (!data.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (data.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    return newErrors;
  }, []);

  const handleInputChange = useCallback((field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  }, [errors]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  }, [formData, validateForm]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.3 : 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="contact" 
      className="py-20 bg-gradient-to-br from-background via-secondary/5 to-background"
      ref={sectionRef}
      aria-label="Contact section"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-4xl font-bold mb-4 text-center gradient-text"
            variants={itemVariants}
          >
            Let's Connect!
          </motion.h2>
          
          <motion.p
            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you. Send me a message and I'll respond as soon as possible.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-2"
              variants={itemVariants}
            >
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold flex items-center gap-2">
                    <Send className="w-6 h-6 text-primary" />
                    Send me a message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">
                          Name *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className={errors.name ? 'border-red-500 focus:border-red-500' : ''}
                          placeholder="Your full name"
                          required
                          aria-describedby={errors.name ? 'name-error' : undefined}
                          disabled={isSubmitting}
                        />
                        {errors.name && (
                          <p id="name-error" className="text-sm text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.name}
                          </p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className={errors.email ? 'border-red-500 focus:border-red-500' : ''}
                          placeholder="your.email@example.com"
                          required
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          disabled={isSubmitting}
                        />
                        {errors.email && (
                          <p id="email-error" className="text-sm text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-medium">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        className={errors.subject ? 'border-red-500 focus:border-red-500' : ''}
                        placeholder="What's this about?"
                        required
                        aria-describedby={errors.subject ? 'subject-error' : undefined}
                        disabled={isSubmitting}
                      />
                      {errors.subject && (
                        <p id="subject-error" className="text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.subject}
                        </p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className={`min-h-[120px] resize-y ${errors.message ? 'border-red-500 focus:border-red-500' : ''}`}
                        placeholder="Tell me about your project or inquiry..."
                        required
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        disabled={isSubmitting}
                      />
                      {errors.message && (
                        <p id="message-error" className="text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.message}
                        </p>
                      )}
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full md:w-auto"
                      disabled={isSubmitting}
                      aria-describedby="submit-status"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : submitStatus === 'success' ? (
                        <>
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                    
                    {submitStatus !== 'idle' && (
                      <div id="submit-status" className="sr-only">
                        {submitStatus === 'success' ? 'Message sent successfully' : 'Failed to send message'}
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              variants={itemVariants}
            >
              <div className="space-y-6">
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold flex items-center gap-2">
                      <PhoneCall className="w-5 h-5 text-primary" />
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4" role="list">
                      <li className="flex items-center space-x-3">
                        <PhoneCall className="text-primary flex-shrink-0" size={20} />
                        <a
                          href="tel:+919032414439"
                          className="text-sm font-medium hover:text-primary transition-colors duration-200"
                          aria-label="Call +91 9032414439"
                        >
                          +91 9032414439
                        </a>
                      </li>
                      <li className="flex items-center space-x-3">
                        <SiWhatsapp className="text-green-500 flex-shrink-0" size={20} />
                        <a
                          href="https://wa.me/919032414439"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium hover:text-primary transition-colors duration-200"
                          aria-label="Message on WhatsApp"
                        >
                          WhatsApp
                        </a>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Mail className="text-red-500 flex-shrink-0" size={20} />
                        <a
                          href="mailto:kdasaradha525@gmail.com"
                          className="text-sm font-medium hover:text-primary transition-colors duration-200 break-all"
                          aria-label="Send email to kdasaradha525@gmail.com"
                        >
                          kdasaradha525@gmail.com
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">
                      Social Links
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4" role="list">
                      <li className="flex items-center space-x-3">
                        <SiLinkedin className="text-blue-600 flex-shrink-0" size={20} />
                        <a
                          href="https://www.linkedin.com/in/dasaradha-rami-reddy-kesari-b8471417b"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium hover:text-primary transition-colors duration-200"
                          aria-label="Visit LinkedIn profile"
                        >
                          LinkedIn
                        </a>
                      </li>
                      <li className="flex items-center space-x-3">
                        <SiGithub className="text-gray-700 dark:text-gray-300 flex-shrink-0" size={20} />
                        <a
                          href="https://github.com/KDasaradha"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium hover:text-primary transition-colors duration-200"
                          aria-label="Visit GitHub profile"
                        >
                          GitHub
                        </a>
                      </li>
                      <li className="flex items-center space-x-3">
                        <FaTwitter className="text-blue-400 flex-shrink-0" size={20} />
                        <a
                          href="https://twitter.com/k_dasaradh66626"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium hover:text-primary transition-colors duration-200"
                          aria-label="Visit Twitter profile"
                        >
                          Twitter/X
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">
                      Resume
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-3">
                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md hover:opacity-90 transition-opacity duration-200"
                      >
                        <a
                          href="/Dasaradha_Kesari_Developer_Resume.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View resume in new tab"
                        >
                          View Resume
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        <a
                          href="/Dasaradha_Kesari_Developer_Resume.pdf"
                          download="Kesari_Dasaradh_Resume.pdf"
                          aria-label="Download resume PDF"
                        >
                          Download Resume
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
