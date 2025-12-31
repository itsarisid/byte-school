"use client"

import { BaseLayout } from "@/components/layouts/base-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Progress } from "@/components/ui/progress"
import { MoreHorizontal, FileText, Phone, Mail, MapPin, Calendar as CalendarIcon } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"

// Mock Data
const workloadData = [
    { month: "Jul", total: 40, teaching: 30, duties: 10 },
    { month: "Aug", total: 50, teaching: 35, duties: 15 },
    { month: "Sep", total: 80, teaching: 70, duties: 10 },
    { month: "Oct", total: 149, teaching: 134, duties: 32 },
    { month: "Nov", total: 120, teaching: 100, duties: 20 },
    { month: "Dec", total: 90, teaching: 80, duties: 10 },
    { month: "Jan", total: 60, teaching: 50, duties: 10 },
    { month: "Feb", total: 85, teaching: 75, duties: 10 },
]

const chartConfig = {
    total: { label: "Total Classes", color: "hsl(var(--chart-1))" },
    teaching: { label: "Teaching Hours", color: "hsl(var(--chart-2))" },
    duties: { label: "Extra Duties", color: "hsl(var(--chart-3))" },
} satisfies ChartConfig

const scheduleData = [
    { time: "08:00", mon: null, tue: "8C", wed: null, thu: null, fri: "8C" },
    { time: "09:00", mon: "8C", tue: null, wed: "9A", thu: null, fri: null },
    { time: "10:00", mon: null, tue: "8C", wed: null, thu: "9B", fri: "8C" },
    { time: "11:00", mon: null, tue: null, wed: "8C", thu: null, fri: null },
    { time: "12:00", mon: null, tue: null, wed: null, thu: null, fri: null },
    { time: "13:00", mon: null, tue: null, wed: null, thu: null, fri: "9B" },
    { time: "14:00", mon: "9A", tue: null, wed: null, thu: null, fri: null },
    { time: "15:00", mon: null, tue: null, wed: null, thu: "8C", fri: null },
]

