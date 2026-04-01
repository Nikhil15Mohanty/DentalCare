import { SignUpButton } from "@clerk/nextjs";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const steps = [
    {
        number: "01",
        title: "Ask Questions",
        description: "Chat with our AI assistant about any dental concerns. Get instant answers about symptoms, treatments, and oral health tips — anytime, anywhere.",
        image: "/audio.png",
        pills: ["24/7 Available", "Instant Response"],
        color: "from-orange-400 to-amber-400",
        bg: "bg-orange-50 dark:bg-orange-950/20",
        border: "border-orange-200 dark:border-orange-800/40",
    },
    {
        number: "02",
        title: "Get Expert Advice",
        description: "Receive personalized recommendations based on thousands of dental cases. Our AI provides professional-grade insights tailored to your situation.",
        image: "/brain.png",
        pills: ["AI-Powered", "Personalized"],
        color: "from-teal-500 to-cyan-400",
        bg: "bg-teal-50 dark:bg-teal-950/20",
        border: "border-teal-200 dark:border-teal-800/40",
    },
    {
        number: "03",
        title: "Book & Get Care",
        description: "Schedule with verified dentists and receive comprehensive follow-up care. Track your progress seamlessly from your dashboard.",
        image: "/calendar.png",
        pills: ["Verified Doctors", "Follow-up Care"],
        color: "from-violet-500 to-purple-400",
        bg: "bg-violet-50 dark:bg-violet-950/20",
        border: "border-violet-200 dark:border-violet-800/40",
    },
];

function HowItWorks() {
    return (
        <section id="how-it-works" className="relative py-28 px-6 overflow-hidden">
            {/* Subtle bg */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/30 to-white dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-900" />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 mb-5">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary">How It Works</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
                        Three steps to{" "}
                        <span
                            style={{
                                background: 'linear-gradient(135deg, var(--primary) 0%, #f5a473 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            better dental health
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Our streamlined process makes dental care accessible, convenient, and stress-free for everyone.
                    </p>
                </div>

                {/* Steps */}
                <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6">
                    {steps.map((step, i) => (
                        <div key={step.number} className="relative group">
                            {/* Connector line between steps */}
                            {i < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-16 left-[calc(100%-8px)] w-full h-px z-10">
                                    <div className="w-full h-px bg-gradient-to-r from-border to-transparent" />
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-border rotate-45" />
                                </div>
                            )}

                            <div className={`relative rounded-3xl p-7 border ${step.bg} ${step.border} hover:shadow-xl transition-all duration-500 hover:-translate-y-1`}>
                                {/* Step number + icon row */}
                                <div className="flex items-start justify-between mb-6">
                                    <span className={`text-5xl font-black bg-gradient-to-br ${step.color} bg-clip-text text-transparent leading-none`}>
                                        {step.number}
                                    </span>
                                    <div className="w-16 h-16 rounded-2xl bg-white dark:bg-zinc-800 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Image src={step.image} alt={step.title} width={40} height={40} className="w-10 h-10 object-contain" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{step.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {step.pills.map((pill) => (
                                        <span key={pill} className="px-3 py-1 bg-white/70 dark:bg-zinc-800/70 text-foreground text-xs font-medium rounded-full border border-border/60">
                                            {pill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <SignUpButton mode="modal">
                        <Button size="lg" className="gap-2 font-semibold rounded-xl shadow-lg shadow-primary/25 px-8">
                            Get started now
                            <ArrowRightIcon className="size-4" />
                        </Button>
                    </SignUpButton>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
