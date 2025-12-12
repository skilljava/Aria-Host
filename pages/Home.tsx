import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Server, Shield, Zap, Globe, Cpu, Clock, Check, X, ChevronDown, User, Activity, Database, Cloud } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ANIMATION_URLS, MOCK_PRODUCTS, BLOG_POSTS, TESTIMONIALS, FAQS, DATACENTERS } from '../constants';
import LottiePlayer from '../components/LottiePlayer';
import ProductCard from '../components/ProductCard';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useGSAP(() => {
    // 1. Hero Section Animation (On Load)
    const heroTl = gsap.timeline();
    
    heroTl.from('.hero-text', {
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: 'power3.out',
    })
    .from('.hero-visual', {
        scale: 0.9,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
    }, "-=1.0");

    // 2. Section Headers (Scroll Triggered)
    gsap.utils.toArray('.section-header').forEach((header: any) => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            y: 30,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // 3. Services Grid (Specific Requirement: Staggered fade-in + upward movement)
    gsap.set('.service-card', { autoAlpha: 0, y: 80 });
    ScrollTrigger.batch('.service-card', {
        start: 'top 85%',
        onEnter: (batch) => {
            gsap.to(batch, {
                autoAlpha: 1,
                y: 0,
                stagger: 0.15, // Staggered delay
                duration: 0.8,
                ease: 'back.out(1.2)'
            });
        }
    });
    
    // 4. Parallax Effect for "Why Us" Background
    gsap.to('.why-us-bg-1', {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
            trigger: '.feature-section',
            start: "top bottom", 
            end: "bottom top",
            scrub: true
        }
    });

     // Feature Content Animation
    const featureTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.feature-section',
            start: 'top 75%',
        }
    });
    featureTl.from('.feature-visual', { 
        x: -50, 
        opacity: 0, 
        duration: 1.2, 
        ease: 'power3.out' 
    })
    .from('.feature-content-item', { 
        x: 30, 
        opacity: 0, 
        duration: 0.8, 
        stagger: 0.1,
        ease: 'power3.out' 
    }, "-=0.8");

    // Best Sellers Grid
    gsap.from('.best-seller-card', {
      scrollTrigger: { trigger: '.best-sellers-section', start: 'top 80%' },
      y: 50, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out'
    });

    // Comparison Table
    gsap.from('.comparison-table', {
       scrollTrigger: { trigger: '.comparison-section', start: 'top 80%' },
       y: 40, opacity: 0, duration: 1, ease: 'power3.out'
    });
    
    // Status Chart Animation (Smooth Scroll Scrub)
    gsap.fromTo('.uptime-chart-visual', 
      { y: 100, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: '.uptime-chart-visual',
          start: 'top 95%',
          end: 'bottom 60%',
          scrub: 1, // Smooth scrub effect
        }
      }
    );

    // Blog Posts
    gsap.from('.blog-card', {
       scrollTrigger: { trigger: '.blog-section', start: 'top 80%' },
       y: 40, opacity: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out'
    });

    // Testimonials
    gsap.from('.testimonial-card', {
       scrollTrigger: { trigger: '.testimonials-section', start: 'top 85%' },
       scale: 0.9, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'back.out(1.5)'
    });

     // Datacenter Brands
     gsap.from('.brand-item', {
        scrollTrigger: { trigger: '.brands-section', start: 'top 90%' },
        y: 20, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out'
     });

    // CTA
     gsap.from('.cta-content', {
        scrollTrigger: { trigger: '.cta-section', start: 'top 70%' },
        scale: 0.95, opacity: 0, duration: 0.8, ease: 'power2.out'
     });

  }, { scope: containerRef });

  const services = [
    { title: 'سرور مجازی (VPS)', icon: <Server size={32} />, desc: 'منابع اختصاصی با عملکرد بالا', link: '/vps', color: 'from-blue-500 to-indigo-600' },
    { title: 'سرور گیم', icon: <Cpu size={32} />, desc: 'پینگ پایین و آنتی دیداس', link: '/game', color: 'from-purple-500 to-pink-600' },
    { title: 'میزبانی ابری', icon: <Globe size={32} />, desc: 'مقیاس‌پذیری آنی و امنیت', link: '/cloud', color: 'from-orange-500 to-amber-600' },
    { title: 'سرور اختصاصی', icon: <Shield size={32} />, desc: 'قدرت مطلق سخت‌افزاری', link: '/dedicated', color: 'from-emerald-500 to-teal-600' },
  ];

  const bestSellers = MOCK_PRODUCTS.filter(p => p.isBestSeller).slice(0, 6);

  return (
    <div ref={containerRef} className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 pt-20 lg:pt-0">
        {/* Decorative Blobs */}
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }} />

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10 text-center lg:text-right order-2 lg:order-1">
            <div className="hero-text inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 font-bold text-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
              </span>
              نسل جدید میزبانی وب
            </div>
            <h1 className="hero-text text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight text-glow-white">
              سرعتی فراتر از <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-orange-400 to-amber-300 drop-shadow-lg text-glow">تصور شما</span>
            </h1>
            <p className="hero-text text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              با آریاهاست، قدرت، امنیت و سرعت را تجربه کنید. زیرساخت‌های ابری مدرن برای کسب‌وکارهایی که به کیفیت اهمیت می‌دهند.
            </p>
            <div className="hero-text flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link to="/vps" className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all transform hover:-translate-y-1 flex items-center gap-2 interactive">
                شروع کنید <Zap size={20} />
              </Link>
              <Link to="/contact" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-700 transition-all flex items-center gap-2 interactive">
                مشاوره رایگان
              </Link>
            </div>
          </div>
          
          <div className="hero-visual relative z-10 flex justify-center order-1 lg:order-2">
            <div className="w-full max-w-xl aspect-square relative flex items-center justify-center">
                <LottiePlayer animationData={ANIMATION_URLS.hero} className="w-full h-full drop-shadow-[0_0_50px_rgba(249,115,22,0.2)]" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (Updated Animations) */}
      <section className="py-24 bg-slate-900/50 relative services-grid">
        <div className="container mx-auto px-6">
          <div className="section-header text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4 text-glow-white">خدمات آریاهاست</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Link 
                key={idx} 
                to={service.link}
                className={`service-card group p-8 rounded-3xl bg-slate-800 border border-slate-700 hover:border-slate-500 transition-all relative overflow-hidden interactive shadow-xl opacity-0 invisible`}
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`} />
                <div className="mb-6 p-4 rounded-2xl bg-slate-900/50 w-fit text-white group-hover:scale-110 transition-transform duration-300 border border-slate-700">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm mb-6">{service.desc}</p>
                <div className="flex items-center text-orange-400 text-sm font-bold group-hover:gap-2 transition-all">
                  مشاهده پلن‌ها <ArrowLeft size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

       {/* Best Sellers Section */}
      <section className="py-24 relative best-sellers-section">
          <div className="container mx-auto px-6">
             <div className="section-header text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-4 text-glow-white">پرفروش‌ترین سرویس‌ها</h2>
                <p className="text-slate-400">سرویس‌هایی که بیشترین محبوبیت را بین کاربران داشته‌اند</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {bestSellers.map((product, index) => (
                    <div key={product.id} className="best-seller-card h-full">
                         <ProductCard product={product} index={index} />
                    </div>
                ))}
            </div>
          </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-slate-900/30 comparison-section border-y border-white/5">
         <div className="container mx-auto px-6">
            <div className="section-header text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-4 text-glow-white">مقایسه سرویس‌ها</h2>
                <p className="text-slate-400">کدام سرویس برای شما مناسب‌تر است؟</p>
            </div>
            
            <div className="comparison-table overflow-x-auto rounded-3xl border border-slate-700 shadow-2xl bg-slate-800/50 backdrop-blur-sm">
                <table className="w-full text-right text-slate-300">
                    <thead className="bg-slate-900/80 text-white font-bold">
                        <tr>
                            <th className="p-6">ویژگی‌ها</th>
                            <th className="p-6 text-center text-orange-400"><div className="flex flex-col items-center gap-2"><Server /> VPS</div></th>
                            <th className="p-6 text-center text-purple-400"><div className="flex flex-col items-center gap-2"><Cpu /> Game Server</div></th>
                            <th className="p-6 text-center text-blue-400"><div className="flex flex-col items-center gap-2"><Cloud /> Cloud</div></th>
                            <th className="p-6 text-center text-green-400"><div className="flex flex-col items-center gap-2"><Shield /> Dedicated</div></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700">
                        {[
                            { label: 'منابع سخت‌افزاری', vps: 'اختصاصی', game: 'اختصاصی + توربو', cloud: 'شناور', ded: 'کامل فیزیکی' },
                            { label: 'دسترسی روت/ادمین', vps: <Check className="text-green-500 mx-auto"/>, game: 'محدود/کامل', cloud: <Check className="text-green-500 mx-auto"/>, ded: <Check className="text-green-500 mx-auto"/> },
                            { label: 'آنتی دیداس', vps: 'لایه ۳ و ۴', game: 'گیمینگ تخصصی', cloud: 'سخت‌افزاری', ded: 'پایه' },
                            { label: 'مقیاس‌پذیری', vps: 'آنی', game: 'نیاز به ریستارت', cloud: 'بدون قطعی', ded: 'زمان‌بر' },
                            { label: 'نوع هارد', vps: 'NVMe', game: 'NVMe Gen4', cloud: 'Ceph Storage', ded: 'NVMe / HDD' },
                            { label: 'شروع قیمت', vps: '۱۹۹,۰۰۰ ت', game: '۲۴۹,۰۰۰ ت', cloud: 'ساعتی / ماهانه', ded: '۲,۵۰۰,۰۰۰ ت' },
                        ].map((row, idx) => (
                            <tr key={idx} className="hover:bg-white/5 transition-colors">
                                <td className="p-4 font-bold text-white bg-slate-900/30">{row.label}</td>
                                <td className="p-4 text-center">{row.vps}</td>
                                <td className="p-4 text-center">{row.game}</td>
                                <td className="p-4 text-center">{row.cloud}</td>
                                <td className="p-4 text-center">{row.ded}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
         </div>
      </section>

      {/* Why Us (Updated with Parallax) */}
      <section className="feature-section py-24 px-6 relative overflow-hidden">
        {/* Parallax Background */}
        <div className="why-us-bg-1 absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none animate-pulse-slow"></div>
        
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
             <div className="feature-visual order-2 lg:order-1 flex justify-center">
                 <div className="w-full max-w-lg aspect-square relative">
                      <LottiePlayer animationData={ANIMATION_URLS.whyUs} className="w-full h-full drop-shadow-[0_0_50px_rgba(249,115,22,0.15)]" />
                 </div>
             </div>
             
             <div className="order-1 lg:order-2 text-right relative">
                <div className="relative z-10">
                    <div className="feature-content-item inline-block px-3 py-1 bg-slate-800 rounded-full border border-slate-700 text-slate-400 text-sm mb-4">چرا ما؟</div>
                    <h2 className="feature-content-item text-3xl lg:text-5xl font-black text-white mb-6 text-glow-white">چرا آریاهاست را انتخاب کنید؟</h2>
                    <p className="feature-content-item text-slate-400 leading-loose mb-8 text-lg">
                        ما فقط یک شرکت هاستینگ نیستیم؛ ما شریک تجاری شما در دنیای دیجیتال هستیم. با استفاده از پیشرفته‌ترین تکنولوژی‌های روز دنیا و زیرساخت‌های قدرتمند، اطمینان حاصل می‌کنیم که وب‌سایت شما همیشه سریع، امن و در دسترس باشد.
                    </p>
                    <div className="relative">
                        <ul className="space-y-4 text-slate-300">
                            {[
                                "پشتیبانی فنی ۲۴/۷ واقعی",
                                "بک‌آپ گیری روزانه و خودکار",
                                "تحویل آنی سرویس پس از پرداخت",
                                "امنیت چندلایه و ضد DDoS"
                            ].map((item, idx) => (
                                <li key={idx} className="feature-content-item flex items-center gap-3">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_10px_orange]"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
             </div>
        </div>
      </section>

      {/* Status & Uptime */}
      <section className="py-20 bg-slate-900 border-t border-white/5">
          <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-gradient-to-r from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700">
                  <div className="flex-1">
                      <h2 className="text-3xl font-black text-white mb-4">وضعیت پایداری شبکه</h2>
                      <p className="text-slate-400 mb-6">شبکه ما با مانیتورینگ ۲۴ ساعته، پایداری ۹۹.۹٪ را برای سرویس‌های شما تضمین می‌کند. آرامش خاطر شما، اولویت ماست.</p>
                      <div className="flex items-center gap-6">
                          <div>
                              <span className="block text-3xl font-bold text-green-500">99.99%</span>
                              <span className="text-sm text-slate-500">آپتایم ماهانه</span>
                          </div>
                          <div className="h-10 w-px bg-slate-700"></div>
                          <div>
                              <span className="block text-3xl font-bold text-blue-500">20ms</span>
                              <span className="text-sm text-slate-500">میانگین پینگ</span>
                          </div>
                      </div>
                  </div>
                  <div className="uptime-chart-visual flex-1 w-full max-w-sm h-64">
                       <LottiePlayer animationData={ANIMATION_URLS.uptimeChart} className="w-full h-full" />
                  </div>
              </div>
          </div>
      </section>

      {/* Brands / Datacenters */}
      <section className="py-16 brands-section overflow-hidden">
         <div className="container mx-auto px-6 text-center mb-8">
             <span className="text-slate-500 text-sm font-bold uppercase tracking-widest">همکاری با بهترین دیتاسنترهای جهان</span>
         </div>
         <div className="flex justify-center flex-wrap gap-8 md:gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
             {DATACENTERS.map((dc, idx) => (
                 <div key={idx} className="brand-item flex flex-col items-center gap-2 group cursor-default">
                      <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700 group-hover:border-orange-500/50 transition-colors">
                         <span className="text-2xl">{dc.flag}</span>
                      </div>
                      <span className="text-slate-300 font-bold group-hover:text-white transition-colors">{dc.name}</span>
                 </div>
             ))}
         </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 testimonials-section bg-slate-900/30">
          <div className="container mx-auto px-6">
            <div className="section-header text-center mb-16">
                <h2 className="text-3xl font-black text-white mb-4">مشتریان چه می‌گویند؟</h2>
                <p className="text-slate-400">نظرات واقعی کاربران آریاهاست</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {TESTIMONIALS.map((t, idx) => (
                    <div key={idx} className="testimonial-card p-8 bg-slate-800 rounded-3xl border border-slate-700 relative">
                        <div className="absolute -top-4 right-8 text-6xl text-orange-500 opacity-30 font-serif">"</div>
                        <p className="text-slate-300 leading-relaxed mb-6 relative z-10">{t.text}</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                {t.name.charAt(0)}
                            </div>
                            <div>
                                <h4 className="text-white font-bold">{t.name}</h4>
                                <span className="text-xs text-orange-400">{t.role}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
          </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 blog-section" id="blog">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
                <div>
                     <h2 className="text-3xl font-black text-white mb-2">آخرین مقالات</h2>
                     <p className="text-slate-400">دانش خود را به‌روز نگه دارید</p>
                </div>
                <Link to="/blog" className="hidden md:flex items-center gap-2 text-orange-400 hover:text-orange-300 font-bold">مشاهده همه <ArrowLeft size={18}/></Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {BLOG_POSTS.map((post) => (
                    <Link key={post.id} to={`/blog/${post.id}`} className="blog-card group block">
                        <div className="rounded-2xl overflow-hidden mb-4 relative aspect-video">
                            <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors"></div>
                            <img src={post.image} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="flex items-center gap-2 text-xs text-orange-500 mb-2">
                            <Clock size={12} />
                            <span>{post.date}</span>
                        </div>
                        <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors leading-relaxed mb-2">{post.title}</h3>
                        <p className="text-sm text-slate-500 line-clamp-2">{post.desc}</p>
                    </Link>
                ))}
            </div>
          </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-900 border-t border-white/5">
           <div className="container mx-auto px-6 max-w-4xl">
                <div className="section-header text-center mb-12">
                    <h2 className="text-3xl font-black text-white mb-4">سوالات متداول</h2>
                    <p className="text-slate-400">پاسخ به پرسش‌های شما</p>
                </div>
                <div className="space-y-4">
                    {FAQS.map((faq, idx) => (
                        <div key={idx} className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 transition-all hover:border-slate-600">
                            <button 
                                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-right focus:outline-none"
                            >
                                <span className="text-lg font-bold text-slate-200">{faq.q}</span>
                                <ChevronDown className={`text-orange-500 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`px-6 text-slate-400 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                                {faq.a}
                            </div>
                        </div>
                    ))}
                </div>
           </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 cta-section">
          <div className="container mx-auto">
              <div className="cta-content relative rounded-[40px] bg-gradient-to-r from-orange-600 to-amber-600 p-12 md:p-20 overflow-hidden text-center md:text-right shadow-2xl shadow-orange-600/20">
                   {/* Background Elements */}
                   <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                   <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
                   
                   <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                       <div>
                           <h2 className="text-4xl md:text-5xl font-black text-white mb-6">همین حالا سرویس خودتو بساز!</h2>
                           <p className="text-white/90 text-xl mb-10 leading-relaxed">
                               به جمع هزاران کاربر راضی آریاهاست بپیوندید. تحویل آنی، گارانتی بازگشت وجه و پشتیبانی ۲۴ ساعته منتظر شماست.
                           </p>
                           <Link to="/vps" className="inline-block px-10 py-4 bg-white text-orange-600 font-black text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:bg-slate-100 hover:scale-105 transition-all duration-300">
                               شروع کنید 🚀
                           </Link>
                       </div>
                       <div className="flex justify-center md:justify-end">
                           <div className="w-64 h-64 md:w-80 md:h-80 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 p-8 shadow-inner">
                                <LottiePlayer animationData={ANIMATION_URLS.serverRack} className="w-full h-full" />
                           </div>
                       </div>
                   </div>
              </div>
          </div>
      </section>
    </div>
  );
};

export default Home;