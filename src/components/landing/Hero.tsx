import { SignUpButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { CalendarIcon, MicIcon, ShieldCheckIcon, StarIcon } from "lucide-react";
import Image from "next/image";

function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-teal-50/40 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950" />

            {/* Decorative blobs */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

            <div className="relative z-10 w-full px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* LEFT */}
                        <div className="space-y-8">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                                <span className="flex h-2 w-2 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                <span className="text-sm font-semibold text-primary">AI-Powered Dental Care</span>
                            </div>

                            {/* Heading */}
                            <div className="space-y-2">
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
                                    <span className="text-foreground">Smart dental</span>
                                    <br />
                                    <span className="relative">
                                        <span
                                            className="text-primary"
                                            style={{
                                                background: 'linear-gradient(135deg, var(--primary) 0%, #f5a473 100%)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                backgroundClip: 'text',
                                            }}
                                        >
                                            care starts
                                        </span>
                                    </span>
                                    <br />
                                    <span className="text-foreground">with a voice</span>
                                </h1>
                            </div>

                            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                                Get instant AI-powered answers to dental questions, book appointments effortlessly, and receive personalized care — all available <strong className="text-foreground">24/7</strong>.
                            </p>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                <SignUpButton mode="modal">
                                    <Button size="lg" className="gap-2.5 font-semibold rounded-xl shadow-lg shadow-primary/30 bg-primary hover:bg-primary/90 text-white px-7">
                                        <MicIcon className="size-4" />
                                        Try Voice Agent
                                    </Button>
                                </SignUpButton>
                                <SignUpButton mode="modal">
                                    <Button size="lg" variant="outline" className="gap-2.5 font-semibold rounded-xl border-2 border-border hover:border-primary/40 hover:bg-primary/5 px-7">
                                        <CalendarIcon className="size-4" />
                                        Book Appointment
                                    </Button>
                                </SignUpButton>
                            </div>

                            {/* Social proof */}
                            <div className="flex items-center gap-5 pt-2">
                                <div className="flex -space-x-3">
                                    {[
                                        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
                                        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
                                        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
                                        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face",
                                        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=100&h=100&fit=crop&crop=face",
                                    ].map((src, i) => (
                                        <Image key={i} src={src} alt="patient" width={40} height={40} className="w-10 h-10 rounded-full object-cover ring-2 ring-background" />
                                    ))}
                                </div>
                                <div>
                                    <div className="flex items-center gap-1.5 mb-0.5">
                                        {[1, 2, 3, 4, 5].map((s) => (
                                            <StarIcon key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                        ))}
                                        <span className="text-sm font-bold ml-1">4.9</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">Trusted by <span className="font-semibold text-foreground">1,200+</span> patients</p>
                                </div>
                            </div>

                            {/* Trust badges */}
                            <div className="flex flex-wrap gap-3 pt-1">
                                {[
                                    { icon: ShieldCheckIcon, label: 'HIPAA Compliant' },
                                    { icon: MicIcon, label: 'Voice & Text' },
                                    { icon: CalendarIcon, label: 'Instant Booking' },
                                ].map(({ icon: Icon, label }) => (
                                    <div key={label} className="flex items-center gap-1.5 px-3 py-1.5 bg-muted/70 rounded-lg text-xs font-medium text-muted-foreground border border-border/50">
                                        <Icon className="w-3 h-3 text-primary" />
                                        {label}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT - Image with floating cards */}
                        <div className="relative lg:pl-4">
                            {/* Glow behind image */}
                            <div className="absolute inset-8 bg-primary/10 rounded-full blur-3xl" />

                            {/* Floating stat card - top left */}
                            <div className="absolute top-4 -left-4 z-20 bg-white dark:bg-zinc-800 rounded-2xl p-3.5 shadow-xl border border-border/50 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                    <span className="text-lg">✅</span>
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground">Availability</p>
                                    <p className="text-sm font-bold text-foreground">24/7 Online</p>
                                </div>
                            </div>

                            {/* Floating stat card - bottom right */}
                            <div className="absolute bottom-12 -right-4 z-20 bg-white dark:bg-zinc-800 rounded-2xl p-3.5 shadow-xl border border-border/50 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                                    <span className="text-lg">⚡</span>
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground">Avg Response</p>
                                    <p className="text-sm font-bold text-foreground">&lt; 2 seconds</p>
                                </div>
                            </div>

                            <Image
                                src="/hero.png"
                                alt="DentWise AI"
                                width={600}
                                height={600}
                                className="relative w-full h-auto drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
