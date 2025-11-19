"use client"

import {FiSearch,FiBell,FiLogOut,FiSun,FiMoon} from "react-icons/fi"
import {CgProfile} from "react-icons/cg"
import {RiArrowDropDownLine} from "react-icons/ri"
import Image from "next/image";
import safLogo from "../public/safcom_logo-removebg-preview.png";


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function Header() {
    return (
        <header style={styles.header}>
            <Image
                src={safLogo}
                alt="Error"
                width={150}
                height={150}
                style={{paddingLeft:'0px'}}
            />
        


        <nav>
            <ul style={styles.navList}>
                <li><FiSearch size={26}/></li>
                <li><FiBell size={26}/></li>
                <li><CgProfile size={26}/></li>
                <div>
                     <p style={{fontWeight:'bold',fontSize:'15px'}}>Sheila Chege</p>
                     <p style={{fontSize:'12px',opacity: 0.8}}>RTC Support Admin</p>
                </div>.

                
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
        width:'100vw'
    },
    profile:{
        fontSize:'20px'
    },
    navList:{
        listStyle:'none',
        display:'flex',
        gap:'15px'
    },
    logo:{
        paddingLeft:'20px'
    }
}