/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowDown, ArrowRight, CheckCircle2, ChevronRight, DraftingCompass, Layers, Layout, Smartphone, User, Menu, X } from "lucide-react";
import { useState } from "react";

const IMAGES = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuALcjVU7SggPR88CjH0ILasu7PLkfDb7fM-4ul9egVc8I3hDqZVtHxmne0ngKwzJ3lc_5ue9VcNK9jdRq3IoH-x2rP-GOVK-bKJhpoM01qaocL6QVcxvXAxMuk8wxVd_D1GUCQva2Xa-M4Lu33gqaTsIdNEtCa33461fTb-K44_VlMu-kDZfX2npY4JUriiDty86ku6G6mtJ9fqupaL9mSjntf6fHsmWQQkiZvsZ5oVp2UOgK25o2GEr9DoqS1xqLt-5JboPIju4GlX",
  bridge_mist: "https://lh3.googleusercontent.com/aida-public/AB6AXuALcjVU7SggPR88CjH0ILasu7PLkfDb7fM-4ul9egVc8I3hDqZVtHxmne0ngKwzJ3lc_5ue9VcNK9jdRq3IoH-x2rP-GOVK-bKJhpoM01qaocL6QVcxvXAxMuk8wxVd_D1GUCQva2Xa-M4Lu33gqaTsIdNEtCa33461fTb-K44_VlMu-kDZfX2npY4JUriiDty86ku6G6mtJ9fqupaL9mSjntf6fHsmWQQkiZvsZ5oVp2UOgK25o2GEr9DoqS1xqLt-5JboPIju4GlX",
  bridge_night: "https://lh3.googleusercontent.com/aida-public/AB6AXuBebMxDT2Ru--DbK0HUhKLsOB9KvFyAWaXt3GPw7TFOyJ_ymnrJGv3XZrQZ3IZSsIayK3RXZauhfie_b1cX4n8YyPoBvlBrOz4dEE_9i21ngzDnGmPwnYTOIJZxy5s5KzYKqH8EzwIzxJfX8CdBv0-xdZ-XdaBvP6fnAh9KmGGOViKVTUIdRPwV8kXxMPIoWO2X0fzaut-06D8MQyKoOsH3efxG3VhmMNOA470doj7M1GHuSeV7KoaZij12KSOsgJo7NxkZBiiO43xd",
  bridge_sunset: "https://lh3.googleusercontent.com/aida-public/AB6AXuBebMxDT2Ru--DbK0HUhKLsOB9KvFyAWaXt3GPw7TFOyJ_ymnrJGv3XZrQZ3IZSsIayK3RXZauhfie_b1cX4n8YyPoBvlBrOz4dEE_9i21ngzDnGmPwnYTOIJZxy5s5KzYKqH8EzwIzxJfX8CdBv0-xdZ-XdaBvP6fnAh9KmGGOViKVTUIdRPwV8kXxMPIoWO2X0fzaut-06D8MQyKoOsH3efxG3VhmMNOA470doj7M1GHuSeV7KoaZij12KSOsgJo7NxkZBiiO43xd",
  bridge: "https://lh3.googleusercontent.com/aida-public/AB6AXuBebMxDT2Ru--DbK0HUhKLsOB9KvFyAWaXt3GPw7TFOyJ_ymnrJGv3XZrQZ3IZSsIayK3RXZauhfie_b1cX4n8YyPoBvlBrOz4dEE_9i21ngzDnGmPwnYTOIJZxy5s5KzYKqH8EzwIzxJfX8CdBv0-xdZ-XdaBvP6fnAh9KmGGOViKVTUIdRPwV8kXxMPIoWO2X0fzaut-06D8MQyKoOsH3efxG3VhmMNOA470doj7M1GHuSeV7KoaZij12KSOsgJo7NxkZBiiO43xd",
  hifi: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7mQHKXb3NNrhMsgqc7CgtEAqIFV3EA-sHYvnFZNuQYFrGQpKq-n11O61BriW1zVUnFslej8j0V4__xRuDq1_SXRau7HizeDIMIPXbNtFDsGbXpCdoKVExXITH4VcAOKCW9l2tuT04i4oo7lpH17-lkyvIUt75cxLhE86upZaqRUyLjdv9RltXsNr5RYWvkPm4Lw9jEfiO3sd4Ecl7Fz-ujxgNw3FfLfMVmlMxnIbcZWJZJ6ZmvGY3UBw_KbX4khVuKp_dwzQTaJN2",
  sketches: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2DLJ1gBncqs23siAgo4WDKOpKusjP5IhpfXyrPSKvvmmUfVS0ArZyDJx2Q5fU-fVR7ghwLRfx6RqIO3NhvUtEQpLY_J6s227chtYNLBoj1BF1Q_3Dx-8gMrigPb8f5-O3JcNWm-w0_XSmcacRIv3f7Wo-3G-OVFEOUb905mkwdVtuiucEQAOHsxk-Cgi43xs2skPAWHciJvKWQrPh9M1u1D1RwnDBzu3nq8SKW3b_nlmKIgepLH-0YeUv42w_K7AlU1Nk2nl7RTCa",
  wireframe1: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcsArCdFyaJcqntoBR6TxI2ipFzycniFcQpWp3VaguPJkwGwGkFmvLfxsRuBNcu39dcxb3UNfTQUHODP3So_MbtdljvO9-Z1WziV_wqfCCQ7zbi6kQ8LpjcZ_iJPyrN69QzNimyRBhBIrjsohMVfJQ9zeR057cqqVOedoM1nGdf-XukOjAwHKBKjOZ3bq935dCJ27o-qcwLXUr8qZ5fmhojguaBFh7djZt3HGREuVJYPC-pnkHTyKqtnD-9H4wnC3dOGkWVusLR1iU",
  wireframe2: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmaiQj5X_qTgy5hKmFFVZEL77xByJ2_6XpndN8M1Ml6z2-33ivfE0fo_mp7sL1sTn5uUMLXvFrcRCW5iWbueY1gW1fBgRqX9-2TljCKxFCs8qIds8iHI-a1rCs7kLlVVsWEwFh9kEgvo2Yp1tcp6h2A9lUUOorjNPMBy3lYCD3wR8YNiP48sxWBCg6OzDX0LWc5-z1yzJpHQ5kqkfzX--HFEtdOSDMIkxI7XXYQq74YrJOU6U0WU-2BMEq4h5LHEyD4ZNnlZgP1oET",
  person1: "https://lh3.googleusercontent.com/aida/ADBb0uhrNhsIWvAaHErRNRZkNwGYQbNVil7Q5r1wyUbP5fVwmxM5N7bSpzwMkxsDK24VqlVIVhoYH5hIBMVTeXCqrjLIh5_EnEcE1_9Dz53iaHQQBhPXUe8edMIDJQGLl127uXAkuYETWWxSv8Vvf64BVWP-rdstEWmkFTTNURRf1-MOhmyRWn4VzOyu7xyAMJ3wDmVUatEOCdpz2GXr-iXI8GZshhCGPUamEbOeI7Zl_whB5V6D93VjbywlAYsGeJ50xmUxa4UqqSH9gdM",
  person2: `${import.meta.env.BASE_URL}yiming-wang.png`,
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface flex selection:bg-white/10 selection:text-white">
      {/* Sidebar Navigation */}
      <aside className="fixed inset-y-0 left-0 w-64 hidden xl:flex flex-col py-10 border-r border-white/10 bg-surface-low z-50">
        <div className="px-10 mb-20 flex items-center gap-4">
          <div className="w-10 h-10 border border-primary/40 flex items-center justify-center">
            <span className="text-xs font-serif italic text-primary/80 tracking-widest">MB</span>
          </div>
          <div className="text-sm font-serif italic tracking-tighter text-primary/60">Maple Bridge</div>
        </div>
        
        <nav className="flex flex-col gap-2 px-6">
          {[
            { name: "Heritage", href: "#heritage", icon: Layout },
            { name: "The Goal", href: "#goal", icon: Layers },
            { name: "Research", href: "#research-intro", icon: Smartphone },
            { name: "Personas", href: "#personas", icon: User },
            { name: "Journey", href: "#research", icon: Smartphone },
            { name: "Ideation", href: "#process", icon: DraftingCompass },
            { name: "Prototype", href: "#prototype", icon: Smartphone },
            { name: "System", href: "#implementation", icon: Layers },
            { name: "Testing", href: "#testing", icon: CheckCircle2 },
            { name: "The Collective", href: "#team", icon: User }
          ].map((item, idx) => (
            <a 
              key={item.name} 
              href={item.href}
              className="group flex items-center gap-4 p-4 rounded-none hover:bg-white/[0.02] transition-all duration-300 relative overflow-hidden"
            >
               <div className={`w-1 h-1 rounded-full bg-primary transition-all duration-300 absolute left-0 ${idx === 0 ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
               <item.icon className={`w-4 h-4 transition-opacity duration-300 ${idx === 0 ? 'opacity-100' : 'opacity-30 group-hover:opacity-100'}`} />
               <span className={`text-[10px] uppercase tracking-[0.2em] transition-all ${idx === 0 ? 'text-white translate-x-0' : 'text-white/30 group-hover:text-white group-hover:translate-x-1'}`}>
                 {item.name}
               </span>
            </a>
          ))}
        </nav>

        <div className="mt-auto px-10 pb-12">
          <p className="text-[9px] uppercase tracking-[0.6em] text-white/10 text-center">Version 1.0.4</p>
        </div>
      </aside>

      {/* Mobile Nav */}
      <nav className="xl:hidden fixed top-0 w-full z-50 glass-panel border-b border-white/5 h-20 px-6 flex justify-between items-center px-8">
        <div className="text-xl font-serif italic font-light tracking-tighter">Maple Bridge</div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-6 h-6 stroke-[1.5]" /> : <Menu className="w-6 h-6 stroke-[1.5]" />}
        </button>
      </nav>

      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="xl:hidden fixed inset-0 z-40 bg-surface flex flex-col p-12 pt-32 gap-10"
        >
          {["Heritage", "Research", "Ideation", "Prototype", "Team", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="text-4xl font-serif italic font-light border-b border-white/5 pb-4"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 xl:ml-64 flex flex-col">
        {/* Hero Section */}
        <section id="heritage" className="relative min-h-screen flex flex-col p-8 md:p-16 lg:p-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={IMAGES.hero} 
              alt="" 
              className="w-full h-full object-cover opacity-60 scale-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-surface via-surface/40 to-transparent" />
          </div>

          <header className="relative z-10 flex justify-between items-end mb-auto">
            <div className="hidden lg:block">
              <p className="text-label mb-2">Digital Asset Reference: 2024.V1</p>
              <h2 className="text-3xl font-serif italic font-light opacity-80 leading-snug">A Cinematic Curation <br/>of Cultural Artifacts</h2>
            </div>
            <div className="text-right hidden sm:block">
              <p className="text-label mb-2">Active Node</p>
              <p className="text-xl font-light tabular-nums tracking-widest italic opacity-60">FENGQIAO <span className="text-xs opacity-40 ml-2 italic underline underline-offset-4">Suzhou, China</span></p>
            </div>
          </header>

          <div className="relative z-10 grid grid-cols-12 gap-12 items-center mt-32 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="col-span-12 lg:col-span-12 xl:col-span-8"
            >
              <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-serif font-light leading-[0.75] tracking-tighter mb-16">
                Maple <br/>
                <span className="italic opacity-60 ml-20 md:ml-40 block mt-4">Bridge</span>
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <p className="text-xl text-white/50 max-w-md leading-relaxed font-light">
                  Transforming shallow visits into story-driven engagement at the historic Fengqiao scenic area. Transforming cultural heritage through digital innovation.
                </p>
                <div className="flex flex-col gap-6 pt-2">
                   <a href="#goal" className="btn-primary group h-14 px-12 flex items-center justify-between min-w-[280px]">
                    Explore The Case
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform opacity-40" />
                  </a>
                  <p className="text-[10px] text-white/20 uppercase tracking-[0.4em] text-center md:text-left">Scroll to begin exploration</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Background bridge accents */}
          <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-30 pointer-events-none overflow-hidden hidden xl:block">
            <img src={IMAGES.bridge_mist} className="w-full h-full object-cover scale-150 origin-right hover:scale-[1.6] transition-transform duration-[10s]" referrerPolicy="no-referrer" />
          </div>
        </section>

        {/* The Goal */}
        <section id="goal" className="py-40 bg-surface-lowest p-8 md:p-16 lg:p-32 border-t border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-20 items-start">
             <div className="md:col-span-4 translate-y-2">
                <h2 className="text-5xl font-serif font-light tracking-tight border-l border-white/20 pl-8">The Goal</h2>
             </div>
             <div className="md:col-span-8">
                <p className="text-2xl font-light text-white/60 leading-relaxed max-w-3xl">
                   The objective of the MapleBridge project is to bridge the gap between static historical artifacts and modern visitors. By transforming shallow, passive visits into immersive, story-driven engagements, we aim to deepen the visitor's connection with the cultural context of the Fengqiao scenic area. This involves interactive storytelling, augmented reality exploration, and curated narratives that bring history to life.
                </p>
             </div>
          </div>
        </section>

        {/* Motivation & Research */}
        <section id="research-intro" className="py-40 p-8 md:p-16 lg:p-32 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
             <h2 className="text-6xl font-serif font-light mb-32 tracking-tighter italic">Motivation & Research</h2>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
                <div className="space-y-12">
                   <div>
                      <p className="text-label mb-6 text-primary">THE WHY</p>
                      <h3 className="text-4xl font-serif italic mb-10">A Living Symbol of Poetic Heritage</h3>
                      <p className="text-white/40 text-lg leading-relaxed font-light">
                        Maple Bridge is more than architecture; it's a feeling of deep resonance. Our research into historical literature, specifically "A Night Mooring by Maple Bridge," revealed an emotional depth that traditional tourism misses. We sought to design a system that doesn't just display history, but invokes the sensory experience of these narratives.
                      </p>
                   </div>
                   <div className="aspect-square border border-primary/20 overflow-hidden group">
                      <img src={IMAGES.bridge_sunset} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[5s]" referrerPolicy="no-referrer" />
                   </div>
                </div>

                <div className="space-y-12">
                   <div>
                      <p className="text-label mb-6 text-primary">THE PROBLEM</p>
                      <h3 className="text-4xl font-serif italic mb-10">The Gap</h3>
                      <p className="text-white/40 text-lg leading-relaxed font-light">
                        There is a disconnect between the historic stature of the site and the current visitor experience. Most visitors leave without a meaningful connection to the literature or history.
                      </p>
                   </div>
                   <div className="p-12 border border-primary/20 bg-primary/[0.02] relative overflow-hidden group">
                      <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                         <img src={IMAGES.bridge_night} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div className="relative z-10">
                         <div className="text-3xl font-serif italic text-primary/80 leading-relaxed mb-8">
                            "The bridge remains, but the words that once made it stand eternal are lost to the modern eye."
                         </div>
                         <p className="text-sm text-primary/40 italic">Initial research into visitor retention showed that over 80% could not recall the site's primary cultural significance after departure.</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* User Personas */}
        <section id="personas" className="py-40 p-8 md:p-16 lg:p-32 bg-surface-lowest border-t border-white/5">
          <div className="max-w-4xl mx-auto">
             <div className="text-center mb-32">
                <p className="text-label mb-6 tracking-[0.5em] text-primary">AUDIENCE ARCHETYPES</p>
                <h2 className="text-7xl font-serif font-light italic">User Personas</h2>
             </div>

             <div className="flex flex-col gap-32">
                {/* Persona 1 */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="border border-white/10 bg-white/[0.01] p-12 md:p-20 flex flex-col gap-16 relative overflow-hidden group"
                >
                   <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity duration-1000">
                      <User className="w-96 h-96 -mr-32 -mt-32" />
                   </div>
                   
                   <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start relative z-10">
                      <div className="md:col-span-5 space-y-10">
                        <div className="space-y-4">
                           <p className="text-label text-primary opacity-60">ARCHETYPE 01</p>
                           <h3 className="text-6xl font-serif font-light leading-[0.9] tracking-tighter">"Xicheng <br/><span className="italic opacity-40">Guo"</span></h3>
                        </div>
                        <div className="aspect-[4/5] bg-neutral-900 border border-primary/10 overflow-hidden p-6 relative">
                           <img src={IMAGES.person1} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                           <div className="absolute bottom-10 left-10">
                              <p className="text-xs uppercase tracking-widest text-primary/40">21, XJTLU Student, EST Major</p>
                           </div>
                        </div>
                      </div>
                      
                      <div className="md:col-span-7 space-y-16">
                         <div className="italic text-primary/60 text-2xl leading-relaxed border-l-4 border-primary/20 pl-10 py-2">
                           “I want Maple Bridge to be more than just a place for taking photos.”
                         </div>

                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                            <div>
                               <p className="text-label mb-4 text-primary opacity-40">BACKGROUND</p>
                               <p className="text-base text-primary/50 leading-relaxed font-light">Age 21, XJTLU student majoring in EST, originally from another city. New to Suzhou's deep culture.</p>
                            </div>
                            <div>
                               <p className="text-label mb-4 text-primary opacity-40">GOALS</p>
                               <p className="text-base text-primary/50 leading-relaxed font-light">Visit Maple Bridge in a clear and efficient way, understand what is worth seeing, and experience local culture interestingly.</p>
                            </div>
                            <div>
                               <p className="text-label mb-4 text-primary opacity-40">NEEDS</p>
                               <p className="text-base text-primary/50 leading-relaxed font-light">Clear route guidance, easy cultural interpretation, and more interactive participation.</p>
                            </div>
                            <div>
                               <p className="text-label mb-4 text-primary opacity-40">PAIN POINTS</p>
                               <p className="text-base text-primary/50 leading-relaxed font-light">Does not know where to start, finds visits becoming “nothing beyond taking photos”, loses interest quickly.</p>
                            </div>
                         </div>

                         <div className="pt-10">
                            <a href="#research" className="btn-primary inline-flex items-center gap-6 px-12 h-16 group/btn">
                               View Detailed Journey
                               <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform opacity-40" />
                            </a>
                         </div>
                      </div>
                   </div>
                </motion.div>

                {/* Persona 2 */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="border border-white/10 bg-white/[0.01] p-12 md:p-20 flex flex-col gap-16 relative overflow-hidden group"
                >
                   <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity duration-1000">
                      <User className="w-96 h-96 -mr-32 -mt-32" />
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start relative z-10">
                      <div className="md:col-span-5 space-y-10">
                        <div className="space-y-4">
                           <p className="text-label text-primary opacity-60">ARCHETYPE 02</p>
                           <h3 className="text-6xl font-serif font-light leading-[0.9] tracking-tighter">"Yiming <br/><span className="italic opacity-40">Wang"</span></h3>
                        </div>
                        <div className="aspect-[4/5] bg-neutral-900 border border-primary/10 overflow-hidden p-6 relative">
                           <img src={IMAGES.person2} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                           <div className="absolute bottom-10 left-10">
                              <p className="text-xs uppercase tracking-widest text-primary/40">32, Suzhou Local Resident</p>
                           </div>
                        </div>
                      </div>
                      
                      <div className="md:col-span-7 space-y-16">
                         <div className="italic text-primary/60 text-2xl leading-relaxed border-l-4 border-primary/20 pl-10 py-2">
                            “I know Maple Bridge is famous, but I still want a better reason to stay and explore.”
                         </div>

                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                            <div>
                               <p className="text-label mb-4 text-primary opacity-40">BACKGROUND</p>
                               <p className="text-base text-primary/50 leading-relaxed font-light">Age 32, professional living in Suzhou. Has seen the bridge many times but seeks deeper connection.</p>
                            </div>
                            <div>
                               <p className="text-label mb-4 text-primary opacity-40">GOALS</p>
                               <p className="text-base text-primary/50 leading-relaxed font-light">Rediscover Maple Bridge in a more meaningful way, better understand cultural background, share with family/friends.</p>
                            </div>
                            <div>
                               <p className="text-label mb-4 text-primary opacity-40">NEEDS</p>
                               <p className="text-base text-primary/50 leading-relaxed font-light">Stronger storytelling, engaging interaction, and a structured visiting experience.</p>
                            </div>
                            <div>
                               <p className="text-label mb-4 text-primary opacity-40">PAIN POINTS</p>
                               <p className="text-base text-primary/50 leading-relaxed font-light">Experience feels shallow/passive, cultural meaning hard to grasp on-site, lacks interest for revisits.</p>
                            </div>
                         </div>

                         <div className="pt-10">
                            <a href="#research" className="btn-primary inline-flex items-center gap-6 px-12 h-16 group/btn">
                               Analyze Experience Requirements
                               <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform opacity-40" />
                            </a>
                         </div>
                      </div>
                   </div>
                </motion.div>
             </div>
          </div>
        </section>

        {/* Narrative Expansion: The Bridge Core */}
        <section className="py-40 bg-surface-lowest p-8 md:p-16 lg:p-32 border-t border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/2 space-y-12">
               <div>
                  <p className="text-label mb-6">Subject Analysis</p>
                  <h2 className="text-6xl font-serif font-light leading-[1.1] tracking-tight">The Bridge as <br/><span className="italic opacity-40">Temporal Axis</span></h2>
               </div>
               <div className="space-y-8 border-l border-white/10 pl-10">
                  <p className="text-white/40 text-lg font-light leading-loose">
                    The Fengqiao Bridge is not merely a structure of stone; it is a catalyst for literary and historical resonance. Our study focuses on how this specific monument acts as a "navigational anchor" for Suzhou's cultural identity.
                  </p>
                  <p className="text-white/40 text-lg font-light leading-loose">
                    By synthesizing archival data with modern rendering techniques, we enable users to experience the bridge's evolution across centuries—from a vital trade artery to a symbolic landmark of poetic solitude.
                  </p>
               </div>
               <div className="flex gap-10 pt-4">
                  <div className="space-y-2">
                    <p className="text-[3rem] font-serif italic text-white/10">1K+</p>
                    <p className="text-label">Documented Artifacts</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[3rem] font-serif italic text-white/10">100%</p>
                    <p className="text-label">Digital Fidelity</p>
                  </div>
               </div>
            </div>
            <div className="lg:w-1/2 relative group">
               <div className="absolute inset-0 bg-primary/10 blur-[120px] opacity-20" />
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4 pt-12">
                     <div className="aspect-[3/4] border border-white/10 overflow-hidden grayscale brightness-50 group-hover:brightness-100 transition-all duration-1000">
                        <img src={IMAGES.bridge} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                     </div>
                     <div className="aspect-square border border-white/10 overflow-hidden grayscale brightness-50 group-hover:brightness-100 transition-all duration-1000 delay-100">
                        <img src={IMAGES.hero} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                     </div>
                  </div>
                  <div className="space-y-4">
                     <div className="aspect-square border border-white/10 overflow-hidden grayscale brightness-50 group-hover:brightness-100 transition-all duration-1000 delay-200">
                        <img src={IMAGES.hifi} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                     </div>
                     <div className="aspect-[3/4] border border-white/10 overflow-hidden grayscale brightness-50 group-hover:brightness-100 transition-all duration-1000 delay-300">
                        <img src={IMAGES.bridge} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* User Journey Map - RESTORED FULL DETAIL */}
        <section id="research" className="py-40 bg-surface p-8 md:p-16 lg:p-32 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <header className="mb-32">
              <p className="text-label mb-6 tracking-[0.5em]">Phase One: Semantic Research</p>
              <h2 className="text-6xl md:text-7xl font-serif font-light leading-[1.05] tracking-tight">Requirement Traceability <br/><span className="italic opacity-60">&amp; User Journey Map</span></h2>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  stage: "01", title: "Arrival", 
                  action: "Initial orientation, rapid navigation through landing nodes, establishing geographic context.", 
                  emotion: "Curiosity tinged with caution; seeking immediate utility and aesthetic confirmation.", 
                  pain: "Information density overload, high visual noise from competing UI elements.", 
                  opp: "Implement the 'Nocturne' aesthetic to reduce visual friction and eye strain." 
                },
                { 
                  stage: "02", title: "Exploration", 
                  action: "Deep browsing through categorical archives, cross-referencing artifacts with historical timelines.", 
                  emotion: "Growing intrigue; user begins to connect disparate narrative threads.", 
                  pain: "Contextual metadata loss when navigating between nested categories.", 
                  opp: "Apply asymmetric grid patterns to encourage a sense of organic discovery." 
                },
                { 
                  stage: "03", title: "Engagement", 
                  action: "Immersive deep reading, interaction with high-fidelity visual assets, media consumption.", 
                  emotion: "Total immersion; emotional connection with the bridge narrative.", 
                  pain: "Static UI fatigue, difficulty focusing on prolonged text blocks.", 
                  opp: "Develop a 'Receding UI' strategy where interface elements dissolve during deep focus." 
                },
                { 
                  stage: "04", title: "Departure", 
                  action: "Finalizing research citations, exporting curated collections, saving session notes.", 
                  emotion: "Intellectual closure and satisfaction; desire to share findings.", 
                  pain: "Complex export settings, loss of curation hierarchy in static files.", 
                  opp: "Introduce elegant, high-contrast action buttons for seamless data transition." 
                }
              ].map((item, idx) => (
                <motion.div 
                  key={item.stage}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  className="group bg-white/[0.01] p-12 border border-white/10 hover:border-white/30 transition-all duration-1000 relative flex flex-col"
                >
                  <span className="text-label opacity-10 group-hover:opacity-100 transition-all duration-700">Stage {item.stage}</span>
                  <h3 className="text-3xl font-serif italic font-light mt-6 mb-12 text-white/90 group-hover:translate-x-2 transition-transform duration-500">{item.title}</h3>
                  <div className="space-y-10 flex-grow">
                    {[
                      { l: "Primary Actions", v: item.action },
                      { l: "Emotional State", v: item.emotion },
                      { l: "Identified Pain", v: item.pain },
                      { l: "Design Leverage", v: item.opp }
                    ].map(row => (
                      <div key={row.l} className="group-hover:opacity-100 opacity-60 transition-opacity">
                        <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-3 border-b border-white/5 pb-2 group-hover:border-primary/20 transition-colors">{row.l}</h4>
                        <p className="text-[13px] text-white/60 leading-relaxed font-light">{row.v}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ideation - FULL CONTENT RESTORED */}
        <section id="process" className="py-40 p-8 md:p-16 lg:p-32 border-t border-white/10">
          <div className="max-w-7xl mx-auto flex flex-col">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-32 items-center">
              <div className="lg:col-span-5 space-y-12">
                <div>
                  <p className="text-label mb-6">Phase Two: Visual Archeology</p>
                  <h2 className="text-6xl font-serif font-light leading-tight tracking-tight">Ideation <span className="italic opacity-40">&amp; Alternatives</span></h2>
                </div>
                <p className="text-white/50 text-xl font-light leading-relaxed">
                  Before arriving at the final direction, we explored multiple visual paradigms. The core challenge was balancing academic rigor with an engaging, cinematic digital experience.
                </p>
                <div className="p-10 border border-white/10 bg-white/[0.01] relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-5">
                    <CheckCircle2 className="w-20 h-20" />
                  </div>
                  <h4 className="text-sm uppercase tracking-widest text-primary mb-6 italic">The Selection Rationale</h4>
                  <p className="text-sm text-white/40 leading-loose font-light">
                    Direction A (Gamified) was discarded as it trivialized the sensitive cultural nature of the project. Direction B (Modern Editorial) felt structurally sound but emotionally sterile. Direction C (Nocturne Heritage) provided the necessary atmospheric depth to evoke the bridge’s poetic history.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="aspect-video bg-neutral-950 border border-white/10 p-6 relative group overflow-hidden">
                  <img 
                    src={IMAGES.sketches} 
                    alt="Process Sketches" 
                    className="w-full h-full object-cover opacity-10 group-hover:opacity-40 transition-all duration-1000 scale-105 group-hover:scale-100 grayscale" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-12 left-12">
                     <p className="text-label text-white/60 mb-2">Internal Documentation</p>
                     <p className="text-xl font-serif italic text-white/40">"Crazy Eights" Ideation Sketches</p>
                  </div>
                  <div className="absolute bottom-12 right-12">
                    <DraftingCompass className="w-16 h-16 text-white/5 group-hover:text-primary/10 transition-colors duration-1000" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: "Alternative A: Gamified Base", status: "Discarded", desc: "Interactive timelines and achievement markers. Tone misalignment with historical gravity.", selected: false },
                { name: "Alternative B: Narrative AR Guide", status: "Candidate Direction", desc: "AR-based storytelling centered on poetic resonance. Selected for high engagement potentials.", selected: true }
              ].map((item) => (
                <div 
                  key={item.name}
                  className={`p-12 border border-white/10 transition-all duration-1000 ${item.selected ? 'bg-white/[0.02] border-white/40' : 'opacity-30 hover:opacity-100 grayscale hover:grayscale-0'}`}
                >
                   <div className="flex justify-between items-start mb-8">
                      <h5 className="text-2xl font-serif italic">{item.name}</h5>
                      {item.selected && <CheckCircle2 className="w-5 h-5 text-primary" />}
                   </div>
                   <p className="text-[13px] text-white/40 leading-loose font-light italic">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Low-Fi / Architecture */}
        <section id="lowfi" className="py-40 bg-surface-lowest p-8 md:p-16 lg:p-32 border-t border-white/10">
          <div className="max-w-7xl mx-auto flex flex-col">
            <h2 className="text-5xl font-serif font-light mb-24 italic">Low-Fi Prototype</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 min-h-[500px] border border-white/10 bg-neutral-950 overflow-hidden shadow-2xl">
              {[
                { title: "Home View", img: IMAGES.wireframe1 },
                { title: "Index View", img: IMAGES.wireframe2 },
                { title: "Detail View", img: IMAGES.wireframe1 },
                { title: "Collection View", img: IMAGES.wireframe2 }
              ].map((item, idx) => (
                <div key={item.title} className="relative group cursor-pointer flex flex-col items-center justify-center border-white/5 border-r last:border-r-0">
                  <div className="absolute inset-0 grayscale opacity-5 group-hover:opacity-20 transition-all duration-1000">
                    <img src={item.img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <Smartphone className="w-10 h-10 text-white/5 group-hover:text-primary transition-all duration-1000 mb-4 relative z-10" />
                  <span className="text-label relative z-10 opacity-30 group-hover:opacity-100 transition-opacity">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* High-Fi Prototype */}
        <section id="prototype" className="py-40 p-8 md:p-16 lg:p-32 bg-surface border-t border-white/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
            <div className="col-span-12 lg:col-span-5 space-y-16">
              <h2 className="text-6xl font-serif font-light italic">High-Fi Prototype</h2>
              <div className="space-y-12">
                 <div>
                    <h4 className="text-label mb-4 text-primary">Typography & Color</h4>
                    <p className="text-sm text-white/40 leading-relaxed font-light italic border-l border-white/10 pl-6">Pairing massive editorial serif headers with precise sans-serif metadata. A palette of deep charcoal and aged ivory evoked the bridge's poetic solitude.</p>
                 </div>
                 <div>
                    <h4 className="text-label mb-4 text-primary">Interactive Elements</h4>
                    <p className="text-sm text-white/40 leading-relaxed font-light italic border-l border-white/10 pl-6">Smooth tonal shifts and subtle 3D parallax effects create depth. UI elements recede during deep reading mode to minimize cognitive noise.</p>
                 </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7">
               <div className="aspect-[3/4] max-w-sm mx-auto border-[12px] border-neutral-900 rounded-[3rem] shadow-2xl relative overflow-hidden bg-black p-4">
                  <img src={IMAGES.hifi} className="w-full h-full object-cover rounded-[2rem] grayscale opacity-60" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute bottom-12 left-10 text-white/40 tracking-tighter italic text-2xl font-serif">[High-Fi Prototype View]</div>
               </div>
            </div>
          </div>
        </section>

        {/* Implementation Section */}
        <section id="implementation" className="py-40 p-8 md:p-16 lg:p-32 bg-surface-lowest border-t border-white/5">
           <div className="max-w-7xl mx-auto">
              <h2 className="text-5xl font-serif font-light mb-32 tracking-tighter">Implementation</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                 <div className="p-10 border border-white/10 bg-white/[0.01]">
                    <div className="flex items-center gap-4 mb-8">
                       <Layers className="w-5 h-5 text-primary" />
                       <h3 className="text-label text-white/80">System Architecture</h3>
                    </div>
                    <p className="text-xs text-white/40 leading-loose italic">A highly scalable SPA architecture utilizing React for view orchestration, leveraging Framer Motion for cinematic interaction physics. Backend nodes managed by secure cloud services.</p>
                 </div>
                 <div className="p-10 border border-white/10 bg-white/[0.01]">
                    <div className="flex items-center gap-4 mb-8">
                       <User className="w-5 h-5 text-primary" />
                       <h3 className="text-label text-white/80">Team Contribution</h3>
                    </div>
                    <ul className="text-[10px] uppercase tracking-widest text-white/20 space-y-4">
                       <li>Member 01: UX Research / Narrative</li>
                       <li>Member 02: UI System Architect</li>
                       <li>Member 03: Interactive Prototyping</li>
                       <li>Member 04: Visual Synthesis</li>
                    </ul>
                 </div>
                 <div className="p-10 border border-white/10 bg-white/[0.01]">
                    <div className="flex items-center gap-4 mb-8">
                       <Layout className="w-5 h-5 text-primary" />
                       <h3 className="text-label text-white/80">Project Links</h3>
                    </div>
                    <div className="space-y-4">
                       <button className="w-full py-4 border border-white/10 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">VISIT GITHUB REPOSITORY</button>
                       <button className="w-full py-4 border border-white/10 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">SYSTEM DOCUMENTATION</button>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Usability Testing */}
        <section id="testing" className="py-40 p-8 md:p-16 lg:p-32 border-t border-white/5">
           <div className="max-w-7xl mx-auto">
              <h2 className="text-5xl font-serif font-light mb-24 italic">Usability Testing</h2>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
                 <div className="lg:col-span-8 flex flex-col gap-12">
                    <div className="border-l border-white/10 pl-10 py-4">
                       <h4 className="text-label mb-4 text-primary">Key Outcomes</h4>
                       <p className="text-xl font-serif italic text-white/50 leading-relaxed">80% of testers reported a deeper emotional connection to Suzhou's history after engaging with the interactive bridge narrative. Average session duration increased by 150% compared to static guidebooks.</p>
                    </div>
                    <div className="border-l border-white/10 pl-10 py-4">
                       <h4 className="text-label mb-4 text-primary">Challenge</h4>
                       <p className="text-white/40 text-sm leading-loose italic">Handling complex architectural data without overwhelming first-time visitors. The 'Receding UI' strategy was developed as a direct response to feedback regarding visual clutter.</p>
                    </div>
                 </div>
                 <div className="lg:col-span-4 p-12 border border-white/10 bg-white/[0.01]">
                    <p className="text-label mb-8 tracking-[0.4em]">FEEDBACK LOOP</p>
                    <div className="flex items-center gap-4 mb-6">
                       <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                       <p className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-bold">Refined Navigation</p>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                       <p className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-bold">Ambient Depth Mode</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Final Reflection */}
        <section className="py-40 p-8 md:p-16 lg:p-32 bg-surface-lowest border-t border-white/5">
           <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
              <p className="text-label mb-8 tracking-[0.8em] text-primary">EPILOGUE</p>
              <h2 className="text-7xl font-serif font-light italic mb-12">Final Reflection</h2>
              <p className="text-white/40 text-2xl font-light leading-relaxed italic max-w-4xl">
                 Designing for heritage requires a fine balance. Technology should never overshadow the artifact itself, but rather act as a lens to reveal its hidden narratives. This project taught us the importance of subtle, intentional design—understanding that the user's focus is the greatest asset we can curate. Our bridge stands not only in stone but as a digital testament to the enduring power of historical storytelling.
              </p>
           </div>
        </section>

        {/* Team Section - RESTORED */}
        <section id="team" className="py-40 p-8 md:p-16 lg:p-32 border-t border-white/10 bg-surface">
          <div className="max-w-7xl mx-auto">
            <header className="mb-32 text-center">
              <p className="text-label mb-6 tracking-[0.5em]">The Human Element</p>
              <h2 className="text-6xl md:text-7xl font-serif font-light italic">The <span className="opacity-40 tracking-tighter">Collective</span></h2>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { name: "Zhang Wei", role: "UX Researcher", id: "01", bio: "Fusing ethnographic studies with digital interaction to preserve oral histories.", img: IMAGES.person1 },
                { name: "Li Na", role: "Visual Architect", id: "02", bio: "Specializing in atmospheric UI and procedural generation of cultural patterns.", img: IMAGES.person1 },
                { name: "Wang Chen", role: "System Engineer", id: "03", bio: "Architecting high-performance archival retrieval systems and low-latency rendering.", img: IMAGES.person1 },
                { name: "Chen Lu", role: "Curation Lead", id: "04", bio: "Mapping historical semantic data into immersive educational narratives.", img: IMAGES.person1 }
              ].map((member, idx) => (
                <motion.div 
                  key={member.id}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/[0.01] p-12 border border-white/10 hover:border-white/30 transition-all duration-1000 flex flex-col group"
                >
                  <div className="w-32 h-32 rounded-none border border-white/10 overflow-hidden mb-12 p-1 group-hover:border-primary/40 transition-all duration-700 self-center">
                    <div className="w-full h-full bg-neutral-900 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-all duration-1000">
                      <img src={member.img} className="w-full h-full object-cover scale-150 translate-y-4" referrerPolicy="no-referrer" />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-label mb-3 opacity-100 text-primary group-hover:tracking-[0.5em] transition-all duration-700">{member.role}</p>
                    <h3 className="text-3xl font-serif italic text-white/80 mb-6">{member.name}</h3>
                    <p className="text-[10px] uppercase tracking-widest text-white/20 mb-10">CORE_ID: MB-24-{member.id}</p>
                    
                    <div className="h-[1px] bg-white/5 w-full mb-8 group-hover:bg-primary/20 transition-colors" />
                    <p className="text-xs text-white/30 leading-relaxed font-light group-hover:text-white/60 transition-colors italic">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer - RESTORED FULL DETAIL GRID */}
        <footer id="contact" className="p-8 md:p-16 lg:p-32 border-t border-white/10 bg-surface-lowest">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-40 text-center md:text-left">
              <div className="space-y-6">
                <p className="text-label font-bold text-white/40 tracking-[0.6em]">System Concierge</p>
                <div className="space-y-2">
                  <p className="text-sm font-light text-white/60">Priority Access: <span className="text-primary italic">Active</span></p>
                  <p className="text-sm font-light text-white/30 italic">Average Latency: 22ms</p>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-label font-bold text-white/40 tracking-[0.6em]">Node Updates</p>
                <div className="space-y-2">
                   <p className="text-sm font-light text-white/60">4 New Curation Packages</p>
                   <p className="text-sm font-light text-white/30 italic">Source: Suzhou Historical Society</p>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-label font-bold text-white/40 tracking-[0.6em]">Meteorology</p>
                <div className="space-y-2">
                   <p className="text-sm font-light text-white/60">Suzhou: 18°C Muted Rain</p>
                   <p className="text-sm font-light text-white/30 italic">Humidity: 84%</p>
                </div>
              </div>
              <div className="flex md:justify-end">
                <div className="text-center md:text-right space-y-6">
                  <p className="text-label font-bold text-white/40 tracking-[0.6em]">Inquiry Channel</p>
                  <a href="mailto:curation@maplebridge.com" className="text-xl italic text-white/80 hover:text-primary transition-all duration-500 block underline underline-offset-[12px] decoration-white/10 hover:decoration-primary/40">curation@maplebridge.com</a>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center pt-24 border-t border-white/5 gap-12">
              <div className="text-3xl font-serif italic font-light tracking-tighter opacity-100 text-gradient">Maple Bridge</div>
              <div className="flex gap-20 text-[10px] uppercase tracking-[0.5em] font-bold text-white/10">
                {["LinkedIn", "Instagram", "Dribbble", "Behance"].map(link => (
                  <a key={link} href="#" className="hover:text-white transition-all cursor-pointer">/ {link}</a>
                ))}
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/5">© 2024 CULTURAL HERITAGE PRESERVATION PROJECT.</div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
