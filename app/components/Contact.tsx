// Contact.tsx - Updated with OAuth2 API Call
"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("Error sending email");
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    // } catch (error) {
    //   console.error("Failed to send email:", error);
    //   setStatus("error");
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: `Failed to send email: ${error.message}` });
    } finally {
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="gradient-text">Let's Connect!</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Contact Info, Social Links, and Resume Options */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-4">
                    <Mail className="text-primary" size={24} />
                    <a
                      href="mailto:kdasaradha525@gmail.com"
                      className="hover:text-primary transition-colors"
                    >
                      kdasaradha525@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Social Links</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-4">
                    <SiLinkedin className="text-primary" size={24} />
                    <a
                      href="https://www.linkedin.com/in/dasaradha-rami-reddy-kesari-b8471417b"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li className="flex items-center space-x-4">
                    <SiGithub className="text-primary" size={24} />
                    <a
                      href="https://github.com/KDasaradha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      GitHub
                    </a>
                  </li>
                  <li className="flex items-center space-x-4">
                    <FaTwitter className="text-primary" size={24} />
                    <a
                      href="https://twitter.com/your-twitter-handle"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      Twitter/X
                    </a>
                  </li>
                </ul>
              </div>
              {/* Resume Options */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Resume</h3>
                <div className="flex flex-wrap gap-4">
                  {/* View Resume: Opens the PDF in a new tab */}
                  <a
                    href="/Kesari%20Dasaradha%20Rami%20Reddy%20Resume%20Final.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline">View Resume</Button>
                  </a>
                  {/* Download Resume: Forces the file download */}
                  <a
                    href="/Kesari%20Dasaradha%20Rami%20Reddy%20Resume%20Final.pdf"
                    download
                  >
                    <Button variant="outline">Download Resume</Button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Right Column: Email Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>Fill out the form below to get in touch.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={5}
                    />
                  </div>
                  <Button type="submit" disabled={status === "sending"}>
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </Button>
                  {status === "success" && (
                    <p className="text-green-600 text-sm">Message sent successfully!</p>
                  )}
                  {status === "error" && (
                    <p className="text-red-600 text-sm">Failed to send message. Please try again.</p>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
