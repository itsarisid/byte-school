"use client"

import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BaseLayout } from "@/components/layouts/base-layout"
import { Slider } from "@/components/ui/slider"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Info, Trash2 } from "lucide-react"

export default function ProfilePage() {
    return (
        <BaseLayout
            title="Settings"
            description="Manage your account settings and preferences"
        >
            <div className="space-y-8 px-4 pb-16 block lg:px-6 max-w-5xl">

                <Tabs defaultValue="account" className="w-full">
                    <TabsList className="w-full justify-start h-auto p-0 bg-transparent border-b rounded-none mb-6">
                        <TabsTrigger
                            value="account"
                            className="rounded-full data-[state=active]:bg-secondary data-[state=active]:text-foreground px-4 py-2"
                        >
                            Account
                        </TabsTrigger>
                        {["Notifications", "Sharing", "Update schedule", "Billing", "Questions"].map((tab) => (
                            <TabsTrigger
                                key={tab}
                                value={tab.toLowerCase().replace(" ", "-")}
                                disabled
                                className="rounded-full data-[state=active]:bg-secondary data-[state=active]:text-foreground px-4 py-2 text-muted-foreground"
                            >
                                {tab}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    <TabsContent value="account" className="space-y-10">
                        {/* Profile Section */}
                        <section className="space-y-6">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="md:w-1/3">
                                    <h3 className="text-lg font-medium">Profile</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Set your account details
                                    </p>
                                </div>
                                <div className="md:w-2/3 space-y-6">
                                    <div className="flex flex-col md:flex-row gap-6 items-start">
                                        <div className="flex-1 w-full space-y-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="firstName">Name</Label>
                                                    <Input id="firstName" defaultValue="Bartosz" />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="lastName">Surname</Label>
                                                    <Input id="lastName" defaultValue="Mcdaniel" />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email</Label>
                                                <Input id="email" type="email" defaultValue="bartmcdaniel@niceguys.com" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center gap-3 pt-6 md:pt-0">
                                            <Avatar className="w-24 h-24">
                                                <AvatarImage src="https://github.com/shadcn.png" />
                                                <AvatarFallback>BM</AvatarFallback>
                                            </Avatar>
                                            <div className="flex items-center gap-2">
                                                <Button variant="outline" size="sm" className="h-8">
                                                    Edit photo
                                                </Button>
                                                <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Separator />
                        </section>

                        {/* Timezone & Preferences */}
                        <section className="space-y-6">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="md:w-1/3">
                                    <h3 className="text-lg font-medium">Timezone & preferences</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Let us know the time zone and format
                                    </p>
                                </div>
                                <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="city">City</Label>
                                        <Input id="city" defaultValue="New York" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Timezone</Label>
                                        <Select defaultValue="utc-4">
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select timezone" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="utc-4">UTC/GMT -4 hours</SelectItem>
                                                <SelectItem value="utc-5">UTC/GMT -5 hours</SelectItem>
                                                <SelectItem value="utc+1">UTC/GMT +1 hour</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Date & Time format</Label>
                                        <Select defaultValue="ddmmyyyy">
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select format" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="ddmmyyyy">dd/mm/yyyy 00:00</SelectItem>
                                                <SelectItem value="mmddyyyy">mm/dd/yyyy 00:00</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                            <Separator />
                        </section>

                        {/* Motivation & Performance */}
                        <section className="space-y-6">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="md:w-1/3 space-y-4">
                                    <h3 className="text-lg font-medium">Motivation & Performance setup</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Calibrate your desired activity levels
                                    </p>
                                    <div className="flex items-center gap-2 text-primary text-xs cursor-pointer hover:underline">
                                        <span>Learn more about work time classification</span>
                                        <Info className="h-3 w-3" />
                                    </div>
                                </div>
                                <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-6">
                                        <div className="flex justify-between">
                                            <Label>Desired daily time utilization</Label>
                                            <span className="text-sm font-medium">7 hrs</span>
                                        </div>
                                        <Slider defaultValue={[70]} max={100} step={1} className="w-full" />
                                        <p className="text-xs text-muted-foreground">
                                            Find the perfect allocation that suits your workflow and maximizes your potential.
                                        </p>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="flex justify-between">
                                            <Label>Desired daily core work range</Label>
                                            <span className="text-sm font-medium">3-6 hrs</span>
                                        </div>
                                        <Slider defaultValue={[30, 60]} max={100} step={1} className="w-full" />
                                        <p className="text-xs text-muted-foreground">
                                            Define the critical hours dedicated to your most important tasks.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <Separator />
                        </section>

                        {/* Your work */}
                        <section className="space-y-6">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="md:w-1/3">
                                    <h3 className="text-lg font-medium">Your work</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Add info about your position
                                    </p>
                                </div>
                                <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="function">Function</Label>
                                        <Input id="function" defaultValue="Design" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="jobTitle">Job Title</Label>
                                        <Input id="jobTitle" defaultValue="Team Lead designer" />
                                    </div>
                                </div>
                            </div>
                            {/* Responsibilities - placeholder matching image bottom */}
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="md:w-1/3">
                                </div>
                                <div className="md:w-2/3">
                                    <div className="space-y-2">
                                        <Label htmlFor="responsibilities">Responsibilities</Label>
                                        <Input id="responsibilities" placeholder="Add responsibilities" />
                                    </div>
                                </div>
                            </div>
                        </section>

                    </TabsContent>
                </Tabs>
            </div>
        </BaseLayout>
    )
}
