'use client'

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Package, User } from "lucide-react"
import Link from "next/link"

export function AccountPopover() {
  return (
    <div className="space-y-4">
      <h3 className="font-medium">Account</h3>
      <div className="space-y-2">
        <Button className="w-full bg-primary hover:bg-primary/90">Sign in with shop</Button>
        <Button variant="secondary" className="w-full">Other sign in options</Button>
      </div>
      <Separator />
      <div className="grid grid-cols-2 gap-2">
        <Button variant="outline" asChild>
          <Link href="/orders">
            <Package className="mr-2 h-4 w-4" />
            Orders
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/profile">
            <User className="mr-2 h-4 w-4" />
            Profile
          </Link>
        </Button>
      </div>
    </div>
  )
}
