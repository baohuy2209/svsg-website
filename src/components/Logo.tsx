import React from 'react'
import config from "@/config/config.json";
import Image from "next/image";
import Link from "next/link";
import { LogoProps } from '@/types';
const Logo = ({src}: LogoProps) => {
  const {base_url, logo, logo_width, logo_height, logo_text, title} = config.site; 
  return (
    <Link href={base_url} style={{width: logo_width.replace("px", "") + "px", height: logo_height.replace("px","") + "px"}}>
      <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
        <span>
          <Image
            src={src}
            width={Number(logo_width.replace("px", ""))}
            alt={logo_text}
            height={Number(logo_height.replace("px", ""))}
            className="w-8"
          />
        </span>
        <span>{title}</span>
      </span>
    </Link>
  )
}

export default Logo