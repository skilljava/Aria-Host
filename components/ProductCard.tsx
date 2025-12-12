import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { ArrowLeft, Cpu, HardDrive, Zap, Star, Server, Cloud, Gamepad2, Shield, Activity, Signal } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface Props {
  product: Product;
  index: number;
}

const ProductCard: React.FC<Props> = ({ product, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  // Helper to choose a relevant icon based on category
  const getIcon = () => {
     if (product.category === 'game') return <Gamepad2 size={28} className="text-white" />;
     if (product.category === 'cloud') return <Cloud size={28} className="text-white" />;
     if (product.category === 'dedicated') return <Shield size={28} className="text-white" />;
     return <Server size={28} className="text-white" />;
  };

  useGSAP(() => {
    // 1. Entrance Animation
    gsap.from(cardRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      delay: index * 0.05,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      },
    });

    // 2. Hover Interactions
    const card = cardRef.current;
    if (!card) return;

    const onEnter = () => {
        gsap.to(card, {
            y: -8,
            duration: 0.4,
            ease: 'back.out(1.7)'
        });
        
        // Enhance border glow
        gsap.to(card.querySelector('.border-glow'), {
            opacity: 1,
            duration: 0.3
        });

        // Icon bounce
        gsap.to(card.querySelector('.card-icon-container'), {
            scale: 1.1,
            rotate: 5,
            duration: 0.4,
            ease: 'back.out(2)'
        });
    };

    const onLeave = () => {
        gsap.to(card, {
            y: 0,
            duration: 0.4,
            ease: 'power2.out'
        });

        gsap.to(card.querySelector('.border-glow'), {
            opacity: 0,
            duration: 0.3
        });

        gsap.to(card.querySelector('.card-icon-container'), {
            scale: 1,
            rotate: 0,
            duration: 0.4,
            ease: 'power2.out'
        });
    };

    card.addEventListener('mouseenter', onEnter);
    card.addEventListener('mouseleave', onLeave);

    return () => {
        card.removeEventListener('mouseenter', onEnter);
        card.removeEventListener('mouseleave', onLeave);
    };
  }, { scope: cardRef });

  return (
    <div 
      ref={cardRef}
      className="group relative bg-slate-900/80 backdrop-blur-xl rounded-[24px] overflow-hidden flex flex-col h-full border border-white/5 transition-all duration-300"
    >
      {/* Dynamic Border Glow */}
      <div className="border-glow absolute inset-0 rounded-[24px] border-2 border-orange-500/50 opacity-0 pointer-events-none transition-opacity z-20 shadow-[0_0_20px_rgba(249,115,22,0.2)]"></div>

      {/* Top Decoration Bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-slate-800 via-orange-500 to-slate-800 opacity-80"></div>
      
      {/* Main Content Padding */}
      <div className="p-6 flex flex-col flex-grow relative z-10">
          
          {/* Header Row */}
          <div className="flex justify-between items-start mb-6">
              <div className="card-icon-container w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center shadow-inner border border-white/10 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-amber-600 transition-colors duration-300">
                  {getIcon()}
              </div>
              <div className="flex flex-col items-end gap-2">
                 {product.isBestSeller && (
                    <span className="px-3 py-1 bg-amber-500/10 text-amber-500 text-[10px] font-bold uppercase tracking-wider rounded-full border border-amber-500/20 flex items-center gap-1">
                        <Star size={10} fill="currentColor" /> پرفروش
                    </span>
                 )}
                 <div className="flex items-center gap-2">
                    {product.flag && <span className="text-xl filter grayscale group-hover:grayscale-0 transition-all">{product.flag}</span>}
                    <div className="flex items-center gap-1.5 px-2 py-1 bg-slate-800 rounded-lg border border-slate-700">
                         <Signal size={12} className="text-green-500" />
                         <span className="text-[10px] text-slate-400 font-mono">100% UP</span>
                    </div>
                 </div>
              </div>
          </div>

          {/* Title & Desc */}
          <div className="mb-6">
              <h3 className="text-xl font-black text-white mb-2 group-hover:text-orange-400 transition-colors leading-tight">{product.title}</h3>
              <p className="text-slate-500 text-xs font-medium line-clamp-2">{product.description}</p>
          </div>

          {/* Tech Specs Grid */}
          <div className="grid grid-cols-1 gap-2 mb-6">
              {product.specs.slice(0, 3).map((spec, i) => (
                  <div key={i} className="flex items-center justify-between p-2.5 bg-slate-800/40 rounded-xl border border-white/5 group-hover:border-white/10 transition-colors">
                      <div className="flex items-center gap-3">
                          {i === 0 ? <Cpu size={16} className="text-orange-500/80" /> : 
                           i === 1 ? <HardDrive size={16} className="text-blue-500/80" /> : 
                           <Activity size={16} className="text-green-500/80" />}
                          <span className="text-slate-300 text-xs font-bold dir-ltr tracking-wide">{spec}</span>
                      </div>
                  </div>
              ))}
          </div>

          {/* Spacer */}
          <div className="flex-grow"></div>

          {/* Footer Price & Action */}
          <div className="pt-5 border-t border-white/5">
              <div className="flex justify-between items-end mb-4">
                 <div className="flex flex-col">
                     <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">شروع قیمت</span>
                     <div className="flex items-baseline gap-1">
                         <span className="text-2xl font-black text-white font-mono tracking-tight">{product.price.split(' ')[0]}</span>
                         <span className="text-[10px] text-slate-500">تومان</span>
                     </div>
                 </div>
              </div>
              
              <Link 
                to={`/product/${product.id}`}
                className="w-full block bg-slate-800 hover:bg-white text-slate-300 hover:text-slate-900 py-3.5 rounded-xl font-bold text-center transition-all duration-300 relative overflow-hidden group/btn"
              >
                  <span className="relative z-10 flex items-center justify-center gap-2 text-sm">
                      مشاهده جزئیات <ArrowLeft size={16} className="transition-transform group-hover/btn:-translate-x-1" />
                  </span>
              </Link>
          </div>
      </div>
    </div>
  );
};

export default ProductCard;