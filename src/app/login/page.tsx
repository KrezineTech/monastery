
'use client';
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function LoginPage() {
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Login Successful",
            description: "Welcome back!",
        });
    }

    return (
        <div className="flex-1 flex items-center justify-center py-12 md:py-24 px-4">
            <div className="w-full max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    <div className="relative hidden lg:block">
                        <Image
                            src="https://placehold.co/800x800.png"
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
                                <Button type="submit" className="w-full h-14 rounded-full bg-black text-white text-lg font-semibold hover:bg-gray-800">
                                    Sign in
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
