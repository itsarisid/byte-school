"use client"

import { BaseLayout } from "@/components/layouts/base-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
import { Search, TrendingDown, TrendingUp, Edit, Trash2 } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"
import { Checkbox } from "@/components/ui/checkbox"

// Mock Data
const feesCollectionData = [
    { month: "Jan", amount: 2000 },
    { month: "Feb", amount: 3500 },
    { month: "Mar", amount: 4000 },
    { month: "Apr", amount: 5000 },
    { month: "May", amount: 6000 },
    { month: "Jun", amount: 4500 },
    { month: "Jul", amount: 5500 },
    { month: "Aug", amount: 7500, highlight: true },
    { month: "Sep", amount: 6000 },
    { month: "Oct", amount: 5000 },
    { month: "Nov", amount: 4000 },
    { month: "Dec", amount: 3500 },
]

const students = [
    { id: 1, name: "Sophia Wilson", studentId: "2015-02-017", class: "11A", avatar: "https://github.com/shadcn.png", tuition: 4500, activities: 300, miscellaneous: 200, amount: 5000, status: "Paid" },
    { id: 2, name: "Ethan Lee", studentId: "2015-01-016", class: "10B", avatar: "https://github.com/shadcn.png", tuition: 4500, activities: 250, miscellaneous: 150, amount: 4900, status: "Pending" },
    { id: 3, name: "Michael Brown", studentId: "2015-03-012", class: "12 AP Calculus", avatar: "https://github.com/shadcn.png", tuition: 4800, activities: 300, miscellaneous: 200, amount: 5300, status: "Paid" },
    { id: 4, name: "Ava Smith", studentId: "2015-01-019", class: "9B", avatar: "https://github.com/shadcn.png", tuition: 4500, activities: 250, miscellaneous: 100, amount: 4850, status: "Overdue" },
    { id: 5, name: "Lucas Johnson", studentId: "2015-01-004", class: "11A", avatar: "https://github.com/shadcn.png", tuition: 4500, activities: 300, miscellaneous: 200, amount: 5000, status: "Paid" },
    { id: 6, name: "Isabella Garcia", studentId: "2015-01-015", class: "8B", avatar: "https://github.com/shadcn.png", tuition: 4200, activities: 200, miscellaneous: 150, amount: 4550, status: "Pending" },
]

const feesConfig = {
    amount: { label: "Amount", color: "hsl(var(--chart-1))" },
} satisfies ChartConfig

