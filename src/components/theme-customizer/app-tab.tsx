"use client"

import { useAtom } from 'jotai'
import { Check, Calendar, Clock, Type, Globe } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { appConfigAtom } from '@/store/theme-store'
import { dateFormats, timeFormats, fontFamilies, weekStartOptions } from '@/config/theme-customizer-constants'

export function AppTab() {
    const [config, setConfig] = useAtom(appConfigAtom)

    return (
        <div className="space-y-8">
            {/* Date Format */}
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <Label className="text-base font-semibold">Date Format</Label>
                </div>
                <div className="grid gap-2">
                    <Select
                        value={config.dateFormat}
                        onValueChange={(value) => setConfig({ ...config, dateFormat: value })}
                    >
                        <SelectTrigger className="w-full max-w-sm">
                            <SelectValue placeholder="Select date format" />
                        </SelectTrigger>
                        <SelectContent>
                            {dateFormats.map((format) => (
                                <SelectItem key={format.value} value={format.value}>
                                    {format.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground">
                        Choose how dates are displayed throughout the application.
                    </p>
                </div>
            </div>

            {/* Time Format */}
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <Label className="text-base font-semibold">Time Format</Label>
                </div>
                <RadioGroup
                    value={config.timeFormat}
                    onValueChange={(value: "12h" | "24h") => setConfig({ ...config, timeFormat: value })}
                    className="flex flex-col space-y-1"
                >
                    {timeFormats.map((format) => (
                        <div key={format.value} className="flex items-center space-x-2">
                            <RadioGroupItem value={format.value} id={`time-${format.value}`} />
                            <Label htmlFor={`time-${format.value}`} className="font-normal cursor-pointer">
                                {format.name}
                            </Label>
                        </div>
                    ))}
                </RadioGroup>
            </div>

            {/* Week Start Date */}
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <Label className="text-base font-semibold">Week Starts On</Label>
                </div>
                <div className="grid gap-2">
                    <Select
                        value={config.weekStart}
                        onValueChange={(value: any) => setConfig({ ...config, weekStart: value })}
                    >
                        <SelectTrigger className="w-full max-w-sm">
                            <SelectValue placeholder="Select week start day" />
                        </SelectTrigger>
                        <SelectContent>
                            {weekStartOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground">
                        Set the first day of the week for calendars and analytics.
                    </p>
                </div>
            </div>

            {/* Font Family */}
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <Type className="h-4 w-4 text-muted-foreground" />
                    <Label className="text-base font-semibold">Font Family</Label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {fontFamilies.map((font) => (
                        <button
                            key={font.value}
                            onClick={() => setConfig({ ...config, fontFamily: font.value })}
                            className={cn(
                                "flex flex-col items-start gap-2 p-3 rounded-lg border text-left transition-all hover:bg-accent",
                                config.fontFamily === font.value
                                    ? "border-primary bg-primary/5 ring-1 ring-primary"
                                    : "border-border"
                            )}
                        >
                            <div className="flex items-center justify-between w-full">
                                <span className="font-medium" style={{ fontFamily: `var(--font-${font.value}, sans-serif)` }}>
                                    {font.name}
                                </span>
                                {config.fontFamily === font.value && (
                                    <Check className="h-4 w-4 text-primary" />
                                )}
                            </div>
                            <span className="text-xs text-muted-foreground line-clamp-2">
                                {font.description}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Language */}
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <Label className="text-base font-semibold">Language</Label>
                </div>
                <div className="grid gap-2">
                    <Select
                        value={config.language}
                        onValueChange={(value) => setConfig({ ...config, language: value })}
                    >
                        <SelectTrigger className="w-full max-w-sm">
                            <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="en">English (US)</SelectItem>
                            <SelectItem value="es" disabled>Spanish (Coming Soon)</SelectItem>
                            <SelectItem value="fr" disabled>French (Coming Soon)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    )
}
