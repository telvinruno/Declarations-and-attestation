"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"

//Removed: Sheet, Tooltip, Trigger, Rail, collapse logic

type SidebarContextProps = {
  isMobile: boolean
}

const SidebarContext = React.createContext<SidebarContextProps | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }
  return context
}

function SidebarProvider({
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div">) {
  const isMobile = useIsMobile()

  const contextValue = React.useMemo<SidebarContextProps>(
    () => ({ isMobile }),
    [isMobile]
  )

  return (
    <SidebarContext.Provider value={contextValue}>
      <div
        data-slot="sidebar-wrapper"
        style={{
          "--sidebar-width": "16rem",
          "--sidebar-width-icon": "3rem",
          ...style,
        } as React.CSSProperties}
        className={cn(
          "group/sidebar-wrapper flex min-h-svh w-full",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  )
}

function Sidebar({
  side = "left",
  variant = "sidebar",
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  side?: "left" | "right"
  variant?: "sidebar" | "floating" | "inset"
}) {
  const { isMobile } = useSidebar()

  // No collapsing, no mobile sheet — sidebar always visible
  return (
    <div
      className="peer text-sidebar-foreground hidden md:block"
      data-variant={variant}
      data-side={side}
      data-slot="sidebar"
    >
      <div
        data-slot="sidebar-gap"
        className="static w-(--sidebar-width)"
      />

      <div
        data-slot="sidebar-container"
        className={cn(
          "inset-y-0 z-10 hidden h-svh w-(--sidebar-width) md:flex",
          side === "left" ? "left-0" : "right-0",
          className
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          className="bg-sidebar border-sidebar-border flex h-full w-full flex-col"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------- */
/* Removed:
   - SidebarTrigger
   - SidebarRail
   - collapse state logic
*/
/* ------------------------------- */

function SidebarInset({ className, ...props }: React.ComponentProps<"main">) {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn("bg-background relative flex w-full flex-1 flex-col", className)}
      {...props}
    />
  )
}

// Remaining components unchanged (inputs, headers, menus, etc.)

function SidebarInput(props: React.ComponentProps<typeof Input>) {
  return <Input data-sidebar="input" className="bg-background h-8 w-full shadow-none" {...props} />
}

function SidebarHeader(props: React.ComponentProps<"div">) {
  return <div data-sidebar="header" className="flex flex-col gap-2 p-2" {...props} />
}

function SidebarFooter(props: React.ComponentProps<"div">) {
  return <div data-sidebar="footer" className="flex flex-col gap-2 p-2" {...props} />
}

function SidebarSeparator(props: React.ComponentProps<typeof Separator>) {
  return <Separator data-sidebar="separator" className="mx-2 w-auto" {...props} />
}

function SidebarContent(props: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-content"
      className="flex min-h-0 flex-1 flex-col gap-2 overflow-auto"
      {...props}
    />
  )
}

function SidebarGroup(props: React.ComponentProps<"div">) {
  return <div data-sidebar="group" className="flex flex-col p-2" {...props} />
}

function SidebarGroupLabel({ asChild = false, ...props }) {
  const Comp = asChild ? Slot : "div"
  return (
    <Comp
      data-sidebar="group-label"
      className="text-sidebar-foreground/70 h-8 flex items-center px-2 text-xs font-medium"
      {...props}
    />
  )
}

function SidebarGroupAction({ asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      data-sidebar="group-action"
      className="text-sidebar-foreground hover:bg-sidebar-accent absolute top-3.5 right-3 rounded-md p-0"
      {...props}
    />
  )
}

function SidebarGroupContent(props: React.ComponentProps<"div">) {
  return <div data-sidebar="group-content" className="w-full text-sm" {...props} />
}

function SidebarMenu(props: React.ComponentProps<"ul">) {
  return <ul data-sidebar="menu" className="flex flex-col gap-1" {...props} />
}

function SidebarMenuItem(props: React.ComponentProps<"li">) {
  return <li data-sidebar="menu-item" className="relative" {...props} />
}

const sidebarMenuButtonVariants = cva(
  "flex w-full items-center gap-2 rounded-md p-2 text-sm hover:bg-sidebar-accent",
  {
    variants: { size: { default: "h-8", sm: "h-7", lg: "h-12" } },
    defaultVariants: { size: "default" },
  }
)

function SidebarMenuButton({ asChild = false, variant, size, className, ...props }: any) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      data-sidebar="menu-button"
      className={cn(sidebarMenuButtonVariants({ size }), className)}
      {...props}
    />
  )
}

function SidebarMenuBadge(props: React.ComponentProps<"div">) {
  return (
    <div
      data-sidebar="menu-badge"
      className="absolute right-1 top-1.5 h-5 min-w-5 rounded-md bg-sidebar text-xs flex items-center justify-center"
      {...props}
    />
  )
}

function SidebarMenuSkeleton({ showIcon = false }: any) {
  return (
    <div className="flex h-8 items-center gap-2 rounded-md px-2">
      {showIcon && <Skeleton className="size-4" />}
      <Skeleton className="h-4 flex-1" />
    </div>
  )
}

function SidebarMenuSub(props: React.ComponentProps<"ul">) {
  return <ul data-sidebar="menu-sub" className="border-l px-3 ml-3 flex flex-col gap-1" {...props} />
}

function SidebarMenuSubItem(props: React.ComponentProps<"li">) {
  return <li data-sidebar="menu-sub-item" {...props} />
}

function SidebarMenuSubButton({ asChild = false, ...props }) {
  const Comp = asChild ? Slot : "a"
  return (
    <Comp
      data-sidebar="menu-sub-button"
      className="flex h-7 items-center gap-2 rounded-md px-2 hover:bg-sidebar-accent"
      {...props}
    />
  )
}

export {
  Sidebar,
  SidebarProvider,
  SidebarInset,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuBadge,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
  useSidebar
}
