import React from 'react';
import Lottie from 'lottie-react';
import { Box, RefreshCw } from 'lucide-react';

interface Props {
  animationData: any; // URL or JSON object
  className?: string;
}

const LottiePlayer: React.FC<Props> = ({ animationData, className }) => {
  const [animationJson, setAnimationJson] = React.useState<any>(null);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  // 1. Direct handling for .lottie files using the web component
  // This avoids parsing errors since .lottie is a zip format, not text/json
  if (typeof animationData === 'string' && animationData.includes('.lottie')) {
    // Cast to any to bypass IntrinsicElements check
    const DotLottiePlayer = 'dotlottie-player' as any;
    
    return (
        <div className={className}>
             <DotLottiePlayer
                src={animationData}
                background="transparent"
                speed="1"
                loop
                autoplay
                style={{ width: '100%', height: '100%' }}
            ></DotLottiePlayer>
        </div>
    );
  }

  // 2. Standard JSON handling
  React.useEffect(() => {
    let isMounted = true;
    setError(false);
    setLoading(true);
    setAnimationJson(null);

    if (typeof animationData === 'string' && animationData.startsWith('http')) {
      // Legacy JSON file handling
      fetch(animationData, { mode: 'cors' })
        .then(async res => {
          if (!res.ok) throw new Error(`HTTP Status ${res.status}`);
          const text = await res.text();
          try {
            return JSON.parse(text);
          } catch (e) {
            throw new Error("Response was not valid JSON");
          }
        })
        .then(data => {
          if (isMounted) {
            setAnimationJson(data);
            setLoading(false);
          }
        })
        .catch(err => {
          console.warn("Lottie Load Error:", err);
          if (isMounted) {
            setError(true);
            setLoading(false);
          }
        });
    } else if (animationData) {
      // If it's already an object
      setAnimationJson(animationData);
      setLoading(false);
    } else {
        setLoading(false);
    }
    
    return () => { isMounted = false; };
  }, [animationData]);

  // Clean fallback if loading fails so the site doesn't look broken
  if (error) return (
      <div className={`flex flex-col items-center justify-center bg-slate-800/20 border-2 border-dashed border-slate-700/30 rounded-3xl ${className}`}>
          <Box className="text-slate-600 mb-1" size={24} />
          <span className="text-[10px] text-slate-600 font-mono">Animation</span>
      </div>
  );
  
  if (loading || !animationJson) return (
      <div className={`flex items-center justify-center bg-slate-800/10 rounded-3xl ${className}`}>
          <RefreshCw className="text-slate-700 animate-spin" size={20} />
      </div>
  );

  return (
    <Lottie 
      animationData={animationJson} 
      loop={true} 
      className={className} 
    />
  );
};

export default LottiePlayer;