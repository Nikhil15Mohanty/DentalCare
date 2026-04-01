import { SignInButton, SignUpButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

const Header = () => {
    return (
        <nav className='fixed top-0 right-0 left-0 z-50 px-6 pt-4'>
            <div className='max-w-6xl mx-auto'>
                <div className='flex justify-between items-center bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-border/60 rounded-2xl px-5 py-3 shadow-lg shadow-black/5'>
                    <Link href="/" className='flex items-center gap-2.5 group'>
                        <div className='w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-md'>
                            <Image src="/logo.png" alt="Dental Logo" width={24} height={24} className='w-5 h-5' />
                        </div>
                        <span className='font-bold text-lg tracking-tight'>
                            Dent<span className='text-primary'>Wise</span>
                        </span>
                    </Link>

                    <div className='hidden md:flex items-center gap-1'>
                        {[
                            { label: 'How it Works', href: '#how-it-works' },
                            { label: 'Pricing', href: '#pricing' },
                            { label: 'About', href: '#about' },
                        ].map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className='relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-muted/60 group'
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    <div className='flex items-center gap-2'>
                        <SignInButton mode='modal'>
                            <Button variant="ghost" size="sm" className='font-medium text-sm rounded-xl'>
                                Login
                            </Button>
                        </SignInButton>
                        <SignUpButton mode='modal'>
                            <Button size="sm" className='font-semibold text-sm rounded-xl bg-primary hover:bg-primary/90 shadow-md shadow-primary/30'>
                                Get Started
                            </Button>
                        </SignUpButton>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
