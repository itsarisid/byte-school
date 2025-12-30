"use client"

import * as React from "react"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Search } from "lucide-react"
import { CommandSearch, SearchTrigger } from "@/components/elements/command-search"
import { ModeToggle } from "@/components/elements/mode-toggle"
import { LanguageSwitcher } from "@/components/elements/language-switcher"
import { DynamicBreadcrumbs } from "@/components/elements/dynamic-breadcrumbs"
import { useSidebarConfig } from "@/hooks/use-sidebar-config"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [searchOpen, setSearchOpen] = React.useState(false)
  const { config } = useSidebarConfig()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setSearchOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <header className={cn(
        "flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height,top] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height) bg-background/95 backdrop-blur-sm z-30",
        config.isHeaderSticky ? "sticky top-0" : "relative"
      )}>
        <div className="flex w-full items-center gap-0.5 px-4 py-3 lg:gap-2 lg:px-6">
          <div className="flex items-center gap-0.5 sm:gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mx-1 data-[orientation=vertical]:h-4 sm:mx-2"
            />
            <DynamicBreadcrumbs />
          </div>
          <div className="flex-1" />
          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <SearchTrigger onClick={() => setSearchOpen(true)} />
            </div>
            <LanguageSwitcher />
            <div className="sm:hidden">
              <button
                onClick={() => setSearchOpen(true)}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 w-8"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>
            <ModeToggle />
          </div>
        </div>
      </header>
      <CommandSearch open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  )
}
