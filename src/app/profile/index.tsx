"use client"

import { BaseLayout } from "@/components/layouts/base-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Calendar, Settings, TrendingUp } from "lucide-react"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"

// Mock Data
const scoreData = [
    { date: "Jan 11", score: 40 },
    { date: "Feb 11", score: 55 },
    { date: "Mar 11", score: 70 },
    { date: "Apr 11", score: 65 },
    { date: "May 11", score: 75 },
    { date: "Jun 11", score: 70 },
]

const subjects = [
    { name: "Biology", score: 90 },
    { name: "Chemistry", score: 75 },
    { name: "Math", score: 85 },
    { name: "History", score: 70 },
    { name: "Literature", score: 60 },
]

const assignments = [
    { no: "01", task: "Read Chapters 1-3", subject: "English Literature", dueDate: "May 1, 2024", time: "09:00 AM", status: "In Progress" },
    { no: "02", task: "Complete Problem Set #3", subject: "Mathematics", dueDate: "May 3, 2024", time: "10:30 AM", status: "Not Started" },
    { no: "03", task: "Write Lab Report on Acid-Base Titration", subject: "Chemistry", dueDate: "May 5, 2024", time: "11:52 AM", status: "In Progress" },
    { no: "04", task: "Prepare for Oral Presentation", subject: "History", dueDate: "May 2, 2024", time: "12:00 PM", status: "Not Started" },
    { no: "05", task: "Create Art Piece for Final Project", subject: "Art", dueDate: "May 6, 2024", time: "03:00 PM", status: "In Progress" },
]

const recentActivity = [
    { type: "Reminder", title: "Standing Homework reminder", time: "10:00 AM" },
    { type: "Reminder", title: "1st Semester Deadline", time: "10:00 AM" },
    { type: "Reminder", title: "2nd Submitted Mathematics Assignment", time: "11:00 AM" },
    { type: "Reminder", title: "You got Award for 1st place English", time: "01:00 PM" },
    { type: "Reminder", title: "You got The Carter Prize Competition", time: "03:00 PM" },
    { type: "Reminder", title: "Invite to Meeting With Dean of The School", time: "05:00 PM" },
    { type: "Reminder", title: "Submitted Introduction to English Literature Assignment", time: "07:00 PM" },
    { type: "Reminder", title: "Submitted Chemistry Exam", time: "09:00 PM" },
]

const messages = [
    { name: "Ms. Carter", message: "Would you mind confirming if the English test submitted this week is...", time: "4:30 PM", avatar: "https://github.com/shadcn.png" },
    { name: "Jake", message: "Can you ASAP?.", time: "11:02 PM", avatar: "https://github.com/shadcn.png" },
    { name: "Coach Simmons", message: "Requested reminder to fill out our day meeting to get a state finals tomorrow.", time: "3:21 PM", avatar: "https://github.com/shadcn.png" },
]

const agendaItems = [
    { date: "Today, May 3, 2024", title: "Homeroom & Announcement", type: "Meeting" },
    { date: "Tomorrow, May 4, 2024", title: "Safety Laboratory Meeting", type: "Meeting" },
    { date: "Monday, May 6, 2024", title: "3rd Semester Annual Gathering", type: "Event" },
]

const scoreConfig = {
    score: { label: "Score", color: "hsl(var(--chart-1))" },
} satisfies ChartConfig

const subjectConfig = {
    score: { label: "Score", color: "hsl(var(--chart-3))" },
} satisfies ChartConfig

