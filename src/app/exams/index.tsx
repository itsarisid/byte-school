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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Search, FileText, Award } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"

// Mock Data
const performanceData = [
    { subject: "Math", average: 85 },
    { subject: "Science", average: 78 },
    { subject: "English", average: 92 },
    { subject: "History", average: 76 },
    { subject: "Arts", average: 88 },
]

const upcomingExams = [
    { id: 1, subject: "Mathematics", grade: "Grade 11", date: "May 15, 2035", time: "09:00 AM", duration: "2 hours", room: "A-101", status: "Scheduled" },
    { id: 2, subject: "Science", grade: "Grade 10", date: "May 16, 2035", time: "10:00 AM", duration: "1.5 hours", room: "B-205", status: "Scheduled" },
    { id: 3, subject: "English", grade: "Grade 9", date: "May 17, 2035", time: "09:00 AM", duration: "2 hours", room: "C-301", status: "Scheduled" },
    { id: 4, subject: "History", grade: "Grade 12", date: "May 18, 2035", time: "11:00 AM", duration: "1 hour", room: "A-102", status: "Scheduled" },
]

const recentResults = [
    { id: 1, exam: "Mid-term Mathematics", grade: "Grade 11", date: "Apr 15, 2035", totalStudents: 45, avgScore: 78, passRate: 89, status: "Published" },
    { id: 2, exam: "Quiz - Science Chapter 5", grade: "Grade 10", date: "Apr 12, 2035", totalStudents: 38, avgScore: 85, passRate: 95, status: "Published" },
    { id: 3, exam: "Final English Literature", grade: "Grade 12", date: "Apr 10, 2035", totalStudents: 52, avgScore: 82, passRate: 92, status: "Published" },
    { id: 4, exam: "Mid-term Chemistry", grade: "Grade 11", date: "Apr 8, 2035", totalStudents: 41, avgScore: 75, passRate: 85, status: "Grading" },
]

const performanceConfig = {
    average: { label: "Average Score", color: "hsl(var(--chart-1))" },
} satisfies ChartConfig

