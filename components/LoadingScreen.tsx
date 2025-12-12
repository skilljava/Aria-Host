import React from 'react';
import { ANIMATION_URLS } from '../constants';
import LottiePlayer from './LottiePlayer';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center">
      <div className="w-64 h-64 md:w-96 md:h-96">
        <LottiePlayer animationData={ANIMATION_URLS.loading} className="w-full h-full" />
      </div>
      <h2 className="mt-4 text-2xl font-black text-white tracking-widest text-glow-white animate-pulse">
        ARIA<span className="text-orange-500 text-glow">HOST</span>
      </h2>
      <p className="text-slate-500 mt-2 text-sm">در حال بارگذاری منابع...</p>
    </div>
  );
};

export default LoadingScreen;