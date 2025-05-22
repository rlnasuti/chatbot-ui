"use client"

import { DungeonMasterBrand } from "@/components/ui/dungeonmaster-brand"
import { IconArrowRight } from "@tabler/icons-react"
import { useTheme } from "next-themes"
import Link from "next/link"

export default function DungeonMasterPage() {
  const { theme } = useTheme()

  return (
    <div className="flex size-full flex-col items-center justify-center">
      <div>
        <DungeonMasterBrand theme={theme === "dark" ? "dark" : "light"} />
      </div>

      <Link
        className="mt-4 flex w-[200px] items-center justify-center rounded-md bg-purple-600 p-2 font-semibold"
        href="/login"
      >
        Enter Dungeon
        <IconArrowRight className="ml-1" size={20} />
      </Link>
    </div>
  )
}
