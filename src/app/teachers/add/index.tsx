"use client"

import { BaseLayout } from "@/components/layouts/base-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Calendar, Upload } from "lucide-react"

export default function AddTeacherPage() {
    return (
        <BaseLayout title="Add New Teacher" description="Register a new teacher in the system">
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
                                        <Label htmlFor="employeeId" className="text-sm">Employee ID</Label>
                                        <Input id="employeeId" defaultValue="T-2045" disabled className="bg-muted" />
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
                                    <Input id="fullName" placeholder="Sarah Johnson" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="dob" className="text-sm">Date of Birth</Label>
                                    <div className="relative">
                                        <Input id="dob" type="date" />
                                        <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-sm">Gender</Label>
                                    <div className="flex items-center gap-4 p-3 border rounded-lg">
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
                                    <Input id="email" type="email" placeholder="sarah.johnson@school.org" />
                                </div>

                                <div className="grid grid-cols-3 gap-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="countryCode" className="text-sm">Phone Number</Label>
                                        <Select defaultValue="+1">
                                            <SelectTrigger id="countryCode">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="+1">+1</SelectItem>
                                                <SelectItem value="+44">+44</SelectItem>
                                                <SelectItem value="+91">+91</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="col-span-2 space-y-2">
                                        <Label htmlFor="phone" className="text-sm opacity-0">Phone</Label>
                                        <Input id="phone" placeholder="e.g. 555 123 4567" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="address" className="text-sm">Address</Label>
                                    <Textarea id="address" placeholder="Street, City, State, ZIP" rows={3} />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Emergency Contact */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">Emergency Contact</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="emergencyName" className="text-sm">Contact Name</Label>
                                        <Input id="emergencyName" placeholder="John Johnson" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="emergencyRelation" className="text-sm">Relation</Label>
                                        <Select>
                                            <SelectTrigger id="emergencyRelation">
                                                <SelectValue placeholder="Spouse" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="spouse">Spouse</SelectItem>
                                                <SelectItem value="parent">Parent</SelectItem>
                                                <SelectItem value="sibling">Sibling</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-2">
                                    <Select defaultValue="+1">
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="+1">+1</SelectItem>
                                            <SelectItem value="+44">+44</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Input className="col-span-2" placeholder="555 987 6543" />
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        {/* Employment Information */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">Employment Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="department" className="text-sm">Department</Label>
                                        <Select>
                                            <SelectTrigger id="department">
                                                <SelectValue placeholder="Select department" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="mathematics">Mathematics</SelectItem>
                                                <SelectItem value="science">Science</SelectItem>
                                                <SelectItem value="english">English</SelectItem>
                                                <SelectItem value="social">Social Studies</SelectItem>
                                                <SelectItem value="arts">Arts</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="position" className="text-sm">Position</Label>
                                        <Select>
                                            <SelectTrigger id="position">
                                                <SelectValue placeholder="Select position" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="teacher">Teacher</SelectItem>
                                                <SelectItem value="senior">Senior Teacher</SelectItem>
                                                <SelectItem value="head">Head of Department</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="shift" className="text-sm">Shift</Label>
                                        <Select>
                                            <SelectTrigger id="shift">
                                                <SelectValue placeholder="Select shift" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="morning">Morning (7 AM - 2 PM)</SelectItem>
                                                <SelectItem value="afternoon">Afternoon (1 PM - 8 PM)</SelectItem>
                                                <SelectItem value="evening">Evening (3 PM - 10 PM)</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="salary" className="text-sm">Monthly Salary</Label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                                            <Input id="salary" type="number" placeholder="5000" className="pl-7" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="joinDate" className="text-sm">Join Date</Label>
                                    <div className="relative">
                                        <Input id="joinDate" type="date" />
                                        <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="contractType" className="text-sm">Contract Type</Label>
                                    <Select>
                                        <SelectTrigger id="contractType">
                                            <SelectValue placeholder="Permanent" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="permanent">Permanent</SelectItem>
                                            <SelectItem value="contract">Contract</SelectItem>
                                            <SelectItem value="temporary">Temporary</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Qualifications */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">Qualifications</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="degree" className="text-sm">Highest Degree</Label>
                                    <Select>
                                        <SelectTrigger id="degree">
                                            <SelectValue placeholder="Master's Degree" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                                            <SelectItem value="master">Master's Degree</SelectItem>
                                            <SelectItem value="phd">PhD</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="specialization" className="text-sm">Specialization</Label>
                                    <Input id="specialization" placeholder="e.g. Mathematics Education" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="certifications" className="text-sm">Certifications</Label>
                                    <Textarea id="certifications" placeholder="List any relevant certifications..." rows={3} />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="experience" className="text-sm">Years of Experience</Label>
                                    <Input id="experience" type="number" placeholder="5" />
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
                                    <Label htmlFor="languages" className="text-sm">Languages Spoken</Label>
                                    <Input id="languages" placeholder="English, Spanish" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="notes" className="text-sm">Notes</Label>
                                    <Textarea id="notes" placeholder="Any additional information..." rows={3} />
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
                            Save & Add Teacher
                        </Button>
                    </div>
                </div>
            </div>
        </BaseLayout>
    )
}
