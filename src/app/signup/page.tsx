
'use client';
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Loader } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/components/auth-provider";

export default function SignupPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();
    const { signup } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const [firstName, ...lastNameParts] = fullName.trim().split(' ');
            const lastName = lastNameParts.join(' ') || 'User';

            await signup(firstName, lastName, email, password);
            
            toast({
                title: "Account Created",
                description: "Your account has been created successfully!",
            });

            router.push('/account');
        } catch (error) {
            toast({
                title: "Signup Failed",
                description: error instanceof Error ? error.message : "Failed to create account",
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
                            src="https://cdn.shopify.com/s/files/1/0723/1376/6028/files/342230.jpg?v=1756646016"
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
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    disabled={isLoading}
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
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={isLoading}
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
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        disabled={isLoading}
                                        className="rounded-full h-12 px-6"
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon"
                                        className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7 text-muted-foreground"
                                        onClick={() => setShowPassword(!showPassword)}
                                        disabled={isLoading}
                                    >
                                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    </Button>
                                </div>
                            </div>
                            <div className="space-y-4 pt-4">
                                <Button type="submit" disabled={isLoading} className="w-full h-14 rounded-full text-lg font-semibold">
                                    {isLoading ? (
                                        <>
                                            <Loader className="w-4 h-4 mr-2 animate-spin" />
                                            Creating Account...
                                        </>
                                    ) : (
                                        'Create Account'
                                    )}
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
