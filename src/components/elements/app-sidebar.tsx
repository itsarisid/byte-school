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
import { useTranslation } from "react-i18next"
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

// Helper to generate navigation data with translations
const getNavData = (t: (key: string) => string) => ({
  user: {
    name: "Sajid Khan",
    email: "sajidkhan@example.com",
    avatar: "",
  },
  navGroups: [
    {
      label: t("sidebar.general"),
      items: [
        {
          title: t("sidebar.dashboard"),
          url: "/dashboard",
          icon: LayoutDashboard,
        },
      ],
    },
    {
      label: t("sidebar.management"),
      items: [
        {
          title: t("sidebar.students"),
          url: "/students",
          icon: Users,
        },
        {
          title: t("sidebar.teachers"),
          url: "/teachers",
          icon: GraduationCap,
        },
        {
          title: t("sidebar.classes"),
          url: "/classes",
          icon: BookOpen,
        },
        {
          title: t("sidebar.attendance"),
          url: "/attendance",
          icon: UserCheck,
        },
      ],
    },
    {
      label: t("sidebar.academic"),
      items: [
        {
          title: t("sidebar.exams"),
          url: "/exams",
          icon: FileText,
        },
        {
          title: t("sidebar.timetable"),
          url: "/timetable",
          icon: Calendar,
        },
        {
          title: t("sidebar.results"),
          url: "/results",
          icon: ClipboardList,
        },
      ],
    },
    {
      label: t("sidebar.finance"),
      items: [
        {
          title: t("sidebar.fees"),
          url: "/fees",
          icon: CreditCard,
        },
        {
          title: t("sidebar.expenses"),
          url: "/expenses",
          icon: Wallet,
        },
      ],
    },
    {
      label: t("sidebar.communication"),
      items: [
        {
          title: t("sidebar.notices"),
          url: "/notices",
          icon: Bell,
        },
        {
          title: t("sidebar.messages"),
          url: "/messages",
          icon: MessageCircle,
        },
      ],
    },
    {
      label: t("sidebar.system"),
      items: [
        {
          title: t("sidebar.settings"),
          url: "/settings",
          icon: Settings,
        },
        {
          title: t("sidebar.errors"),
          url: "#",
          icon: AlertTriangle,
          items: [
            {
              title: t("sidebar.unauthorized"),
              url: "/unauthorized",
            },
            {
              title: t("sidebar.forbidden"),
              url: "/forbidden",
            },
            {
              title: t("sidebar.not_found"),
              url: "/not-found",
            },
            {
              title: t("sidebar.internal_server_error"),
              url: "/internal-server-error",
            },
            {
              title: t("sidebar.under_maintenance"),
              url: "/under-maintenance",
            },
          ],
        },
      ],
    },
  ],
})

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { t } = useTranslation()
  const data = getNavData(t)

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
                <div className="grid flex-1 text-start text-sm leading-tight">
                  <span className="truncate font-medium">{t("app_name")}</span>
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
