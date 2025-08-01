import React from 'react'
import config from "@/config/config.json";
import Image from "next/image";
import Link from "next/link";
import { LogoProps } from '@/types';
const Logo = ({src}: LogoProps) => {
  const {base_url, logo, logo_width, logo_height, logo_text, title} = config.site; 
  return (
    <Link href="/">
      <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
        <span>
          <Image
            src={src}
            width="32"
            alt="N"
            height="32"
            className="w-8"
          />
        </span>
        <span>{title}</span>
      </span>
    </Link>
  )
}

export default Logo