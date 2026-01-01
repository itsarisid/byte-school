"use client"

import { BaseLayout } from "@/components/layouts/base-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"

// Mock Data
const overviewData = [
    { month: "Jan", students: 85, teachers: 75, staff: 70 },
    { month: "Feb", students: 82, teachers: 78, staff: 72 },
    { month: "Mar", students: 88, teachers: 80, staff: 68 },
    { month: "Apr", students: 90, teachers: 77, staff: 75 },
    { month: "May", students: 87, teachers: 82, staff: 73 },
    { month: "Jun", students: 92, teachers: 85, staff: 78 },
]

const students = [
    { id: "S-2102", name: "Emma Williams" },
    { id: "S-2105", name: "Thomas Green" },
    { id: "S-2605", name: "Sophie Martin" },
    { id: "S-2709", name: "Lucas Miller" },
    { id: "S-2704", name: "Hannah Lee" },
    { id: "S-2002", name: "Daniel Park" },
    { id: "S-2311", name: "Aaliya Khan" },
    { id: "S-2112", name: "Mateo Ricci" },
    { id: "S-2113", name: "Olivia Johnson" },
    { id: "S-2116", name: "Omar Hassan" },
]

const dates = [
    { day: "Thu, Mar 1", short: "Thu, Mar 1" },
    { day: "Fri, Mar 2", short: "Fri, Mar 2" },
    { day: "Sat, Mar 3", short: "Sat, Mar 3" },
    { day: "Sun, Mar 4", short: "Sun, Mar 4" },
    { day: "Mon, Mar 5", short: "Mon, Mar 5" },
    { day: "Tue, Mar 6", short: "Tue, Mar 6" },
    { day: "Wed, Mar 7", short: "Wed, Mar 7" },
    { day: "Thu, Mar 8", short: "Thu, Mar 8" },
    { day: "Fri, Mar 9", short: "Fri, Mar 9" },
    { day: "Sat, Mar 10", short: "Sat, Mar 10" },
    { day: "Sun, [?]", short: "Sun, [?]" },
]

// Generate random attendance
const getAttendanceStatus = (studentId: string, dayIndex: number) => {
    const hash = studentId.charCodeAt(studentId.length - 1) + dayIndex
    const random = hash % 10
    if (random > 7) return "absent"
    if (random > 6 && dayIndex > 7) return null
    return "present"
}

const overviewConfig = {
    students: { label: "Students", color: "hsl(var(--chart-1))" },
    teachers: { label: "Teachers", color: "hsl(var(--chart-2))" },
    staff: { label: "Staff", color: "hsl(var(--chart-3))" },
} satisfies ChartConfig

