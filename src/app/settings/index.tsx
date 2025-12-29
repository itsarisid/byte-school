"use client"

import React from 'react'
import { useAtom } from 'jotai'
import { Layout, Palette, RotateCcw, Settings } from 'lucide-react'
import { BaseLayout } from "@/components/layouts/base-layout"
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useThemeManager } from '@/hooks/use-theme-manager'
import { useSidebarConfig } from '@/contexts/sidebar-context'
import { ThemeTab } from '@/components/theme-customizer/theme-tab'
import { LayoutTab } from '@/components/theme-customizer/layout-tab'
import { AppTab } from '@/components/theme-customizer/app-tab'
import { ImportModal } from '@/components/theme-customizer/import-modal'
import {
    selectedThemeAtom,
    selectedMyThemeAtom,
    selectedRadiusAtom,
    importedThemeAtom,
    appConfigAtom
} from '@/store/theme-store'
import type { ImportedTheme } from '@/types/theme-customizer'

export default function SettingsPage() {
    const { applyImportedTheme, isDarkMode, resetTheme, applyRadius, setBrandColorsValues } = useThemeManager()
    const { updateConfig: updateSidebarConfig } = useSidebarConfig()

    const [activeTab, setActiveTab] = React.useState("theme")
    const [selectedTheme, setSelectedTheme] = useAtom(selectedThemeAtom)
    const [selectedMyTheme, setSelectedMyTheme] = useAtom(selectedMyThemeAtom)
    const [selectedRadius, setSelectedRadius] = useAtom(selectedRadiusAtom)
    const [importModalOpen, setImportModalOpen] = React.useState(false)
    const [, setImportedTheme] = useAtom(importedThemeAtom)
    const [, setAppConfig] = useAtom(appConfigAtom)

    const handleReset = () => {
        // 1. Reset all state variables to initial values
        setSelectedTheme("")
        setSelectedMyTheme("")
        setSelectedRadius("0.5rem")
        setImportedTheme(null)
        setBrandColorsValues({})

        // 2. Completely remove all custom CSS variables
        resetTheme()

        // 3. Reset the radius to default
        applyRadius("0.5rem")

        // 4. Reset sidebar to defaults
        updateSidebarConfig({ variant: "inset", collapsible: "offcanvas", side: "left", isHeaderSticky: true, showFooter: true })

        // 5. Reset app settings
        setAppConfig({
            dateFormat: "MM/DD/YYYY",
            timeFormat: "12h",
            fontFamily: "inter",
            weekStart: "sunday",
            language: "en"
        })
    }

    const handleImport = (themeData: ImportedTheme) => {
        setImportedTheme(themeData)
        setSelectedTheme("")
        setSelectedMyTheme("")
        applyImportedTheme(themeData, isDarkMode)
    }

    return (
        <BaseLayout title="Settings" description="Customize your dashboard experience.">
            <div className="@container/main px-4 lg:px-6 space-y-6">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <Settings className="h-6 w-6 text-primary" />
                                <CardTitle className="text-2xl font-bold">Preferences</CardTitle>
                            </div>
                            <CardDescription>
                                Manage your theme, layout, and application settings.
                            </CardDescription>
                        </div>
                        <Button variant="outline" size="sm" onClick={handleReset} className="cursor-pointer">
                            <RotateCcw className="h-4 w-4 mr-2" />
                            Reset Defaults
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
                            <TabsList className="grid w-full grid-cols-3 max-w-[500px]">
                                <TabsTrigger value="theme" className="cursor-pointer">
                                    <Palette className="h-4 w-4 mr-2" />
                                    Theme
                                </TabsTrigger>
                                <TabsTrigger value="layout" className="cursor-pointer">
                                    <Layout className="h-4 w-4 mr-2" />
                                    Layout
                                </TabsTrigger>
                                <TabsTrigger value="application" className="cursor-pointer">
                                    <Settings className="h-4 w-4 mr-2" />
                                    Application
                                </TabsTrigger>
                            </TabsList>

                            <div className="mt-6 border rounded-lg p-2 md:p-6 bg-card/50">
                                <TabsContent value="theme" className="mt-0">
                                    <div className="max-w-2xl">
                                        <ThemeTab
                                            selectedTheme={selectedTheme}
                                            setSelectedTheme={setSelectedTheme}
                                            selectedMyTheme={selectedMyTheme}
                                            setSelectedMyTheme={setSelectedMyTheme}
                                            selectedRadius={selectedRadius}
                                            setSelectedRadius={setSelectedRadius}
                                            setImportedTheme={setImportedTheme}
                                            onImportClick={() => setImportModalOpen(true)}
                                        />
                                    </div>
                                </TabsContent>

                                <TabsContent value="layout" className="mt-0">
                                    <div className="max-w-2xl">
                                        <LayoutTab />
                                    </div>
                                </TabsContent>

                                <TabsContent value="application" className="mt-0">
                                    <div className="max-w-2xl">
                                        <AppTab />
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>

            <ImportModal
                open={importModalOpen}
                onOpenChange={setImportModalOpen}
                onImport={handleImport}
            />
        </BaseLayout>
    )
}
