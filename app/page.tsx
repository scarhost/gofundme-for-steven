"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function MemePage() {
  const [memeCount, setMemeCount] = useState(0)
  const [showFloatingMemes, setShowFloatingMemes] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setMemeCount((prev) => (prev + 1) % 100)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating background memes */}
      <div className="fixed inset-0 pointer-events-none opacity-5 z-0">
        <div className="absolute top-10 left-10 w-32 h-32 animate-float">
          <Image src="/meme.png" alt="" fill className="object-contain" />
        </div>
        <div className="absolute top-40 right-20 w-24 h-24 animate-float" style={{ animationDelay: "1s" }}>
          <Image src="/meme.png" alt="" fill className="object-contain" />
        </div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 animate-float" style={{ animationDelay: "2s" }}>
          <Image src="/meme.png" alt="" fill className="object-contain" />
        </div>
        <div className="absolute top-1/2 right-10 w-36 h-36 animate-spin-slow">
          <Image src="/meme.png" alt="" fill className="object-contain" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center space-y-8">
          <div className="relative inline-block">
            <h1 className="text-6xl md:text-8xl font-black text-foreground text-balance">ANYTHING HELPS</h1>
            <div className="absolute -top-8 -right-8 w-20 h-20 animate-bounce-in">
              <Image src="/meme.png" alt="" fill className="object-contain" />
            </div>
          </div>

          <p className="text-2xl md:text-3xl text-muted-foreground font-medium text-balance">
            {"Please spare me some "}
            <span className="text-primary font-bold">ANYTHING</span>
          </p>

          <div className="relative w-full max-w-2xl mx-auto aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-primary">
            <Image src="/meme.png" alt="The legendary meme" fill className="object-cover" priority />
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Button size="lg" className="text-lg font-bold" onClick={() => setShowFloatingMemes(!showFloatingMemes)}>
              Spare Me Something
            </Button>
            <Button size="lg" variant="secondary" className="text-lg font-bold">
              Donate to Steven&apos;s Teeth
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-8 text-center space-y-4 bg-card border-2 hover:border-primary transition-colors">
            <div className="relative w-24 h-24 mx-auto">
              <Image src="/meme.png" alt="" fill className="object-contain" />
            </div>
            <h3 className="text-4xl font-black text-primary">{memeCount}%</h3>
            <p className="text-lg text-muted-foreground font-medium">Anything Spared</p>
          </Card>

          <Card className="p-8 text-center space-y-4 bg-card border-2 hover:border-secondary transition-colors">
            <div className="relative w-24 h-24 mx-auto animate-spin-slow">
              <Image src="/meme.png" alt="" fill className="object-contain" />
            </div>
            <h3 className="text-4xl font-black text-secondary">∞</h3>
            <p className="text-lg text-muted-foreground font-medium">Memes Generated</p>
          </Card>

          <Card className="p-8 text-center space-y-4 bg-card border-2 hover:border-accent transition-colors">
            <div className="relative w-24 h-24 mx-auto animate-float">
              <Image src="/meme.png" alt="" fill className="object-contain" />
            </div>
            <h3 className="text-4xl font-black text-accent-foreground">1</h3>
            <p className="text-lg text-muted-foreground font-medium">Legendary Sign</p>
          </Card>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative z-10 container mx-auto px-4 py-20">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-12 text-foreground">The Meme Wall of Fame</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-xl overflow-hidden border-2 border-border hover:border-primary transition-all hover:scale-105 cursor-pointer"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <Image src="/meme.png" alt={`Meme ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 container mx-auto px-4 py-20">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-12 text-foreground">What People Are Sparing</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="p-6 space-y-4 bg-card">
            <div className="flex items-start gap-4">
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image src="/meme.png" alt="" fill className="object-contain rounded-full" />
              </div>
              <div>
                <p className="text-lg text-foreground">
                  &quot;I spared him some anything and my life changed forever&quot;
                </p>
                <p className="text-sm text-muted-foreground mt-2">- Random Person</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 space-y-4 bg-card">
            <div className="flex items-start gap-4">
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image src="/meme.png" alt="" fill className="object-contain rounded-full" />
              </div>
              <div>
                <p className="text-lg text-foreground">&quot;Best GoFundMe for clean teeth I&apos;ve ever seen&quot;</p>
                <p className="text-sm text-muted-foreground mt-2">- Steven&apos;s Dentist</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="relative w-32 h-32">
              <Image src="/meme.png" alt="Logo" fill className="object-contain" />
            </div>

            <div className="text-center md:text-right">
              <p className="text-lg font-bold text-foreground">Anything Helps Please Spare Me Some Anything™</p>
              <p className="text-sm text-muted-foreground mt-2">© 2025 All Anythings Reserved</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating memes when button clicked */}
      {showFloatingMemes && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce-in"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <div className="relative w-20 h-20 animate-float">
                <Image src="/meme.png" alt="" fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
