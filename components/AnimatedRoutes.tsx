import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import CategoryPage from '../pages/CategoryPage';
import ProductDetail from '../pages/ProductDetail';
import PageTransition from './PageTransition';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        
        {/* Categories */}
        <Route path="/vps" element={
          <PageTransition>
            <CategoryPage 
                categoryId="vps" 
                title="سرور مجازی (VPS)" 
                subtitle="سرورهای مجازی با منابع اختصاصی و هارد پرسرعت NVMe" 
            />
          </PageTransition>
        } />
        <Route path="/game" element={
          <PageTransition>
            <CategoryPage 
                categoryId="game" 
                title="سرور گیمینگ" 
                subtitle="مخصوص گیمرهای حرفه‌ای با پینگ پایین و آنتی‌چیت" 
            />
          </PageTransition>
        } />
        <Route path="/cloud" element={
          <PageTransition>
            <CategoryPage 
                categoryId="cloud" 
                title="میزبانی ابری" 
                subtitle="زیرساخت ابری پایدار برای کسب‌وکارهای در حال رشد" 
            />
          </PageTransition>
        } />
         <Route path="/dedicated" element={
          <PageTransition>
            <CategoryPage 
                categoryId="dedicated" 
                title="سرور اختصاصی" 
                subtitle="قدرت پردازشی بالا بدون اشتراک منابع با دیگران" 
            />
          </PageTransition>
        } />
        <Route path="/domain" element={
            <PageTransition>
                <div className="flex items-center justify-center h-[50vh] text-white flex-col gap-4">
                    <h1 className="text-4xl font-bold">ثبت دامنه</h1>
                    <p className="text-slate-400">به زودی...</p>
                </div>
            </PageTransition>
        } />
        <Route path="/services" element={
            <PageTransition>
                 <CategoryPage 
                    categoryId="services" 
                    title="سایر خدمات" 
                    subtitle="خدمات جانبی، لایسنس‌ها و ابزارهای مدیریت سرور" 
                />
            </PageTransition>
        } />
        <Route path="/contact" element={
            <PageTransition>
                <div className="container mx-auto px-6 py-20 text-center">
                    <h1 className="text-4xl font-bold text-white mb-8">تماس با ما</h1>
                    <div className="max-w-md mx-auto bg-slate-800 p-8 rounded-2xl border border-slate-700">
                        <p className="text-slate-300 mb-4">جهت دریافت پشتیبانی یا مشاوره فروش با ما تماس بگیرید.</p>
                        <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold">ارسال تیکت</button>
                    </div>
                </div>
            </PageTransition>
        } />

        {/* Product Detail */}
        <Route path="/product/:id" element={<PageTransition><ProductDetail /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;