import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "./ui/button";

interface FooterProps {
  companyName?: string;
  companyAddress?: string;
  companyPhone?: string;
  companyEmail?: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
  navigationLinks?: {
    title: string;
    href: string;
  }[];
}

const Footer = ({
  companyName = "Cabinet Portal",
  companyAddress = "123 Cabinet Street, Suite 100, Furniture City, FC 12345",
  companyPhone = "+1 (555) 123-4567",
  companyEmail = "info@cabinetportal.com",
  socialLinks = {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
  },
  navigationLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Products", href: "/products" },
    { title: "Contact", href: "/contact" },
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
  ],
}: FooterProps) => {
  return (
    <footer className="bg-slate-900 text-white py-12 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">{companyName}</h3>
            <p className="text-slate-300 text-sm">
              Your complete solution for cabinet management and organization.
            </p>
            <div className="flex space-x-4">
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  <Facebook size={20} />
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  <Twitter size={20} />
                </a>
              )}
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  <Instagram size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {navigationLinks.slice(0, 4).map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Legal</h3>
            <ul className="space-y-2">
              {navigationLinks.slice(4).map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-slate-300">
                <MapPin size={16} />
                <span className="text-sm">{companyAddress}</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Phone size={16} />
                <span className="text-sm">{companyPhone}</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Mail size={16} />
                <span className="text-sm">{companyEmail}</span>
              </div>
            </div>
            <div className="pt-2">
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} {companyName}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
