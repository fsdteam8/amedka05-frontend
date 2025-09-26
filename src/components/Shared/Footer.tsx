import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[color:var(--footer-background)] text-[color:var(--footer-foreground)] border-t border-[color:var(--footer-border)]">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-[color:var(--footer-accent)] mb-4 italic">Next Level</h2>
            <p className="text-[color:var(--footer-muted)] text-sm leading-relaxed">
              Connecting families with trusted assisted living facilities nationwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-[color:var(--footer-foreground)]">Quick Links</h3>
            <nav className="space-y-3">
              <a
                href="#"
                className="block text-[color:var(--footer-muted)] hover:text-[color:var(--footer-foreground)] transition-colors text-sm"
              >
                Home
              </a>
              <a
                href="#"
                className="block text-[color:var(--footer-muted)] hover:text-[color:var(--footer-foreground)] transition-colors text-sm"
              >
                Our Creators
              </a>
              <a
                href="#"
                className="block text-[color:var(--footer-muted)] hover:text-[color:var(--footer-foreground)] transition-colors text-sm"
              >
                Shop
              </a>
              <a
                href="#"
                className="block text-[color:var(--footer-muted)] hover:text-[color:var(--footer-foreground)] transition-colors text-sm"
              >
                Current Agent
              </a>
              <a
                href="#"
                className="block text-[color:var(--footer-muted)] hover:text-[color:var(--footer-foreground)] transition-colors text-sm"
              >
                Trips
              </a>
              <a
                href="#"
                className="block text-[color:var(--footer-muted)] hover:text-[color:var(--footer-foreground)] transition-colors text-sm"
              >
                Contact Us
              </a>
            </nav>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-[color:var(--footer-foreground)]">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-sm">✉</span>
                <a
                  href="mailto:support@visualhome.com"
                  className="text-[color:var(--footer-muted)] hover:text-[color:var(--footer-foreground)] transition-colors text-sm"
                >
                  support@visualhome.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-sm">📞</span>
                <a
                  href="tel:+15551234567"
                  className="text-[color:var(--footer-muted)] hover:text-[color:var(--footer-foreground)] transition-colors text-sm"
                >
                  +1 (555) 123-4567GHJ
                </a>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-400 text-sm mt-0.5">📍</span>
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
            <h3 className="text-lg font-semibold mb-4 text-[color:var(--footer-foreground)]">Newsletter</h3>
            <p className="text-[color:var(--footer-muted)] text-sm mb-4">Subscribe for updates & news</p>
            <div className="flex gap-2 mb-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-[color:var(--footer-background)] border-[color:var(--footer-border)] text-[color:var(--footer-foreground)] placeholder:text-[color:var(--footer-muted)] focus:border-[color:var(--footer-accent)] flex-1"
              />
              <Button className="bg-[color:var(--footer-accent)] hover:bg-[color:var(--footer-accent)]/80 text-white px-6 whitespace-nowrap">
                Subscribe
              </Button>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 bg-[color:var(--footer-border)] hover:bg-[color:var(--footer-accent)] rounded flex items-center justify-center transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-[color:var(--footer-muted)] group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-[color:var(--footer-border)] hover:bg-[color:var(--footer-accent)] rounded flex items-center justify-center transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-[color:var(--footer-muted)] group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-[color:var(--footer-border)] hover:bg-[color:var(--footer-accent)] rounded flex items-center justify-center transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-[color:var(--footer-muted)] group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-[color:var(--footer-border)] hover:bg-[color:var(--footer-accent)] rounded flex items-center justify-center transition-colors group"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 text-[color:var(--footer-muted)] group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[color:var(--footer-border)] mt-8 pt-6">
          <p className="text-center text-[color:var(--footer-muted)] text-sm">
            © 2023 Next Level. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
