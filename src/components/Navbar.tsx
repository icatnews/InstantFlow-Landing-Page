import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { Language } from '../types';
import SocialMatrix from './SocialMatrix';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onNavigate: (sectionId: string) => void;
  customStoreUrl: string;
}

export default function Navbar({
  currentLang,
  onLanguageChange,
  onNavigate,
  customStoreUrl,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['hero', 'output-modes', 'features', 'pricing-roadmap', 'affiliate', 'faq'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'output-modes', label: { en: 'Output Modes', zh: '輸出模式', hans: '输出模式' } },
    { id: 'features', label: { en: 'Features', zh: '核心特色', hans: '核心特色' } },
    { id: 'pricing-roadmap', label: { en: 'Pricing & Roadmap', zh: '價格與路線圖', hans: '价格与路线图' } },
    { id: 'affiliate', label: { en: 'Affiliate', zh: '夥伴推廣', hans: '伙伴推广' } },
    { id: 'faq', label: { en: 'FAQ', zh: '常見問題', hans: '常见问题' } },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  const t = (en: string, zh: string, hans: string) => {
    if (currentLang === 'en') return en;
    if (currentLang === 'hans') return hans;
    return zh;
  };

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 px-4 sm:px-6 lg:px-8 bg-white/70 backdrop-blur-xl border-b border-indigo-100/50 shadow-sm'
          : 'py-5 px-4 sm:px-6 lg:px-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Brand */}
        <div
          onClick={() => handleLinkClick('hero')}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-xl overflow-hidden shadow-md bg-[#131517] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="7" width="3" height="10" rx="1.5" fill="url(#soundwave-grad)" />
              <rect x="10.5" y="4" width="3" height="16" rx="1.5" fill="url(#soundwave-grad)" />
              <rect x="16" y="7" width="3" height="10" rx="1.5" fill="url(#soundwave-grad)" />
              <defs>
                <linearGradient id="soundwave-grad" x1="12" y1="4" x2="12" y2="20" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00D2FF" />
                  <stop offset="1" stopColor="#0072FF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-xl font-bold leading-none text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
              {t('InstantFlow', 'InstantFlow 極客流', 'InstantFlow 极客流')}
            </div>
            <div className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest mt-1.5 leading-none">
              BY NOVAFLOW LABS
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 bg-slate-100/60 p-1 rounded-full border border-slate-200/50 backdrop-blur-md">
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`px-4 py-2 rounded-full font-sans text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-white text-indigo-600 shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/40'
                }`}
              >
                {item.label[currentLang]}
              </button>
            );
          })}
        </nav>

        {/* Language & CTA Controls */}
        <div className="hidden md:flex items-center space-x-3">
          
          {/* Social Matrix */}
          <SocialMatrix className="mr-2" />

          {/* Language Selector Button Group */}
          <div className="flex items-center bg-slate-100/80 p-0.5 rounded-full border border-slate-200/50">
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2.5 py-1 text-[11px] font-bold rounded-full transition-all ${
                currentLang === 'en'
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onLanguageChange('zh')}
              className={`px-2.5 py-1 text-[11px] font-bold rounded-full transition-all ${
                currentLang === 'zh'
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              繁
            </button>
            <button
              onClick={() => onLanguageChange('hans')}
              className={`px-2.5 py-1 text-[11px] font-bold rounded-full transition-all ${
                currentLang === 'hans'
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              简
            </button>
          </div>

          {/* Call to Action */}
          <a
            href={customStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-1.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-xs font-semibold shadow-md shadow-indigo-200 hover:shadow-indigo-300 transition-all duration-300 transform active:scale-95"
          >
            <span>{t('Go to Gumroad for Official License ➔', '前往 Gumroad 官方授權購買 ➔', '前往 Gumroad 官方授权购买 ➔')}</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-2">

          <div className="flex items-center bg-slate-100 p-0.5 rounded-full border border-slate-200/50">
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-1.5 py-0.5 text-[10px] font-bold rounded-full transition-all ${
                currentLang === 'en'
                  ? 'bg-white text-indigo-600'
                  : 'text-slate-500'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onLanguageChange('zh')}
              className={`px-1.5 py-0.5 text-[10px] font-bold rounded-full transition-all ${
                currentLang === 'zh'
                  ? 'bg-white text-indigo-600'
                  : 'text-slate-500'
              }`}
            >
              繁
            </button>
            <button
              onClick={() => onLanguageChange('hans')}
              className={`px-1.5 py-0.5 text-[10px] font-bold rounded-full transition-all ${
                currentLang === 'hans'
                  ? 'bg-white text-indigo-600'
                  : 'text-slate-500'
              }`}
            >
              简
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-indigo-50 px-4 py-6 shadow-xl space-y-4 flex flex-col">
          <nav className="flex flex-col space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className="w-full text-left px-4 py-3 rounded-xl font-sans text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-indigo-600 transition"
              >
                {item.label[currentLang]}
              </button>
            ))}
          </nav>
          <div className="pt-4 border-t border-slate-100 space-y-4">
            <div className="flex justify-center py-1">
              <SocialMatrix />
            </div>
            <a
              href={customStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-1.5 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-center text-sm"
            >
              <span>{t('Go to Gumroad for Official License ➔', '前往 Gumroad 官方授權購買 ➔', '前往 Gumroad 官方授权购买 ➔')}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
