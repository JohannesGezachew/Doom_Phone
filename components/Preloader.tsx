import React, { useEffect, useState } from 'react';
import { Shield } from './Icons';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Random increments for "real" feel
        return prev + Math.floor(Math.random() * 5) + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setVisible(false);
        setTimeout(onComplete, 800); // Wait for exit animation
      }, 500);
    }
  }, [progress, onComplete]);

  if (!visible) return null;

  return (
    <div className={`fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center transition-all duration-800 ease-spring ${progress >= 100 ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'}`}>
      
      {/* Central Content */}
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
             <Shield className="w-12 h-12 text-white animate-pulse-slow" />
             <div className="absolute inset-0 bg-white blur-xl opacity-20"></div>
        </div>
        
        <div className="h-1 w-48 bg-gray-800 rounded-full overflow-hidden">
            <div 
                className="h-full bg-white transition-all duration-100 ease-out"
                style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
        </div>

        <div className="font-mono text-xs text-gray-500 font-bold tracking-widest uppercase">
            System Initialization {Math.min(progress, 100)}%
        </div>
      </div>

    </div>
  );
};

export default Preloader;