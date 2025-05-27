'use client'

import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import UserDropdown from './user-dropdown'

export default function NavAuth() {
  return (
    <div>
      <SignedOut>
        <div className="flex items-center">
          <Button asChild variant="link" className="text-white">
            <SignInButton />
          </Button>
          <Button asChild variant="link" className="text-white">
            <SignUpButton />
          </Button>
        </div>
      </SignedOut>
      <SignedIn>
        <UserDropdown />
      </SignedIn>
    </div>
  )
}
