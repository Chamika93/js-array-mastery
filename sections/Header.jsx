import {useState, useEffect} from "react";
import { useRouter } from 'next/router';
import Link from "next/link";

import Logo from "../components/Logo";
import {useTheme} from "next-themes";
import{SunIcon ,MoonIcon} from "@heroicons/react/solid";

const Header = () => {
  const {systemTheme , theme, setTheme} = useTheme ();
  const [mounted, setMounted] = useState(false);
  const router = useRouter()

  useEffect(() =>{
    setMounted(true);
  },[])

  const renderThemeChanger= () => {
    if(!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme ;

    if(currentTheme ==="dark"){
      return (
        <SunIcon className="w-10 h-10 text-yellow-500 " role="button" onClick={() => setTheme('light')} />
      )
    }

    else {
      return (
        <MoonIcon className="w-10 h-10 text-gray-900 " role="button" onClick={() => setTheme('dark')} />
      )
    }
 };

  return (
        <header className="flex w-full bg-white drop-shadow-md">
          <div className="w-full h-[64px] mx-4 md:mx-10 flex justify-between items-center">
            <Logo />
            <ul className="flex items-center">
              <li className="font-bold"> <Link href="/challenge-list">Challenges</Link></li>
              {/* <li className="ml-4"><button className="bg-green text-white font-bold p-2 rounded" >Sign In</button></li> */}
            </ul>
            {/**renderThemeChanger() **/}
          </div>
        </header>
    );
};

export default Header;