export default function ProfilePage() {
    return (
        <BaseLayout title="Profile" description="Student dashboard and performance overview">
            <div className="flex flex-col gap-6 px-4 pb-8 lg:px-6">
                {/* Header */}
                <Card className="bg-purple-100 dark:bg-purple-950/30 border-0">
                    <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                            <div className="flex items-center gap-4">
                                <Avatar className="w-16 h-16 rounded-2xl">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>MW</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h2 className="text-xl font-bold">Welcome, Mia Williams</h2>
                                    <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 ml-auto">
                                <div className="text-center">
                                    <TrendingUp className="h-5 w-5 text-purple-600 mx-auto mb-1" />
                                    <div className="text-2xl font-bold">97%</div>
                                    <div className="text-xs text-muted-foreground">Attendance</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-purple-600">258+</div>
                                    <div className="text-xs text-muted-foreground">Task Completed</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-pink-600">245</div>
                                    <div className="text-xs text-muted-foreground">Total Task</div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left Column */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Performance */}
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-base font-semibold">Performance</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col items-center py-6">
                                <div className="relative w-40 h-20">
                                    <svg viewBox="0 0 100 50" className="w-full h-full">
                                        <path d="M 10,45 A 40,40 0 0,1 90,45" fill="none" stroke="hsl(var(--muted))" strokeWidth="8" />
                                        <path d="M 10,45 A 40,40 0 0,1 85,18" fill="none" stroke="hsl(var(--chart-1))" strokeWidth="8" strokeLinecap="round" />
                                    </svg>
                                    <div className="absolute inset-0 flex items-end justify-center pb-2">
                                        <div className="text-center">
                                            <div className="text-4xl font-bold">3.4</div>
                                            <div className="text-xs text-muted-foreground">1st Semester - 1st Semester</div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Recent Activity */}
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-base font-semibold">Recent Activity</CardTitle>
                                <Button variant="ghost" size="sm" className="h-8 text-xs">View All</Button>
                            </CardHeader>
                            <CardContent className="space-y-2 max-h-[300px] overflow-y-auto">
                                {recentActivity.slice(0, 6).map((activity, i) => (
                                    <div key={i} className="flex items-start gap-2 text-xs">
                                        <div className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                                        <div className="flex-1">
                                            <span className="font-medium">{activity.type}:</span> {activity.title}
                                            <div className="text-muted-foreground">{activity.time}</div>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Assignments */}
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-base font-semibold">Assignments</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className="max-h-[400px] overflow-y-auto">
                                    <Table>
                                        <TableHeader>
                                            <TableRow className="hover:bg-transparent">
                                                <TableHead className="w-12 text-xs">No</TableHead>
                                                <TableHead className="text-xs">Task</TableHead>
                                                <TableHead className="text-xs">Subject</TableHead>
                                                <TableHead className="text-xs">Due Date</TableHead>
                                                <TableHead className="text-xs">Time</TableHead>
                                                <TableHead className="text-xs">Status</TableHead>
                                                <TableHead className="text-xs text-right">Action</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {assignments.map((assignment) => (
                                                <TableRow key={assignment.no} className="hover:bg-transparent">
                                                    <TableCell className="text-xs">{assignment.no}</TableCell>
                                                    <TableCell className="text-xs font-medium">{assignment.task}</TableCell>
                                                    <TableCell className="text-xs">{assignment.subject}</TableCell>
                                                    <TableCell className="text-xs">{assignment.dueDate}</TableCell>
                                                    <TableCell className="text-xs">{assignment.time}</TableCell>
                                                    <TableCell className="text-xs">
                                                        <Badge
                                                            variant="secondary"
                                                            className={assignment.status === "In Progress" ? "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30" : "bg-red-100 text-red-700 dark:bg-red-900/30"}
                                                        >
                                                            {assignment.status}
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="text-right">
                                                        <div className="flex items-center justify-end gap-1">
                                                            <Button variant="ghost" size="icon" className="h-6 w-6">😊</Button>
                                                            <Button variant="ghost" size="icon" className="h-6 w-6">🗑️</Button>
                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Middle Column */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Score Activity */}
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-base font-semibold">Score Activity</CardTitle>
                                <div className="flex items-center gap-2">
                                    <Button variant="ghost" size="sm" className="h-8 text-xs">Weekly</Button>
                                    <Button variant="ghost" size="sm" className="h-8 text-xs">Grade 8</Button>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-center mb-4">
                                    <div className="text-center">
                                        <div className="text-4xl font-bold">70%</div>
                                    </div>
                                </div>
                                <ChartContainer config={scoreConfig} className="h-[180px] w-full">
                                    <AreaChart data={scoreData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                                        <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} fontSize={10} />
                                        <YAxis tickLine={false} axisLine={false} tickMargin={8} fontSize={10} domain={[0, 100]} />
                                        <ChartTooltip content={<ChartTooltipContent />} />
                                        <Area type="monotone" dataKey="score" stroke="var(--color-score)" fill="var(--color-score)" fillOpacity={0.3} />
                                    </AreaChart>
                                </ChartContainer>
                            </CardContent>
                        </Card>

                        {/* Grade by Subject */}
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-base font-semibold">Grade by Subject</CardTitle>
                                <div className="flex items-center gap-2">
                                    <Button variant="ghost" size="sm" className="h-8 text-xs">Weekly</Button>
                                    <Button variant="ghost" size="sm" className="h-8 text-xs">Grade 8</Button>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ChartContainer config={subjectConfig} className="h-[200px] w-full">
                                    <BarChart data={subjects} layout="vertical" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                                        <XAxis type="number" domain={[0, 100]} hide />
                                        <YAxis type="category" dataKey="name" width={80} tickLine={false} axisLine={false} fontSize={12} />
                                        <Bar dataKey="score" fill="var(--color-score)" radius={[0, 4, 4, 0]} barSize={20} />
                                    </BarChart>
                                </ChartContainer>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Calendar/Agenda */}
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-base font-semibold">March 2030</CardTitle>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <Settings className="h-4 w-4" />
                                </Button>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-7 gap-1 text-center text-xs">
                                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                                        <div key={day} className="p-2 font-semibold text-muted-foreground">{day}</div>
                                    ))}
                                    {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                                        <div
                                            key={day}
                                            className={`p-2 rounded-lg hover:bg-muted cursor-pointer ${day === 1 ? "col-start-6" : ""} ${day === 3 ? "bg-primary text-primary-foreground" : ""}`}
                                        >
                                            {day.toString().padStart(2, "0")}
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-2">
                                    <div className="text-sm font-semibold">Agenda</div>
                                    {agendaItems.map((item, i) => (
                                        <div key={i} className="p-3 rounded-lg bg-yellow-50 dark:bg-yellow-950/20 text-xs">
                                            <div className="font-medium">{item.title}</div>
                                            <div className="text-muted-foreground">{item.date}</div>
                                            <Badge variant="secondary" className="mt-1 text-[10px]">{item.type}</Badge>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Messages */}
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-base font-semibold">Messages</CardTitle>
                                <Button variant="ghost" size="sm" className="h-8 text-xs">View All</Button>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                {messages.map((msg, i) => (
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

                        {/* Search Subject */}
                        <Card className="bg-gradient-to-br from-yellow-100 to-pink-100 dark:from-yellow-950/30 dark:to-pink-950/30 border-0">
                            <CardContent className="p-6 text-center">
                                <div className="text-4xl mb-2">😊</div>
                                <div className="text-sm font-semibold mb-2">Search by Subject</div>
                                <div className="text-xs text-muted-foreground">Find lessons, assignments, and more</div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </BaseLayout>
    )
}
