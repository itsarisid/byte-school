"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

export const description = "An interactive area chart"

const chartData = [
  { date: "2024-04-01", enrollment: 222, fees: 1500 },
  { date: "2024-04-02", enrollment: 97, fees: 1800 },
  { date: "2024-04-03", enrollment: 167, fees: 1200 },
  { date: "2024-04-04", enrollment: 242, fees: 2600 },
  { date: "2024-04-05", enrollment: 373, fees: 2900 },
  { date: "2024-04-06", enrollment: 301, fees: 3400 },
  { date: "2024-04-07", enrollment: 245, fees: 1800 },
  { date: "2024-04-08", enrollment: 409, fees: 3200 },
  { date: "2024-04-09", enrollment: 59, fees: 1100 },
  { date: "2024-04-10", enrollment: 261, fees: 1900 },
  { date: "2024-04-11", enrollment: 327, fees: 3500 },
  { date: "2024-04-12", enrollment: 292, fees: 2100 },
  { date: "2024-04-13", enrollment: 342, fees: 3800 },
  { date: "2024-04-14", enrollment: 137, fees: 2200 },
  { date: "2024-04-15", enrollment: 120, fees: 1700 },
  { date: "2024-04-16", enrollment: 138, fees: 1900 },
  { date: "2024-04-17", enrollment: 446, fees: 3600 },
  { date: "2024-04-18", enrollment: 364, fees: 4100 },
  { date: "2024-04-19", enrollment: 243, fees: 1800 },
  { date: "2024-04-20", enrollment: 89, fees: 1500 },
  { date: "2024-04-21", enrollment: 137, fees: 2000 },
  { date: "2024-04-22", enrollment: 224, fees: 1700 },
  { date: "2024-04-23", enrollment: 138, fees: 2300 },
  { date: "2024-04-24", enrollment: 387, fees: 2900 },
  { date: "2024-04-25", enrollment: 215, fees: 2500 },
  { date: "2024-04-26", enrollment: 75, fees: 1300 },
  { date: "2024-04-27", enrollment: 383, fees: 4200 },
  { date: "2024-04-28", enrollment: 122, fees: 1800 },
  { date: "2024-04-29", enrollment: 315, fees: 2400 },
  { date: "2024-04-30", enrollment: 454, fees: 3800 },
  { date: "2024-05-01", enrollment: 165, fees: 2200 },
  { date: "2024-05-02", enrollment: 293, fees: 3100 },
  { date: "2024-05-03", enrollment: 247, fees: 1900 },
  { date: "2024-05-04", enrollment: 385, fees: 4200 },
  { date: "2024-05-05", enrollment: 481, fees: 3900 },
  { date: "2024-05-06", enrollment: 498, fees: 5200 },
  { date: "2024-05-07", enrollment: 388, fees: 3000 },
  { date: "2024-05-08", enrollment: 149, fees: 2100 },
  { date: "2024-05-09", enrollment: 227, fees: 1800 },
  { date: "2024-05-10", enrollment: 293, fees: 3300 },
  { date: "2024-05-11", enrollment: 335, fees: 2700 },
  { date: "2024-05-12", enrollment: 197, fees: 2400 },
  { date: "2024-05-13", enrollment: 197, fees: 1600 },
  { date: "2024-05-14", enrollment: 448, fees: 4900 },
  { date: "2024-05-15", enrollment: 473, fees: 3800 },
  { date: "2024-05-16", enrollment: 338, fees: 4000 },
  { date: "2024-05-17", enrollment: 499, fees: 4200 },
  { date: "2024-05-18", enrollment: 315, fees: 3500 },
  { date: "2024-05-19", enrollment: 235, fees: 1800 },
  { date: "2024-05-20", enrollment: 177, fees: 2300 },
  { date: "2024-05-21", enrollment: 82, fees: 1400 },
  { date: "2024-05-22", enrollment: 81, fees: 1200 },
  { date: "2024-05-23", enrollment: 252, fees: 2900 },
  { date: "2024-05-24", enrollment: 294, fees: 2200 },
  { date: "2024-05-25", enrollment: 201, fees: 2500 },
  { date: "2024-05-26", enrollment: 213, fees: 1700 },
  { date: "2024-05-27", enrollment: 420, fees: 4600 },
  { date: "2024-05-28", enrollment: 233, fees: 1900 },
  { date: "2024-05-29", enrollment: 78, fees: 1300 },
  { date: "2024-05-30", enrollment: 340, fees: 2800 },
  { date: "2024-05-31", enrollment: 178, fees: 2300 },
  { date: "2024-06-01", enrollment: 178, fees: 2000 },
  { date: "2024-06-02", enrollment: 470, fees: 4100 },
  { date: "2024-06-03", enrollment: 103, fees: 1600 },
  { date: "2024-06-04", enrollment: 439, fees: 3800 },
  { date: "2024-06-05", enrollment: 88, fees: 1400 },
  { date: "2024-06-06", enrollment: 294, fees: 2500 },
  { date: "2024-06-07", enrollment: 323, fees: 3700 },
  { date: "2024-06-08", enrollment: 385, fees: 3200 },
  { date: "2024-06-09", enrollment: 438, fees: 4800 },
  { date: "2024-06-10", enrollment: 155, fees: 2000 },
  { date: "2024-06-11", enrollment: 92, fees: 1500 },
  { date: "2024-06-12", enrollment: 492, fees: 4200 },
  { date: "2024-06-13", enrollment: 81, fees: 1300 },
  { date: "2024-06-14", enrollment: 426, fees: 3800 },
  { date: "2024-06-15", enrollment: 307, fees: 3500 },
  { date: "2024-06-16", enrollment: 371, fees: 3100 },
  { date: "2024-06-17", enrollment: 475, fees: 5200 },
  { date: "2024-06-18", enrollment: 107, fees: 1700 },
  { date: "2024-06-19", enrollment: 341, fees: 2900 },
  { date: "2024-06-20", enrollment: 408, fees: 4500 },
  { date: "2024-06-21", enrollment: 169, fees: 2100 },
  { date: "2024-06-22", enrollment: 317, fees: 2700 },
  { date: "2024-06-23", enrollment: 480, fees: 5300 },
  { date: "2024-06-24", enrollment: 132, fees: 1800 },
  { date: "2024-06-25", enrollment: 141, fees: 1900 },
  { date: "2024-06-26", enrollment: 434, fees: 3800 },
  { date: "2024-06-27", enrollment: 448, fees: 4900 },
  { date: "2024-06-28", enrollment: 149, fees: 2000 },
  { date: "2024-06-29", enrollment: 103, fees: 1600 },
  { date: "2024-06-30", enrollment: 446, fees: 4000 },
]

const chartConfig = {
  data: {
    label: "Data",
  },
  enrollment: {
    label: "Enrollment",
    color: "var(--primary)",
  },
  fees: {
    label: "Fee Collection",
    color: "var(--primary)",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const isMobile = useIsMobile()
  const [timeRange, setTimeRange] = React.useState("90d")

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d")
    }
  }, [isMobile])

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Academic Trends</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Enrollment vs Fee Collection Trends
          </span>
          <span className="@[540px]/card:hidden">Enrollment & Fees</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem value="90d">Last 3 months</ToggleGroupItem>
            <ToggleGroupItem value="30d">Last 30 days</ToggleGroupItem>
            <ToggleGroupItem value="7d">Last 7 days</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={1.0}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="fees"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="enrollment"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
