/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Monitor, Download, ArrowDown, Sparkles, Settings, Check, Copy, X } from 'lucide-react';
import Navbar from './components/Navbar';
import InteractivePlayground from './components/InteractivePlayground';
import VoicePurifierAnimation from './components/VoicePurifierAnimation';
import LanguageGuardrail from './components/LanguageGuardrail';
import FeatureGrid from './components/FeatureGrid';
import Testimonials from './components/Testimonials';
import PricingRoadmap from './components/PricingRoadmap';
import AffiliateSection from './components/AffiliateSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AlternatingShowcase from './components/AlternatingShowcase';
import { Language } from './types';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('zh'); // Default to Traditional Chinese
  const [isPrivacyOpen, setIsPrivacyOpen] = useState<boolean>(false);
  const [isTermsOpen, setIsTermsOpen] = useState<boolean>(false);

  // Dynamic purchase URL strictly based on current language for dynamic language routing (ignoring bookmark inputs for buy-btn redirection)
  const resolvedStoreUrl = useMemo(() => {
    if (currentLang === 'en') {
      return 'https://novaflowlabs.gumroad.com/l/instantflow';
    }
    return 'https://novaflowlabs.gumroad.com/l/instantflow-cn';
  }, [currentLang]);

  // Force direct DOM updates to ensure absolute synchronicity for all Gumroad purchase links (Atomic Locale Update)
  useEffect(() => {
    const timer = setTimeout(() => {
      const targetUrl = currentLang === 'en' 
        ? 'https://novaflowlabs.gumroad.com/l/instantflow' 
        : 'https://novaflowlabs.gumroad.com/l/instantflow-cn';
      
      const gumroadLinks = document.querySelectorAll('a[href*="gumroad.com"], .buy-btn, a.buy-btn');
      gumroadLinks.forEach((link) => {
        link.setAttribute('href', targetUrl);
      });
    }, 50);
    return () => clearTimeout(timer);
  }, [currentLang]);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
  };

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 90; // offset for sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const t = (en: string, zh: string, hans: string) => {
    if (currentLang === 'en') return en;
    if (currentLang === 'hans') return hans;
    return zh;
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased relative overflow-x-hidden selection:bg-indigo-150 selection:text-indigo-900">
      
      {/* BACKGROUND ATMOSPHERE: Ambient Blur Waves */}
      <div className="absolute top-0 left-0 right-0 h-[1100px] overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-200/40 blur-[130px]" />
        <div className="absolute top-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-sky-200/30 blur-[120px]" />
        <div className="absolute top-[40%] left-[20%] w-[45%] h-[45%] rounded-full bg-violet-200/40 blur-[140px]" />
      </div>

      {/* STICKY HEADER */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        onNavigate={handleNavigate}
        customStoreUrl={resolvedStoreUrl}
      />

      <main className="relative z-10 pt-28">
        
        {/* HERO SECTION */}
        <section id="hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero: Headline, Subheadline, CTAs */}
            <div className="lg:col-span-7 space-y-8 text-left">
              {/* Product Badge */}
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-indigo-100 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-ping" />
                <span className="text-xs font-mono font-bold tracking-wider text-indigo-700 uppercase">
                  {t('V1.3 Focus Upgrade Live', 'V1.3 重量級升級全新登場', 'V1.3 重量级升级全新登场')}
                </span>
              </div>

              {/* Display Headline */}
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-none">
                {currentLang === 'en' ? (
                  <>
                    Speak <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600">4x Faster</span> than you type.
                  </>
                ) : currentLang === 'hans' ? (
                  <>
                    让打字速度<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600">飙升 4 倍</span>的语音神兵。
                  </>
                ) : (
                  <>
                    讓打字速度<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600">飆升 4 倍</span>的語音神兵。
                  </>
                )}
              </h1>

              {/* Subtext */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                {t(
                  'Welcome to InstantFlow by NovaFlow Labs. The next-generation, offline-first AI-powered voice typing & formatting tool for Windows power users. Dictate, polish, and paste in O(N) linear time.',
                  '歡迎入主 NovaFlow Labs 旗下 InstantFlow 極客流。專為 Windows 高階使用者打造的新一代極速 AI 語音輸入與格式美化工具。秒速轉錄、極速修正、完美輸入。',
                  '欢迎入主 NovaFlow Labs 旗下 InstantFlow 极客流。专为 Windows 高阶使用者打造的新一代极速 AI 语音输入与格式美化工具。秒速转录、极速修正、完美输入。'
                )}
              </p>

              {/* Exclusive voice purification animated showcase */}
              <VoicePurifierAnimation currentLang={currentLang} />

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={resolvedStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center space-x-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-base shadow-xl shadow-indigo-150 transition-all duration-300 transform active:scale-95"
                >
                  <Sparkles className="w-5 h-5 group-hover:animate-pulse transition-transform" />
                  <span>{t('Go to Gumroad for Official License ➔', '前往 Gumroad 官方授權購買 ➔', '前往 Gumroad 官方授权购买 ➔')}</span>
                </a>
                
                <button
                  onClick={() => handleNavigate('output-modes')}
                  className="flex items-center justify-center space-x-1.5 px-6 py-4 rounded-2xl border border-slate-200 bg-white/70 hover:bg-white text-slate-700 font-semibold text-sm transition-all cursor-pointer"
                >
                  <span>{t('Explore 4 Output Modes', '探索四大輸出模式', '探索四大输出模式')}</span>
                  <ArrowDown className="w-4 h-4 text-slate-500" />
                </button>
              </div>

              {/* Small trust caption */}
              <p className="text-xs text-slate-400 italic">
                {t(
                  'Compatible with Windows 10 & 11 • Portable single-file executable',
                  '完美支援 Windows 10 & 11 • 綠色免安裝單一執行檔',
                  '完美支援 Windows 10 & 11 • 绿色免安装单一执行档'
                )}
              </p>
            </div>

            {/* Right Hero: Dynamic Smart Routing Visualization Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/85 backdrop-blur-2xl border border-white/60 rounded-3xl p-6 shadow-2xl shadow-indigo-100/40 relative overflow-hidden space-y-6">
                {/* Visual Glass Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center space-x-2">
                    <Monitor className="w-4 h-4 text-indigo-600" />
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                      {t('Device Spec Routing', '本機三鍵智慧路由規格', '本机三键智慧路由规格')}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">
                    Active V1.3
                  </span>
                </div>

                {/* Routing info boxes */}
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50/80 rounded-2xl border border-slate-100 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-800 font-sans">
                        {t('Groq Dictation Key (A)', '鍵盤快速鍵 A (Groq 聽寫)', '键盘快速键 A (Groq 听写)')}
                      </span>
                      <span className="text-[10px] font-mono text-indigo-600 bg-indigo-50 font-bold px-1.5 py-0.5 rounded">
                        {t('Primary', '原始語音轉文字', '原始语音转文字')}
                      </span>
                    </div>
                    <p className="text-slate-500 text-xs">
                      {t(
                        'Routes raw audio streams directly to Groq API for sub-second text transcription.',
                        '預設超高速聽寫路由，直接連線 Groq API 進行亞秒級純文字還原。',
                        '默认超高速听写路由，直接连线 Groq API 进行亚秒级纯文字还原。'
                      )}
                    </p>
                  </div>

                  <div className="p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100/50 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-indigo-800 font-sans">
                        {t('Groq Polish Key (B)', '鍵盤快速鍵 B (Groq 智慧美化)', '键盘快速键 B (Groq 智慧美化)')}
                      </span>
                      <span className="text-[10px] font-mono text-indigo-600 bg-indigo-100 font-bold px-1.5 py-0.5 rounded">
                        {t('Default Polish', '智慧潤色排版', '智慧润色排版')}
                      </span>
                    </div>
                    <p className="text-slate-600 text-xs">
                      {t(
                        'Enables default acoustic de-noising, formatting, and punctuation targeting.',
                        '智慧重組口述雜亂句型，自動修復發音語病、智慧斷句。',
                        '智慧重组口述杂乱句型，自动修复发音语病、智慧断句。'
                      )}
                    </p>
                  </div>

                  <div className="p-4 bg-purple-50/50 rounded-2xl border border-purple-100/50 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-purple-800 font-sans">
                        {t('DeepSeek Polish Key (Optional)', '鍵盤快速鍵 C (DeepSeek 高級精修)', '键盘快速键 C (DeepSeek 高级精修)')}
                      </span>
                      <span className="text-[10px] font-mono text-purple-600 bg-purple-100/50 font-bold px-1.5 py-0.5 rounded">
                        {t('Premium Layer', '中英高級美化', '中英高级美化')}
                      </span>
                    </div>
                    <p className="text-slate-600 text-xs">
                      {t(
                        'Secondary layer for complex translation, advanced logic, and terminology alignment.',
                        '對接 DeepSeek API，專門用作高度中英邏輯重組與精確語調排列。',
                        '对接 DeepSeek API，专门用作高度中英逻辑重组与精确语调排列。'
                      )}
                    </p>
                  </div>
                </div>

                {/* Grid tag specs */}
                <div className="grid grid-cols-3 gap-2 pt-2 text-center">
                  <div className="p-3 bg-slate-50 border border-slate-150 rounded-xl space-y-1">
                    <span className="block text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">{t('Matching', '配對演算法', '配对算法')}</span>
                    <span className="block text-xs font-bold text-slate-700 font-mono">Trie O(N)</span>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-150 rounded-xl space-y-1">
                    <span className="block text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">{t('Limit', '裝置授權', '装置授权')}</span>
                    <span className="block text-xs font-bold text-slate-700 font-mono">2 PCs</span>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-150 rounded-xl space-y-1">
                    <span className="block text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">{t('Route', 'API 對接', 'API 对接')}</span>
                    <span className="block text-xs font-bold text-slate-700 font-mono">Groq-First</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* STRICT 3 LANGUAGES GUARDRAIL */}
        <LanguageGuardrail currentLang={currentLang} />

        {/* INTERACTIVE PLAYGROUND */}
        <section id="output-modes" className="py-12 bg-transparent relative z-10">
          <InteractivePlayground currentLang={currentLang} />
        </section>

        {/* FEATURES GRID SECTION */}
        <FeatureGrid currentLang={currentLang} />

        {/* ALTERNATING HIGH-END SHOWCASE */}
        <AlternatingShowcase currentLang={currentLang} />

        {/* TESTIMONIALS GRID */}
        <Testimonials currentLang={currentLang} />

        {/* PRICING & V1.4 ROADMAP */}
        <PricingRoadmap currentLang={currentLang} customStoreUrl={resolvedStoreUrl} />

        {/* PARTNER AFFILIATE PROGRAM SECTION */}
        <AffiliateSection currentLang={currentLang} />

        {/* ACCORDION FAQ SECTION */}
        <FAQ currentLang={currentLang} />

      </main>

      {/* COMPACT FOOTER LINKS */}
      <Footer
        currentLang={currentLang}
        onNavigate={handleNavigate}
        onPrivacyClick={() => setIsPrivacyOpen(true)}
        onTermsClick={() => setIsTermsOpen(true)}
      />

      {/* PRIVACY POLICY MODAL */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop blur overlay */}
          <div
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
            onClick={() => setIsPrivacyOpen(false)}
          />

          {/* Modal Container */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden relative z-10 animate-in fade-in zoom-in duration-200 flex flex-col max-h-[85vh]">
            {/* Header */}
            <div className="p-6 border-b border-slate-800 bg-slate-950/80 flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <span className="text-xl">🛡️</span>
                <div>
                  <h3 className="font-sans font-extrabold text-base text-white">
                    {t('Privacy Policy & Data Security', '隱私權與資料保護政策', '隐私权与数据保护政策')}
                  </h3>
                  <p className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mt-0.5">
                    {t('100% OFFLINE EDGE TRANSCRIPTION', '100% 離線地端隱私架構保障', '100% 离线地端隐私架构保障')}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsPrivacyOpen(false)}
                className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 space-y-6 overflow-y-auto text-slate-300 text-sm leading-relaxed font-sans text-left">
              {/* Section 1 */}
              <div className="space-y-2">
                <h4 className="font-extrabold text-white text-xs uppercase tracking-wider text-indigo-400">
                  {t('1. Edge-First Private Engine', '一、 100% 離線地端首選架構', '一、 100% 离线地端首选架构')}
                </h4>
                <p>
                  {t(
                    'InstantFlow Commitment: This software is designed under a strict 100% edge-first offline-preferred atomic architecture. Unless you explicitly copy, all voice recordings, hotkeys, local audio listening, and custom memory dictionary matches are stored exclusively on the user’s device. There are absolutely no secret background cloud uploads or data pipelines harvesting your data.',
                    'InstantFlow 承諾：本軟體採用 100% 在地端電腦執行的原子級架構，除非您主動複製，否則您的任何語音音訊、轉錄文本、個人資料絕對不會上傳。您的自備 Groq 與 DeepSeek API 金鑰均安全加密儲存於您個人的地端電腦中，保障絕對地端隱私。',
                    'InstantFlow 承诺：本软件采用 100% 在地端电脑执行的原子级架构，除非您主动复制，否则您的任何语音音讯、转录文本、个人资料绝对不会上传。您的自备 Groq 与 DeepSeek API 金钥均安全加密存储于您个人的地端电脑中，保障绝对地端隐私。'
                  )}
                </p>
              </div>

              {/* Section 2 */}
              <div className="space-y-2">
                <h4 className="font-extrabold text-white text-xs uppercase tracking-wider text-indigo-400">
                  {t('2. API Key Protection', '二、 API 金鑰與敏感認證安全', '二、 API 金钥与敏感认证安全')}
                </h4>
                <p>
                  {t(
                    'Your custom API Keys (Groq or DeepSeek keys) are encrypted and stored solely in your local operating system credential store (such as Windows Credential Manager) or your local app data directory. NovaFlow Labs does not, and cannot, collect or monitor your private API keys, API usage billing, or any voice text payloads.',
                    '您的自備 API 密鑰（如 Groq 與 DeepSeek API 金鑰）皆採最高規格加密、並儲存於您的本機作業系統憑證庫（如 Windows Credential Manager）或本地加密設定檔中。本軟體絕無收集機制，亦無法取得您的私鑰或任何敏感通訊內容。',
                    '您的自备 API 密钥（如 Groq 与 DeepSeek API 金钥）皆采最高规格加密、并存储于您的本机作业系统凭证库（如 Windows Credential Manager）或本地加密设定档中。本软件绝无收集机制，亦无法取得您的私钥或任何敏感通讯内容。'
                  )}
                </p>
              </div>

              {/* Section 3 */}
              <div className="space-y-2">
                <h4 className="font-extrabold text-white text-xs uppercase tracking-wider text-indigo-400">
                  {t('3. Third-Party Transmission Scope', '三、 第三方服務傳輸說明', '三、 第三方服务传输说明')}
                </h4>
                <p>
                  {t(
                    'If you choose to enable external API integration to process voice audio or text formatting, your audio and transcription content will be securely transmitted to your configured endpoint. The processing of such datasets is governed strictly by the respective privacy policy and developer terms of the target platform (e.g., Groq API, DeepSeek API). Please keep your API key secure.',
                    '當您啟用外部大模型 API 美化時，語音與文本將安全傳輸至您指定的終端服務商。相關數據的隱私與保護規範應適用各該服務商（如 Groq API, DeepSeek API）之開發者隱私政策，請妥善保護您的私鑰密鑰，切勿流傳於公共空間。',
                    '当您启用外部大模型 API 美化时，语音与文本将安全传输至您指定的终端服务商。相关数据的隐私与保护规范应适用各该服务商（如 Groq API, DeepSeek API）之开发者隐私政策，请妥善保护您的私钥密钥，切勿流传于公共空间。'
                  )}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-slate-800 bg-slate-950/40 flex justify-end">
              <button
                onClick={() => setIsPrivacyOpen(false)}
                className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm transition cursor-pointer"
              >
                {t('I Understand & Accept', '我知道了，同意並關閉', '我知道了，同意并关闭')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TERMS OF SERVICE MODAL */}
      {isTermsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop blur overlay */}
          <div
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
            onClick={() => setIsTermsOpen(false)}
          />

          {/* Modal Container */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden relative z-10 animate-in fade-in zoom-in duration-200 flex flex-col max-h-[85vh]">
            {/* Header */}
            <div className="p-6 border-b border-slate-800 bg-slate-950/80 flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <span className="text-xl">⚖️</span>
                <div>
                  <h3 className="font-sans font-extrabold text-base text-white">
                    {t('Terms of Service & Licensing', '使用者服務合約與終端授權', '使用者服务合约与终端授权')}
                  </h3>
                  <p className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mt-0.5">
                    {t('PERPETUAL LICENSE AGREEMENT', '產品終身使用授權及合規條約', '产品终身使用授权及合规条约')}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsTermsOpen(false)}
                className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 space-y-6 overflow-y-auto text-slate-300 text-sm leading-relaxed font-sans text-left">
              {/* Section 1 */}
              <div className="space-y-2">
                <h4 className="font-extrabold text-white text-xs uppercase tracking-wider text-amber-400">
                  {t('1. Software Licensing & API Self-Provisioning', '一、 軟體授權模式與 API 金鑰自備義務', '一、 软件授权模式与 API 金钥自备义务')}
                </h4>
                <div className="p-3 bg-amber-500/10 border border-amber-500/20 text-amber-200 rounded-xl text-xs space-y-1">
                  <p className="font-bold">🎯 {t('Strict Legal Compliance Declaration', '核心法規條款實體注入：', '核心法规条款实体注入：')}</p>
                  <p>
                    「本軟體採「一次性買斷、終身授權使用」之永續授權模式，無任何隱藏性訂閱費用。唯用戶須自備或自行填寫 Groq API 密鑰（API Key）方得啟動完整 AI 潤色功能，本軟體不對 API 額度或可用性做額外擔保。」
                  </p>
                  <p className="mt-1.5 opacity-80 italic font-mono text-[10px]">
                    "This software adopts a 'one-time purchase, lifetime authorization' perpetual license model with absolutely no hidden subscription costs. Users are required to self-provide and fill their own Groq API Keys to activate the complete AI polishing and formatting features. NovaFlow Labs makes no extra warranty regarding API quotas, uptime, or external network availability."
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div className="space-y-2">
                <h4 className="font-extrabold text-white text-xs uppercase tracking-wider text-amber-400">
                  {t('2. Reverse Engineering Restrictions & Scope', '二、 嚴禁反向工程與商業二次分發行為', '二、 严禁反向工程与商业二次分发行为')}
                </h4>
                <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-200 rounded-xl text-xs space-y-1">
                  <p className="font-bold">🚫 {t('Code Protection & Copyright Declarations', '程式碼保護與著作權宣告：', '代码保护与著作权宣告：')}</p>
                  <p>
                    「本軟體之商業授權僅限於合法之個人、企業自用；嚴禁任何對本程式碼之反向工程（Reverse Engineering）、解密、拆解或未經官方許可之二次分發行為。」
                  </p>
                  <p className="mt-1.5 opacity-80 italic font-mono text-[10px]">
                    "The commercial license of this software is strictly limited to legal personal or enterprise-internal self-use. Any reverse engineering, decryption, decompilation, disassembly of this compiled binary code, or unauthorized redistribution, packaging, or secondary resale is strictly prohibited."
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div className="space-y-2">
                <h4 className="font-extrabold text-white text-xs uppercase tracking-wider text-amber-400">
                  {t('3. Content and Usage Responsibilities', '三、 文字內容合規與免責聲明', '三、 文字内容合规与免责声明')}
                </h4>
                <p>
                  {t(
                    'Users understand and agree that the legal compliance of all formatted texts generated through this software (such as following social network guidelines, national administrative public document format requirements, academic policies) is entirely the responsibility of the user. NovaFlow Labs shall not be held liable for any damages, penalties, or commercial losses resulting from inappropriate formatting outputs, transcription errors, or third-party service provider downtimes.',
                    '用戶理解並同意，使用本軟體聽寫及美化排版所產生之所有文字內容之合規性（如各社群媒體發佈規範、政府機關行政公文格式標準、學術規範）皆由用戶自行承擔並負責。本軟體及 NovaFlow Labs 不對任何因 AI 隨機聽錯、排版變形、或 API 連線異常所造成的業務延誤、商業損失承擔任何賠償責任。',
                    '用户理解并同意，使用本软件听写及美化排版所产生之所有文字内容之合规性（如各社群媒体发布规范、政府机关行政公文格式标准、学术规范）皆由用户自行承担并负责。本软件及 NovaFlow Labs 不对任何因 AI 随机听错、排版变形、或 API 连线异常所造成的业务延误、商业损失承担任何赔偿责任。'
                  )}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-slate-800 bg-slate-950/40 flex justify-end">
              <button
                onClick={() => setIsTermsOpen(false)}
                className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm transition cursor-pointer shadow-md shadow-amber-500/10"
              >
                {t('I Agree & Accept Terms', '我同意，遵守上述條款', '我同意，遵守上述条款')}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
