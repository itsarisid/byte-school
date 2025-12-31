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
    Linkedin,
    Instagram,
    Twitter,
    MessageSquare,
    Users,
    Clock,
    UserCheck,
    UserX
} from "lucide-react"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, YAxis, Label, Pie, PieChart, Cell } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"
import { Link } from "react-router-dom"

// Mock Data for Charts
const attendanceData = [
    { day: "Mon", present: 62 },
    { day: "Tue", present: 45 },
    { day: "Wed", present: 70 },
    { day: "Thu", present: 65 },
    { day: "Fri", present: 58 },
]

const workloadData = [
    { name: "Rayan", total: 10, teaching: 20, duties: 5 },
    { name: "Aliyah", total: 15, teaching: 15, duties: 8 },
    { name: "Kalsy", total: 12, teaching: 18, duties: 6 },
    { name: "Zackary", total: 8, teaching: 22, duties: 4 },
    { name: "Javier", total: 14, teaching: 16, duties: 7 },
    { name: "Diana", total: 11, teaching: 19, duties: 5 },
    { name: "Miley", total: 13, teaching: 17, duties: 6 },
    { name: "Kelly", total: 9, teaching: 21, duties: 3 },
]

const departmentData = [
    { name: "Science", value: 19, fill: "#2563eb" }, // blue-600
    { name: "Mathematics", value: 17, fill: "#64748b" }, // slate-500
    { name: "Language", value: 15, fill: "#e879f9" }, // fuchsia-400
    { name: "Social", value: 15, fill: "#22d3ee" }, // cyan-400
    { name: "Arts", value: 11, fill: "#fbbf24" }, // amber-400
    { name: "Physical Education", value: 11, fill: "#a3e635" }, // lime-400
]

const chartConfig = {
    present: { label: "Present", color: "hsl(var(--primary))" },
    total: { label: "Total Classes", color: "hsl(var(--chart-1))" },
    teaching: { label: "Teaching Hours", color: "hsl(var(--chart-2))" },
    duties: { label: "Extra Duties", color: "hsl(var(--chart-3))" },
} satisfies ChartConfig

// Mock Data for Teachers
const teachers = [
    { id: "T-1001", name: "Argen Maulie", subject: "Mathematics", phone: "+62 812 3456 7890", email: "argen.maulie@studixschool.org", avatar: "https://github.com/shadcn.png" },
    { id: "T-1002", name: "Bella Cruz", subject: "Social Studies • Civics", phone: "+62 813 2234 5567", email: "bella.cruz@studixschool.org", avatar: "https://github.com/shadcn.png" },
    { id: "T-1003", name: "Cliff Villiam", subject: "English Language", phone: "+62 811 5567 2345", email: "cliff.villiam@studixschool.org", avatar: "https://github.com/shadcn.png" },
    { id: "T-1004", name: "Dariah Ahmed", subject: "Social Studies • History", phone: "+62 815 9876 5432", email: "dariah.ahmed@studixschool.org", avatar: "https://github.com/shadcn.png" },
    { id: "T-1005", name: "Esteban Parez", subject: "Arts • Visual Arts", phone: "+62 819 6543 2109", email: "esteban.parez@studixschool.org", avatar: "https://github.com/shadcn.png" },
    { id: "T-1006", name: "Francesca Gill", subject: "Physical Education", phone: "+62 817 2233 4455", email: "francesca.gill@studixschool.org", avatar: "https://github.com/shadcn.png" },
    { id: "T-1007", name: "George Abraham", subject: "Mathematics • Algebra", phone: "+62 816 7788 9900", email: "george.abraham@studixschool.org", avatar: "https://github.com/shadcn.png" },
    { id: "T-1008", name: "Hellen Martinez", subject: "Science • Biology", phone: "+62 814 6677 8899", email: "hellen.martinez@studixschool.org", avatar: "https://github.com/shadcn.png" },
]

