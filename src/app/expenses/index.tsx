"use client"

import { BaseLayout } from "@/components/layouts/base-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
import { FileText, MoreHorizontal } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"

// Mock Data
const expenseTrendData = [
    { month: "Jan", amount: 45000 },
    { month: "Feb", amount: 52000 },
    { month: "Mar", amount: 48000 },
    { month: "Apr", amount: 73250 },
    { month: "May", amount: 51000 },
    { month: "Jun", amount: 49000 },
    { month: "Jul", amount: 46000 },
    { month: "Aug", amount: 50000 },
]

const reimbursements = [
    { id: "RQ-3001", name: "Jurgen Malalla", subject: "Mathematics", amount: 120, date: "Mar 2, 2035", proof: true, status: "Approved" },
    { id: "RQ-3002", name: "Bella Cruz", subject: "Science", amount: 950, date: "Mar 3, 2035", proof: true, status: "Declined" },
    { id: "RQ-3003", name: "Francesca Gill", subject: "Physical Ed", amount: 180, date: "Mar 5, 2035", proof: true, status: "Approved" },
    { id: "RQ-3004", name: "Danuh Ahmed", subject: "Social Studies", amount: 300, date: "Mar 6, 2035", proof: false, status: "Approve" },
    { id: "RQ-3005", name: "Esteban Perez", subject: "Arts", amount: 80, date: "Mar 8, 2035", proof: false, status: "Approve" },
]

const expenses = [
    { id: "EX-5001", date: "Mar 1, 2035", dept: "Mathematics", category: "Supplies", description: "Graphing calculators", quantity: 15, amount: 750 },
    { id: "EX-5002", date: "Mar 1, 2035", dept: "Science", category: "Maintenance", description: "Lab equipment servicing", quantity: "-", amount: 1200 },
    { id: "EX-5003", date: "Mar 2, 2035", dept: "Language", category: "Supplies", description: "English literature textbooks", quantity: 40, amount: 1000 },
    { id: "EX-5004", date: "Mar 3, 2035", dept: "Social", category: "Events", description: "Field trip bus rental", quantity: "2 buses", amount: 900 },
    { id: "EX-5005", date: "Mar 3, 2035", dept: "Arts", category: "Supplies", description: "Paint sets & brushes", quantity: "25 sets", amount: 600 },
    { id: "EX-5006", date: "Mar 4, 2035", dept: "Physical Education", category: "Maintenance", description: "Gym floor repairs", quantity: "-", amount: 2500 },
    { id: "EX-5007", date: "Mar 5, 2035", dept: "Mathematics", category: "Salaries", description: "Monthly teacher salary", quantity: "-", amount: 5000 },
    { id: "EX-5008", date: "Mar 6, 2035", dept: "Science", category: "Salaries", description: "Monthly teacher salary", quantity: "-", amount: 5000 },
]

const expenseConfig = {
    amount: { label: "Amount", color: "hsl(var(--chart-1))" },
} satisfies ChartConfig

