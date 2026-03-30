import { MessageCircleIcon, SparklesIcon } from "lucide-react";
import Image from "next/image";

const conversations = [
    {
        question: "My tooth hurts when I bite down",
        answer: "Get immediate advice on pain management, possible causes like cracked teeth or cavities, and when to see a dentist urgently.",
        tags: ["Pain Relief", "Urgent Advice"],
        emoji: "🦷",
    },
    {
        question: "How much does teeth whitening cost?",
        answer: "Compare treatment options, pricing ranges from $100–$1,500, and find the best whitening solution for your budget and sensitivity level.",
        tags: ["Cost Analysis", "Treatment Options"],
        emoji: "✨",
    },
    {
        question: "When should I replace my filling?",
        answer: "Learn about filling lifespans (5–15 years), warning signs of wear like sensitivity or cracking, and when replacement is needed.",
        tags: ["Preventive Care", "Maintenance"],
        emoji: "🔧",
    },
];

function WhatToAsk() {
    return (
        <section className="relative py-28 px-6 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50/60 via-white to-orange-50/40 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-900" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/8 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/8 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/10 rounded-full border border-secondary/20 mb-5">
                        <MessageCircleIcon className="w-3.5 h-3.5 text-secondary" />
                        <span className="text-xs font-bold uppercase tracking-widest text-secondary">AI Conversations</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
                        Ask about{" "}
                        <span
                            style={{
                                background: 'linear-gradient(135deg, var(--secondary) 0%, #6fa8a8 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            anything dental
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        From simple questions to complex concerns, our AI delivers expert-level guidance trained on thousands of real dental cases.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Conversation cards */}
                    <div className="space-y-4">
                        {conversations.map((conv, i) => (
                            <div
                                key={i}
                                className="group bg-white dark:bg-zinc-800 rounded-3xl p-5 border border-border/60 hover:border-secondary/40 hover:shadow-xl hover:shadow-secondary/5 transition-all duration-400"
                            >
                                {/* User message */}
                                <div className="flex items-start gap-3 mb-4">
                                    <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-lg shrink-0">
                                        {conv.emoji}
                                    </div>
                                    <div className="bg-primary/8 dark:bg-primary/15 rounded-2xl rounded-tl-sm px-4 py-2.5 flex-1">
                                        <p className="text-sm font-semibold text-foreground">&ldquo;{conv.question}&rdquo;</p>
                                    </div>
                                </div>

                                {/* AI response */}
                                <div className="flex items-start gap-3">
                                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center shrink-0 shadow-sm">
                                        <SparklesIcon className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="bg-muted/50 dark:bg-zinc-700/50 rounded-2xl rounded-tl-sm px-4 py-2.5 flex-1">
                                        <p className="text-sm text-muted-foreground leading-relaxed">{conv.answer}</p>
                                        <div className="flex flex-wrap gap-1.5 mt-2.5">
                                            {conv.tags.map((tag) => (
                                                <span key={tag} className="px-2 py-0.5 bg-secondary/10 text-secondary text-xs font-medium rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Typing indicator */}
                        <div className="bg-white dark:bg-zinc-800 rounded-3xl p-5 border border-border/60">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center shrink-0">
                                    <SparklesIcon className="w-4 h-4 text-white" />
                                </div>
                                <div className="flex items-center gap-1 bg-muted/50 rounded-full px-4 py-2.5">
                                    <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:0ms]" />
                                    <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:150ms]" />
                                    <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:300ms]" />
                                </div>
                                <span className="text-xs text-muted-foreground">AI is typing...</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Illustration */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-primary/5 rounded-3xl blur-2xl scale-90" />
                        <div className="relative bg-white dark:bg-zinc-800 rounded-3xl p-8 border border-border/60 overflow-hidden">
                            {/* Decorative header */}
                            <div className="flex items-center gap-2 mb-6 pb-5 border-b border-border/50">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                <div className="flex-1 mx-3">
                                    <div className="h-6 bg-muted/60 rounded-lg flex items-center px-3">
                                        <span className="text-xs text-muted-foreground">dentwise.ai/chat</span>
                                    </div>
                                </div>
                            </div>

                            <Image
                                src="/confused.png"
                                alt="AI Dental Assistant"
                                width={400}
                                height={400}
                                className="w-full h-auto max-w-sm mx-auto object-contain"
                            />

                            {/* Stats row */}
                            <div className="mt-6 pt-5 border-t border-border/50 grid grid-cols-3 gap-4 text-center">
                                {[
                                    { val: '500+', label: 'Topics Covered' },
                                    { val: '2s', label: 'Avg Response' },
                                    { val: '98%', label: 'Satisfaction' },
                                ].map(({ val, label }) => (
                                    <div key={label}>
                                        <p className="text-xl font-extrabold text-foreground">{val}</p>
                                        <p className="text-xs text-muted-foreground">{label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default WhatToAsk;
