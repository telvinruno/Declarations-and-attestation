import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import  Giftdeclarationform from "@/components/giftdeclarationform"
import { ScrollArea } from "@/components/ui/scroll-area"

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"




export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 65)",
          "--header-height": "calc(var(--spacing) * 10)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset"/>
      <SidebarInset >
        <SiteHeader /> 
        <ScrollArea className="h-screen rounded-md border-l">
        <div className="flex flex-1 flex-col ">
          
          <div className="@container/main flex flex-1 flex-col gap-2 ">
          
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 ">
             
              <div className="px-4 lg:px-6 ">
                
                <Giftdeclarationform />
              
              </div>
              {/* <DataTable data={data} /> */}
            </div>
          </div>
         
        </div>
         </ScrollArea>
      </SidebarInset>
    </SidebarProvider>
  )
}
