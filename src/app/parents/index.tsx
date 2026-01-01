"use client"

import { BaseLayout } from "@/components/layouts/base-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
import { Search, Mail, Phone, Edit, Trash2 } from "lucide-react"

// Mock Data
const parents = [
    { id: 1, name: "Henry Bennett", relation: "Father", student: "Olivia Bennett", studentId: "S-2111", email: "henry.b@email.com", phone: "+44 7900 112233", avatar: "https://github.com/shadcn.png" },
    { id: 2, name: "Laura Bennett", relation: "Mother", student: "Olivia Bennett", studentId: "S-2111", email: "laura.b@email.com", phone: "+44 7900 112233", avatar: "https://github.com/shadcn.png" },
    { id: 3, name: "Michael Johnson", relation: "Father", student: "Emma Williams", studentId: "S-2102", email: "m.johnson@email.com", phone: "+44 7800 223344", avatar: "https://github.com/shadcn.png" },
    { id: 4, name: "Sarah Johnson", relation: "Mother", student: "Emma Williams", studentId: "S-2102", email: "s.johnson@email.com", phone: "+44 7800 223344", avatar: "https://github.com/shadcn.png" },
    { id: 5, name: "David Green", relation: "Father", student: "Thomas Green", studentId: "S-2105", email: "d.green@email.com", phone: "+44 7700 334455", avatar: "https://github.com/shadcn.png" },
    { id: 6, name: "Emily Green", relation: "Mother", student: "Thomas Green", studentId: "S-2105", email: "e.green@email.com", phone: "+44 7700 334455", avatar: "https://github.com/shadcn.png" },
]

export default function ParentsPage() {
    return (
        <BaseLayout title="Parents & Guardians" description="Manage parent and guardian information">
            <div className="flex flex-col gap-6 px-4 pb-8 lg:px-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Card className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-950/30 dark:to-pink-950/30 border-0">
                        <CardContent className="p-6">
                            <div className="text-3xl font-bold">580</div>
                            <div className="text-sm text-muted-foreground mt-1">Total Parents</div>
                        </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-950/30 dark:to-blue-950/30 border-0">
                        <CardContent className="p-6">
                            <div className="text-3xl font-bold">320</div>
                            <div className="text-sm text-muted-foreground mt-1">Active Contacts</div>
                        </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-950/30 dark:to-orange-950/30 border-0">
                        <CardContent className="p-6">
                            <div className="text-3xl font-bold">45</div>
                            <div className="text-sm text-muted-foreground mt-1">Guardians</div>
                        </CardContent>
                    </Card>
                </div>

                {/* Parents Table */}
                <Card>
                    <CardHeader>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <CardTitle className="text-base font-semibold">Parents & Guardians Directory</CardTitle>
                            <div className="flex items-center gap-2">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input placeholder="Search by name or student" className="pl-9 w-[240px]" />
                                </div>
                                <Select defaultValue="all">
                                    <SelectTrigger className="w-[140px]">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All Relations</SelectItem>
                                        <SelectItem value="father">Father</SelectItem>
                                        <SelectItem value="mother">Mother</SelectItem>
                                        <SelectItem value="guardian">Guardian</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Button className="bg-gradient-to-r from-purple-600 to-pink-600">
                                    Add Parent
                                </Button>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-muted/20">
                                    <TableHead className="w-[250px]">Parent/Guardian Name</TableHead>
                                    <TableHead>Relation</TableHead>
                                    <TableHead>Student</TableHead>
                                    <TableHead>Contact Information</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {parents.map((parent) => (
                                    <TableRow key={parent.id}>
                                        <TableCell>
                                            <div className="flex items-center gap-3">
                                                <Avatar className="h-10 w-10">
                                                    <AvatarImage src={parent.avatar} />
                                                    <AvatarFallback>{parent.name[0]}</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <div className="font-medium">{parent.name}</div>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                                                {parent.relation}
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div>
                                                <div className="font-medium">{parent.student}</div>
                                                <div className="text-xs text-muted-foreground">{parent.studentId}</div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2 text-sm">
                                                    <Mail className="h-3 w-3 text-muted-foreground" />
                                                    <span>{parent.email}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm">
                                                    <Phone className="h-3 w-3 text-muted-foreground" />
                                                    <span>{parent.phone}</span>
                                                </div>
                                            </div>
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
                    </CardContent>
                </Card>

                {/* Pagination */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div>
                        Showing 1-6 of 580 parents
                    </div>
                    <div className="flex items-center gap-1">
                        {[1, 2, 3, "...", 97].map((page, i) => (
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
