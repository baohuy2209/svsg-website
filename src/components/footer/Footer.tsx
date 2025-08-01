"use client"; 
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Linkedin, Globe } from 'lucide-react';
import Image from 'next/image';
import config from "@/config/config.json";
const Footer = () => {
  const footerLinks = {
    services: [
      "Giới thiệu về Lab",
      "Sứ mệnh & Tầm nhìn",
      "Liên hệ",
      "Tin tức",
      "Sự kiện"
    ],
    company: [
      "Lĩnh vực nghiên cứu",
      "Các dự án",
      "Ấn phẩm khoa học",
      "Khóa học & Workshop",
      "Hợp tác"
    ],
    resources: [
      "Đội ngũ thành viên",
      "Cơ hội tham gia",
      "Tài liệu & Công cụ",
      "Liên kết UEL",
      "FAQ"
    ]
  };
  const {base_url, logo, logo_width, logo_height, logo_text, title} = config.site; 
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div 
              className="flex items-center space-x-3 cursor-pointer" 
            >
              <Image
                src={logo}
                width={Number(logo_width.replace("px", ""))}
                alt={logo_text}
                height={Number(logo_height.replace("px", ""))}
              />
              <span className="text-xl font-bold">SGSV UEL Lab</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
            SGSV Lab (SAP Student Group Vietnam) tại Trường Đại học Kinh tế - Luật là nơi hội tụ các sinh viên đam mê công nghệ, đặc biệt là các giải pháp SAP và các công nghệ hiện đại 
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-amber-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">669 Đỗ Mười, khu phố 13, phường Linh Xuân, TP.HCM</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-amber-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+84 373 265 707</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-amber-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">svsg@ngig.edu.vn</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Về SGSV LAB</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200 text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Chương trình & Nghiên cứu</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200 text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Thành viên & Tài nguyên</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200 text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Media */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Follow us:</span>
              <div className="flex items-center space-x-4">
                <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors duration-200">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-blue-700 p-2 rounded-lg transition-colors duration-200">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors duration-200">
                  <Globe className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="flex items-center space-x-3">
              <span className="text-gray-400 text-sm">Stay updated:</span>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border border-gray-700 rounded-l-lg px-4 py-2 text-sm focus:outline-none focus:border-amber-400 transition-colors duration-200"
                />
                <button className="bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-r-lg text-sm font-medium transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 SGSV UEL Lab. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-amber-400 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-200">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;