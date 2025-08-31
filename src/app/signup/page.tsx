
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignupPage() {
  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen">
       <div className="hidden bg-muted lg:block">
        <Image
          src="https://picsum.photos/1200/1200"
          alt="Image"
          width="1200"
          height="1200"
          className="h-full w-full object-cover"
          data-ai-hint="abstract texture"
        />
      </div>
      <div className="flex items-center justify-center py-12">
        <Card className="mx-auto w-full max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">Create an account</CardTitle>
            </CardHeader>
            <CardContent>
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
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
