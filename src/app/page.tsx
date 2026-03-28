import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignOutButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <SignedOut>
        <SignUpButton mode="modal">
          Sign In
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <SignOutButton>
          Sign Out
        </SignOutButton>
      </SignedIn>
    </>
  );
}