export default function AttendancePage() {
    return (
        <BaseLayout title="Attendance" description="Track and manage attendance">
            <div className="flex flex-col gap-6 px-4 pb-8 lg:px-6">
                {/* Attendance Summary */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Students Card */}
                    <Card className="bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-950/30 dark:to-purple-950/30 border-0">
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-sm font-semibold">Students</CardTitle>
                                <Badge className="bg-white/80 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 border-0 text-xs">
                                    +8.3%
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="mb-4">
                                <div className="text-3xl font-bold">1,180</div>
                                <div className="text-xs text-muted-foreground">Total Present</div>
                            </div>
                            <div className="space-y-2 text-xs">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">On-Time</span>
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold">1,030</span>
                                        <span className="text-muted-foreground">83.5%</span>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Late</span>
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold">90</span>
                                        <span className="text-muted-foreground">7.2%</span>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Absent</span>
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold">65</span>
                                        <span className="text-muted-foreground">5.2%</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Teachers Card */}
                    <Card className="bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-950/30 dark:to-cyan-950/30 border-0">
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-sm font-semibold">Teachers</CardTitle>
                                <Badge className="bg-white/80 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 border-0 text-xs">
                                    +5.2%
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="mb-4">
                                <div className="text-3xl font-bold">80</div>
                                <div className="text-xs text-muted-foreground">Total Present</div>
                            </div>
                            <div className="space-y-2 text-xs">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">On-Time</span>
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold">75</span>
                                        <span className="text-muted-foreground">87.2%</span>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Late</span>
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold">5</span>
                                        <span className="text-muted-foreground">5.8%</span>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Absent</span>
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold">6</span>
                                        <span className="text-muted-foreground">7.0%</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Staff Card */}
                    <Card className="bg-gradient-to-br from-blue-900 to-blue-800 dark:from-blue-950 dark:to-blue-900 border-0 text-white">
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-sm font-semibold text-white">Staff</CardTitle>
                                <Badge className="bg-white/20 text-white border-0 text-xs">
                                    +11.1%
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="mb-4">
                                <div className="text-3xl font-bold">32</div>
                                <div className="text-xs text-white/70">Total Present</div>
                            </div>
                            <div className="space-y-2 text-xs">
                                <div className="flex justify-between">
                                    <span className="text-white/70">On-Time</span>
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold">29</span>
                                        <span className="text-white/70">82.6%</span>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-white/70">Late</span>
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold">3</span>
                                        <span className="text-white/70">8.5%</span>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-white/70">Absent</span>
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold">2</span>
                                        <span className="text-white/70">3.7%</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Attendance Overview Chart */}
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-base font-semibold">Attendance Overview</CardTitle>
                        <Select defaultValue="last-semester">
                            <SelectTrigger className="w-[160px]">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="last-semester">Last Semester</SelectItem>
                                <SelectItem value="this-semester">This Semester</SelectItem>
                                <SelectItem value="this-month">This Month</SelectItem>
                            </SelectContent>
                        </Select>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={overviewConfig} className="h-[200px] w-full">
                            <LineChart data={overviewData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                                <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} fontSize={10} />
                                <YAxis tickLine={false} axisLine={false} tickMargin={8} fontSize={10} tickFormatter={(value) => `${value}%`} />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <Line type="monotone" dataKey="students" stroke="var(--color-students)" strokeWidth={2} dot={{ r: 4 }} />
                                <Line type="monotone" dataKey="teachers" stroke="var(--color-teachers)" strokeWidth={2} dot={{ r: 4 }} />
                                <Line type="monotone" dataKey="staff" stroke="var(--color-staff)" strokeWidth={2} dot={{ r: 4 }} />
                            </LineChart>
                        </ChartContainer>
                    </CardContent>
                </Card>

                {/* Attendance Table */}
                <Card>
                    <CardHeader className="pb-4">
                        <Tabs defaultValue="students" className="w-full">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <TabsList className="bg-purple-100 dark:bg-purple-950/30">
                                    <TabsTrigger value="students" className="data-[state=active]:bg-white dark:data-[state=active]:bg-purple-900/50">Students</TabsTrigger>
                                    <TabsTrigger value="teachers">Teachers</TabsTrigger>
                                    <TabsTrigger value="staff">Staff</TabsTrigger>
                                </TabsList>
                                <div className="flex items-center gap-2">
                                    <Select defaultValue="class-9a">
                                        <SelectTrigger className="w-[120px]">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="class-9a">Class 9A</SelectItem>
                                            <SelectItem value="class-9b">Class 9B</SelectItem>
                                            <SelectItem value="class-10a">Class 10A</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Select defaultValue="mar-2025">
                                        <SelectTrigger className="w-[120px]">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="mar-2025">Mar 2025</SelectItem>
                                            <SelectItem value="feb-2025">Feb 2025</SelectItem>
                                            <SelectItem value="jan-2025">Jan 2025</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <TabsContent value="students" className="mt-4">
                                <div className="overflow-x-auto">
                                    <Table>
                                        <TableHeader>
                                            <TableRow className="bg-muted/20">
                                                <TableHead className="w-[100px] sticky left-0 bg-muted/30 backdrop-blur z-10">
                                                    Student ID
                                                </TableHead>
                                                <TableHead className="w-[200px] sticky left-[100px] bg-muted/30 backdrop-blur z-10">
                                                    Name
                                                </TableHead>
                                                {dates.map((date, i) => (
                                                    <TableHead key={i} className="text-center w-[100px] text-xs">
                                                        {date.short}
                                                    </TableHead>
                                                ))}
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {students.map((student) => (
                                                <TableRow key={student.id} className="hover:bg-muted/10">
                                                    <TableCell className="font-medium sticky left-0 bg-background backdrop-blur z-10 text-xs">
                                                        {student.id}
                                                    </TableCell>
                                                    <TableCell className="sticky left-[100px] bg-background backdrop-blur z-10 text-sm">
                                                        {student.name}
                                                    </TableCell>
                                                    {dates.map((_, i) => {
                                                        const status = getAttendanceStatus(student.id, i)
                                                        return (
                                                            <TableCell key={i} className="text-center p-2">
                                                                {status === "present" && (
                                                                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                                                                        <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                                                                    </div>
                                                                )}
                                                                {status === "absent" && (
                                                                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30">
                                                                        <X className="h-4 w-4 text-red-600 dark:text-red-400" />
                                                                    </div>
                                                                )}
                                                                {status === null && (
                                                                    <span className="text-muted-foreground">—</span>
                                                                )}
                                                            </TableCell>
                                                        )
                                                    })}
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardHeader>
                </Card>

                {/* Pagination */}
                <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                        Show{" "}
                        <Select defaultValue="10">
                            <SelectTrigger className="w-16 h-8 inline-flex">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="10">10</SelectItem>
                                <SelectItem value="25">25</SelectItem>
                                <SelectItem value="50">50</SelectItem>
                            </SelectContent>
                        </Select>
                        {" "}of 25 results
                    </div>
                    <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        {[1, 2, 3].map((page) => (
                            <Button
                                key={page}
                                variant={page === 1 ? "default" : "ghost"}
                                size="sm"
                                className="h-8 w-8 p-0"
                            >
                                {page}
                            </Button>
                        ))}
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </BaseLayout>
    )
}