export default function TeacherDetailsPage() {
    return (
        <BaseLayout title="Teacher Details" description="View and manage teacher information">
            <div className="flex flex-col gap-4 px-4 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-4">
                    {/* Left Column (Profile & Info) - Span 3 */}
                    <div className="md:col-span-3 space-y-6">
                        {/* Profile Card */}
                        <Card className="text-center overflow-hidden">
                            <div className="bg-gradient-to-r from-pink-100 to-pink-50 h-24 dark:from-pink-950 dark:to-background"></div>
                            <div className="relative -mt-12 mb-4">
                                <Avatar className="w-24 h-24 mx-auto border-4 border-background">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CV</AvatarFallback>
                                </Avatar>
                            </div>
                            <CardContent className="pt-0">
                                <h3 className="text-xl font-bold">Cliff Villiam</h3>
                                <div className="flex justify-center gap-2 mt-2 mb-4">
                                    <Badge variant="secondary">T-1003</Badge>
                                    <Badge>Full-Time</Badge>
                                </div>
                                <div className="text-left space-y-2 text-sm mt-4">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Subject</span>
                                        <span className="font-medium">English Language</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Class</span>
                                        <span className="font-medium">8C - 9A - 9B</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Personal Info */}
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-base font-semibold">Personal Info</CardTitle>
                                <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="h-4 w-4" /></Button>
                            </CardHeader>
                            <CardContent className="grid gap-4 text-sm">
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                                        <span className="text-xs font-bold">♂</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Gender</p>
                                        <p className="font-medium">Male</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                                        <CalendarIcon className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Date of Birth</p>
                                        <p className="font-medium">April 15, 1990</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                                        <Mail className="h-4 w-4" />
                                    </div>
                                    <div className="overflow-hidden">
                                        <p className="text-xs text-muted-foreground">Email Address</p>
                                        <p className="font-medium truncate">cliff.villiam@studixschool.org</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                                        <Phone className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Phone Number</p>
                                        <p className="font-medium">+62 811 5567 2345</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                                        <MapPin className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Address</p>
                                        <p className="font-medium">221B Baker Street, London, United Kingdom</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Documents */}
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-base font-semibold">Documents & Compliance</CardTitle>
                                <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="h-4 w-4" /></Button>
                            </CardHeader>
                            <CardContent className="grid gap-3">
                                {["Employment_Contract_CliffVilliam...", "Certification_EnglishTeaching_C...", "ID_Passport_CliffVilliam_T1003.p..."].map((doc, i) => (
                                    <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                                        <div className="w-10 h-10 rounded-lg bg-pink-100 dark:bg-pink-900/20 text-pink-600 flex items-center justify-center shrink-0">
                                            <FileText className="h-5 w-5" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium truncate">{doc}</p>
                                            <p className="text-xs text-muted-foreground">PDF • {(2.4 - i * 0.5).toFixed(1)} MB</p>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Middle Column (Charts & Schedule) - Span 6 */}
                    <div className="md:col-span-6 space-y-6">
                        {/* Workload Summary */}
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-base font-semibold">Workload Summary</CardTitle>
                                <Badge variant="outline">Last 8 months</Badge>
                            </CardHeader>
                            <CardContent>
                                <ChartContainer config={chartConfig} className="h-[250px] w-full">
                                    <AreaChart data={workloadData} margin={{ left: -20, right: 0, top: 0, bottom: 0 }}>
                                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                                        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                                        <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                                        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                                        <Area type="monotone" dataKey="duties" stackId="1" stroke="var(--color-duties)" fill="var(--color-duties)" fillOpacity={0.4} />
                                        <Area type="monotone" dataKey="teaching" stackId="1" stroke="var(--color-teaching)" fill="var(--color-teaching)" fillOpacity={0.4} />
                                        <Area type="monotone" dataKey="total" stackId="1" stroke="var(--color-total)" fill="var(--color-total)" fillOpacity={0.4} />
                                    </AreaChart>
                                </ChartContainer>
                            </CardContent>
                        </Card>

                        {/* Schedule */}
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-base font-semibold">Schedule</CardTitle>
                                <Badge variant="secondary">Weekly</Badge>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-6 gap-2 text-xs text-center font-medium text-muted-foreground mb-4">
                                    <div>Time</div>
                                    <div>Mon</div>
                                    <div>Tue</div>
                                    <div>Wed</div>
                                    <div>Thu</div>
                                    <div>Fri</div>
                                </div>
                                <div className="space-y-2">
                                    {scheduleData.map((row, i) => (
                                        <div key={i} className="grid grid-cols-6 gap-2 text-sm text-center items-center h-10">
                                            <div className="text-muted-foreground text-xs">{row.time}</div>
                                            {[row.mon, row.tue, row.wed, row.thu, row.fri].map((cell, j) => (
                                                <div key={j} className={`h-full flex items-center justify-center rounded-md ${cell ?
                                                    (j % 2 === 0 ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" : "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300")
                                                    : "bg-transparent"}`}>
                                                    {cell}
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Development & Training */}
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-base font-semibold">Development & Training</CardTitle>
                                <Badge variant="outline">This Semester</Badge>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {[
                                        { title: "Digital Learning Tools Training", date: "Apr 2, 2035", loc: "Zoom", status: "Upcoming", color: "bg-pink-100 text-pink-700 dark:bg-pink-900/30" },
                                        { title: "Classroom Management Certification", date: "Feb 8, 2035", loc: "Cambridge", status: "Completed", color: "bg-green-100 text-green-700 dark:bg-green-900/30" },
                                        { title: "Advanced English Teaching Methods", date: "Jan 12, 2035", loc: "London", status: "Completed", color: "bg-green-100 text-green-700 dark:bg-green-900/30" },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center justify-between">
                                            <div>
                                                <p className="font-medium text-sm">{item.title}</p>
                                                <p className="text-xs text-muted-foreground">Training</p>
                                            </div>
                                            <div className="text-right text-xs">
                                                <p className="font-medium">{item.date}</p>
                                                <p className="text-muted-foreground">{item.loc}</p>
                                            </div>
                                            <Badge variant="secondary" className={`ml-4 ${item.color} border-0 hover:bg-opacity-80`}>{item.status}</Badge>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column (Widgets) - Span 3 */}
                    <div className="md:col-span-3 space-y-6">
                        {/* Calendar */}
                        <Card>
                            <CardHeader className="pb-0">
                                <CardTitle className="text-base font-semibold">March 2035</CardTitle>
                            </CardHeader>
                            <CardContent className="p-2">
                                <Calendar mode="single" selected={new Date()} className="rounded-md w-full" />
                                <div className="mt-4 flex justify-around text-xs text-center px-2">
                                    <div>
                                        <span className="block font-bold text-foreground">11</span>
                                        <span className="text-muted-foreground">Present</span>
                                    </div>
                                    <div>
                                        <span className="block font-bold text-foreground">4</span>
                                        <span className="text-muted-foreground">Late</span>
                                    </div>
                                    <div>
                                        <span className="block font-bold text-foreground">2</span>
                                        <span className="text-muted-foreground">On Leave</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Leave Request */}
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-base font-semibold">Leave Request</CardTitle>
                                <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="h-4 w-4" /></Button>
                            </CardHeader>
                            <CardContent>
                                <div className="bg-pink-50 dark:bg-pink-950/20 p-4 rounded-lg">
                                    <Badge className="bg-pink-200 text-pink-800 hover:bg-pink-300 dark:bg-pink-900 dark:text-pink-100 mb-2">Sick Leave</Badge>
                                    <p className="text-sm dark:text-pink-100/80 text-pink-900/80 mb-4">
                                        Fever and medical rest advised by doctor
                                    </p>
                                    <div className="flex gap-2">
                                        <Button size="sm" className="w-full bg-white text-black hover:bg-gray-100 dark:bg-pink-900 dark:text-white dark:hover:bg-pink-800">Approve</Button>
                                        <Button size="sm" variant="outline" className="w-full border-pink-200 text-pink-800 hover:bg-pink-100 dark:border-pink-800 dark:text-pink-200 dark:hover:bg-pink-900/50">Decline</Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Performance */}
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-base font-semibold">Performance</CardTitle>
                                <Badge variant="secondary">Last Month</Badge>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {[
                                    { label: "Grading Timeliness", score: 95, colorClass: "[&>*[data-slot=progress-indicator]]:bg-blue-500" },
                                    { label: "Student Avg. Grade", score: 85, colorClass: "[&>*[data-slot=progress-indicator]]:bg-purple-500" },
                                    { label: "Student Attendance", score: 76, colorClass: "[&>*[data-slot=progress-indicator]]:bg-pink-500" },
                                    { label: "Parent Feedback", score: 65, colorClass: "[&>*[data-slot=progress-indicator]]:bg-orange-500" },
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between mb-1 text-sm">
                                            <span className="font-medium">{item.label}</span>
                                            <span className="text-muted-foreground font-semibold">{item.score}%<span className="text-xs font-normal opacity-70">/90%</span></span>
                                        </div>
                                        <Progress value={item.score} className={`h-2 ${item.colorClass}`} />
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
