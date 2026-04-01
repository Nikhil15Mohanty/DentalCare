import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { CheckIcon, SparklesIcon, XIcon } from "lucide-react";

const plans = [
    {
        name: "Free",
        price: "$0",
        description: "Essential appointment booking",
        cta: "Get Started Free",
        ctaVariant: "outline" as const,
        featured: false,
        features: [
            { text: "Unlimited appointment booking", included: true },
            { text: "Find dentists in your area", included: true },
            { text: "Basic text chat support", included: true },
            { text: "Appointment reminders", included: true },
            { text: "AI voice calls", included: false },
            { text: "Symptom assessment", included: false },
        ],
    },
    {
        name: "AI Basic",
        price: "$9",
        description: "AI consultations + booking",
        cta: "Start AI Basic",
        ctaVariant: "default" as const,
        featured: true,
        badge: "Most Popular",
        features: [
            { text: "Everything in Free", included: true },
            { text: "10 AI voice calls per month", included: true },
            { text: "AI dental guidance & advice", included: true },
            { text: "Symptom assessment", included: true },
            { text: "Priority support", included: true },
            { text: "Call history & recordings", included: true },
        ],
    },
    {
        name: "AI Pro",
        price: "$19",
        description: "Unlimited AI consultations",
        cta: "Upgrade to AI Pro",
        ctaVariant: "outline" as const,
        featured: false,
        features: [
            { text: "Everything in AI Basic", included: true },
            { text: "Unlimited AI voice calls", included: true },
            { text: "Advanced AI dental analysis", included: true },
            { text: "Personalized care plans", included: true },
            { text: "24/7 priority AI support", included: true },
            { text: "Detailed health reports", included: true },
        ],
    },
];

function PricingSection() {
    return (
        <section id="pricing" className="relative py-28 px-6 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-muted/20 to-white dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900" />

            {/* Decorative */}
            <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/8 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-secondary/8 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 mb-5">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-widest text-primary">Simple Pricing</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
                        Choose your{" "}
                        <span
                            style={{
                                background: 'linear-gradient(135deg, var(--primary) 0%, #f5a473 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            AI dental plan
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Book appointments for free and upgrade for unlimited AI consultations.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid lg:grid-cols-3 gap-6 items-start">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative rounded-3xl border transition-all duration-500 hover:-translate-y-1 ${
                                plan.featured
                                    ? 'border-primary/50 shadow-2xl shadow-primary/15 bg-gradient-to-b from-white to-orange-50/50 dark:from-zinc-800 dark:to-zinc-800'
                                    : 'border-border/60 bg-white dark:bg-zinc-800 hover:border-primary/30 hover:shadow-xl'
                            }`}
                        >
                            {/* Popular badge */}
                            {plan.badge && (
                                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                                    <div className="flex items-center gap-1.5 bg-primary text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg shadow-primary/40">
                                        <SparklesIcon className="w-3 h-3" />
                                        {plan.badge}
                                    </div>
                                </div>
                            )}

                            {/* Top accent line for featured */}
                            {plan.featured && (
                                <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
                            )}

                            <div className={`p-7 ${plan.featured ? 'pt-9' : ''}`}>
                                {/* Plan name + price */}
                                <div className="mb-6">
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className="text-lg font-bold">{plan.name}</h3>
                                    </div>
                                    <div className="flex items-end gap-1 mb-1">
                                        <span className={`text-5xl font-extrabold tracking-tight ${plan.featured ? 'text-primary' : ''}`}>
                                            {plan.price}
                                        </span>
                                        <span className="text-muted-foreground text-sm mb-2">/month</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                                </div>

                                {/* CTA */}
                                {plan.featured ? (
                                    <Button className="w-full rounded-xl font-semibold shadow-md shadow-primary/30 mb-6">
                                        {plan.cta}
                                    </Button>
                                ) : plan.name === "Free" ? (
                                    <SignUpButton mode="modal">
                                        <Button variant="outline" className="w-full rounded-xl font-semibold border-2 mb-6 hover:border-primary/40 hover:bg-primary/5">
                                            {plan.cta}
                                        </Button>
                                    </SignUpButton>
                                ) : (
                                    <Button variant="outline" className="w-full rounded-xl font-semibold border-2 border-primary/30 hover:border-primary/60 hover:bg-primary/5 mb-6">
                                        {plan.cta}
                                    </Button>
                                )}

                                {/* Divider */}
                                <div className="border-t border-border/50 mb-5" />

                                {/* Features */}
                                <ul className="space-y-3">
                                    {plan.features.map((f) => (
                                        <li key={f.text} className="flex items-start gap-3">
                                            <span className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${f.included ? 'bg-primary/15 text-primary' : 'bg-muted text-muted-foreground/40'}`}>
                                                {f.included ? <CheckIcon className="w-2.5 h-2.5" strokeWidth={3} /> : <XIcon className="w-2.5 h-2.5" strokeWidth={3} />}
                                            </span>
                                            <span className={`text-sm ${f.included ? 'text-foreground' : 'text-muted-foreground/60 line-through'}`}>
                                                {f.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom note */}
                <p className="text-center text-sm text-muted-foreground mt-10">
                    No credit card required for free plan. Cancel anytime.
                </p>
            </div>
        </section>
    );
}

export default PricingSection;
