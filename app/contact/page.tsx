"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    preferredContact: "email",
    inquiryType: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, preferredContact: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log(formData)
    const { toast } = useToast();
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you shortly.",
    })
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      preferredContact: "email",
      inquiryType: "",
    })
  }

  return (
    <div className="flex flex-col justify-center items-center px-40 py-8 md:py-12 ">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Contact Us", href: "/contact", active: true },
        ]}
      />

      <div className="grid lg:grid-cols-2 gap-12 mt-6">
        <div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <p className="text-gray-500">
              Have a question or need assistance? We're here to help! Fill out the form below and our team will get back
              to you as soon as possible.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-rose-100 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-rose-600" />
              </div>
              <div>
                <h3 className="font-medium">Our Location</h3>
                <p className="text-gray-500 mt-1">123 Craft Avenue, Artisan District</p>
                <p className="text-gray-500">New York, NY 10001</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <Mail className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-medium">Email Us</h3>
                <p className="text-gray-500 mt-1">info@giftcraft.com</p>
                <p className="text-gray-500">support@giftcraft.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-emerald-100 p-3 rounded-full">
                <Phone className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-medium">Call Us</h3>
                <p className="text-gray-500 mt-1">(555) 123-4567</p>
                <p className="text-gray-500">Mon-Fri: 9am-6pm, Sat: 10am-4pm</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-rose-50 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Monday - Friday</span>
                <span className="font-medium">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Saturday</span>
                <span className="font-medium">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Sunday</span>
                <span className="font-medium">Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg border shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="inquiryType">Inquiry Type</Label>
                <Select
                  value={formData.inquiryType}
                  onValueChange={(value) => handleSelectChange("inquiryType", value)}
                >
                  <SelectTrigger id="inquiryType">
                    <SelectValue placeholder="Select inquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="order">Order Status</SelectItem>
                    <SelectItem value="custom">Custom Order</SelectItem>
                    <SelectItem value="wholesale">Wholesale Inquiry</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                placeholder="Subject of your message"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Preferred Contact Method</Label>
              <RadioGroup
                value={formData.preferredContact}
                onValueChange={handleRadioChange}
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="email" id="email-contact" />
                  <Label htmlFor="email-contact">Email</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="phone" id="phone-contact" />
                  <Label htmlFor="phone-contact">Phone</Label>
                </div>
              </RadioGroup>
            </div>

            <Button type="submit" className="w-full bg-rose-600 hover:bg-rose-700">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
