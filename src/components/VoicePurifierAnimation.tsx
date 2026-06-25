import React, { useState, useEffect } from 'react';
import { Sparkles, Trash2, CheckCircle2, RefreshCw } from 'lucide-react';

interface VoicePurifierProps {
  currentLang: 'en' | 'zh' | 'hans';
}

export default function VoicePurifierAnimation({ currentLang }: VoicePurifierProps) {
  const [phase, setPhase] = useState<'oral' | 'purifying' | 'polished'>('oral');
  const [laserPosition, setLaserPosition] = useState<number>(-5);

  useEffect(() => {
    let tickTimeout: NodeJS.Timeout;
    let purifyingTimeout: NodeJS.Timeout;
    let polishedTimeout: NodeJS.Timeout;

    const runCycle = () => {
      // 1. Start with oral draft
      setPhase('oral');
      setLaserPosition(-5);

      // 2. Start laser sweep at 3500ms
      purifyingTimeout = setTimeout(() => {
        setPhase('purifying');
        // Trigger the CSS transition to 105% in next tick
        tickTimeout = setTimeout(() => {
          setLaserPosition(105);
        }, 10); // Start transition almost immediately (10ms)
      }, 3500);

      // 3. Exactly 1500ms after starting purifying (at 3510ms), laser completes, reveal polished text & tags at 5010ms
      polishedTimeout = setTimeout(() => {
        setPhase('polished');
      }, 5010);
    };

    // Run first cycle immediately
    runCycle();

    // Repeat cycle every 9000ms
    const interval = setInterval(runCycle, 9000);

    return () => {
      clearInterval(interval);
      clearTimeout(purifyingTimeout);
      clearTimeout(tickTimeout);
      clearTimeout(polishedTimeout);
    };
  }, []);

  const getOralText = () => {
    if (currentLang === 'en') {
      return (
        <span className="leading-relaxed">
          "Uh... so today around... like... three PM... <span className="text-rose-500 font-semibold bg-rose-50/80 px-1 rounded">you know</span>... we met with the team to... uh... confirm that the server dot ts port is... <span className="text-rose-500 font-semibold bg-rose-50/80 px-1 rounded">like</span>... fixed and blind test is okay..."
        </span>
      );
    }
    return (
      <span className="leading-relaxed">
        「<span className="text-rose-500 font-semibold bg-rose-50/80 px-1 rounded">呃</span>我今天下午大約三點多...<span className="text-rose-500 font-semibold bg-rose-50/80 px-1 rounded">那個</span>...跟團隊確認...確認過<span className="text-rose-500 font-semibold bg-rose-50/80 px-1 rounded">那個</span>...伺服器的 port 好了<span className="text-rose-500 font-semibold bg-rose-50/80 px-1 rounded">嘛</span>...」
      </span>
    );
  };

  const getPolishedText = () => {
    if (currentLang === 'en') {
      return (
        <span className="leading-relaxed text-slate-800 font-medium">
          "I met with the team today <span className="text-indigo-600 font-bold bg-indigo-50 px-1.5 py-0.5 rounded-md border border-indigo-100/50">(around 3:00 PM)</span> to confirm that the <span className="text-purple-600 font-bold">"server.ts"</span> port is fixed. The current blind testing status is now okay, no problem."
        </span>
      );
    }
    return (
      <span className="leading-relaxed text-slate-800 font-medium">
        「我今天下午<span className="text-indigo-600 font-bold bg-indigo-50 px-1.5 py-0.5 rounded-md border border-indigo-100/50">（大約三點多）</span>的時候跟團隊開會，確認<span className="text-purple-600 font-bold">「伺服器 dot ts」</span>的 port 已經修好了，目前盲測狀態已轉為 <span className="text-emerald-600 font-bold">okay</span>，沒問題。」
      </span>
    );
  };

  const getTags = () => {
    if (currentLang === 'en') {
      return [
        { label: 'Remove Filler Words ✂️', colorClass: 'bg-rose-50 text-rose-600 border-rose-200/60' },
        { label: 'Auto-Punctuation 📝', colorClass: 'bg-indigo-50 text-indigo-600 border-indigo-200/60' },
        { label: 'Domain Tech De-noising ⚡', colorClass: 'bg-amber-50 text-amber-600 border-amber-200/60' },
      ];
    }
    if (currentLang === 'hans') {
      return [
        { label: '移除語氣詞 ✂️', colorClass: 'bg-rose-50 text-rose-600 border-rose-200/60' },
        { label: '自动標示标点符号 📝', colorClass: 'bg-indigo-50 text-indigo-600 border-indigo-200/60' },
        { label: '專利術語去噪 ⚡', colorClass: 'bg-amber-50 text-amber-600 border-amber-200/60' },
      ];
    }
    // Default Traditional Chinese
    return [
      { label: '移除語氣詞 ✂️', colorClass: 'bg-rose-50 text-rose-600 border-rose-200/60' },
      { label: '自動標示標點符號 📝', colorClass: 'bg-indigo-50 text-indigo-600 border-indigo-200/60' },
      { label: '繁中術語去噪 ⚡', colorClass: 'bg-amber-50 text-amber-600 border-amber-200/60' },
    ];
  };

  return (
    <div className="w-full bg-slate-50/40 backdrop-blur-md rounded-2xl border border-slate-200/60 p-5 relative overflow-hidden shadow-inner mt-4">
      {/* Glow highlight effects */}
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-amber-200/10 rounded-full blur-xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-indigo-200/10 rounded-full blur-xl pointer-events-none" />

      {/* Floating Interactive Status Header */}
      <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
        <div className="flex items-center space-x-2">
          <span className="flex h-2.5 w-2.5 relative">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
              phase === 'oral' ? 'bg-amber-400' : phase === 'purifying' ? 'bg-indigo-500' : 'bg-emerald-500'
            }`} />
            <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
              phase === 'oral' ? 'bg-amber-500' : phase === 'purifying' ? 'bg-indigo-600' : 'bg-emerald-600'
            }`} />
          </span>
          <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-slate-500">
            {phase === 'oral' ? 'Step 1: Oral Speech Draft' : phase === 'purifying' ? 'Step 2: Laser Purifying' : 'Step 3: Polished Result'}
          </span>
        </div>
        
        <div className="flex items-center space-x-1.5">
          <RefreshCw className={`w-3.5 h-3.5 text-indigo-500/70 ${phase === 'purifying' ? 'animate-spin' : ''}`} />
          <span className="text-[10px] font-mono font-semibold text-slate-400">
            {phase === 'oral' ? 'Ready to Purify' : phase === 'purifying' ? 'Rewriting...' : 'Beautifully Done'}
          </span>
        </div>
      </div>

      {/* Main Text Area Container */}
      <div className="relative min-h-[95px] flex items-center justify-start bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50 overflow-hidden">
        
        {/* Laser bar sweeping across - EXACTLY 1.5s linear CSS transition */}
        {phase === 'purifying' && (
          <div 
            className="absolute top-0 bottom-0 w-[6px] bg-amber-400 z-20 pointer-events-none"
            style={{ 
              left: `${laserPosition}%`,
              transition: 'left 1500ms linear',
              boxShadow: '0 0 35px 8px #fbbf24, 0 0 60px 15px #fbbf24, 0 0 90px 25px #f59e0b, 0 0 140px 35px #d97706, 0 0 200px 50px rgba(251, 191, 36, 0.4)'
            }}
          />
        )}

        {/* Text presentation inside box */}
        <div className="w-full text-xs sm:text-sm font-sans text-slate-500">
          {phase === 'oral' && (
            <div className="animate-fade-in text-slate-400 font-normal">
              {getOralText()}
            </div>
          )}

          {phase === 'purifying' && (
            <div className="text-slate-400 font-normal opacity-80 select-none">
              {getOralText()}
            </div>
          )}

          {phase === 'polished' && (
            <div className="animate-[fadeIn_0.5s_ease-out]">
              {getPolishedText()}
            </div>
          )}
        </div>
      </div>

      {/* Floating Tags Area - only opacity-100 when phase is polished, else opacity-0 */}
      <div className="mt-4 flex flex-wrap gap-2 items-center justify-start">
        {getTags().map((tag, idx) => (
          <div 
            key={idx}
            className={`flex items-center space-x-1 px-3 py-1.5 rounded-full text-[10px] font-bold font-sans border transition-all duration-500 transform ${
              phase === 'polished' 
                ? `${tag.colorClass} scale-100 opacity-100 shadow-sm` 
                : 'opacity-0 scale-95 pointer-events-none'
            }`}
          >
            <span>{tag.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
