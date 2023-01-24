import Link from "next/link";
import Image from 'next/image'

import logoimg from '../assets/logo.png';

const Logo = () => {
    return (
        <Link href="/">
          <span className="my-2 flex items-center justify-between w-full space-x-1 text-black">
            <div>
              <Image
                src={logoimg}
                alt="Picture of the author"
                width="400px"
              />
            </div>
            <span className="font-bold text-xl font-poppins tracking-tight whitespace-nowrap">JS Array Mastery</span>
          </span>      
        </Link>
    )
}

export default Logo;
