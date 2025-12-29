"use client"

import * as React from "react"
import {
  LayoutDashboard,
  Users,
  UserCheck,
  GraduationCap,
  BookOpen,
  Calendar,
  FileText,
  ClipboardList,
  CreditCard,
  Wallet,
  Bell,
  MessageCircle,
  AlertTriangle,
  Settings,
} from "lucide-react"
import { Link } from "react-router-dom"
import { Logo } from "@/components/elements/logo"

import { NavMain } from "@/components/elements/nav-main"
import { NavUser } from "@/components/elements/nav-user"
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
    name: "Sajid Khan",
    email: "sajidkhan@example.com",
    avatar: "",
  },
  navGroups: [
    {
      label: "General",
      items: [
        {
          title: "Dashboard",
          url: "/dashboard",
          icon: LayoutDashboard,
        },
      ],
    },
    {
      label: "Management",
      items: [
        {
          title: "Students",
          url: "/students",
          icon: Users,
        },
        {
          title: "Teachers",
          url: "/teachers",
          icon: GraduationCap,
        },
        {
          title: "Classes",
          url: "/classes",
          icon: BookOpen,
        },
        {
          title: "Attendance",
          url: "/attendance",
          icon: UserCheck,
        },
      ],
    },
    {
      label: "Academic",
      items: [
        {
          title: "Exams",
          url: "/exams",
          icon: FileText,
        },
        {
          title: "Timetable",
          url: "/timetable",
          icon: Calendar,
        },
        {
          title: "Results",
          url: "/results",
          icon: ClipboardList,
        },
      ],
    },
    {
      label: "Finance",
      items: [
        {
          title: "Fees",
          url: "/fees",
          icon: CreditCard,
        },
        {
          title: "Expenses",
          url: "/expenses",
          icon: Wallet,
        },
      ],
    },
    {
      label: "Communication",
      items: [
        {
          title: "Notices",
          url: "/notices",
          icon: Bell,
        },
        {
          title: "Messages",
          url: "/messages",
          icon: MessageCircle,
        },
      ],
    },
    {
      label: "System",
      items: [
        {
          title: "Settings",
          url: "/settings",
          icon: Settings,
        },
        {
          title: "Errors",
          url: "#",
          icon: AlertTriangle,
          items: [
            {
              title: "Unauthorized",
              url: "/unauthorized",
            },
            {
              title: "Forbidden",
              url: "/forbidden",
            },
            {
              title: "Not Found",
              url: "/not-found",
            },
            {
              title: "Internal Server Error",
              url: "/internal-server-error",
            },
            {
              title: "Under Maintenance",
              url: "/under-maintenance",
            },
          ],
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/dashboard">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-primary-foreground">
                  <Logo size={24} className="text-current" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Byte School</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {data.navGroups.map((group) => (
          <NavMain key={group.label} label={group.label} items={group.items} />
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