export default function FeesPage() {
    return (
        <BaseLayout title="Fees Collection" description="Track and manage fee payments">
            <div className="flex flex-col gap-6 px-4 pb-8 lg:px-6">
                {/* Top Section - Chart and Stats */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Fees Collection Chart */}
                    <div className="lg:col-span-7">
                        <Card className="h-full">
                            <CardHeader className="pb-2">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-base font-semibold">Fees Collection</CardTitle>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold">$152,927</div>
                                        <div className="text-xs text-muted-foreground">Aug 19, 2030</div>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ChartContainer config={feesConfig} className="h-[240px] w-full">
                                    <AreaChart data={feesCollectionData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                                        <defs>
                                            <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="var(--color-amount)" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="var(--color-amount)" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                                        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} fontSize={10} />
                                        <YAxis tickLine={false} axisLine={false} tickMargin={8} fontSize={10} />
                                        <ChartTooltip content={<ChartTooltipContent />} />
                                        <Area type="monotone" dataKey="amount" stroke="var(--color-amount)" fill="url(#colorAmount)" />
                                    </AreaChart>
                                </ChartContainer>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Stats Cards */}
                    <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                        <Card className="bg-cyan-100 dark:bg-cyan-950/30 border-0">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="p-2 bg-white/50 dark:bg-cyan-900/30 rounded-lg">
                                        <TrendingUp className="h-4 w-4 text-cyan-600" />
                                    </div>
                                    <Badge className="bg-white/80 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 border-0 text-xs">
                                        ↑ 15%
                                    </Badge>
                                </div>
                                <div className="mt-4">
                                    <div className="text-2xl font-bold text-cyan-900 dark:text-cyan-100">$126,450</div>
                                    <div className="text-sm text-cyan-700 dark:text-cyan-300 mt-1">Total Amount</div>
                                </div>
                                <div className="mt-2 h-8">
                                    <svg className="w-full h-full" viewBox="0 0 100 30">
                                        <polyline
                                            points="0,20 20,15 40,18 60,10 80,12 100,8"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            className="text-cyan-600"
                                        />
                                    </svg>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-cyan-100 dark:bg-cyan-950/30 border-0">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="p-2 bg-white/50 dark:bg-cyan-900/30 rounded-lg">
                                        <TrendingUp className="h-4 w-4 text-cyan-600" />
                                    </div>
                                    <Badge className="bg-white/80 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 border-0 text-xs">
                                        ↑ 15%
                                    </Badge>
                                </div>
                                <div className="mt-4">
                                    <div className="text-2xl font-bold text-cyan-900 dark:text-cyan-100">$67,200</div>
                                    <div className="text-sm text-cyan-700 dark:text-cyan-300 mt-1">Total Tuition</div>
                                </div>
                                <div className="mt-2 h-8">
                                    <svg className="w-full h-full" viewBox="0 0 100 30">
                                        <polyline
                                            points="0,20 20,15 40,18 60,10 80,12 100,8"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            className="text-cyan-600"
                                        />
                                    </svg>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-pink-100 dark:bg-pink-950/30 border-0">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="p-2 bg-white/50 dark:bg-pink-900/30 rounded-lg">
                                        <TrendingDown className="h-4 w-4 text-pink-600" />
                                    </div>
                                    <Badge className="bg-white/80 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300 border-0 text-xs">
                                        ↓ 8%
                                    </Badge>
                                </div>
                                <div className="mt-4">
                                    <div className="text-2xl font-bold text-pink-900 dark:text-pink-100">$8,000</div>
                                    <div className="text-sm text-pink-700 dark:text-pink-300 mt-1">Total Activities</div>
                                </div>
                                <div className="mt-2 h-8">
                                    <svg className="w-full h-full" viewBox="0 0 100 30">
                                        <polyline
                                            points="0,8 20,12 40,10 60,18 80,15 100,20"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            className="text-pink-600"
                                        />
                                    </svg>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-pink-100 dark:bg-pink-950/30 border-0">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="p-2 bg-white/50 dark:bg-pink-900/30 rounded-lg">
                                        <TrendingDown className="h-4 w-4 text-pink-600" />
                                    </div>
                                    <Badge className="bg-white/80 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300 border-0 text-xs">
                                        ↓ 8%
                                    </Badge>
                                </div>
                                <div className="mt-4">
                                    <div className="text-2xl font-bold text-pink-900 dark:text-pink-100">$6,150</div>
                                    <div className="text-sm text-pink-700 dark:text-pink-300 mt-1">Total Miscellaneous</div>
                                </div>
                                <div className="mt-2 h-8">
                                    <svg className="w-full h-full" viewBox="0 0 100 30">
                                        <polyline
                                            points="0,8 20,12 40,10 60,18 80,15 100,20"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            className="text-pink-600"
                                        />
                                    </svg>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Table Section */}
                <Card>
                    <CardHeader>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <CardTitle className="text-base font-semibold">Fees Collection</CardTitle>
                            <div className="flex flex-wrap items-center gap-2">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input placeholder="Search by Name or ID" className="pl-9 w-[240px]" />
                                </div>
                                <Select defaultValue="today">
                                    <SelectTrigger className="w-[120px]">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="today">Today</SelectItem>
                                        <SelectItem value="week">This Week</SelectItem>
                                        <SelectItem value="month">This Month</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Select defaultValue="all-classes">
                                    <SelectTrigger className="w-[140px]">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all-classes">All Classes</SelectItem>
                                        <SelectItem value="11a">Class 11A</SelectItem>
                                        <SelectItem value="10b">Class 10B</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Select defaultValue="all-status">
                                    <SelectTrigger className="w-[120px]">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all-status">All Status</SelectItem>
                                        <SelectItem value="paid">Paid</SelectItem>
                                        <SelectItem value="pending">Pending</SelectItem>
                                        <SelectItem value="overdue">Overdue</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-muted/30">
                                        <TableHead className="w-12">
                                            <Checkbox />
                                        </TableHead>
                                        <TableHead className="min-w-[200px]">Student Name</TableHead>
                                        <TableHead>Class</TableHead>
                                        <TableHead className="text-right">Tuition Fee</TableHead>
                                        <TableHead className="text-right">Activities Fee</TableHead>
                                        <TableHead className="text-right">Miscellaneous</TableHead>
                                        <TableHead className="text-right font-semibold">Amount</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead className="text-right">Action</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {students.map((student) => (
                                        <TableRow key={student.id} className="hover:bg-muted/20">
                                            <TableCell>
                                                <Checkbox />
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-3">
                                                    <Avatar className="h-10 w-10">
                                                        <AvatarImage src={student.avatar} />
                                                        <AvatarFallback>{student.name[0]}</AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <div className="font-medium">{student.name}</div>
                                                        <div className="text-xs text-muted-foreground">{student.studentId}</div>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell className="font-medium">{student.class}</TableCell>
                                            <TableCell className="text-right">${student.tuition.toLocaleString()}</TableCell>
                                            <TableCell className="text-right">${student.activities}</TableCell>
                                            <TableCell className="text-right">${student.miscellaneous}</TableCell>
                                            <TableCell className="text-right font-semibold">${student.amount.toLocaleString()}</TableCell>
                                            <TableCell>
                                                <Badge
                                                    variant="secondary"
                                                    className={
                                                        student.status === "Paid"
                                                            ? "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300 border-0"
                                                            : student.status === "Pending"
                                                                ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300 border-0"
                                                                : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 border-0"
                                                    }
                                                >
                                                    {student.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <div className="flex items-center justify-end gap-1">
                                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                                        <Edit className="h-4 w-4" />
                                                    </Button>
                                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
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
        </BaseLayout>
    )
}
