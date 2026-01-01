"use client"

import { BaseLayout } from "@/components/layouts/base-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    Search,
    Filter,
    Plus,
    MoreHorizontal,
    Phone,
    Mail,
    Users,
    GraduationCap,
    UserMinus,
    MessageSquare
} from "lucide-react"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, YAxis, Label, Pie, PieChart, Cell } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"
import { Link } from "react-router-dom"

// Mock Data
const attendanceData = [
    { day: "Mon", present: 95 },
    { day: "Tue", present: 92 },
    { day: "Wed", present: 96 },
    { day: "Thu", present: 94 },
    { day: "Fri", present: 90 },
]

const classDistributionData = [
    { name: "Class 8C", male: 15, female: 12 },
    { name: "Class 9A", male: 14, female: 14 },
    { name: "Class 9B", male: 16, female: 10 },
    { name: "Class 10A", male: 12, female: 18 },
    { name: "Class 10B", male: 13, female: 15 },
]

const genderData = [
    { name: "Female", value: 550, fill: "#ec4899" }, // pink-500
    { name: "Male", value: 450, fill: "#3b82f6" },   // blue-500
]

const chartConfig = {
    present: { label: "Attendance (%)", color: "hsl(var(--primary))" },
    male: { label: "Male", color: "#3b82f6" },
    female: { label: "Female", color: "#ec4899" },
} satisfies ChartConfig

const students = [
    { id: "S-2101", name: "Isabella Rossi", class: "Class 8C", phone: "+62 812 9988 7766", email: "isabella.rossi@studixschool.org", status: "Active", avatar: "https://github.com/shadcn.png" },
    { id: "S-2102", name: "David Kim", class: "Class 9A", phone: "+62 813 4455 6677", email: "david.kim@studixschool.org", status: "Active", avatar: "https://github.com/shadcn.png" },
    { id: "S-2103", name: "Sarah Jenkins", class: "Class 9B", phone: "+62 811 2233 4455", email: "sarah.jenkins@studixschool.org", status: "Active", avatar: "https://github.com/shadcn.png" },
    { id: "S-2104", name: "Michael Chen", class: "Class 10A", phone: "+62 815 6677 8899", email: "michael.chen@studixschool.org", status: "On Leave", avatar: "https://github.com/shadcn.png" },
    { id: "S-2105", name: "Emily Davis", class: "Class 8C", phone: "+62 819 1122 3344", email: "emily.davis@studixschool.org", status: "Active", avatar: "https://github.com/shadcn.png" },
    { id: "S-2106", name: "James Wilson", class: "Class 10B", phone: "+62 817 9988 7766", email: "james.wilson@studixschool.org", status: "Active", avatar: "https://github.com/shadcn.png" },
    { id: "S-2107", name: "Olivia Brown", class: "Class 9A", phone: "+62 816 5544 3322", email: "olivia.brown@studixschool.org", status: "Active", avatar: "https://github.com/shadcn.png" },
    { id: "S-2108", name: "William Lee", class: "Class 9B", phone: "+62 814 2233 4455", email: "william.lee@studixschool.org", status: "Suspended", avatar: "https://github.com/shadcn.png" },
]

