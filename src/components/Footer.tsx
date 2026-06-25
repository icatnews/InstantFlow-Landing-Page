import { Sparkles, ArrowUpRight } from 'lucide-react';
import { Language } from '../types';
import SocialMatrix from './SocialMatrix';

interface FooterProps {
  currentLang: Language;
  onNavigate: (sectionId: string) => void;
  onPrivacyClick: () => void;
  onTermsClick: () => void;
}

export default function Footer({ currentLang, onNavigate, onPrivacyClick, onTermsClick }: FooterProps) {
  const links = {
    product: [
      { id: 'output-modes', label: { en: 'Output Modes', zh: '輸出模式', hans: '输出模式' } },
      { id: 'features', label: { en: 'Core Features', zh: '核心特色', hans: '核心特色' } },
      { id: 'pricing-roadmap', label: { en: 'Pricing', zh: '產品定價', hans: '产品定价' } },
    ],
    resources: [
      { id: 'affiliate', label: { en: 'Affiliate Portal', zh: '推廣計畫入口', hans: '推广计划入口' } },
      { id: 'faq', label: { en: 'FAQ / Support', zh: '常見問題支援', hans: '常见问题支援' } },
    ],
    legal: [
      { id: 'privacy', label: { en: 'Privacy Policy', zh: '隱私保護條款', hans: '隐私保护条款' } },
      { id: 'terms', label: { en: 'Terms of Service', zh: '使用者服務合約', hans: '使用者服务合约' } },
    ]
  };

  const t = (en: string, zh: string, hans: string) => {
    if (currentLang === 'en') return en;
    if (currentLang === 'hans') return hans;
    return zh;
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        
        {/* Brand section */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-xl overflow-hidden shadow-md bg-[#131517] flex items-center justify-center shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="7" width="3" height="10" rx="1.5" fill="url(#soundwave-grad-footer)" />
                <rect x="10.5" y="4" width="3" height="16" rx="1.5" fill="url(#soundwave-grad-footer)" />
                <rect x="16" y="7" width="3" height="10" rx="1.5" fill="url(#soundwave-grad-footer)" />
                <defs>
                  <linearGradient id="soundwave-grad-footer" x1="12" y1="4" x2="12" y2="20" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00D2FF" />
                    <stop offset="1" stopColor="#0072FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="font-display font-extrabold text-base tracking-tight text-white">
              {t('InstantFlow', 'InstantFlow 極客流', 'InstantFlow 极客流')}
            </span>
          </div>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-sm">
            {t(
              'Next-generation offline-first desktop voice input and smart formatting utility for Windows power users. Run lightning-fast with zero monthly subscriptions.',
              '專為 Windows 高階使用者打造的原生極速語音輸入與智慧排版美化工具。利用個人金鑰直連 API，告別昂貴的月租。',
              '专为 Windows 高阶使用者打造的原生极速语音输入与智慧排版美化工具。利用个人金钥直连 API，告别昂贵的月租。'
            )}
          </p>
          <div className="py-2">
            <SocialMatrix className="text-slate-500 hover:text-indigo-400" />
          </div>
          <div className="text-[11px] font-mono text-slate-600 font-semibold uppercase tracking-widest pt-2">
            © 2026 NovaFlow Labs, Inc.
          </div>
        </div>

        {/* Link categories */}
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
          
          {/* Column 1: Product */}
          <div className="space-y-4">
            <h4 className="font-display font-extrabold text-xs text-white uppercase tracking-wider">
              {t('Product', '產品功能', '产品功能')}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {links.product.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="hover:text-indigo-400 transition cursor-pointer text-left"
                  >
                    {item.label[currentLang]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div className="space-y-4">
            <h4 className="font-display font-extrabold text-xs text-white uppercase tracking-wider">
              {t('Partners', '資源與推廣', '资源与推广')}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {links.resources.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="hover:text-indigo-400 transition cursor-pointer text-left"
                  >
                    {item.label[currentLang]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="space-y-4 col-span-2 sm:col-span-1">
            <h4 className="font-display font-extrabold text-xs text-white uppercase tracking-wider">
              {t('Security', '法規與服務', '法规与服务')}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {links.legal.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      if (item.id === 'privacy') onPrivacyClick();
                      if (item.id === 'terms') onTermsClick();
                    }}
                    className="hover:text-indigo-400 transition block text-left cursor-pointer"
                  >
                    {item.label[currentLang]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>

      {/* Deep Footer signature */}
      <div className="max-w-7xl mx-auto pt-10 mt-10 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-semibold font-sans">
        <div>
          {t('Built natively for Windows 10 & 11', '專為 Windows 10 與 11 原生深度調校', '专为 Windows 10 与 11 原生深度调校')}
        </div>
        <div className="flex items-center space-x-1.5 hover:text-indigo-400 transition">
          <span>{t('Standalone, private, and secure', '離線首選 • 安全無慮', '离线首选 • 安全无虑')}</span>
          <ArrowUpRight className="w-3 h-3" />
        </div>
      </div>
    </footer>
  );
}
