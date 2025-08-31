
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen">
       <div className="hidden bg-muted lg:flex items-center justify-center p-12">
        <Image
          src="https://placehold.co/800x800.png"
          alt="Image"
          width="800"
          height="800"
          className="h-auto w-full object-cover"
          data-ai-hint="skincare products"
        />
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2">
            <h1 className="text-3xl font-bold font-headline">Create an account</h1>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
                <Label htmlFor="full-name">Full Name</Label>
                <Input id="full-name" placeholder="Full Name" required className="rounded-full"/>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                required
                className="rounded-full"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Password" required className="rounded-full"/>
            </div>
            <Button type="submit" className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90">
              Create Account
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