export default function StudentsListPage() {
    return (
        <BaseLayout title="Students" description="Manage student records and performance">
            <div className="flex flex-col gap-6 px-4 pb-8">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Students</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                {/* Top Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { label: "Total Students", value: "1,245", icon: Users, bg: "bg-blue-100 dark:bg-blue-900/20", color: "text-blue-600" },
                        { label: "Active Students", value: "1,200", icon: GraduationCap, bg: "bg-green-100 dark:bg-green-900/20", color: "text-green-600" },
                        { label: "On Leave", value: "35", icon: UserMinus, bg: "bg-orange-100 dark:bg-orange-900/20", color: "text-orange-600" },
                        { label: "Graduated (This Year)", value: "210", icon: GraduationCap, bg: "bg-purple-100 dark:bg-purple-900/20", color: "text-purple-600" },
                    ].map((stat, i) => (
                        <Card key={i}>
                            <CardContent className="p-6 flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                                    <h2 className="text-3xl font-bold mt-2">{stat.value}</h2>
                                </div>
                                <div className={`p-3 rounded-full ${stat.bg} ${stat.color}`}>
                                    <stat.icon className="h-6 w-6" />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Charts Row */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Attendance Overview (Span 6) */}
                    <div className="md:col-span-6">
                        <Card className="h-full">
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-base font-semibold">Attendance Trends</CardTitle>
                                <Badge variant="secondary">Weekly</Badge>
                            </CardHeader>
                            <CardContent>
                                <ChartContainer config={chartConfig} className="h-[200px] w-full">
                                    <AreaChart data={attendanceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                        <defs>
                                            <linearGradient id="fillPresentStudent" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="var(--color-present)" stopOpacity={0.8} />
                                                <stop offset="95%" stopColor="var(--color-present)" stopOpacity={0.1} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                                        <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
                                        <YAxis tickLine={false} axisLine={false} tickMargin={8} fontSize={12} domain={[0, 100]} />
                                        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
                                        <Area type="natural" dataKey="present" stroke="var(--color-present)" fill="url(#fillPresentStudent)" />
                                    </AreaChart>
                                </ChartContainer>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Gender Distribution (Span 3) */}
                    <div className="md:col-span-3">
                        <Card className="h-full">
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-base font-semibold">Gender</CardTitle>
                                <Button variant="ghost" size="icon" className="h-6 w-6"><MoreHorizontal className="h-4 w-4" /></Button>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-4">
                                <div className="mx-auto aspect-square h-[150px]">
                                    <PieChart width={150} height={150}>
                                        <Pie
                                            data={genderData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={40}
                                            outerRadius={60}
                                            paddingAngle={2}
                                            dataKey="value"
                                        >
                                            {genderData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.fill} strokeWidth={0} />
                                            ))}
                                            <Label
                                                content={({ viewBox }) => {
                                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                                        return (
                                                            <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                                                                <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-xl font-bold">
                                                                    1000
                                                                </tspan>
                                                                <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 16} className="fill-muted-foreground text-xs">
                                                                    Total
                                                                </tspan>
                                                            </text>
                                                        )
                                                    }
                                                }}
                                            />
                                        </Pie>
                                    </PieChart>
                                </div>
                                <div className="flex justify-center gap-6 text-xs">
                                    {genderData.map((item, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.fill }}></div>
                                            <span className="text-muted-foreground">{item.name} ({Math.round(item.value / 10)}%)</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Class Distribution (Span 3) */}
                    <div className="md:col-span-3">
                        <Card className="h-full">
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-base font-semibold">Classes</CardTitle>
                                <Badge variant="outline">Size</Badge>
                            </CardHeader>
                            <CardContent>
                                <ChartContainer config={chartConfig} className="h-[200px] w-full">
                                    <BarChart data={classDistributionData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }} layout="vertical">
                                        <CartesianGrid horizontal={false} strokeDasharray="3 3" />
                                        <YAxis dataKey="name" type="category" tickLine={false} axisLine={false} fontSize={10} width={60} />
                                        <XAxis type="number" hide />
                                        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
                                        <Bar dataKey="male" stackId="a" fill="var(--color-male)" radius={[0, 0, 0, 0]} />
                                        <Bar dataKey="female" stackId="a" fill="var(--color-female)" radius={[0, 4, 4, 0]} />
                                    </BarChart>
                                </ChartContainer>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Students List Filter & Grid */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">Students</h3>
                        <div className="flex items-center gap-2">
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search student..."
                                    className="pl-8 w-[200px] lg:w-[300px]"
                                />
                            </div>
                            <Button variant="outline" size="sm" className="gap-2">
                                <Filter className="h-4 w-4" /> Filter
                            </Button>
                            <Select defaultValue="class">
                                <SelectTrigger className="w-[120px] h-9">
                                    <SelectValue placeholder="Sort by" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="class">Class</SelectItem>
                                    <SelectItem value="name">Name</SelectItem>
                                </SelectContent>
                            </Select>
                            <Button size="sm" className="gap-2 bg-pink-500 hover:bg-pink-600 text-white">
                                <Plus className="h-4 w-4" /> Add Student
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {students.map((student, i) => (
                            <Card key={i}>
                                <CardContent className="p-4 flex flex-col items-center gap-4">
                                    <div className="w-full flex justify-between items-start">
                                        <Avatar className="h-12 w-12">
                                            <AvatarImage src={student.avatar} />
                                            <AvatarFallback>{student.name.substring(0, 2)}</AvatarFallback>
                                        </Avatar>
                                        <Badge variant={student.status === "Active" ? "default" : (student.status === "On Leave" ? "secondary" : "destructive")}>
                                            {student.status}
                                        </Badge>
                                    </div>
                                    <div className="text-left w-full space-y-1">
                                        <Link to={`/students/${student.id}`} className="font-semibold hover:underline block truncate">{student.name}</Link>
                                        <p className="text-xs text-muted-foreground flex gap-2">
                                            <span className="text-pink-500 font-medium">{student.id}</span>
                                            <span>• {student.class}</span>
                                        </p>
                                    </div>
                                    <div className="w-full space-y-2 text-xs text-muted-foreground mt-2">
                                        <div className="flex items-center gap-2">
                                            <Phone className="h-3 w-3" />
                                            <span>{student.phone}</span>
                                        </div>
                                        <div className="flex items-center gap-2 truncate">
                                            <Mail className="h-3 w-3" />
                                            <span className="truncate">{student.email}</span>
                                        </div>
                                    </div>
                                    <div className="w-full flex items-center justify-between mt-4 gap-2">
                                        <Button variant="outline" size="sm" className="h-8 flex-1">
                                            <Phone className="h-3 w-3 mr-2" /> Call
                                        </Button>
                                        <Button variant="secondary" size="sm" className="h-8 flex-1 bg-blue-50 hover:bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-300">
                                            <MessageSquare className="h-3 w-3 mr-2" /> Message
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Pagination Mock */}
                    <div className="flex items-center justify-between pt-4 text-sm text-muted-foreground">
                        <div>Show 8 of 1,245 results</div>
                        <div className="flex gap-2">
                            <Button variant="outline" size="icon" className="h-8 w-8" disabled>
                                &lt;
                            </Button>
                            <Button variant="outline" size="icon" className="h-8 w-8 bg-pink-500 text-white border-pink-500">1</Button>
                            <Button variant="outline" size="icon" className="h-8 w-8">2</Button>
                            <Button variant="outline" size="icon" className="h-8 w-8">3</Button>
                            <span>...</span>
                            <Button variant="outline" size="icon" className="h-8 w-8">25</Button>
                            <Button variant="outline" size="icon" className="h-8 w-8">
                                &gt;
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </BaseLayout>
    )
}
