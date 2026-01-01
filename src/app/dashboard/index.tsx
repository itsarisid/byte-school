"use client"

import { BaseLayout } from "@/components/layouts/base-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Users,
  GraduationCap,
  UsersRound,
  Trophy,
  TrendingUp,
  TrendingDown,
  Calendar,
  ChevronRight,
  MoreHorizontal
} from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Area, AreaChart, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"

// Mock Data
const attendanceData = [
  { day: "Mon", present: 75, absent: 25 },
  { day: "Tue", present: 50, absent: 50 },
  { day: "Wed", present: 95, absent: 5 },
  { day: "Thu", present: 75, absent: 25 },
  { day: "Fri", present: 60, absent: 40 },
]

const earningsData = [
  { month: "Jan", income: 5000, expense: 3000 },
  { month: "Feb", income: 6000, expense: 4500 },
  { month: "Mar", income: 5500, expense: 4000 },
  { month: "Apr", income: 7000, expense: 5000 },
  { month: "May", income: 6500, expense: 4800 },
  { month: "Jun", income: 7500, expense: 5500 },
  { month: "Jul", income: 8000, expense: 6000 },
  { month: "Aug", income: 7800, expense: 5800 },
  { month: "Sep", income: 8500, expense: 6200 },
  { month: "Oct", income: 9000, expense: 6500 },
  { month: "Nov", income: 8800, expense: 6300 },
  { month: "Dec", income: 9500, expense: 6800 },
]

const attendanceConfig = {
  present: { label: "Total Present", color: "hsl(var(--chart-1))" },
  absent: { label: "Total Absent", color: "hsl(var(--chart-2))" },
} satisfies ChartConfig

const earningsConfig = {
  income: { label: "Income", color: "hsl(var(--chart-1))" },
  expense: { label: "Expense", color: "hsl(var(--chart-3))" },
} satisfies ChartConfig

const studentActivities = [
  { title: "Regional Robotics Champion", type: "Challenge", date: "2 days ago" },
  { title: "Won Regional Debate", type: "Debate", date: "3 days ago" },
  { title: "Interschool Science Shark Fair", type: "Science", date: "5 weeks ago" },
]

const notices = [
  { title: "Math Olympics 2024", date: "16/10/2030", author: "Ms. Jackson", views: 325 },
  { title: "Yearbook Photo Submission Wanted", date: "14/06/2030", author: "Yearbook Committee", views: 457 },
  { title: "Yearender School Play Competition", date: "14/05/2030", author: "Ms. Rodriguez", views: "1.1K" },
  { title: "Lost and Found Overnight Claims", date: "06/04/2030", author: "School Administration", views: 492 },
  { title: "Important Update: School Uniform Policy", date: "04/04/2030", author: "Principal Smith", views: 192 },
]

const messages = [
  { name: "Dr. Lia Ramirez", message: "Please ensure homecoming attendance report is complete", time: "1:00 AM", avatar: "https://github.com/shadcn.png" },
  { name: "Ms. Heather Morris", message: "Can I suggest a call to enhance suggestions that we can utilize on...", time: "10:16 AM", avatar: "https://github.com/shadcn.png" },
  { name: "Mr. Carl Jenkins", message: "Budget review meeting for the next fiscal year is on Saturday 2h PM at SA", time: "2:00 PM", avatar: "https://github.com/shadcn.png" },
  { name: "Officer Dan Brooks", message: "Attend the student security meeting on Monday to discuss plans", time: "3:02 PM", avatar: "https://github.com/shadcn.png" },
  { name: "Ms. Tina Goldberg", message: "Reminder: Neon's (yearbook committee) test is on May 14th times HR01.", time: "4:20 PM", avatar: "https://github.com/shadcn.png" },
]

const recentActivity = [
  { user: "Ms. Williams", action: "assigned you the English Literature test.", time: "Today" },
  { user: "DeanLoe", action: "already submitted quiz History.", time: "3 hours ago" },
  { user: "Permission Slip Reminder:", action: "Science Museum Field Trip", time: "5 hours ago" },
  { user: "Permission Slip Reminder:", action: "Science Museum Field Trip", time: "5 hours ago" },
]

const agendaItems = [
  { time: "08:00 am", title: "All Grade Homeroom & Announcement", grade: "" },
  { time: "10:00 am", title: "Math Review & Practice", grade: "Grade 3-6" },
  { time: "10:30 am", title: "Science Experiment & Discussion", grade: "Grade 4" },
]

