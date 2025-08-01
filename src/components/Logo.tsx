import React from 'react'
import config from "@/config/config.json";
import Image from "next/image";
import Link from "next/link";
import { LogoProps } from '@/types';
const Logo = ({src}: LogoProps) => {
  const {base_url, logo, logo_width, logo_height, logo_text, title} = config.site; 
  return (
    <Link className="flex items-center justify-center" href={base_url}>
      <span className="flex flex-row items-center justify-center text-lg font-medium text-indigo-500 dark:text-gray-100">
        <span>
          <Image
            src={src}
            width={Number(logo_width.replace("px", ""))}
            alt={logo_text}
            height={Number(logo_height.replace("px", ""))}
          />
        </span>
      </span>
    </Link>
  )
}

export default Logo