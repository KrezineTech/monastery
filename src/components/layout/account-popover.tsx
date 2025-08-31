'use client'

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Package, User } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function AccountPopover() {
  // Simulate authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuthAction = () => {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <div className="space-y-4">
      <h5 className="font-medium">Account</h5>
      <div className="space-y-2">
        {isLoggedIn ? (
          <Button variant="secondary" className="w-full" onClick={handleAuthAction}>Logout</Button>
        ) : (
          <Button asChild variant="default" className="w-full">
            <Link href="/login">Sign In</Link>
          </Button>
        )}
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
