"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Plus, ImagePlus } from "lucide-react"
import Image from "next/image"

interface SocialMedia {
  id: string
  platform: string
  profileLink: string
  followers: string
}

interface Interest {
  id: string
  name: string
}

export default function CreatorForm() {
  const [fullName, setFullName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [bio, setBio] = useState("")
  const [description, setDescription] = useState("")
  const [socialMedia, setSocialMedia] = useState<SocialMedia[]>([
    { id: "1", platform: "Instagram", profileLink: "", followers: "" },
  ])
  const [interests, setInterests] = useState<Interest[]>([{ id: "1", name: "" }])
  const [images, setImages] = useState<File[]>([])

  const addSocialMedia = () => {
    setSocialMedia([
      ...socialMedia,
      { id: Date.now().toString(), platform: "Instagram", profileLink: "", followers: "" },
    ])
  }

  const updateSocialMedia = (id: string, field: keyof SocialMedia, value: string) => {
    setSocialMedia(socialMedia.map((sm) => (sm.id === id ? { ...sm, [field]: value } : sm)))
  }

  const addInterest = () => {
    setInterests([...interests, { id: Date.now().toString(), name: "" }])
  }

  const updateInterest = (id: string, value: string) => {
    setInterests(interests.map((interest) => (interest.id === id ? { ...interest, name: value } : interest)))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files)
      setImages([...images, ...newImages].slice(0, 5))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const formData = {
      fullName,
      phoneNumber,
      emailAddress,
      bio,
      description,
      socialMedia: socialMedia.map((sm) => ({
        platform: sm.platform,
        profileLink: sm.profileLink,
        followers: sm.followers,
      })),
      interests: interests.map((i) => i.name).filter((name) => name.trim() !== ""),
      images: images.map((img) => img.name),
    }

    console.log("[v0] Form Data:", formData)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <div className="max-w-7xl mx-auto">
        <Button
          variant="ghost"
          size="icon"
          className="mb-8 text-white hover:bg-white/10"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>

        <h1 className="text-5xl font-bold italic text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Turn Creativity Into Opportunity
        </h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm mb-2">Full Name</label>
              <Input
                placeholder="Name Here"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="bg-transparent border-gray-700 text-white placeholder:text-gray-500"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm mb-2">Phone Number</label>
              <Input
                placeholder="+1234567890"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="bg-transparent border-gray-700 text-white placeholder:text-gray-500"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm mb-2">Email Address</label>
              <Input
                type="email"
                placeholder="hello@example.com"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                className="bg-transparent border-gray-700 text-white placeholder:text-gray-500"
              />
            </div>

            {/* Social Media */}
            <div>
              <label className="block text-sm mb-2">Social Media</label>
              <div className="space-y-3">
                {socialMedia.map((sm) => (
                  <div key={sm.id} className="flex gap-2">
                    <Select value={sm.platform} onValueChange={(value) => updateSocialMedia(sm.id, "platform", value)}>
                      <SelectTrigger className="w-[140px] bg-transparent border-gray-700 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1a1a1a] border-gray-700 text-white">
                        <SelectItem value="Instagram">Instagram</SelectItem>
                        <SelectItem value="Facebook">Facebook</SelectItem>
                        <SelectItem value="Twitter">Twitter</SelectItem>
                        <SelectItem value="TikTok">TikTok</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      placeholder="Enter your profile link..."
                      value={sm.profileLink}
                      onChange={(e) => updateSocialMedia(sm.id, "profileLink", e.target.value)}
                      className="flex-1 bg-transparent border-gray-700 text-white placeholder:text-gray-500"
                    />
                    <Input
                      placeholder="000K Followers"
                      value={sm.followers}
                      onChange={(e) => updateSocialMedia(sm.id, "followers", e.target.value)}
                      className="w-[140px] bg-transparent border-gray-700 text-white placeholder:text-gray-500"
                    />
                  </div>
                ))}
                <Button
                  type="button"
                  onClick={addSocialMedia}
                  className="w-10 h-10 rounded-full bg-cyan-400 hover:bg-cyan-500 text-black"
                  size="icon"
                >
                  <Plus className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Interests */}
            <div>
              <label className="block text-sm mb-2">Interests</label>
              <div className="space-y-3">
                {interests.map((interest) => (
                  <Input
                    key={interest.id}
                    placeholder="Enter interests name..."
                    value={interest.name}
                    onChange={(e) => updateInterest(interest.id, e.target.value)}
                    className="bg-transparent border-gray-700 text-white placeholder:text-gray-500"
                  />
                ))}
                <Button
                  type="button"
                  onClick={addInterest}
                  className="w-10 h-10 rounded-full bg-cyan-400 hover:bg-cyan-500 text-black"
                  size="icon"
                >
                  <Plus className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Bio */}
            <div>
              <label className="block text-sm mb-2">Bio</label>
              <Textarea
                placeholder="Write your message here..."
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="min-h-[120px] bg-transparent border-gray-700 text-white placeholder:text-gray-500 resize-none"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm mb-2">Description</label>
              <Textarea
                placeholder="Write your message here..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-[140px] bg-transparent border-gray-700 text-white placeholder:text-gray-500 resize-none"
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm mb-2">Image</label>
              <div className="border-2 border-dashed border-gray-700 rounded-lg p-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <ImagePlus className="h-12 w-12 text-gray-600" />
                </div>
                <div className="flex gap-2 justify-center mb-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-10 h-10 border border-gray-700 rounded flex items-center justify-center">
                      {images[i] ? (
                        <Image
                          src={URL.createObjectURL(images[i]) || "/placeholder.svg"}
                          alt={`Upload ${i + 1}`}
                          className="w-full h-full object-cover rounded"
                        />
                      ) : (
                        <ImagePlus className="h-5 w-5 text-gray-600" />
                      )}
                    </div>
                  ))}
                </div>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="block text-center text-sm text-gray-500 cursor-pointer hover:text-gray-400"
                >
                  Click to upload images
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="lg:col-span-2 flex justify-end">
            <Button type="submit" className="bg-cyan-400 hover:bg-cyan-500 text-black font-medium px-12 py-6 text-base">
              Send Request
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
