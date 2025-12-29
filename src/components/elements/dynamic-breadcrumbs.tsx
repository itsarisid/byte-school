"use client"

import * as React from "react"
import { useLocation, Link } from "react-router-dom"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const routeLabels: Record<string, string> = {
    "dashboard": "Dashboard",
    "settings": "Settings",
    "students": "Students",
    "teachers": "Teachers",
    "classes": "Classes",
    "attendance": "Attendance",
    "exams": "Exams",
    "timetable": "Timetable",
    "results": "Results",
    "fees": "Fees",
    "expenses": "Expenses",
    "notices": "Notices",
    "messages": "Messages",
}

export function DynamicBreadcrumbs() {
    const location = useLocation()
    const pathnames = location.pathname.split("/").filter((x) => x)

    if (pathnames.length === 0) return null

    return (
        <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
                {pathnames.map((value, index) => {
                    const last = index === pathnames.length - 1
                    const to = `/${pathnames.slice(0, index + 1).join("/")}`
                    const label = routeLabels[value] || value.charAt(0).toUpperCase() + value.slice(1)

                    return (
                        <React.Fragment key={to}>
                            <BreadcrumbItem>
                                {last ? (
                                    <BreadcrumbPage>{label}</BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink asChild>
                                        <Link to={to}>{label}</Link>
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                            {!last && <BreadcrumbSeparator />}
                        </React.Fragment>
                    )
                })}
            </BreadcrumbList>
        </Breadcrumb>
    )
}
