"use client";

import { useState } from "react";
import {
  ShieldCheck,
  Users,
  TrendingUp,
  CheckCircle,
  Lock,
  Zap,
} from "lucide-react";
import SignUpForm from "@/components/signup-form";
import UserCard from "@/components/user-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type User = {
  fullName: string;
  email: string;
};

export default function Home() {
  const [user, setUser] = useState<User | null>(null);

  const handleSignUpSuccess = (data: User) => {
    setUser(data);
  };

  const handleStartOver = () => {
    setUser(null);
  };

  if (user) {
    return (
      <div className="container py-12 text-center">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground font-headline mb-4">
            Welcome to Accountable!
          </h1>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Your account has been created successfully. You are now part of a
            community that values trust and transparency. Explore what&apos;s next
            for you.
          </p>
          <UserCard name={user.fullName} email={user.email} />
          <Button onClick={handleStartOver} variant="link" className="mt-8">
            Start Over
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className=" py-15 md:py-1 bg-gradient-to-b from-background to-card">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="min-h-screen flex items-center justify-center px-4">
            <div className="space-y-6 text-center max-w-2xl">
              <h1 className="text-2xl md:text-5xl font-bold font-headline tracking-tighter">
                Build Trust with Accountable, Your Secure Sign-Up Solution
              </h1>
              <p className="text-lg text-muted-foreground">
                Accountable provides a seamless and secure sign-up experience,
                demonstrating our commitment to user trust and data protection
                from the very first click.
              </p>
              <div className="w-full max-w-md mx-auto">
                <SignUpForm onSuccess={handleSignUpSuccess} />
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-card/50 backdrop-blur-sm border rounded-3xl p-8 space-y-6">
                <div className="flex items-center justify-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-sm font-medium">
                    Secure Authentication
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Lock className="h-6 w-6 text-blue-500" />
                  <span className="text-sm font-medium">
                    End-to-End Encryption
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Zap className="h-6 w-6 text-yellow-500" />
                  <span className="text-sm font-medium">
                    Lightning Fast Setup
                  </span>
                </div>
                <div className="pt-4">
                  <div className="h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center">
                    <div className="text-6xl opacity-20">🛡️</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
              Why Accountable?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We focus on the fundamentals of a great user experience: security,
              reliability, and performance.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <ShieldCheck className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-bold font-headline mb-2">
                Secure by Design
              </h3>
              <p className="text-muted-foreground">
                Your data is protected with industry-leading security practices.
              </p>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-bold font-headline mb-2">
                User-Centric
              </h3>
              <p className="text-muted-foreground">
                We build for you. Our products are intuitive and easy to use.
              </p>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <TrendingUp className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-bold font-headline mb-2">
                Built to Scale
              </h3>
              <p className="text-muted-foreground">
                Our infrastructure grows with you, ensuring reliability.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 md:py-28 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
              Loved by Users Worldwide
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Don&apos;t just take our word for it. Here&apos;s what our users have to
              say.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage
                      src="https://via.placeholder.com/100"
                      alt="User 1"
                      data-ai-hint="person portrait"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold">Jane Doe</h4>
                    <p className="text-sm text-muted-foreground">
                      CEO, Innovate Inc.
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  &ldquo;The best service I&apos;ve ever used. Incredibly reliable and the
                  support is top-notch.&rdquo;
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage
                      src="https://via.placeholder.com/100"
                      alt="User 2"
                      data-ai-hint="person smiling"
                    />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold">John Smith</h4>
                    <p className="text-sm text-muted-foreground">
                      Freelance Developer
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  &ldquo;Accountable has simplified my workflow and given me peace of
                  mind. Highly recommended.&rdquo;
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage
                      src="https://via.placeholder.com/100"
                      alt="User 3"
                      data-ai-hint="woman developer"
                    />
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold">Sarah Adams</h4>
                    <p className="text-sm text-muted-foreground">
                      Project Manager
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  &ldquo;A game-changer for our team. The user experience is so smooth
                  and intuitive.&rdquo;
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 text-center">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied users who trust Accountable. Create your
            free account today and experience the difference.
          </p>
          <Button size="lg" className="mt-8">
            Sign Up Now
          </Button>
        </div>
      </section>
    </>
  );
}