"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, ImagePlus, Trash2, Loader2 } from "lucide-react"
import Image from "next/image"
import { toast } from "sonner"

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

export default function CreatorBody() {
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
    const [loading, setLoading] = useState(false)

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
            setImages((prev) => [...prev, ...newImages].slice(0, 5))
        }
    }

    const removeImage = (index: number) => {
        setImages(images.filter((_, i) => i !== index))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const formDataObject = {
                fullName,
                phoneNumber,
                email: emailAddress,
                bio,
                description,
                socialMedia: socialMedia.map(({ platform, profileLink, followers }) => ({
                    platform,
                    link: profileLink,
                    followers: Number(followers),
                })),
                interests: interests.map((i) => i.name).filter(Boolean),
            }

            console.log(formDataObject)
            const formData = new FormData()
            formData.append("data", JSON.stringify(formDataObject))
            images.forEach((img) => formData.append("image", img))

            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/creator/request`, {
                method: "POST",

                body: formData,
            })

            const resData = await response.json()

            if (!response.ok) throw new Error(resData.message || "Failed to submit request")

            toast.success("Creator request submitted successfully")
            setFullName("")
            setPhoneNumber("")
            setEmailAddress("")
            setBio("")
            setDescription("")
            setSocialMedia([{ id: crypto.randomUUID(), platform: "Instagram", profileLink: "", followers: "" }])
            setInterests([{ id: crypto.randomUUID(), name: "" }])
            setImages([])
        } catch (error: unknown) {
            if (error instanceof Error) {
                toast.error(error.message);
            } else {
                toast.error("Request failed");
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <div
            className="min-h-screen text-white p-8"
            style={{
                backgroundImage: "url('/background.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            <div className="max-w-7xl mx-auto">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                        {/* Full Name */}
                        <div>
                            <label htmlFor="fullName" className="block text-[16px] mb-2 font-medium text-[#E6E7E6]">
                                Full Name
                            </label>
                            <Input
                                id="fullName"
                                required
                                placeholder="Name Here"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="bg-transparent border-[#929292] text-white placeholder:text-gray-500"
                            />
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label htmlFor="phone" className="block text-[16px] mb-2 font-medium text-[#E6E7E6]">
                                Phone Number
                            </label>
                            <Input
                                id="phone"
                                type="tel"
                                placeholder="+1234567890"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="bg-transparent border-[#929292] text-white placeholder:text-gray-500"
                            />
                        </div>

                        {/* Email Address */}
                        <div>
                            <label htmlFor="email" className="block text-[16px] mb-2 font-medium text-[#E6E7E6]">
                                Email Address
                            </label>
                            <Input
                                id="email"
                                type="email"
                                required
                                placeholder="hello@example.com"
                                value={emailAddress}
                                onChange={(e) => setEmailAddress(e.target.value)}
                                className="bg-transparent border-[#929292] text-white placeholder:text-gray-500"
                            />
                        </div>

                        {/* Social Media */}
                        <div>
                            <label className="block text-[16px] mb-2 font-medium text-[#E6E7E6]">Social Media</label>
                            <div className="space-y-3">
                                {socialMedia.map((sm) => (
                                    <div key={sm.id} className="flex gap-2 items-center">
                                        <Select
                                            value={sm.platform}
                                            onValueChange={(value) =>
                                                handleChange(socialMedia, setSocialMedia, sm.id, "platform", value)
                                            }
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
                                            onChange={(e) =>
                                                handleChange(socialMedia, setSocialMedia, sm.id, "profileLink", e.target.value)
                                            }
                                            className="bg-transparent border-[#929292] text-white placeholder:text-gray-500"
                                        />
                                        <Input
                                            placeholder="Followers"
                                            value={sm.followers}
                                            onChange={(e) =>
                                                handleChange(socialMedia, setSocialMedia, sm.id, "followers", e.target.value)
                                            }
                                            className="bg-transparent border-[#929292] text-white placeholder:text-gray-500"
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
                            <label className="block text-[16px] mb-2 font-medium text-[#E6E7E6]">Interests</label>
                            <div className="space-y-3">
                                {interests.map((interest) => (
                                    <div key={interest.id} className="flex gap-2 items-center">
                                        <Input
                                            placeholder="Interest name..."
                                            value={interest.name}
                                            onChange={(e) =>
                                                handleChange(interests, setInterests, interest.id, "name", e.target.value)
                                            }
                                            className="bg-transparent border-[#929292] text-white placeholder:text-gray-500"
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
                            <label htmlFor="bio" className="block text-[16px] mb-2 font-medium text-[#E6E7E6]">Bio</label>
                            <Textarea
                                id="bio"
                                placeholder="Short bio..."
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                className="bg-transparent border-[#929292] text-white placeholder:text-gray-500"
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label htmlFor="description" className="block text-[16px] mb-2 font-medium text-[#E6E7E6]">Description</label>
                            <Textarea
                                id="description"
                                placeholder="Detailed description..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="bg-transparent border-[#929292] text-white placeholder:text-gray-500"
                            />
                        </div>

                        {/* Image Upload */}
                        <div>
                            <label className="block text-[16px] mb-2 font-medium text-[#E6E7E6]">Images (max 5)</label>
                            <div className="border-2 border-dashed border-[#929292] rounded-lg p-8">
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
                                            className="w-16 h-16 border border-[#929292] rounded flex items-center justify-center cursor-pointer"
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
                            disabled={loading}
                            className="bg-[linear-gradient(135deg,#7DD3DD_0%,#89CFF0_50%,#A7C8F7_100%)] text-[#131313]"
                        >
                            Send Request {loading && <Loader2 className="animate-spin ml-2" />}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
