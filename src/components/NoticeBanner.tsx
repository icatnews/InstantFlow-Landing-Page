import { Sparkles, ArrowRight, Zap, Flame } from 'lucide-react';
import { Language } from '../types';

interface NoticeBannerProps {
  currentLang: Language;
  onNavigateToPricing: () => void;
}

export default function NoticeBanner({ currentLang, onNavigateToPricing }: NoticeBannerProps) {
  const t = (en: string, zh: string, hans: string) => {
    if (currentLang === 'en') return en;
    if (currentLang === 'hans') return hans;
    return zh;
  };

  return (
    <aside 
      aria-label="Early bird notice"
      className="relative z-50 bg-gradient-to-r from-slate-950 via-indigo-950 to-purple-950 border-b border-indigo-500/30 text-white text-xs py-2.5 px-4 sm:px-6 shadow-md overflow-hidden"
    >
      {/* Subtle background glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-32 h-8 bg-pink-500/10 blur-xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5 relative z-10">
        
        {/* Banner Content */}
        <div className="flex items-center space-x-2.5 text-center md:text-left flex-wrap justify-center md:justify-start">
          <span className="inline-flex items-center space-x-1 bg-amber-500/20 border border-amber-400/40 text-amber-300 font-bold px-2 py-0.5 rounded-full text-[11px] shrink-0 animate-pulse">
            <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>{t('EARLY BIRD V1.4', '早鳥限時特惠', '早鸟限时特惠')}</span>
          </span>

          <p className="text-slate-200 text-[11px] sm:text-xs leading-relaxed font-normal">
            {t(
              '🔥 V1.4 Coming Soon: Native Obsidian Integration! Zero-config voice terminal for your second brain. Windows & Mac launching soon (Lifetime Buyout $79 -> $99 upon launch) | Free Upgrade for Existing Users!',
              '🔥 V1.4 重磅預告：全新進駐 Obsidian 深度生態！零設定語音終端，一鍵重塑個人知識庫。雙平台即將正式推出（終身買斷方案 $79，正式發布後將調漲至 $99）｜現有用戶享有免費升級！',
              '🔥 V1.4 重磅预告：全新进驻 Obsidian 深度生态！零设定语音终端，一键重塑个人知识库。双平台即将正式推出（终身买断方案 $79，正式发布后将调涨至 $99）｜现有用户享有免费升级！'
            )}
          </p>
        </div>

        {/* Quick Action Button */}
        <div className="shrink-0 flex items-center space-x-2">
          <button
            onClick={onNavigateToPricing}
            className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-extrabold text-[11px] shadow-sm transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>{t('Lock In Early Bird Price ➔', '搶先鎖定早鳥價 ➔', '抢先锁定早鸟价 ➔')}</span>
          </button>
        </div>

      </div>
    </aside>
  );
}
