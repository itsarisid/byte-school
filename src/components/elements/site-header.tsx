"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { CommandSearch, SearchTrigger } from "@/components/elements/command-search"
import { ModeToggle } from "@/components/elements/mode-toggle"
import { getAppUrl, cn } from "@/lib/utils"
import { useSidebarConfig } from "@/hooks/use-sidebar-config"

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
        <div className="flex w-full items-center gap-1 px-4 py-3 lg:gap-2 lg:px-6">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-4"
          />
          <div className="flex-1 max-w-sm">
            <SearchTrigger onClick={() => setSearchOpen(true)} />
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
              <a
                href="https://shadcnstore.com/blocks"
                rel="noopener noreferrer"
                target="_blank"
                className="dark:text-foreground"
              >
                Blocks
              </a>
            </Button>
            <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
              <a
                href={getAppUrl("/landing")}
                rel="noopener noreferrer"
                target="_blank"
                className="dark:text-foreground"
              >
                Landing Page
              </a>
            </Button>
            <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
              <a
                href="https://github.com/silicondeck/shadcn-dashboard-landing-template"
                rel="noopener noreferrer"
                target="_blank"
                className="dark:text-foreground"
              >
                GitHub
              </a>
            </Button>
            <ModeToggle />
          </div>
        </div>
      </header>
      <CommandSearch open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  )
}
