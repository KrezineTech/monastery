
'use client';
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

export default function SignupPage() {
    const [showPassword, setShowPassword] = useState(false);
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Registration Successful",
            description: "Your account has been created.",
        });
    }

    return (
        <div className="flex-1 flex items-center justify-center py-12 md:py-24 px-4">
            <div className="w-full max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    <div className="relative hidden lg:block">
                        <Image
                            src="https://placehold.co/800x800.png"
                            alt="Woman holding a product"
                            fill
                            className="object-cover w-full h-full rounded-2xl"
                            data-ai-hint="woman beauty product"
                        />
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center border rounded-2xl">
                        <h2 className="text-4xl font-headline font-bold mb-8">Create an account</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="full-name">Full Name</Label>
                                <Input 
                                    id="full-name" 
                                    placeholder="Full Name" 
                                    required 
                                    className="rounded-full h-12 px-6"
                                />
                            </div>
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
                                <div className="relative">
                                    <Input 
                                        id="password" 
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password" 
                                        required 
                                        className="rounded-full h-12 px-6"
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon"
                                        className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7 text-muted-foreground"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    </Button>
                                </div>
                            </div>
                            <div className="space-y-4 pt-4">
                                <Button type="submit" className="w-full h-14 rounded-full bg-black text-white text-lg font-semibold hover:bg-gray-800">
                                    Create Account
                                </Button>
                                <p className="text-center">
                                    <Link href="/login" className="text-sm underline">
                                        Already have an account? Login
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