export default function DashboardPage() {
  return (
    <BaseLayout title="Dashboard" description="School Management System Overview">
      <div className="flex flex-col gap-6 px-4 pb-8 lg:px-6">
        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-purple-100 dark:bg-purple-950/30 border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 bg-white dark:bg-purple-900/50 rounded-lg">
                  <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <Badge className="bg-white/80 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 border-0 text-xs">
                  +8.3%
                </Badge>
              </div>
              <div className="mt-4">
                <div className="text-3xl font-bold text-purple-900 dark:text-purple-100">124,684</div>
                <div className="text-sm text-purple-700 dark:text-purple-300 mt-1">Students</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-yellow-100 dark:bg-yellow-950/30 border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 bg-white dark:bg-yellow-900/50 rounded-lg">
                  <GraduationCap className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                </div>
                <Badge className="bg-white/80 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300 border-0 text-xs">
                  +2.5%
                </Badge>
              </div>
              <div className="mt-4">
                <div className="text-3xl font-bold text-yellow-900 dark:text-yellow-100">12,379</div>
                <div className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">Teachers</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-100 dark:bg-blue-950/30 border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 bg-white dark:bg-blue-900/50 rounded-lg">
                  <UsersRound className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <Badge className="bg-white/80 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border-0 text-xs">
                  +1.8%
                </Badge>
              </div>
              <div className="mt-4">
                <div className="text-3xl font-bold text-blue-900 dark:text-blue-100">29,300</div>
                <div className="text-sm text-blue-700 dark:text-blue-300 mt-1">Staffs</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-yellow-100 dark:bg-yellow-950/30 border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 bg-white dark:bg-yellow-900/50 rounded-lg">
                  <Trophy className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                </div>
                <Badge className="bg-white/80 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300 border-0 text-xs">
                  +7.3%
                </Badge>
              </div>
              <div className="mt-4">
                <div className="text-3xl font-bold text-yellow-900 dark:text-yellow-100">95,800</div>
                <div className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">Awards</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Students & Teachers Donut Charts */}
          <div className="lg:col-span-3 space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-base font-semibold">Students</CardTitle>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="flex flex-col items-center py-6">
                <div className="relative w-32 h-32">
                  <svg viewBox="0 0 100 100" className="transform -rotate-90">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--muted))" strokeWidth="12" />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="hsl(var(--chart-1))"
                      strokeWidth="12"
                      strokeDasharray={`${(45414 / 86000) * 251.2} 251.2`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold">45,414</div>
                      <div className="text-xs text-muted-foreground">Male (53%)</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-lg font-semibold text-muted-foreground">40,270</div>
                <div className="text-xs text-muted-foreground">Female (47%)</div>
              </CardContent>
            </Card>
          </div>

          {/* Attendance Chart */}
          <div className="lg:col-span-4">
            <Card className="h-full">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-base font-semibold">Attendance</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="h-8 text-xs">Weekly</Button>
                  <Button variant="ghost" size="sm" className="h-8 text-xs">Grade 3</Button>
                </div>
              </CardHeader>
              <CardContent>
                <ChartContainer config={attendanceConfig} className="h-[200px] w-full">
                  <BarChart data={attendanceData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} fontSize={10} />
                    <YAxis tickLine={false} axisLine={false} tickMargin={8} fontSize={10} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="present" fill="var(--color-present)" radius={[4, 4, 0, 0]} />
                    <Text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="fill-foreground font-bold text-2xl">
                      95%
                    </Text>
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Agenda */}
          <div className="lg:col-span-5">
            <Card className="h-full">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-base font-semibold">Agenda</CardTitle>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-1">
                {agendaItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-yellow-50 dark:bg-yellow-950/20">
                    <div className="text-xs font-medium text-muted-foreground mt-0.5 w-16 shrink-0">
                      {item.time}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium">{item.title}</div>
                      {item.grade && (
                        <div className="text-xs text-muted-foreground">{item.grade}</div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Earnings Chart */}
          <div className="lg:col-span-4">
            <Card className="h-full">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-base font-semibold">Earnings</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="h-8 text-xs">Income</Button>
                  <Button variant="ghost" size="sm" className="h-8 text-xs">Expense</Button>
                </div>
              </CardHeader>
              <CardContent>
                <ChartContainer config={earningsConfig} className="h-[200px] w-full">
                  <AreaChart data={earningsData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} fontSize={10} />
                    <YAxis tickLine={false} axisLine={false} tickMargin={8} fontSize={10} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="income" stroke="var(--color-income)" fill="var(--color-income)" fillOpacity={0.2} />
                    <Area type="monotone" dataKey="expense" stroke="var(--color-expense)" fill="var(--color-expense)" fillOpacity={0.2} />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Student Stats */}
          <div className="lg:col-span-3 space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold">24,680</div>
                    <div className="text-sm text-muted-foreground mt-1">Students</div>
                  </div>
                  <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border-0">
                    85%
                  </Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold">3,000</div>
                    <div className="text-sm text-muted-foreground mt-1">Teachers</div>
                  </div>
                  <Badge className="bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 border-0">
                    31%
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Messages */}
          <div className="lg:col-span-5">
            <Card className="h-full">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-base font-semibold">Messages</CardTitle>
                <Button variant="ghost" size="sm" className="h-8 text-xs">View All</Button>
              </CardHeader>
              <CardContent className="space-y-3">
                {messages.slice(0, 5).map((msg, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Avatar className="h-8 w-8 shrink-0">
                      <AvatarImage src={msg.avatar} />
                      <AvatarFallback>{msg.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium truncate">{msg.name}</div>
                        <div className="text-xs text-muted-foreground shrink-0 ml-2">{msg.time}</div>
                      </div>
                      <div className="text-xs text-muted-foreground truncate">{msg.message}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Student Activity */}
          <div className="lg:col-span-3">
            <Card className="h-full">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-base font-semibold">Student Activity</CardTitle>
                <Button variant="ghost" size="sm" className="h-8 text-xs">View All</Button>
              </CardHeader>
              <CardContent className="space-y-3">
                {studentActivities.map((activity, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-sm font-medium">{activity.title}</div>
                    <Badge variant="secondary" className="text-xs">{activity.type}</Badge>
                    <div className="text-xs text-muted-foreground">{activity.date}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Notice Board */}
          <div className="lg:col-span-5">
            <Card className="h-full">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-base font-semibold">Notice Board</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {notices.slice(0, 5).map((notice, i) => (
                  <div key={i} className="flex items-start gap-3 p-2 hover:bg-muted/50 rounded-lg cursor-pointer">
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{notice.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {notice.date} • By {notice.author}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                      {notice.views}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div className="lg:col-span-4">
            <Card className="h-full">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-base font-semibold">Recent Activity</CardTitle>
                <Button variant="ghost" size="sm" className="h-8 text-xs">View All</Button>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentActivity.map((activity, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-sm">
                      <span className="font-medium">{activity.user}</span> {activity.action}
                    </div>
                    <div className="text-xs text-muted-foreground">{activity.time}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}