export default function ExpensesPage() {
    return (
        <BaseLayout title="Expenses" description="Track and manage school expenses">
            <div className="flex flex-col gap-6 px-4 pb-8 lg:px-6">
                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Expense Trend */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-base font-semibold">Expense Trend</CardTitle>
                            <Select defaultValue="last-8-months">
                                <SelectTrigger className="w-[140px]">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="last-8-months">Last 8 Months</SelectItem>
                                    <SelectItem value="last-6-months">Last 6 Months</SelectItem>
                                    <SelectItem value="this-year">This Year</SelectItem>
                                </SelectContent>
                            </Select>
                        </CardHeader>
                        <CardContent>
                            <div className="mb-2">
                                <div className="text-sm text-muted-foreground">April 2035</div>
                                <div className="text-2xl font-bold">$73,250</div>
                            </div>
                            <ChartContainer config={expenseConfig} className="h-[200px] w-full">
                                <BarChart data={expenseTrendData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                                    <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} fontSize={10} />
                                    <YAxis tickLine={false} axisLine={false} tickMargin={8} fontSize={10} tickFormatter={(value) => `$${value / 1000}K`} />
                                    <ChartTooltip content={<ChartTooltipContent />} />
                                    <Bar dataKey="amount" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ChartContainer>
                        </CardContent>
                    </Card>

                    {/* Expense Breakdown */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-base font-semibold">Expense Breakdown</CardTitle>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </CardHeader>
                        <CardContent className="flex items-center justify-center py-6">
                            <div className="relative w-48 h-48">
                                {/* Donut Chart SVG */}
                                <svg viewBox="0 0 100 100" className="transform -rotate-90">
                                    <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--muted))" strokeWidth="12" />
                                    {/* Salaries 55% */}
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="none"
                                        stroke="#1e3a8a"
                                        strokeWidth="12"
                                        strokeDasharray={`${(55 / 100) * 251.2} 251.2`}
                                        strokeDashoffset="0"
                                    />
                                    {/* Events 10% */}
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="none"
                                        stroke="hsl(var(--chart-2))"
                                        strokeWidth="12"
                                        strokeDasharray={`${(10 / 100) * 251.2} 251.2`}
                                        strokeDashoffset={`-${(55 / 100) * 251.2}`}
                                    />
                                    {/* Supplies 15% */}
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="none"
                                        stroke="hsl(var(--chart-3))"
                                        strokeWidth="12"
                                        strokeDasharray={`${(15 / 100) * 251.2} 251.2`}
                                        strokeDashoffset={`-${(65 / 100) * 251.2}`}
                                    />
                                    {/* Maintenance 12% */}
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="none"
                                        stroke="hsl(var(--chart-4))"
                                        strokeWidth="12"
                                        strokeDasharray={`${(12 / 100) * 251.2} 251.2`}
                                        strokeDashoffset={`-${(80 / 100) * 251.2}`}
                                    />
                                    {/* Others 8% */}
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="none"
                                        stroke="hsl(var(--chart-5))"
                                        strokeWidth="12"
                                        strokeDasharray={`${(8 / 100) * 251.2} 251.2`}
                                        strokeDashoffset={`-${(92 / 100) * 251.2}`}
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <div className="text-2xl font-bold">$125,000</div>
                                    <div className="text-xs text-muted-foreground">Total Expense</div>
                                </div>
                            </div>
                            <div className="ml-8 space-y-2 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#1e3a8a]" />
                                    <span className="text-muted-foreground">Salaries</span>
                                    <span className="ml-auto font-semibold">$64,000</span>
                                    <span className="text-muted-foreground">55%</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full" style={{ background: "hsl(var(--chart-2))" }} />
                                    <span className="text-muted-foreground">Events</span>
                                    <span className="ml-auto font-semibold">$23,500</span>
                                    <span className="text-muted-foreground">10%</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full" style={{ background: "hsl(var(--chart-3))" }} />
                                    <span className="text-muted-foreground">Supplies</span>
                                    <span className="ml-auto font-semibold">$18,750</span>
                                    <span className="text-muted-foreground">15%</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full" style={{ background: "hsl(var(--chart-4))" }} />
                                    <span className="text-muted-foreground">Maintenance</span>
                                    <span className="ml-auto font-semibold">$15,000</span>
                                    <span className="text-muted-foreground">12%</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full" style={{ background: "hsl(var(--chart-5))" }} />
                                    <span className="text-muted-foreground">Others</span>
                                    <span className="ml-auto font-semibold">$10,000</span>
                                    <span className="text-muted-foreground">8%</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Reimbursements Tracking */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base font-semibold">Reimbursements Tracking</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-muted/20">
                                    <TableHead>Request ID</TableHead>
                                    <TableHead>Staff Name</TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                    <TableHead>Date Submitted</TableHead>
                                    <TableHead className="text-center">Proof</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {reimbursements.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell className="font-medium text-cyan-600">{item.id}</TableCell>
                                        <TableCell>
                                            <div className="font-medium">{item.name}</div>
                                            <div className="text-xs text-muted-foreground">{item.subject}</div>
                                        </TableCell>
                                        <TableCell className="text-right font-semibold">${item.amount}</TableCell>
                                        <TableCell className="text-sm">{item.date}</TableCell>
                                        <TableCell className="text-center">
                                            {item.proof ? (
                                                <Button variant="ghost" size="sm" className="h-8 text-xs">
                                                    <FileText className="h-3 w-3 mr-1" />
                                                    View File
                                                </Button>
                                            ) : (
                                                <span className="text-muted-foreground">-</span>
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            {item.status === "Approved" && (
                                                <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 border-0">
                                                    Approved
                                                </Badge>
                                            )}
                                            {item.status === "Declined" && (
                                                <Badge className="bg-red-100 text-red-700 dark:bg-red-900/30 border-0">
                                                    Declined
                                                </Badge>
                                            )}
                                            {item.status === "Approve" && (
                                                <div className="flex items-center gap-1">
                                                    <Button size="sm" className="h-7 text-xs">Approve</Button>
                                                    <Button size="sm" variant="destructive" className="h-7 text-xs">Decline</Button>
                                                </div>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                {/* Expenses Table */}
                <Card>
                    <CardHeader>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <CardTitle className="text-base font-semibold">Expenses</CardTitle>
                            <div className="flex items-center gap-2">
                                <Select defaultValue="all">
                                    <SelectTrigger className="w-[160px]">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All Categories</SelectItem>
                                        <SelectItem value="salaries">Salaries</SelectItem>
                                        <SelectItem value="supplies">Supplies</SelectItem>
                                        <SelectItem value="maintenance">Maintenance</SelectItem>
                                        <SelectItem value="events">Events</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Select defaultValue="this-month">
                                    <SelectTrigger className="w-[130px]">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="this-month">This Month</SelectItem>
                                        <SelectItem value="last-month">Last Month</SelectItem>
                                        <SelectItem value="this-year">This Year</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-muted/20">
                                    <TableHead>Expense ID</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Department</TableHead>
                                    <TableHead>Category</TableHead>
                                    <TableHead>Description</TableHead>
                                    <TableHead className="text-center">Quantity</TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {expenses.map((expense) => (
                                    <TableRow key={expense.id}>
                                        <TableCell className="font-medium text-cyan-600">{expense.id}</TableCell>
                                        <TableCell className="text-sm">{expense.date}</TableCell>
                                        <TableCell>{expense.dept}</TableCell>
                                        <TableCell>
                                            <Badge variant="secondary" className={
                                                expense.category === "Supplies" ? "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 border-0" :
                                                    expense.category === "Maintenance" ? "bg-pink-100 text-pink-700 dark:bg-pink-900/30 border-0" :
                                                        expense.category === "Events" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 border-0" :
                                                            "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 border-0"
                                            }>
                                                {expense.category}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>{expense.description}</TableCell>
                                        <TableCell className="text-center">{expense.quantity}</TableCell>
                                        <TableCell className="text-right font-semibold text-red-600">${expense.amount}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                {/* Pagination */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div>
                        Show{" "}
                        <Select defaultValue="8">
                            <SelectTrigger className="w-16 h-8 inline-flex">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="8">8</SelectItem>
                                <SelectItem value="16">16</SelectItem>
                                <SelectItem value="24">24</SelectItem>
                            </SelectContent>
                        </Select>
                        {" "}of 40 results
                    </div>
                    <div className="flex items-center gap-1">
                        {[1, 2, 3, "...", 5].map((page, i) => (
                            <Button
                                key={i}
                                variant={page === 1 ? "default" : "ghost"}
                                size="sm"
                                className="h-8 w-8 p-0"
                                disabled={page === "..."}
                            >
                                {page}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </BaseLayout>
    )
}
