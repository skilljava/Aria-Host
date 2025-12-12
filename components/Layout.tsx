import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Server, Cloud, Shield, Phone, Gamepad2, MoreHorizontal, ChevronDown, Zap, User, LogIn, Mail } from 'lucide-react';
import { LOGO_URL, NAV_LINKS, SERVICE_MENU_ITEMS } from '../constants';
import CustomCursor from './CustomCursor';
import AIChat from './AIChat';
import LoadingScreen from './LoadingScreen';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initial load simulation - Random 5 to 10 seconds
  useEffect(() => {
    const randomTime = Math.floor(Math.random() * (10000 - 5000 + 1) + 5000);
    const timer = setTimeout(() => setLoading(false), randomTime);
    return () => clearTimeout(timer);
  }, []);

  const getIcon = (name: string) => {
      switch(name) {
          case 'server': return <Server size={18} />;
          case 'gamepad': return <Gamepad2 size={18} />;
          case 'cloud': return <Cloud size={18} />;
          case 'shield': return <Shield size={18} />;
          case 'globe': return <Globe size={18} />;
          default: return <MoreHorizontal size={18} />;
      }
  }

  if (loading) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-orange-500 selection:text-white relative">
      <CustomCursor />
      
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Modern Floating Navbar - Refined Glassmorphism */}
      <nav className={`fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-700 ease-out ${scrolled ? 'translate-y-0' : 'translate-y-2'}`}>
        <div className={`
            relative w-full max-w-7xl rounded-2xl 
            transition-all duration-500
            ${scrolled ? 'shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]' : 'shadow-2xl shadow-black/40'}
        `}>
          
          {/* Glass Background Layers - Container with overflow hidden to clip backgrounds but allow dropdowns outside */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
              {/* 1. Blur Layer */}
              <div className={`absolute inset-0 backdrop-blur-2xl transition-all duration-500 ${scrolled ? 'bg-slate-950/85' : 'bg-slate-900/60'}`}></div>
              
              {/* 2. Slow Moving Gradient Background */}
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-slate-800 via-transparent to-slate-900 animate-gradient-xy mix-blend-overlay"></div>
              
              {/* 3. Subtle Gradient Overlay for Depth */}
              <div className={`absolute inset-0 transition-opacity duration-500 ${scrolled ? 'opacity-30' : 'opacity-10'}`}>
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent skew-x-12"></div>
              </div>
    
              {/* 4. Border/Glow Layer */}
              <div className={`absolute inset-0 rounded-2xl border transition-all duration-500 ${scrolled ? 'border-orange-500/20 shadow-[inset_0_0_20px_rgba(245,158,11,0.03)]' : 'border-white/10'}`}></div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 flex items-center justify-between px-6 py-3">
            {/* Right Side: Logo */}
            <Link to="/" className="flex items-center gap-3 group relative z-10">
                <div className="relative">
                    <div className="absolute inset-0 bg-orange-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full duration-500"></div>
                    <img src={LOGO_URL} alt="AriaHost" className="w-10 h-10 object-contain relative z-10 filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
                </div>
                <span className="text-xl font-black text-white tracking-tighter group-hover:text-orange-400 transition-colors hidden sm:block text-glow-white">آریاهاست</span>
            </Link>

            {/* Center: Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 relative z-10 bg-white/5 rounded-full px-2 py-1 border border-white/5 shadow-inner shadow-black/20">
                {NAV_LINKS.map((link) => (
                <div key={link.path} className="relative group">
                    {link.label === 'خدمات' ? (
                        // Services Dropdown
                        <div className="relative group cursor-pointer px-5 py-2">
                            <span className={`text-sm font-bold flex items-center gap-1 transition-colors ${location.pathname.includes(link.path) || location.pathname === '/vps' ? 'text-orange-400' : 'text-slate-300 group-hover:text-white'}`}>
                                {link.label}
                                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                            </span>
                            
                            {/* Dropdown Content */}
                            <div className="absolute top-full right-1/2 translate-x-1/2 pt-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-4 w-64 perspective-[1000px]">
                                <div className="bg-[#0f172a]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden p-2 relative">
                                    <div className="absolute inset-0 bg-orange-500/5 pointer-events-none"></div>
                                    {SERVICE_MENU_ITEMS.map((item, idx) => (
                                        <Link 
                                            key={idx}
                                            to={item.path}
                                            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 hover:text-orange-400 transition-all text-slate-300 text-sm group/item relative overflow-hidden"
                                        >
                                            <div className="absolute left-0 top-0 h-full w-0.5 bg-orange-500 scale-y-0 group-hover/item:scale-y-100 transition-transform origin-top duration-300"></div>
                                            <span className="text-slate-500 group-hover/item:text-orange-500 transition-colors bg-slate-900/50 p-1.5 rounded-lg border border-slate-800">
                                                {getIcon(item.icon)}
                                            </span>
                                            <span className="font-medium">{item.label}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        // Normal Links
                        <Link 
                            to={link.path}
                            className={`block px-5 py-2 text-sm font-bold rounded-full transition-all duration-300 ${location.pathname === link.path ? 'text-orange-400 bg-white/10 shadow-[inset_0_0_10px_rgba(255,255,255,0.05)]' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
                        >
                            {link.label}
                        </Link>
                    )}
                </div>
                ))}
            </div>

            {/* Left Side: Auth Buttons */}
            <div className="hidden lg:flex items-center gap-3 relative z-10">
                <Link to="/login" className="px-5 py-2.5 text-slate-300 font-bold text-sm hover:text-white transition-colors flex items-center gap-2 hover:bg-white/5 rounded-xl border border-transparent hover:border-white/5">
                    <User size={18} />
                    ورود
                </Link>
                <Link to="/register" className="group relative overflow-hidden px-6 py-2.5 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-black rounded-xl hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 interactive flex items-center gap-2 border border-yellow-300/50 text-sm">
                    <span className="relative z-10 flex items-center gap-2">
                        ثبت نام
                        <LogIn size={18} className="fill-slate-900" />
                    </span>
                    <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12"></div>
                </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white interactive p-2 rounded-lg hover:bg-white/10 border border-white/10 relative z-10">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950/98 backdrop-blur-xl flex flex-col pt-32 px-8 lg:hidden animate-in fade-in slide-in-from-top-10 duration-300">
             <div className="space-y-6">
                <Link to="/" onClick={() => setIsMenuOpen(false)} className="block text-2xl font-black text-white border-b border-white/10 pb-4">خانه</Link>
                
                <div className="space-y-4">
                    <span className="text-sm text-orange-500 font-bold uppercase tracking-wider">خدمات ما</span>
                    <div className="grid grid-cols-1 gap-3">
                    {SERVICE_MENU_ITEMS.map((item, idx) => (
                        <Link 
                            key={idx}
                            to={item.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center gap-4 text-slate-300 hover:text-white hover:bg-white/5 p-3 rounded-xl transition-all border border-white/5"
                        >
                             <div className="text-orange-500 bg-orange-500/10 p-2 rounded-lg">{getIcon(item.icon)}</div>
                             <span className="font-bold">{item.label}</span>
                        </Link>
                    ))}
                    </div>
                </div>

                <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block text-2xl font-black text-white border-b border-white/10 pb-4 pt-4">تماس با ما</Link>
                
                <div className="pt-8 grid grid-cols-2 gap-4">
                     <Link to="/login" onClick={() => setIsMenuOpen(false)} className="w-full text-center px-4 py-3 bg-slate-800 text-white font-bold text-lg rounded-2xl hover:bg-slate-700 transition-colors border border-slate-700">
                        ورود
                    </Link>
                     <Link to="/register" onClick={() => setIsMenuOpen(false)} className="w-full text-center px-4 py-3 bg-[#fbbf24] text-slate-900 font-black text-lg rounded-2xl hover:bg-[#f59e0b] transition-colors shadow-lg shadow-orange-500/20">
                        ثبت نام
                    </Link>
                </div>
             </div>
        </div>
      )}

      {/* Main Content */}
      <main className="relative z-10 pt-32 min-h-screen flex flex-col">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-slate-900/60 backdrop-blur-lg border-t border-white/5 pt-16 pb-8 mt-auto">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <img src={LOGO_URL} alt="AriaHost" className="w-10 h-10 object-contain" />
                <span className="text-xl font-black text-white text-glow-white">آریاهاست</span>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                ارائه‌دهنده برترین خدمات میزبانی وب، سرورهای مجازی و اختصاصی با آپتایم ۹۹.۹٪ و پشتیبانی ۲۴ ساعته.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 border-r-4 border-orange-500 pr-3">خدمات ما</h4>
              <ul className="space-y-3 text-slate-400">
                <li><Link to="/vps" className="inline-block hover:text-orange-400 hover:-translate-x-2 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]">سرور مجازی</Link></li>
                <li><Link to="/cloud" className="inline-block hover:text-orange-400 hover:-translate-x-2 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]">میزبانی ابری</Link></li>
                <li><Link to="/game" className="inline-block hover:text-orange-400 hover:-translate-x-2 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]">سرور گیم</Link></li>
                <li><Link to="/dedicated" className="inline-block hover:text-orange-400 hover:-translate-x-2 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]">سرور اختصاصی</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 border-r-4 border-orange-500 pr-3">دسترسی سریع</h4>
              <ul className="space-y-3 text-slate-400">
                <li><Link to="/contact" className="inline-block hover:text-orange-400 hover:-translate-x-2 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]">پشتیبانی</Link></li>
                <li><Link to="/services" className="inline-block hover:text-orange-400 hover:-translate-x-2 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]">قوانین و مقررات</Link></li>
                <li><Link to="/domain" className="inline-block hover:text-orange-400 hover:-translate-x-2 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]">ثبت دامنه</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 border-r-4 border-orange-500 pr-3">ارتباط با ما</h4>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-center gap-2 group"><Phone size={16} className="text-orange-500 group-hover:rotate-12 transition-transform"/> ۰۲۱-۱۲۳۴۵۶۷۸</li>
                <li className="flex items-center gap-2 group">
                  <Mail size={16} className="text-orange-500 group-hover:rotate-12 transition-transform"/> 
                  <a href="mailto:contact@aria-host.ir" className="hover:text-white transition-colors">contact@aria-host.ir</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Trust Symbols Section */}
          <div className="flex flex-col items-center justify-center gap-6 py-8 border-t border-slate-800">
              <div className="flex flex-wrap items-center justify-center gap-8">
                  <a href="https://enamad.ir" target="_blank" rel="noopener noreferrer" className="block w-32 h-32 bg-white rounded-2xl p-4 hover:scale-105 transition-all duration-300 opacity-90 hover:opacity-100 shadow-[0_0_20px_rgba(255,255,255,0.05)] flex items-center justify-center">
                      <img src="https://static.idpay.ir/logo/enamad.png" alt="Enamad" className="max-w-full max-h-full object-contain" />
                  </a>
                  <a href="https://samandehi.ir" target="_blank" rel="noopener noreferrer" className="block w-32 h-32 bg-white rounded-2xl p-4 hover:scale-105 transition-all duration-300 opacity-90 hover:opacity-100 shadow-[0_0_20px_rgba(255,255,255,0.05)] flex items-center justify-center">
                      <img src="https://static.idpay.ir/logo/samandehi.png" alt="Samandehi" className="max-w-full max-h-full object-contain" />
                  </a>
              </div>
              <p className="text-slate-500 text-sm font-medium">نمادهای اعتماد و رسمی سایت آریاهاست</p>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            <p>&copy; 2023 تمام حقوق برای آریاهاست محفوظ است.</p>
          </div>
        </div>
      </footer>

      <AIChat />
    </div>
  );
};

export default Layout;