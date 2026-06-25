import React from 'react';
import { Check, ShieldCheck, Quote, Flame, Terminal, Star } from 'lucide-react';

interface AlternatingShowcaseProps {
  currentLang: 'en' | 'zh' | 'hans';
}

export default function AlternatingShowcase({ currentLang }: AlternatingShowcaseProps) {
  const t = (en: string, zh: string, hans: string) => {
    if (currentLang === 'en') return en;
    if (currentLang === 'hans') return hans;
    return zh;
  };

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Absolute Decorative elements for breathability */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-indigo-50/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-50/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 text-center">
        <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
          {t('Aesthetic Comparison / Originality First', '極簡極客美學 • 精準數據展示', '极简极客美学 • 精准数据展示')}
        </span>
        <h2 className="mt-4 font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
          {t(
            'The Ultimate Flow: Standalone Efficiency Layer',
            '為個人高效能主理人量身打造的優雅旗艦',
            '为个人高效能主理人量身打造的优雅旗舰'
          )}
        </h2>
        <p className="mt-2 text-slate-500 text-sm max-w-2xl mx-auto">
          {t(
            'Completely decoupled from bloated interfaces. Pure desktop acceleration with robust local security.',
            '拒絕抄襲與同質化科技感。左右對稱、交錯佈局，呈現極具延伸性的資訊美感。',
            '拒绝抄袭与同质化科技感。左右对称、交错布局，呈现极具延伸性的资讯美感。'
          )}
        </p>
      </div>

      {/* Row 1: English (Verbatim & Professional) - Light Background */}
      <div className="bg-slate-50/50 py-16 sm:py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Feature Description */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="flex items-center space-x-2 text-indigo-600">
                <span className="text-xl font-bold">🇺🇸</span>
                <span className="font-mono text-xs font-bold uppercase tracking-wider">Premium Focus A</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-950 tracking-tight leading-snug">
                {t(
                  'English Verbatim & Grammar Tuning',
                  '極致英文聽寫：亞秒級文法與術語對齊',
                  '极致英文听写：亚秒级文法与术语对齐'
                )}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {t(
                  'Say goodbye to robotic dictation. InstantFlow recognizes US/UK accents instantly, resolving punctuation, correcting passive spelling errors (e.g. "server.ts", "Express"), and structuring run-on thoughts into pristine business paragraphs in real time.',
                  '拒絕生硬無趣的機器拼寫。InstantFlow 精準適應各種口音，能在一瞬間自動補全程式命名（例如 “package.json”、”Express” 核心術語），並將零碎思緒自動修復為符合美式商務氣質的精煉論述。',
                  '拒绝生硬无趣的机器拼写。InstantFlow 精准适应各种口音，能在一瞬间自动补全程式命名（例如 “package.json”、”Express” 核心术语），并将零碎思绪自动修复为符合美式商务气质的精炼论述。'
                )}
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3">
                  <div className="mt-1 p-0.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    {t('Seamless integration with code terminologies', '與開發程式碼命名高頻精準對接', '与开发程式码命名高频精准对接')}
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-1 p-0.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    {t('Verbatim transcription options', '支援原汁原味逐字還原模式', '支援原汁原味逐字还原模式')}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Comparison & Quote */}
            <div className="lg:col-span-6 space-y-5">
              {/* Dynamic comparison showcase */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/60 shadow-xl space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">{t('TRANSCRIPTION BENCHMARK', '聽寫基準對比', '听写基准对比')}</span>
                  <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Passed</span>
                </div>

                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="p-3 bg-rose-50/40 rounded-xl border border-rose-100/50">
                    <div className="text-[10px] font-mono font-bold text-rose-500 mb-1">RAW ORAL INPUT</div>
                    <p className="text-slate-400 italic">"so... i was like... installing dependencies... and typescript was missing you know..."</p>
                  </div>
                  <div className="p-3 bg-indigo-50/30 rounded-xl border border-indigo-100/50">
                    <div className="text-[10px] font-mono font-bold text-indigo-600 mb-1">INSTANTFLOW PURIFIED</div>
                    <p className="text-slate-800 font-semibold font-sans">"I was installing the required dependencies when I noticed TypeScript was missing."</p>
                  </div>
                </div>
              </div>

              {/* Elite review card */}
              <div className="p-4 rounded-xl bg-indigo-950 text-indigo-100/90 relative overflow-hidden">
                <Quote className="absolute right-3 bottom-1 w-16 h-16 text-indigo-900/40 pointer-events-none" />
                <div className="flex items-center space-x-2 mb-2 text-amber-400">
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                </div>
                <p className="text-xs italic leading-relaxed">
                  "The dictation precision is flawless. I am writing articles and code documentation 4 times faster on my PC without any latency."
                </p>
                <div className="mt-2 text-[10px] font-mono font-bold text-indigo-300">— CEO at Silicon Valley SaaS</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Row 2: Traditional Chinese (Local Optimization) - Crisp White Background */}
      <div className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Visual Comparison & Quote (Inverted layout for elegant alternation) */}
            <div className="lg:col-span-6 space-y-5 order-last lg:order-first">
              {/* Localized comparison box */}
              <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/60 shadow-xl space-y-3">
                <div className="flex items-center justify-between border-b border-slate-200/50 pb-2">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">{t('TW BUSINESS SPECIFICATION', '台灣商務名詞特化校正', '台湾商务名词特化校正')}</span>
                  <span className="text-[10px] font-mono font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">Adaptive</span>
                </div>

                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="p-3 bg-rose-50/40 rounded-xl border border-rose-100/50">
                    <div className="text-[10px] font-mono font-bold text-rose-500 mb-1">口語含混輸入</div>
                    <p className="text-slate-400 italic">「呃那個...我的手機是零九一二三四五六七八...你再跟我寄信到 pobox 好了啦...」</p>
                  </div>
                  <div className="p-3 bg-amber-50/30 rounded-xl border border-amber-100/50">
                    <div className="text-[10px] font-mono font-bold text-amber-600 mb-1">台灣商務格式校正</div>
                    <p className="text-slate-800 font-semibold">「我的手機是 0912-345-678，請再將郵件發送至我的郵箱：pobox。」</p>
                  </div>
                </div>
              </div>

              {/* High-end executive review */}
              <div className="p-4 rounded-xl bg-slate-900 text-slate-100/90 relative overflow-hidden">
                <Quote className="absolute right-3 bottom-1 w-16 h-16 text-slate-800 pointer-events-none" />
                <div className="flex items-center space-x-1.5 mb-2 text-indigo-400">
                  <Flame className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">Taiwan Power User</span>
                </div>
                <p className="text-xs italic leading-relaxed">
                  「這是我用過對繁中技術名詞（如 server, port, API）支援最完美的聽寫軟體，圓角按鈕和版面極簡典雅，比開源大雜燴精緻太多了。」
                </p>
                <div className="mt-2 text-[10px] font-mono font-bold text-indigo-300">— 獨立技術顧問，NovaFlow 創作者社群成員</div>
              </div>
            </div>

            {/* Right Column: Feature Description */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="flex items-center space-x-2 text-amber-600">
                <span className="text-xl font-bold">🇹🇼</span>
                <span className="font-mono text-xs font-bold uppercase tracking-wider">Premium Focus B</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-950 tracking-tight leading-snug">
                {t(
                  'Traditional Chinese Localization',
                  '繁體中文特化：專利、技術與手機格式極致校正',
                  '繁体中文特化：专利、技术与手机格式极致校正'
                )}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {t(
                  'Tailored specifically for Taiwanese corporate workflows. Includes high-fidelity alignment for common local slang, professional legal, financial, and tech terminologies, and automatic formatting for phone numbers and email structures without any manual editing required.',
                  '專為台灣高端工作流程深度定制。全面對齊繁中商務慣例與科技術語，更首創「聯絡格式自動錨定」，口述手機號碼、電子郵件、伺服器位址時自動轉換為完美排版。'
                ,
                  '专为台湾高端工作流程深度定制。全面对齐繁中商务惯例与科技术语，更首创“联络格式自动锚定”，口述手机号码、电子邮件、服务器位址时自动转换为完美排版。'
                )}
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3">
                  <div className="mt-1 p-0.5 rounded-full bg-amber-50 border border-amber-100 text-amber-600">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    {t('Exact local spelling & technical jargon parsing', '精準還原台灣在地習慣與中英混雜語境', '精准还原台湾在地习惯与中英混杂语境')}
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-1 p-0.5 rounded-full bg-amber-50 border border-amber-100 text-amber-600">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    {t('Auto-punctuation specifically engineered for long sentences', '專為繁中長難句型設計的語意標點注入', '专为繁中长难句型设计的语意标点注入')}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Row 3: Simplified Chinese (Dynamic Compressing) - Light Background */}
      <div className="bg-slate-50/50 py-16 sm:py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Feature Description */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="flex items-center space-x-2 text-purple-600">
                <span className="text-xl font-bold">🇨🇳</span>
                <span className="font-mono text-xs font-bold uppercase tracking-wider">Premium Focus C</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-950 tracking-tight leading-snug">
                {t(
                  'Simplified Chinese High-Performance Polish',
                  '简体中文高效能：多維度潤色與格式化',
                  '简体中文高效能：多维度润色与格式化'
                )}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {t(
                  'Perfect for fast drafting of slide decks, emails, and patented domain documentation. Compresses wordy paragraphs, deletes filler words, and delivers highly polished, structured outlines optimized for high-performance executives.',
                  '適合高速編寫簡報大綱、商務郵件及技術專利文檔。自動剔除多餘口語碎碎念，一鍵生成條理分明的結構化內容，讓您的產出極具說服力與專業度。',
                  '适合高速编写简报大纲、商务邮件及技术专利文档。自动剔除多余口语碎碎念，一键生成条理分明的结构化内容，让您的产出极具说服力与专业度。'
                )}
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3">
                  <div className="mt-1 p-0.5 rounded-full bg-purple-50 border border-purple-100 text-purple-600">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    {t('One-click structure formatting & outlines', '一鍵重組為清晰的條列式重點摘要', '一键重组为清晰的条列式重点摘要')}
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-1 p-0.5 rounded-full bg-purple-50 border border-purple-100 text-purple-600">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    {t('Ideal for presentation slides and summaries', '完美對接高效率工作簡報與郵件草稿', '完美对接高效率工作简报与邮件草稿')}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Comparison & Dev Console */}
            <div className="lg:col-span-6 space-y-5">
              {/* Unstructured to purified markdown container */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/60 shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">{t('OUTLINE GENERATION LAYER', '結構化大綱重組', '结构化大纲重组')}</span>
                  <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
                </div>

                <div className="text-xs space-y-2">
                  <div className="p-3 bg-rose-50/20 rounded-xl border border-rose-100/30">
                    <div className="text-[9px] font-mono font-bold text-rose-500 mb-1">RAW MEETING SPEECH</div>
                    <p className="text-slate-400 italic">「大家聽得到嗎？那個我們今天主要是把那個系統的核心邏輯跟資料庫先對齊一下，然後等一下還要跟客戶確認時序問題...」</p>
                  </div>
                  <div className="p-3 bg-purple-50/20 rounded-xl border border-purple-100/30 space-y-1.5 text-slate-800">
                    <div className="text-[9px] font-mono font-bold text-purple-600">AUTO-STRUCTURED MARKDOWN</div>
                    <div className="font-mono text-[11px] space-y-1 font-bold text-slate-700">
                      <div><span className="text-indigo-600">今日會議核心議程對齊</span></div>
                      <div className="pl-4 font-normal text-slate-600">1. 對齊系統核心業務邏輯</div>
                      <div className="pl-4 font-normal text-slate-600">2. 同步底層資料庫對接規格</div>
                      <div className="pl-4 font-normal text-slate-600">3. 確認客戶交付時序節點</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dev Spec Badge footer */}
              <div className="p-4 rounded-xl border border-slate-150 bg-slate-100/50 flex items-center space-x-3">
                <Terminal className="w-5 h-5 text-slate-600 shrink-0" />
                <div className="text-left">
                  <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Strictly 3 Languages Guardrail</span>
                  <span className="block text-[11px] font-medium text-slate-600 leading-tight">
                    Optimized algorithms exclusively designed for EN, zh-TW, and zh-CN.
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
