"use client"

import { BaseLayout } from "@/components/layouts/base-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Calendar, Upload } from "lucide-react"

export default function AddStudentPage() {
    return (
        <BaseLayout title="Add New Student" description="Register a new student in the system">
            <div className="max-w-6xl mx-auto px-4 pb-8 lg:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="space-y-6">
                        {/* Personal Information */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">Personal Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="studentId" className="text-sm">Student ID</Label>
                                        <Input id="studentId" defaultValue="S-2111" disabled className="bg-muted" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-sm">Auto-Generated</Label>
                                        <div className="h-10 px-3 py-2 rounded-md border bg-muted text-sm text-muted-foreground flex items-center">
                                            Auto Generated
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="fullName" className="text-sm">Full Name</Label>
                                    <Input id="fullName" placeholder="Olivia Bennett" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="dob" className="text-sm">Date of Birth</Label>
                                    <div className="relative">
                                        <Input id="dob" type="date" defaultValue="2025-08-21" />
                                        <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-sm">Gender</Label>
                                    <div className="flex items-center gap-4 p-3 border rounded-lg bg-cyan-50 dark:bg-cyan-950/20">
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 rounded-full border-2 border-cyan-600 flex items-center justify-center">
                                                <div className="w-2 h-2 rounded-full bg-cyan-600" />
                                            </div>
                                            <span className="text-sm">Female</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 rounded-full border-2 border-muted-foreground" />
                                            <span className="text-sm text-muted-foreground">Male</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-sm">Profile Photo</Label>
                                    <div className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:border-primary transition-colors">
                                        <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                                        <p className="text-sm text-cyan-600 dark:text-cyan-400 mb-1">Click or drag to upload</p>
                                        <p className="text-xs text-muted-foreground">Upload a recent passport-style photo (Max: 3MB - JPG/PNG)</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Contact Information */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">Contact Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-sm">Email Address</Label>
                                    <Input id="email" type="email" placeholder="olivia.bennett@student.studio.org" />
                                </div>

                                <div className="grid grid-cols-3 gap-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="countryCode" className="text-sm">Phone Number</Label>
                                        <Select defaultValue="+44">
                                            <SelectTrigger id="countryCode">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="+44">+44</SelectItem>
                                                <SelectItem value="+1">+1</SelectItem>
                                                <SelectItem value="+91">+91</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="col-span-2 space-y-2">
                                        <Label htmlFor="phone" className="text-sm opacity-0">Phone</Label>
                                        <Input id="phone" placeholder="e.g. 5555 718091" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="address" className="text-sm">Address</Label>
                                    <Input id="address" placeholder="Street, City, State, ZIP" />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Parent/Guardian Info */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">Parent/Guardian Info</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label className="text-sm font-semibold">Father</Label>
                                        <Label htmlFor="fatherName" className="text-sm text-muted-foreground">Name</Label>
                                        <Input id="fatherName" placeholder="Henry Bennett" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-sm font-semibold">Mother</Label>
                                        <Label htmlFor="motherName" className="text-sm text-muted-foreground">Name</Label>
                                        <Input id="motherName" placeholder="Laura Bennett" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="fatherPhone" className="text-sm text-muted-foreground">Phone Number</Label>
                                        <div className="grid grid-cols-3 gap-2">
                                            <Select defaultValue="+44">
                                                <SelectTrigger>
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="+44">+44</SelectItem>
                                                    <SelectItem value="+1">+1</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <Input className="col-span-2" placeholder="7900 112233" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="motherPhone" className="text-sm text-muted-foreground">Phone Number</Label>
                                        <div className="grid grid-cols-3 gap-2">
                                            <Select defaultValue="+44">
                                                <SelectTrigger>
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="+44">+44</SelectItem>
                                                    <SelectItem value="+1">+1</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <Input className="col-span-2" placeholder="7900 112233" />
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <Label className="text-sm font-semibold mb-3 block">Alternative Guardian (If Any)</Label>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="guardianName" className="text-sm text-muted-foreground">Name</Label>
                                            <Input id="guardianName" placeholder="Amelie Reese" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="guardianRelation" className="text-sm text-muted-foreground">Relation</Label>
                                            <Select>
                                                <SelectTrigger id="guardianRelation">
                                                    <SelectValue placeholder="Aunt" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="aunt">Aunt</SelectItem>
                                                    <SelectItem value="uncle">Uncle</SelectItem>
                                                    <SelectItem value="grandparent">Grandparent</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="guardianPhone" className="text-sm text-muted-foreground">Phone Number</Label>
                                            <div className="grid grid-cols-3 gap-1">
                                                <Select defaultValue="+44">
                                                    <SelectTrigger className="text-xs">
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="+44">+44</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <Input className="col-span-2 text-xs" placeholder="7933 556677" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        {/* Administration */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">Administration</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="admissionNumber" className="text-sm">Admission Number</Label>
                                    <Input id="admissionNumber" defaultValue="ADM-1005" disabled className="bg-muted" />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-sm">Auto-Generated</Label>
                                    <div className="h-10 px-3 py-2 rounded-md border bg-muted text-sm text-muted-foreground flex items-center">
                                        Auto Generated
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Academic Information */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">Academic Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="grade" className="text-sm">Grade</Label>
                                        <Select>
                                            <SelectTrigger id="grade">
                                                <SelectValue placeholder="Select grade" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {Array.from({ length: 12 }, (_, i) => (
                                                    <SelectItem key={i + 1} value={`${i + 1}`}>Grade {i + 1}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="section" className="text-sm">Section</Label>
                                        <Select>
                                            <SelectTrigger id="section">
                                                <SelectValue placeholder="B" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="a">A</SelectItem>
                                                <SelectItem value="b">B</SelectItem>
                                                <SelectItem value="c">C</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="enrollmentDate" className="text-sm">Enrollment Date</Label>
                                    <div className="relative">
                                        <Input id="enrollmentDate" type="date" defaultValue="2035-03-05" />
                                        <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="previousSchool" className="text-sm">Previous School</Label>
                                    <Input id="previousSchool" placeholder="e.g. Greenfield Junior High" className="border-pink-200 focus-visible:ring-pink-500" />
                                    <p className="text-xs text-pink-600 dark:text-pink-400">Previous school cannot be empty</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Additional Information */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">Additional Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="hobbies" className="text-sm">Hobbies / Interests</Label>
                                    <Input id="hobbies" placeholder="Painting, Robotics, and Reading Novels" />
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="specialNeeds" className="text-sm">Special Needs Support</Label>
                                        <Switch id="specialNeeds" />
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="medicalCondition" className="text-sm">Medical Condition Alert</Label>
                                        <Switch id="medicalCondition" defaultChecked />
                                    </div>

                                    <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                                        <Checkbox id="mildAsthma" defaultChecked />
                                        <Label htmlFor="mildAsthma" className="text-sm cursor-pointer">Mild asthma - requires inhaler during sports activities</Label>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t">
                    <Button variant="link" className="text-cyan-600 dark:text-cyan-400">
                        Save as Draft
                    </Button>
                    <div className="flex items-center gap-3">
                        <Button variant="outline">Cancel</Button>
                        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                            Save & Add Student
                        </Button>
                    </div>
                </div>
            </div>
        </BaseLayout>
    )
}
