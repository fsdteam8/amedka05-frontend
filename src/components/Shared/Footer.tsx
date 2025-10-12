"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useNewsletter } from "@/hooks/ApiCalling"
import { toast } from "sonner"
import {
    Facebook,
    Instagram,
    Linkedin,
    Loader2,
    Mail,
    MapPinCheckInside,
    Phone,
    Twitter,
} from "lucide-react"

export function Footer() {
    const newsletterMutation = useNewsletter()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const email = formData.get("email") as string

        if (!email) {
            toast.error("Please enter your email")
            return
        }
        newsletterMutation.mutate({ email })
        e.currentTarget.reset()
    }

    return (
        <footer className="bg-[#2A2A2A] text-[#929292]">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <h2 className="text-3xl font-bold text-[#89CFF0] mb-4 italic">
                            Next Level
                        </h2>
                        <p className="text-[color:var(--footer-muted)] text-sm leading-relaxed">
                            Connecting families with trusted assisted living facilities nationwide.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-semibold mb-4 text-[#E7E7E7]">
                            Quick Links
                        </h3>
                        <nav className="space-y-3">
                            {["Home", "Our Creators", "Shop", "Current Agent", "Trips", "Contact Us"].map(
                                (link) => (
                                    <a
                                        key={link}
                                        href="#"
                                        className="block text-[color:var(--footer-muted)] hover:text-[color:var(--footer-foreground)] transition-colors text-sm"
                                    >
                                        {link}
                                    </a>
                                )
                            )}
                        </nav>
                    </div>

                    {/* Contact Us */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-semibold mb-4 text-[#E7E7E7]">
                            Contact Us
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <span className="text-yellow-400 text-sm">
                                    <Mail size={16} />
                                </span>
                                <a
                                    href="mailto:support@visualhome.com"
                                    className="text-[color:var(--footer-muted)] hover:text-[color:var(--footer-foreground)] transition-colors text-sm"
                                >
                                    support@visualhome.com
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-green-400 text-sm">
                                    <Phone size={16} />
                                </span>
                                <a
                                    href="tel:+15551234567"
                                    className="text-[color:var(--footer-muted)] hover:text-[color:var(--footer-foreground)] transition-colors text-sm"
                                >
                                    +1 (555) 123-4567
                                </a>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-[#C40014] text-sm mt-0.5">
                                    <MapPinCheckInside size={16} />
                                </span>
                                <address className="text-[color:var(--footer-muted)] text-sm not-italic leading-relaxed">
                                    123 Care Street, City, State, ZIP
                                    <br />
                                    Address: 123 Care Street, City, State, ZIP
                                </address>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-semibold mb-4 text-[#E7E7E7]">
                            Newsletter
                        </h3>
                        <p className="text-[color:var(--footer-muted)] text-sm mb-4">
                            Subscribe for updates & news
                        </p>

                        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
                            <Input
                                type="email"
                                name="email"
                                required
                                placeholder="Enter your email"
                                className="bg-[color:var(--footer-background)] border-[#7DD3DD] text-[color:var(--footer-foreground)] placeholder:text-[color:var(--footer-muted)] focus:border-[color:var(--footer-accent)] flex-1"
                            />
                            <Button
                                type="submit"
                                className="bg-[linear-gradient(135deg,#7DD3DD_0%,#89CFF0_50%,#A7C8F7_100%)] text-white px-6 whitespace-nowrap"
                            >
                                Subscribe {newsletterMutation.isPending && <Loader2 className="animate-spin mr-2" />}
                            </Button>
                        </form>

                        {/* Social Media Icons */}
                        <div className="flex gap-3">
                            {[
                                { icon: <Facebook />, label: "Facebook" },
                                { icon: <Instagram />, label: "Instagram" },
                                { icon: <Linkedin />, label: "LinkedIn" },
                                { icon: <Twitter />, label: "Twitter" },
                            ].map(({ icon, label }) => (
                                <a
                                    key={label}
                                    href="#"
                                    className="w-8 h-8 bg-[#6C757D] hover:bg-[color:var(--footer-accent)] rounded flex items-center justify-center transition-colors group"
                                    aria-label={label}
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-transparent [border-image:linear-gradient(135deg,#7DD3DD_0%,#89CFF0_50%,#A7C8F7_100%)_1] mt-8 pt-6">
                    <p className="text-center text-[color:var(--footer-muted)] text-sm">
                        © 2023 Next Level. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
