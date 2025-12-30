"use client"

import { useTranslation } from "react-i18next"
import { Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

const indianLanguages = [
    { code: 'hi', name: 'हिन्दी (Hindi)' },
    { code: 'bn', name: 'বাংলা (Bengali)' },
    { code: 'te', name: 'తెలుగు (Telugu)' },
    { code: 'mr', name: 'मराठी (Marathi)' },
    { code: 'ta', name: 'தமிழ் (Tamil)' },
    { code: 'ur', name: 'اردو (Urdu)' },
    { code: 'gu', name: 'ગુજરાતી (Gujarati)' },
    { code: 'kn', name: 'ಕನ್ನಡ (Kannada)' },
    { code: 'ml', name: 'മലയാളം (Malayalam)' },
    { code: 'pa', name: 'ਪੰਜਾਬੀ (Punjabi)' },
    { code: 'or', name: 'ଓଡ଼ିଆ (Odia)' },
    { code: 'as', name: 'অসমীয়া (Assamese)' },
]

const internationalLanguages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'it', name: 'Italiano' },
    { code: 'pt', name: 'Português' },
    { code: 'ru', name: 'Русский' },
    { code: 'zh', name: '中文 (Chinese)' },
    { code: 'ja', name: '日本語 (Japanese)' },
    { code: 'ar', name: 'العربية (Arabic)' },
]

export function LanguageSwitcher() {
    const { i18n, t } = useTranslation()

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 px-0">
                    <Languages className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                    <span className="sr-only">{t("language")}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                <ScrollArea className="h-[400px]">
                    <DropdownMenuLabel className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                        International
                    </DropdownMenuLabel>
                    {internationalLanguages.map((lang) => (
                        <DropdownMenuItem
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            className="flex justify-between items-center cursor-pointer"
                        >
                            <span>{lang.name}</span>
                            {i18n.language === lang.code && (
                                <span className="text-xs text-muted-foreground ml-2">✓</span>
                            )}
                        </DropdownMenuItem>
                    ))}

                    <DropdownMenuSeparator />

                    <DropdownMenuLabel className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                        Indian Languages
                    </DropdownMenuLabel>
                    {indianLanguages.map((lang) => (
                        <DropdownMenuItem
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            className="flex justify-between items-center cursor-pointer"
                        >
                            <span>{lang.name}</span>
                            {i18n.language === lang.code && (
                                <span className="text-xs text-muted-foreground ml-2">✓</span>
                            )}
                        </DropdownMenuItem>
                    ))}
                </ScrollArea>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
