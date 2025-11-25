"use client"

import * as React from "react"
import {
  IconQuestionMark,
  IconMessageReport,
  IconProtocol,
  IconHistory,
  IconFileCheck,
  IconLayoutDashboard
} from "@tabler/icons-react"


import {MdOutlineDashboard} from 'react-icons/md'

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
// import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "random",
    email: "random@safaricom.co.ke",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: IconLayoutDashboard,
    },
    {
      title: "Commitments page",
      url: "/commitments",
      icon: IconFileCheck,
    },
    {
      title: "Declaration page",
      url: "/declarations",
      icon: IconFileCheck,
    },
    {
      title: "User history",
      url: "/history",
      icon: IconHistory,
    }
    
  ],
  
  navSecondary: [
    {
      title: "Policies",
      url: "https://en.wikipedia.org/wiki/Policy",
      icon: IconProtocol,
    },
    {
      title: "FAQs",
      url: "/FAQs",
      icon: IconQuestionMark,
    },
    {
      title: "Make a report",
      url: "/reportissue",
      icon: IconMessageReport,
    },
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar  {...props} className="bg-white">
      <SidebarContent>
        <NavMain items={data.navMain} className="h-3/7 fixed top-30 left-4" />
        <div className="h-2/7"></div>
        <NavSecondary items={data.navSecondary} className="fixed bottom-4 left-4" />
      </SidebarContent>
    </Sidebar>
  )
}
