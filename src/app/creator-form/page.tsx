"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Plus, ImagePlus, Trash2 } from "lucide-react"
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
    { id: crypto.randomUUID(), platform: "Instagram", profileLink: "", followers: "" },
  ])
  const [interests, setInterests] = useState<Interest[]>([{ id: crypto.randomUUID(), name: "" }])
  const [images, setImages] = useState<File[]>([])

  // ---- Utility Functions ----
  const handleChange = <T extends { id: string }>(
    list: T[],
    setList: React.Dispatch<React.SetStateAction<T[]>>,
    id: string,
    key: keyof T,
    value: string
  ) => {
    setList(list.map((item) => (item.id === id ? { ...item, [key]: value } : item)))
  }

  const handleAdd = <T extends { id: string }>(
    list: T[],
    setList: React.Dispatch<React.SetStateAction<T[]>>,
    newItem: Omit<T, "id">
  ) => {
    setList([...list, { id: crypto.randomUUID(), ...newItem } as T])
  }

  const handleRemove = <T extends { id: string }>(
    list: T[],
    setList: React.Dispatch<React.SetStateAction<T[]>>,
    id: string
  ) => {
    setList(list.filter((item) => item.id !== id))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files)
      setImages((prev) => [...prev, ...newImages].slice(0, 5)) // max 5 images
    }
  }

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const formData = {
      fullName,
      phoneNumber,
      emailAddress,
      bio,
      description,
      socialMedia: socialMedia.map(({ platform, profileLink, followers }) => ({
        platform,
        profileLink,
        followers,
      })),
      interests: interests.map((i) => i.name).filter(Boolean),
      images: images.map((img) => img.name),
    }

    console.log("✅ Form Data:", formData)
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
              <label htmlFor="fullName" className="block text-sm mb-2">Full Name</label>
              <Input
                id="fullName"
                required
                placeholder="Name Here"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="bg-transparent border-gray-700 text-white placeholder:text-gray-500"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-sm mb-2">Phone Number</label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1234567890"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="bg-transparent border-gray-700 text-white placeholder:text-gray-500"
              />
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-sm mb-2">Email Address</label>
              <Input
                id="email"
                type="email"
                required
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
                  <div key={sm.id} className="flex gap-2 items-center">
                    <Select
                      value={sm.platform}
                      onValueChange={(value) => handleChange(socialMedia, setSocialMedia, sm.id, "platform", value)}
                    >
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
                      placeholder="Profile link..."
                      value={sm.profileLink}
                      onChange={(e) => handleChange(socialMedia, setSocialMedia, sm.id, "profileLink", e.target.value)}
                      className="flex-1 bg-transparent border-gray-700 text-white"
                    />
                    <Input
                      placeholder="Followers"
                      value={sm.followers}
                      onChange={(e) => handleChange(socialMedia, setSocialMedia, sm.id, "followers", e.target.value)}
                      className="w-[140px] bg-transparent border-gray-700 text-white"
                    />
                    <Button
                      type="button"
                      size="icon"
                      variant="ghost"
                      onClick={() => handleRemove(socialMedia, setSocialMedia, sm.id)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  onClick={() =>
                    handleAdd(socialMedia, setSocialMedia, { platform: "Instagram", profileLink: "", followers: "" })
                  }
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
                  <div key={interest.id} className="flex gap-2 items-center">
                    <Input
                      placeholder="Interest name..."
                      value={interest.name}
                      onChange={(e) => handleChange(interests, setInterests, interest.id, "name", e.target.value)}
                      className="bg-transparent border-gray-700 text-white"
                    />
                    <Button
                      type="button"
                      size="icon"
                      variant="ghost"
                      onClick={() => handleRemove(interests, setInterests, interest.id)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  onClick={() => handleAdd(interests, setInterests, { name: "" })}
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
              <label htmlFor="bio" className="block text-sm mb-2">Bio</label>
              <Textarea
                id="bio"
                placeholder="Short bio..."
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="min-h-[120px] bg-transparent border-gray-700 text-white resize-none"
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm mb-2">Description</label>
              <Textarea
                id="description"
                placeholder="Detailed description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-[140px] bg-transparent border-gray-700 text-white resize-none"
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm mb-2">Images (max 5)</label>
              <div className="border-2 border-dashed border-gray-700 rounded-lg p-8">
                <div className="flex flex-wrap gap-4 justify-center">
                  {images.map((img, i) => (
                    <div key={i} className="relative w-16 h-16 border border-gray-700 rounded overflow-hidden">
                      <Image
                        src={URL.createObjectURL(img)}
                        alt={`Upload ${i + 1}`}
                        fill
                        className="object-cover rounded"
                      />
                      <button
                        type="button"
                        className="absolute top-0 right-0 bg-black/70 text-white p-1"
                        onClick={() => removeImage(i)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                  {images.length < 5 && (
                    <label
                      htmlFor="image-upload"
                      className="w-16 h-16 border border-gray-700 rounded flex items-center justify-center cursor-pointer"
                    >
                      <ImagePlus className="h-6 w-6 text-gray-500" />
                    </label>
                  )}
                </div>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="lg:col-span-2 flex justify-end">
            <Button
              type="submit"
              className="bg-cyan-400 hover:bg-cyan-500 text-black font-medium px-12 py-6 text-base"
            >
              Send Request
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