export default function ExamsPage() {
    return (
        <BaseLayout title="Exams & Assessments" description="Manage exams, schedules, and results">
            <div className="flex flex-col gap-6 px-4 pb-8 lg:px-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    <Card className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-950/30 dark:to-pink-950/30 border-0">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-white/50 dark:bg-purple-900/30 rounded-lg">
                                    <Calendar className="h-4 w-4 text-purple-600" />
                                </div>
                                <Badge className="bg-white/80 text-purple-700 border-0">This Month</Badge>
                            </div>
                            <div className="text-3xl font-bold">24</div>
                            <div className="text-sm text-muted-foreground mt-1">Scheduled Exams</div>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-950/30 dark:to-blue-950/30 border-0">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-white/50 dark:bg-cyan-900/30 rounded-lg">
                                    <FileText className="h-4 w-4 text-cyan-600" />
                                </div>
                                <Badge className="bg-white/80 text-cyan-700 border-0">Pending</Badge>
                            </div>
                            <div className="text-3xl font-bold">8</div>
                            <div className="text-sm text-muted-foreground mt-1">Results to Publish</div>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-950/30 dark:to-orange-950/30 border-0">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-white/50 dark:bg-yellow-900/30 rounded-lg">
                                    <Award className="h-4 w-4 text-yellow-600" />
                                </div>
                                <Badge className="bg-white/80 text-yellow-700 border-0">Average</Badge>
                            </div>
                            <div className="text-3xl font-bold">82%</div>
                            <div className="text-sm text-muted-foreground mt-1">Overall Performance</div>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-950/30 dark:to-green-950/30 border-0">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-white/50 dark:bg-emerald-900/30 rounded-lg">
                                    <Award className="h-4 w-4 text-emerald-600" />
                                </div>
                                <Badge className="bg-white/80 text-emerald-700 border-0">Rate</Badge>
                            </div>
                            <div className="text-3xl font-bold">91%</div>
                            <div className="text-sm text-muted-foreground mt-1">Pass Rate</div>
                        </CardContent>
                    </Card>
                </div>

                {/* Performance Overview */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base font-semibold">Performance by Subject</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={performanceConfig} className="h-[200px] w-full">
                            <BarChart data={performanceData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                                <XAxis dataKey="subject" tickLine={false} axisLine={false} tickMargin={8} fontSize={11} />
                                <YAxis tickLine={false} axisLine={false} tickMargin={8} fontSize={10} domain={[0, 100]} />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <Bar dataKey="average" fill="var(--color-average)" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>

                {/* Tabs for Exams */}
                <Card>
                    <CardHeader>
                        <Tabs defaultValue="upcoming" className="w-full">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <TabsList>
                                    <TabsTrigger value="upcoming">Upcoming Exams</TabsTrigger>
                                    <TabsTrigger value="results">Recent Results</TabsTrigger>
                                </TabsList>
                                <div className="flex items-center gap-2">
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                        <Input placeholder="Search exams" className="pl-9 w-[200px]" />
                                    </div>
                                    <Select defaultValue="all-grades">
                                        <SelectTrigger className="w-[130px]">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all-grades">All Grades</SelectItem>
                                            <SelectItem value="9">Grade 9</SelectItem>
                                            <SelectItem value="10">Grade 10</SelectItem>
                                            <SelectItem value="11">Grade 11</SelectItem>
                                            <SelectItem value="12">Grade 12</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600">
                                        Schedule Exam
                                    </Button>
                                </div>
                            </div>

                            <TabsContent value="upcoming" className="mt-6">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="bg-muted/20">
                                            <TableHead>Subject</TableHead>
                                            <TableHead>Grade/Class</TableHead>
                                            <TableHead>Date</TableHead>
                                            <TableHead>Time</TableHead>
                                            <TableHead>Duration</TableHead>
                                            <TableHead>Room</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead className="text-right">Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {upcomingExams.map((exam) => (
                                            <TableRow key={exam.id}>
                                                <TableCell className="font-medium">{exam.subject}</TableCell>
                                                <TableCell>{exam.grade}</TableCell>
                                                <TableCell>{exam.date}</TableCell>
                                                <TableCell>{exam.time}</TableCell>
                                                <TableCell>{exam.duration}</TableCell>
                                                <TableCell>{exam.room}</TableCell>
                                                <TableCell>
                                                    <Badge className="bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 border-0">
                                                        {exam.status}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <Button variant="ghost" size="sm">Edit</Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TabsContent>

                            <TabsContent value="results" className="mt-6">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="bg-muted/20">
                                            <TableHead>Exam</TableHead>
                                            <TableHead>Grade/Class</TableHead>
                                            <TableHead>Date</TableHead>
                                            <TableHead className="text-center">Total Students</TableHead>
                                            <TableHead className="text-center">Avg Score</TableHead>
                                            <TableHead className="text-center">Pass Rate</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead className="text-right">Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {recentResults.map((result) => (
                                            <TableRow key={result.id}>
                                                <TableCell className="font-medium">{result.exam}</TableCell>
                                                <TableCell>{result.grade}</TableCell>
                                                <TableCell>{result.date}</TableCell>
                                                <TableCell className="text-center">{result.totalStudents}</TableCell>
                                                <TableCell className="text-center font-semibold">{result.avgScore}%</TableCell>
                                                <TableCell className="text-center font-semibold text-emerald-600">{result.passRate}%</TableCell>
                                                <TableCell>
                                                    {result.status === "Published" ? (
                                                        <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 border-0">
                                                            Published
                                                        </Badge>
                                                    ) : (
                                                        <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 border-0">
                                                            Grading
                                                        </Badge>
                                                    )}
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <Button variant="ghost" size="sm">View Details</Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TabsContent>
                        </Tabs>
                    </CardHeader>
                </Card>
            </div>
        </BaseLayout>
    )
}
