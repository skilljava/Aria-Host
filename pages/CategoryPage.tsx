import React, { useRef } from 'react';
import { Product, CategoryId } from '../types';
import { MOCK_PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Server, Cloud, Gamepad2, Database, Globe } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  categoryId: CategoryId;
  title: string;
  subtitle: string;
}

const CategoryPage: React.FC<Props> = ({ categoryId, title, subtitle }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const products = MOCK_PRODUCTS.filter(p => p.category === categoryId);

  const getIcon = () => {
    switch(categoryId) {
        case 'game': return <Gamepad2 size={48} className="text-orange-500" />;
        case 'cloud': return <Cloud size={48} className="text-orange-500" />;
        case 'dedicated': return <Database size={48} className="text-orange-500" />;
        case 'domain': return <Globe size={48} className="text-orange-500" />;
        default: return <Server size={48} className="text-orange-500" />;
    }
  }

  useGSAP(() => {
    // Header Animation (On Load)
    gsap.from('.cat-header-content', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Bottom Banner Animation (On Scroll)
    gsap.from('.cat-banner', {
        scrollTrigger: {
            trigger: '.cat-banner',
            start: 'top 85%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen pb-24">
      {/* Header */}
      <div className="relative bg-slate-900 py-20 overflow-hidden">
         <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
         <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
            <div className="cat-header-content mb-6 p-4 bg-slate-800 rounded-full border border-slate-700 shadow-[0_0_30px_rgba(249,115,22,0.15)] animate-bounce">
                {getIcon()}
            </div>
            <h1 className="cat-header-content text-4xl md:text-5xl font-black text-white mb-4 text-glow-white">{title}</h1>
            <p className="cat-header-content text-xl text-slate-400 max-w-2xl">{subtitle}</p>
         </div>
      </div>

      {/* Filter/Grid Area */}
      <div className="container mx-auto px-6 mt-12">
        {products.length === 0 ? (
           <div className="cat-header-content text-center py-20 border border-dashed border-slate-700 rounded-3xl opacity-0">
               <p className="text-slate-500 text-lg">محصولی در این دسته بندی یافت نشد.</p>
           </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
            ))}
            </div>
        )}
      </div>
      
      {/* Additional Info Section */}
      <div className="container mx-auto px-6 mt-24">
         <div className="cat-banner bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-8 opacity-0">
            <div>
                <h3 className="text-2xl font-bold text-white mb-2">نیاز به مشاوره دارید؟</h3>
                <p className="text-slate-400">تیم فنی ما آماده پاسخگویی به سوالات شما برای انتخاب بهترین سرویس است.</p>
            </div>
            <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold transition shadow-lg shadow-orange-500/20 interactive">
                ارسال تیکت
            </button>
         </div>
      </div>
    </div>
  );
};

export default CategoryPage;