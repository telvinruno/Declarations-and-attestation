"use client"

import {FiSearch,FiBell,FiLogOut,FiSun,FiMoon} from "react-icons/fi"
import {CgProfile} from "react-icons/cg"
import {RiArrowDropDownLine} from "react-icons/ri"
import Image from "next/image";
import safLogo from "../public/safcom_logo-removebg-preview.png";
import type React from "react"
import { useState } from "react"
import { Search, X } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";


export default function Header() {
 
const [isSearchOpen, setIsSearchOpen] = useState(false)
const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Search query:", searchQuery)
    // Add search logic here - API calls?
    setSearchQuery("")
    setIsSearchOpen(false)
  }

 const handleClearSearch = () => {
    setSearchQuery("")
    setIsSearchOpen(false)
  }

    return (
        <header style={styles.header}>


            <Link href="/">
              <Image
                src={safLogo}
                alt="Error"
                width={150}
                height={150}
                style={{paddingLeft:'0px'}}
            />
            </Link>


         <nav>
            {/* <ul style={styles.navList}> */}
            <ul className="block w-full sm:inline-flex sm:w-auto items-center space-x-4 rounded-md b-green-500 px-3 py-1 text-sm font-medium text-white my-1">
                
                

                          <div className="flex items-center">
                            {isSearchOpen ? (
                              <form onSubmit={handleSearch} className="flex items-center gap-2">
                                <input
                                  type="text"
                                  placeholder="Search..."
                                  value={searchQuery}
                                  onChange={(e) => setSearchQuery(e.target.value)}
                                  autoFocus
                                  className="px-4 py-1 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
                                />
                                <button type="button" onClick={handleClearSearch} >
                                  <X size={26} className="text-white" />
                                </button>
                              </form>
                            ) : (
                              <button
                                onClick={() => setIsSearchOpen(true)}
                                className=""
                                aria-label="Open search"
                              >
                               <li><FiSearch size={26}/></li>
                              </button>
                            )}
                          </div>

  <DropdownMenu>
  <DropdownMenuTrigger><li><FiBell size={26}/></li></DropdownMenuTrigger>
  <DropdownMenuContent sideOffset={10}>
    {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator /> */}
    <DropdownMenuItem>Item 1</DropdownMenuItem>
    <DropdownMenuItem>Item 2</DropdownMenuItem>
    
  </DropdownMenuContent>
</DropdownMenu>

                <li><CgProfile size={26}/></li>
                <div>
                     <p style={{fontWeight:'bold',fontSize:'15px'}}>John Doe</p>
                     <p style={{fontSize:'12px',opacity: 0.8}}>RTC Support</p>
                </div>

                
  <DropdownMenu>
  <DropdownMenuTrigger><li><RiArrowDropDownLine size={34}/></li></DropdownMenuTrigger>
  <DropdownMenuContent sideOffset={10}>
    {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator /> */}
    <DropdownMenuItem><FiMoon size={26}/>Theme</DropdownMenuItem>
    <DropdownMenuItem variant="destructive"><FiLogOut size={26}/>Logout</DropdownMenuItem>
    
  </DropdownMenuContent>
</DropdownMenu>

            </ul>
        </nav>
        </header>
    )
}

const styles = {
    header: {
        padding:'20px',
        backgroundColor:'#35A839',
        color:'#fff',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100vw',
        height:'10vh'
    },
    profile:{
        fontSize:'20px'
    },
 
    logo:{
        paddingLeft:'15%'
    }
}