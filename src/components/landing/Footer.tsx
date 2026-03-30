import Image from "next/image";
import Link from "next/link";

const links = {
    Product: ["How it works", "Pricing", "FAQ"],
    Support: ["Help center", "Contact us", "Status"],
    Legal: ["Privacy", "Terms", "Security"],
};

function Footer() {
    return (
        <footer className="relative px-6 pt-16 pb-8 border-t border-border/50 bg-muted/20 dark:bg-zinc-900 overflow-hidden">
            {/* Subtle gradient top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-5 gap-10 mb-12">
                    {/* Brand column */}
                    <div className="md:col-span-2 space-y-4">
                        <Link href="/" className="flex items-center gap-2.5 group w-fit">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-md">
                                <Image src="/logo.png" alt="DentWise Logo" width={20} height={20} className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-lg tracking-tight">
                                Dent<span className="text-primary">Wise</span>
                            </span>
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                            AI-powered dental assistance that actually helps. Get expert guidance, book appointments, and take control of your oral health.
                        </p>

                        {/* Trust badges */}
                        <div className="flex flex-wrap gap-2 pt-1">
                            {['HIPAA Compliant', 'SOC 2', '256-bit SSL'].map((badge) => (
                                <span key={badge} className="px-2.5 py-1 bg-muted text-xs font-medium text-muted-foreground rounded-lg border border-border/60">
                                    🔒 {badge}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(links).map(([section, items]) => (
                        <div key={section}>
                            <h4 className="font-semibold text-foreground mb-4 text-sm">{section}</h4>
                            <ul className="space-y-2.5">
                                {items.map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 hover:underline underline-offset-4">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © 2025 <span className="font-medium text-foreground">DentWise</span>. Built for real people with real dental questions.
                    </p>
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                            All systems operational
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
