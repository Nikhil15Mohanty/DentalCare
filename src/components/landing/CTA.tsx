import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MicIcon, CalendarIcon, ArrowRightIcon } from "lucide-react";

function CTA() {
    return (
        <section className="relative py-20 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="relative rounded-3xl overflow-hidden">
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-orange-400 dark:from-zinc-800 dark:via-zinc-800 dark:to-zinc-700" />

                    {/* Decorative shapes */}
                    <div className="absolute -top-16 -right-16 w-72 h-72 bg-white/10 rounded-full blur-2xl" />
                    <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                    <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-white/8 rounded-full blur-2xl" />

                    {/* Dot grid overlay */}
                    <div className="absolute inset-0 opacity-10"
                        style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }}
                    />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center p-10 lg:p-14">
                        {/* Left */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 rounded-full border border-white/30">
                                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                <span className="text-xs font-bold text-white uppercase tracking-widest">Ready When You Are</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                                Your dental health
                                <br />
                                journey <span className="text-white/80">starts here</span>
                            </h2>

                            <p className="text-white/80 text-lg leading-relaxed max-w-md">
                                Join <strong className="text-white">1,200+ patients</strong> who trust our AI for instant guidance and personalized dental care.
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 py-4 border-y border-white/20">
                                {[
                                    { val: '24/7', label: 'Availability' },
                                    { val: '4.9★', label: 'Patient Rating' },
                                    { val: '<2s', label: 'Response Time' },
                                ].map(({ val, label }) => (
                                    <div key={label} className="text-center">
                                        <p className="text-2xl font-extrabold text-white">{val}</p>
                                        <p className="text-xs text-white/70 mt-0.5">{label}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 pt-1">
                                <Button size="lg" className="bg-white text-primary hover:bg-white/95 font-bold rounded-xl shadow-lg gap-2 px-7">
                                    <MicIcon className="size-4" />
                                    Start Free Chat
                                </Button>
                                <Button size="lg" variant="outline" className="border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 font-semibold rounded-xl gap-2 px-7">
                                    <CalendarIcon className="size-4" />
                                    Book Appointment
                                    <ArrowRightIcon className="size-3.5" />
                                </Button>
                            </div>
                        </div>

                        {/* Right: Image */}
                        <div className="relative flex justify-center lg:justify-end">
                            {/* Floating badge */}
                            <div className="absolute top-2 left-8 z-20 bg-green-400/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                                Available 24/7
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 bg-white/15 rounded-3xl blur-2xl scale-90" />
                                <Image
                                    src="/cta.png"
                                    alt="DentWise AI Assistant"
                                    width={340}
                                    height={340}
                                    className="relative w-72 lg:w-80 h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default CTA;
