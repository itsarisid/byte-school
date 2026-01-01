"use client"

import { BaseLayout } from "@/components/layouts/base-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { MoreHorizontal, FileText, Phone, MapPin, Award, Dumbbell, Music, Bot, User, Calendar as CalendarIcon } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"

// Mock Data
const academicHistory = [
    { month: "Jan", score: 90 },
    { month: "Feb", score: 88 },
    { month: "Mar", score: 85 },
    { month: "Apr", score: 92 },
    { month: "May", score: 95 },
    { month: "Jun", score: 96 },
]

const chartConfig = {
    score: { label: "Score", color: "var(--primary)" },
} satisfies ChartConfig

export default function StudentDetailsPage() {
    return (
        <BaseLayout title="Student Details" description="View detailed student profile and performance">
            <div className="flex flex-col gap-4 px-4 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-4">
                    {/* Left Column (Profile & Personal) - Span 3 */}
                    <div className="md:col-span-3 space-y-6">
                        {/* Profile Card */}
                        <Card className="text-center pb-6 relative overflow-hidden">
                            <div className="absolute right-4 top-4">
                                <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="h-4 w-4" /></Button>
                            </div>
                            <CardContent className="pt-8 flex flex-col items-center">
                                <div className="w-24 h-24 rounded-2xl bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mb-4">
                                    <Avatar className="w-20 h-20">
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>IR</AvatarFallback>
                                    </Avatar>
                                </div>
                                <h3 className="text-xl font-bold">Isabella Rossi</h3>
                                <div className="flex justify-center gap-2 mt-2 mb-6">
                                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">S-2106</Badge>
                                    <Badge variant="outline">Class 8C</Badge>
                                    <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white border-0">Active</Badge>
                                </div>

                                <div className="w-full space-y-4 text-sm text-left">
                                    <div className="flex justify-between items-center">
                                        <span className="text-muted-foreground flex gap-3 items-center"><User className="h-4 w-4" /> Gender</span>
                                        <span className="font-medium">Female</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-muted-foreground flex gap-3 items-center"><CalendarIcon className="h-4 w-4" /> Date of Birth</span>
                                        <span className="font-medium">May 18, 2022</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-muted-foreground flex gap-3 items-center"><Phone className="h-4 w-4" /> Phone Number</span>
                                        <span className="font-medium">+62 812 9988 7766</span>
                                    </div>
                                    <div className="flex justify-between items-start">
                                        <span className="text-muted-foreground flex gap-3 items-center mt-1"><MapPin className="h-4 w-4" /> Address</span>
                                        <span className="font-medium text-right w-32">14 Via Milano, Rome, Italy</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Guardian Info */}
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-base font-semibold">Parent/Guardian Info</CardTitle>
                                <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="h-4 w-4" /></Button>
                            </CardHeader>
                            <CardContent className="space-y-4 text-sm">
                                <div className="flex justify-between items-center py-2 border-b last:border-0 last:pb-0">
                                    <span className="text-muted-foreground">Father</span>
                                    <div className="text-right">
                                        <p className="font-medium">Marco Rossi</p>
                                        <p className="text-xs text-muted-foreground">+39 331 222 5566</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b last:border-0 last:pb-0">
                                    <span className="text-muted-foreground">Mother</span>
                                    <div className="text-right">
                                        <p className="font-medium">Elena Rossi</p>
                                        <p className="text-xs text-muted-foreground">+39 331 444 7788</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-muted-foreground">Alternative<br />Guardian</span>
                                    <div className="text-right">
                                        <p className="font-medium">Lucia Bianchi (Aunt)</p>
                                        <p className="text-xs text-muted-foreground">+39 331 555 6677</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Documents */}
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-base font-semibold">Documents</CardTitle>
                                <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="h-4 w-4" /></Button>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                {["ReportCard_IsabellaRossi_Grade...", "Certificate_ScienceFair_Winner...", "IDCard_Student_S2106_Isabell..."].map((doc, i) => (
                                    <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group">
                                        <div className="w-9 h-9 rounded-full bg-pink-100 dark:bg-pink-900/20 text-pink-600 flex items-center justify-center shrink-0 group-hover:bg-pink-200 transition-colors">
                                            <FileText className="h-4 w-4" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs font-medium truncate text-foreground">{doc}</p>
                                            <p className="text-[10px] text-muted-foreground">PDF • {(1.2 + i * 0.4).toFixed(1)} MB</p>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Middle Column (Calendar & Extras) - Span 4 */}
                    <div className="md:col-span-4 space-y-6">
                        {/* Calendar */}
                        <Card>
                            <CardHeader className="pb-0 pt-6">
                                <CardTitle className="text-base font-semibold text-center">March 2035</CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 flex flex-col items-center">
                                <Calendar mode="single" selected={new Date()} className="w-full border-0 shadow-none" classNames={{
                                    head_cell: "w-9 text-muted-foreground font-normal text-[0.8rem]",
                                    cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                                    day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-accent rounded-full",
                                    day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                                    day_today: "bg-accent text-accent-foreground",
                                }} />
                                <div className="mt-4 flex gap-2 w-full">
                                    <div className="flex-1 bg-cyan-50 dark:bg-cyan-950/30 p-2 rounded-lg text-left border border-cyan-100 dark:border-cyan-900/20">
                                        <span className="text-[10px] text-muted-foreground block mb-1">Present</span>
                                        <span className="block text-xl font-bold text-cyan-700 dark:text-cyan-400">14</span>
                                    </div>
                                    <div className="flex-1 bg-pink-50 dark:bg-pink-950/30 p-2 rounded-lg text-left border border-pink-100 dark:border-pink-900/20">
                                        <span className="text-[10px] text-muted-foreground block mb-1">Late</span>
                                        <span className="block text-xl font-bold text-pink-700 dark:text-pink-400">3</span>
                                    </div>
                                    <div className="flex-1 bg-indigo-50 dark:bg-indigo-950/30 p-2 rounded-lg text-left border border-indigo-100 dark:border-indigo-900/20">
                                        <span className="text-[10px] text-muted-foreground block mb-1">Sick</span>
                                        <span className="block text-xl font-bold text-indigo-700 dark:text-indigo-400">2</span>
                                    </div>
                                    <div className="flex-1 bg-slate-50 dark:bg-slate-900/30 p-2 rounded-lg text-left border border-slate-100 dark:border-slate-800">
                                        <span className="text-[10px] text-muted-foreground block mb-1">Absent</span>
                                        <span className="block text-xl font-bold text-slate-700 dark:text-slate-400">1</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Scholarships */}
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-base font-semibold">Scholarships</CardTitle>
                                <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="h-4 w-4" /></Button>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center gap-4 p-4 border rounded-2xl bg-slate-50/50 dark:bg-slate-900/20">
                                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/20 text-purple-600 flex items-center justify-center shrink-0">
                                        <Award className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm">Global Young Achievers Award</p>
                                        <p className="text-xs text-muted-foreground">Finance</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 border rounded-2xl bg-slate-50/50 dark:bg-slate-900/20">
                                    <div className="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/20 text-pink-600 flex items-center justify-center shrink-0">
                                        <Award className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm">STEM for Girls Initiative</p>
                                        <p className="text-xs text-muted-foreground">Enrichment</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Health Info */}
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-base font-semibold">Health & Medical Info</CardTitle>
                                <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="h-4 w-4" /></Button>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="bg-cyan-50 dark:bg-cyan-950/30 p-4 rounded-xl border border-cyan-100 dark:border-cyan-900/30">
                                    <Badge className="bg-cyan-200 text-cyan-800 hover:bg-cyan-300 dark:bg-cyan-900 dark:text-cyan-100 mb-2 border-0">Medical Record</Badge>
                                    <p className="text-xs text-muted-foreground leading-relaxed">Routine health check completed Feb 2035 - Fit for activities</p>
                                </div>
                                <div className="bg-yellow-50 dark:bg-yellow-950/30 p-4 rounded-xl border border-yellow-100 dark:border-yellow-900/30">
                                    <Badge className="bg-yellow-200 text-yellow-800 hover:bg-yellow-300 dark:bg-yellow-900 dark:text-yellow-100 mb-2 border-0">Allergy</Badge>
                                    <p className="text-xs text-muted-foreground leading-relaxed">Mild pollen allergy - medication prescribed.</p>
                                </div>
                                <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-xl border border-red-100 dark:border-red-900/30">
                                    <Badge variant="destructive" className="mb-2 bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900 dark:text-red-100 border-0">Peanut Allergy</Badge>
                                    <p className="text-xs text-muted-foreground leading-relaxed">Severe reaction - strictly avoid exposure; EpiPen required.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column (Performance & Extra) - Span 5 */}
                    <div className="md:col-span-5 space-y-6">
                        {/* Academic Performance */}
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-base font-semibold">Academic Performance</CardTitle>
                                <Badge variant="secondary" className="bg-cyan-50 text-cyan-700 hover:bg-cyan-100 dark:bg-cyan-900/30 dark:text-cyan-300">Last 6 Months</Badge>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col xl:flex-row items-center gap-8">
                                    {/* Semi-Circle Gauge */}
                                    <div className="relative shrink-0 flex flex-col items-center">
                                        <div className="relative w-40 h-20 overflow-hidden flex justify-center mt-2">
                                            <div className="absolute top-0 w-32 h-32 rounded-full border-[12px] border-slate-100 dark:border-slate-800 box-border"></div>
                                            <div className="absolute top-0 w-32 h-32 rounded-full border-[12px] border-transparent border-t-[#0f172a] border-l-[#0f172a] dark:border-t-white dark:border-l-white box-border rotate-[-45deg] z-10"></div>
                                        </div>
                                        <div className="text-center -mt-8 relative z-20">
                                            <span className="text-3xl font-bold text-[#0f172a] dark:text-white block tracking-tighter">3.9<span className="text-sm text-slate-400 font-normal">/4.0</span></span>
                                            <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide">Average Score</span>
                                        </div>
                                    </div>

                                    {/* Bar Chart */}
                                    <div className="flex-1 w-full h-[150px]">
                                        <ChartContainer config={chartConfig} className="h-full w-full">
                                            <BarChart data={academicHistory} margin={{ top: 10, right: 0, left: -20, bottom: 0 }} barGap={2}>
                                                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                                                <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} fontSize={10} />
                                                <YAxis tickLine={false} axisLine={false} tickMargin={8} fontSize={10} domain={[0, 100]} />
                                                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                                                <Bar dataKey="score" fill="var(--color-score)" radius={[4, 4, 4, 4]} barSize={24} />
                                            </BarChart>
                                        </ChartContainer>
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground mt-6 leading-relaxed">
                                    Isabella shows consistent excellence in her studies and leadership in group projects. Keep aiming high!
                                </p>
                            </CardContent>
                        </Card>

                        {/* Extracurricular */}
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-base font-semibold">Extracurricular</CardTitle>
                                <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="h-4 w-4" /></Button>
                            </CardHeader>
                            <CardContent className="p-0">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="hover:bg-transparent border-b-0">
                                            <TableHead className="w-[140px] text-xs font-semibold h-9">Club</TableHead>
                                            <TableHead className="text-xs font-semibold h-9">Achievements</TableHead>
                                            <TableHead className="text-xs font-semibold h-9 text-right">Duration</TableHead>
                                            <TableHead className="text-xs font-semibold h-9 text-right">Advisor</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {[
                                            { club: "Swimming", role: "Team Member", award: "Won 2 Silver Medals (City Meet)", date: "2029 - Present", advisor: "Coach Andrea V.", icon: Dumbbell, color: "bg-cyan-100 text-cyan-600" },
                                            { club: "Dance", role: "Lead Performer", award: "Performed at National Festival", date: "2030 - Present", advisor: "Ms. Clara F.", icon: Music, color: "bg-blue-100 text-blue-600" },
                                            { club: "Robotics", role: "Programmer", award: "1st Place in School Robotics Fair", date: "2033 - Present", advisor: "Mr. Daniel K.", icon: Bot, color: "bg-slate-100 text-slate-600" },
                                        ].map((item, i) => (
                                            <TableRow key={i} className="hover:bg-transparent border-b-0">
                                                <TableCell className="py-3">
                                                    <div className="flex items-center gap-3">
                                                        <div className={`w-8 h-8 rounded-full ${item.color} dark:bg-opacity-20 flex items-center justify-center shrink-0`}>
                                                            <item.icon className="h-4 w-4" />
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold text-xs">{item.club}</p>
                                                            <p className="text-[10px] text-muted-foreground">{item.role}</p>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="py-3 text-xs font-medium">{item.award}</TableCell>
                                                <TableCell className="py-3 text-[10px] text-right text-muted-foreground">{item.date}</TableCell>
                                                <TableCell className="py-3 text-[10px] text-right text-muted-foreground">{item.advisor}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>

                        {/* Behavior Log */}
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-base font-semibold">Behavior & Discipline Log</CardTitle>
                                <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="h-4 w-4" /></Button>
                            </CardHeader>
                            <CardContent className="p-0">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="hover:bg-transparent border-b-0">
                                            <TableHead className="w-[100px] text-xs font-semibold h-9">Date</TableHead>
                                            <TableHead className="text-xs font-semibold h-9">Type & Details</TableHead>
                                            <TableHead className="text-xs font-semibold h-9">Reported By</TableHead>
                                            <TableHead className="text-xs font-semibold h-9 text-right">Status/Action</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {[
                                            { date: "Jan 10, 2035", type: "Positive Note", detail: "Helped classmates during group project", reporter: "Ms. Lee Record", status: "Recognition", statusColor: "bg-green-100 text-green-700" },
                                            { date: "Feb 02, 2035", type: "Positive Note", detail: "Volunteered in school event organization", reporter: "Admin Office", status: "Recorded", statusColor: "bg-blue-100 text-blue-700" },
                                            { date: "Feb 18, 2035", type: "Minor Issue", detail: "Late submission of homework", reporter: "Mr. Maulie", status: "Warning", statusColor: "bg-yellow-100 text-yellow-700" },
                                            { date: "Mar 05, 2035", type: "Minor Issue", detail: "Absent without prior notice", reporter: "Homeroom Teacher", status: "Parent Notified", statusColor: "bg-cyan-100 text-cyan-700" }
                                        ].map((log, i) => (
                                            <TableRow key={i} className="hover:bg-transparent border-b-0">
                                                <TableCell className="py-3 text-xs text-muted-foreground font-medium align-top">{log.date}</TableCell>
                                                <TableCell className="py-3 align-top">
                                                    <p className="font-semibold text-xs mb-1">{log.type}</p>
                                                    <p className="text-[11px] text-muted-foreground leading-tight">{log.detail}</p>
                                                </TableCell>
                                                <TableCell className="py-3 text-xs text-muted-foreground align-top">{log.reporter}</TableCell>
                                                <TableCell className="py-3 text-right align-top">
                                                    <Badge variant="secondary" className={`border-0 ${log.statusColor} dark:bg-opacity-20 whitespace-nowrap`}>{log.status}</Badge>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </BaseLayout>
    )
}