export default function TeachersListPage() {
    return (
        <BaseLayout title="Teachers" description="Manage teaching staff and view analytics">
            <div className="flex flex-col gap-6 px-4 pb-8">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Teachers</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                {/* Top Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { label: "Total Teachers", value: "86", icon: Users, bg: "bg-blue-100 dark:bg-blue-900/20", color: "text-blue-600" },
                        { label: "Full-Time Teacher", value: "62", icon: Clock, bg: "bg-pink-100 dark:bg-pink-900/20", color: "text-pink-600" },
                        { label: "Part-Time Teacher", value: "18", icon: UserCheck, bg: "bg-cyan-100 dark:bg-cyan-900/20", color: "text-cyan-600" },
                        { label: "Substitute Teacher", value: "6", icon: UserX, bg: "bg-purple-100 dark:bg-purple-900/20", color: "text-purple-600" },
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
                    {/* Attendance Overview (Span 3) */}
                    <div className="md:col-span-3">
                        <Card className="h-full">
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-base font-semibold">Attendance Overview</CardTitle>
                                <Badge variant="secondary">Weekly</Badge>
                            </CardHeader>
                            <CardContent>
                                <ChartContainer config={chartConfig} className="h-[200px] w-full">
                                    <AreaChart data={attendanceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                        <defs>
                                            <linearGradient id="fillPresent" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="var(--color-present)" stopOpacity={0.8} />
                                                <stop offset="95%" stopColor="var(--color-present)" stopOpacity={0.1} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                                        <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
                                        <YAxis tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
                                        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
                                        <Area type="natural" dataKey="present" stroke="var(--color-present)" fill="url(#fillPresent)" />
                                    </AreaChart>
                                </ChartContainer>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Workload Distribution (Span 6) */}
                    <div className="md:col-span-6">
                        <Card className="h-full">
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-base font-semibold">Workload Distribution</CardTitle>
                                <div className="flex gap-2">
                                    <Badge variant="outline">Science</Badge>
                                    <Badge variant="secondary">Weekly</Badge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ChartContainer config={chartConfig} className="h-[200px] w-full">
                                    <BarChart data={workloadData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                                        <XAxis dataKey="name" tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
                                        <YAxis tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
                                        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
                                        <Bar dataKey="total" stackId="a" fill="var(--color-total)" radius={[0, 0, 4, 4]} />
                                        <Bar dataKey="teaching" stackId="a" fill="var(--color-teaching)" radius={[0, 0, 0, 0]} />
                                        <Bar dataKey="duties" stackId="a" fill="var(--color-duties)" radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                </ChartContainer>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Department (Span 3) */}
                    <div className="md:col-span-3">
                        <Card className="h-full">
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-base font-semibold">Department</CardTitle>
                                <Button variant="ghost" size="icon" className="h-6 w-6"><MoreHorizontal className="h-4 w-4" /></Button>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-4">
                                <div className="mx-auto aspect-square h-[150px]">
                                    <PieChart width={150} height={150}>
                                        <Pie
                                            data={departmentData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={40}
                                            outerRadius={60}
                                            paddingAngle={2}
                                            dataKey="value"
                                        >
                                            {departmentData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.fill} strokeWidth={0} />
                                            ))}
                                            <Label
                                                content={({ viewBox }) => {
                                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                                        return (
                                                            <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                                                                <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-xl font-bold">
                                                                    86
                                                                </tspan>
                                                                <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 16} className="fill-muted-foreground text-xs">
                                                                    Teachers
                                                                </tspan>
                                                            </text>
                                                        )
                                                    }
                                                }}
                                            />
                                        </Pie>
                                    </PieChart>
                                </div>
                                <div className="space-y-2 text-xs">
                                    {departmentData.map((dept, i) => (
                                        <div key={i} className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: dept.fill }}></div>
                                                <span className="text-muted-foreground">{dept.name}</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <span className="font-medium">{dept.value}</span>
                                                <span className="text-muted-foreground">{Math.round((dept.value / 86) * 100)}%</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Teachers List Filter & Grid */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">Teachers</h3>
                        <div className="flex items-center gap-2">
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search teacher..."
                                    className="pl-8 w-[200px] lg:w-[300px]"
                                />
                            </div>
                            <Button variant="outline" size="sm" className="gap-2">
                                <Filter className="h-4 w-4" /> Filter
                            </Button>
                            <Select defaultValue="latest">
                                <SelectTrigger className="w-[120px] h-9">
                                    <SelectValue placeholder="Sort by" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="latest">Latest</SelectItem>
                                    <SelectItem value="oldest">Oldest</SelectItem>
                                </SelectContent>
                            </Select>
                            <Button size="sm" className="gap-2 bg-pink-500 hover:bg-pink-600 text-white">
                                <Plus className="h-4 w-4" /> Add Teacher
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {teachers.map((teacher, i) => (
                            <Card key={i}>
                                <CardContent className="p-4 flex flex-col items-center gap-4">
                                    <div className="w-full flex justify-between items-start">
                                        <Avatar className="h-12 w-12">
                                            <AvatarImage src={teacher.avatar} />
                                            <AvatarFallback>{teacher.name.substring(0, 2)}</AvatarFallback>
                                        </Avatar>
                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <div className="text-left w-full space-y-1">
                                        <Link to={`/teachers/${teacher.id}`} className="font-semibold hover:underline block truncate">{teacher.name}</Link>
                                        <p className="text-xs text-muted-foreground flex gap-2">
                                            <span className="text-pink-500 font-medium">{teacher.id}</span>
                                            <span>• {teacher.subject}</span>
                                        </p>
                                    </div>
                                    <div className="w-full space-y-2 text-xs text-muted-foreground mt-2">
                                        <div className="flex items-center gap-2">
                                            <Phone className="h-3 w-3" />
                                            <span>{teacher.phone}</span>
                                        </div>
                                        <div className="flex items-center gap-2 truncate">
                                            <Mail className="h-3 w-3" />
                                            <span className="truncate">{teacher.email}</span>
                                        </div>
                                    </div>
                                    <div className="w-full flex items-center justify-between mt-4">
                                        <div className="flex gap-2 text-muted-foreground">
                                            <Linkedin className="h-4 w-4 cursor-pointer hover:text-blue-600" />
                                            <Twitter className="h-4 w-4 cursor-pointer hover:text-blue-400" />
                                            <Instagram className="h-4 w-4 cursor-pointer hover:text-pink-600" />
                                        </div>
                                        <Button variant="secondary" size="sm" className="h-8 gap-2 bg-blue-50 hover:bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-300">
                                            <MessageSquare className="h-3 w-3" /> Message
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Pagination Mock */}
                    <div className="flex items-center justify-between pt-4 text-sm text-muted-foreground">
                        <div>Show 8 of 82 results</div>
                        <div className="flex gap-2">
                            <Button variant="outline" size="icon" className="h-8 w-8" disabled>
                                &lt;
                            </Button>
                            <Button variant="outline" size="icon" className="h-8 w-8 bg-pink-500 text-white border-pink-500">1</Button>
                            <Button variant="outline" size="icon" className="h-8 w-8">2</Button>
                            <Button variant="outline" size="icon" className="h-8 w-8">3</Button>
                            <span>...</span>
                            <Button variant="outline" size="icon" className="h-8 w-8">11</Button>
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
