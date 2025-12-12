import React, { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../constants';
import { ArrowRight, CheckCircle, ShoppingCart } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const containerRef = useRef<HTMLDivElement>(null);
  const product = MOCK_PRODUCTS.find(p => p.id === id);

  useGSAP(() => {
    if (!product) return;
    
    const tl = gsap.timeline();
    
    // Back button
    tl.from('.pd-back', { x: -20, opacity: 0, duration: 0.5, ease: 'power2.out' })
    // Image scale in
      .from('.pd-image', { scale: 0.95, opacity: 0, duration: 0.8, ease: 'power3.out' }, "-=0.3")
    // Content fade in
      .from('.pd-content-item', { 
        y: 20, 
        opacity: 0, 
        duration: 0.6, 
        stagger: 0.1,
        ease: 'power2.out' 
      }, "-=0.5");
      
  }, { scope: containerRef, dependencies: [product] });

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl text-white font-bold mb-4">محصول مورد نظر یافت نشد</h2>
        <Link to="/" className="text-orange-500 hover:underline">بازگشت به صفحه اصلی</Link>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="py-12 container mx-auto px-6">
      <Link to={`/${product.category}`} className="pd-back inline-flex items-center gap-2 text-slate-400 hover:text-orange-400 mb-8 transition">
        <ArrowRight size={20} />
        بازگشت به لیست
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Image & Highlights */}
        <div className="space-y-6">
          <div className="pd-image rounded-3xl overflow-hidden border border-slate-700 bg-slate-800 shadow-2xl relative">
             <img src={product.image} alt={product.title} className="w-full h-auto object-cover" />
             <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-900 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {['پردازنده', 'رم', 'فضای ذخیره‌سازی', 'ترافیک'].map((label, i) => (
                <div key={i} className="pd-content-item p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                    <span className="block text-slate-400 text-xs mb-1">{label}</span>
                    <span className="block text-white font-bold">{product.specs[i] || 'نامحدود'}</span>
                </div>
            ))}
          </div>
        </div>

        {/* Right Column: Info & Purchase */}
        <div className="flex flex-col justify-center">
          <h1 className="pd-content-item text-4xl font-black text-white mb-4 text-glow-white">{product.title}</h1>
          <p className="pd-content-item text-xl text-slate-400 leading-relaxed mb-8">{product.description}</p>
          
          <div className="pd-content-item bg-slate-800/50 p-6 rounded-2xl border border-slate-700 mb-8">
            <h3 className="text-white font-bold mb-4 border-b border-slate-700 pb-2">ویژگی‌های تکمیلی</h3>
            <ul className="space-y-3">
               {[1,2,3,4].map((i) => (
                   <li key={i} className="flex items-center gap-3 text-slate-300">
                       <CheckCircle size={18} className="text-green-500" />
                       <span>پشتیبانی فنی اختصاصی سطح {i}</span>
                   </li>
               ))}
            </ul>
          </div>

          <div className="pd-content-item flex flex-col sm:flex-row items-center gap-6 mt-auto">
             <div className="text-center sm:text-right">
                <span className="block text-slate-500 text-sm">قیمت ماهانه</span>
                <span className="block text-3xl font-bold text-orange-400">{product.price}</span>
             </div>
             <button className="w-full sm:w-auto flex-1 bg-gradient-to-r from-orange-600 to-amber-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] transition-all flex items-center justify-center gap-3 interactive">
                <ShoppingCart />
                سفارش دهید
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;