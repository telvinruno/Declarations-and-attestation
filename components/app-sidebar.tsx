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
      url: "FAQs",
      icon: IconQuestionMark,
    },
    {
      title: "Make a report",
      url: "reportissue",
      icon: IconMessageReport,
    },
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            {/* <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Acme Inc.</span>
              </a>
            </SidebarMenuButton> */}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        {/* <NavUser user={data.user} /> */}
      </SidebarFooter>
    </Sidebar>
  )
}
