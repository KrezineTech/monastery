
'use client';
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/components/auth-provider";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await login(email, password);
            
            toast({
                title: "Login Successful",
                description: "Welcome back!",
            });

            router.push('/account');
        } catch (error) {
            toast({
                title: "Login Failed",
                description: error instanceof Error ? error.message : "Invalid email or password",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex-1 flex items-center justify-center py-12 md:py-24 px-4">
            <div className="w-full max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    <div className="relative hidden lg:block">
                        <Image
                            src="https://cdn.shopify.com/s/files/1/0723/1376/6028/files/939.jpg?v=1756645945"
                            alt="Woman applying cosmetic"
                            fill
                            className="object-cover w-full h-full rounded-2xl"
                            data-ai-hint="woman beauty"
                        />
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center border rounded-2xl">
                        <h2 className="text-4xl font-headline font-bold mb-8">Login</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={isLoading}
                                    className="rounded-full h-12 px-6"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input 
                                    id="password" 
                                    type="password"
                                    placeholder="Password" 
                                    required 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    disabled={isLoading}
                                    className="rounded-full h-12 px-6"
                                />
                                 <div className="text-right">
                                    <Link
                                        href="#"
                                        className="text-sm hover:underline"
                                    >
                                        Forgot your password?
                                    </Link>
                                </div>
                            </div>
                            <div className="space-y-4 pt-4">
                                <Button type="submit" disabled={isLoading} className="w-full h-14 rounded-full text-lg font-semibold">
                                    {isLoading ? (
                                        <>
                                            <Loader className="w-4 h-4 mr-2 animate-spin" />
                                            Signing in...
                                        </>
                                    ) : (
                                        'Sign in'
                                    )}
                                </Button>
                                <p className="text-center">
                                    <Link href="/signup" className="text-sm underline">
                                        Create account
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
