
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
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
            <CardTitle className="text-2xl font-bold font-headline">Login</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="rounded-full"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input id="password" type="password" required  className="rounded-full"/>
              </div>
              <Button type="submit" className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90">
                Sign in
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="underline">
                Create account
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
