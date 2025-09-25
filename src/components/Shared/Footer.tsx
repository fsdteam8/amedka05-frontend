import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, MapPin, Twitter } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#2A2A2A] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
   {/* Logo */}
          <div className="flex-shrink-0 mb-5">
            <Image src="/logo.png" alt="Logo" width={150} height={50} />
          </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Connecting families with trusted assisted living facilities nationwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Our Creators
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Current Agent
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Trips
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Contact US
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <p className="text-gray-400 flex items-center gap-2">
                <span className="text-green-400">✉</span>
                support@visualhome.com
              </p>
              <p className="text-gray-400 flex items-center gap-2">
                <span className="text-green-400">📞</span>
                +1 (555) 123-4567FGHJ
              </p>
              <p className="text-gray-400 flex items-start gap-2">
                <span className="text-red-400"><MapPin /></span>
                <span>
                  123 Care Street, City, State, ZIP
                  <br />
                  Address: 123 Care Street, City, State, ZIP
                </span>
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe for updates & news</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                placeholder="Enter your email"
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 flex-1"
              />
              <Button className=" text-gray-900 hover:bg-cyan-500"
              
              
                   style={{
          background:
            "linear-gradient(135deg, #7DD3DD 0%, #89CFF0 50%, #A7C8F7 100%)",
          color: "#1B1B1B",
        }}>Subscribe</Button>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">© 2025 Next Level. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
