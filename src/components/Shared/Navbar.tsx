"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { usePathname } from "next/navigation" // ✅

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname() // ✅ current route

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Creators", href: "/creators" },
    { name: "Shop", href: "/shop" },
    { name: "Agent", href: "/agent" },
    { name: "Trips", href: "/trips" },
    { name: "Contact Us", href: "/contact" },
  ]

  return (
    <nav className="bg-gray-900 border-b border-gray-800 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src="/logo.png" alt="Logo" width={150} height={50} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href // ✅ check active
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "px-3 py-2 text-sm font-medium transition-colors duration-200 border-b-2",
                      isActive
                        ? "text-cyan-400 border-cyan-400"
                        : "text-gray-300 border-transparent hover:text-cyan-400 hover:border-cyan-400"
                    )}
                  >
                    {item.name}
                  </a>
                )
              })}
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 bg-transparent"
            >
              Become an Agent
            </Button>
            <Button className="bg-cyan-400 text-gray-900 hover:bg-cyan-500">Become a Creator</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-cyan-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-400"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md",
                    isActive
                      ? "text-cyan-400 bg-gray-700"
                      : "text-gray-300 hover:text-cyan-400 hover:bg-gray-700"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              )
            })}
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex flex-col space-y-3 px-3">
                <Button
                  variant="outline"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 w-full bg-transparent"
                >
                  Become an Agent
                </Button>
                <Button className=" text-gray-900 hover:bg-cyan-500 w-full"
                   style={{
          background:
            "linear-gradient(135deg, #7DD3DD 0%, #89CFF0 50%, #A7C8F7 100%)",
          color: "#1B1B1B",
        }}
                >
                  Become a Creator
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
