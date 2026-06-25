import React from 'react';
import { ShieldAlert, Globe, CheckCircle2 } from 'lucide-react';

interface LanguageGuardrailProps {
  currentLang: 'en' | 'zh' | 'hans';
}

export default function LanguageGuardrail({ currentLang }: LanguageGuardrailProps) {
  const t = (en: string, zh: string, hans: string) => {
    if (currentLang === 'en') return en;
    if (currentLang === 'hans') return hans;
    return zh;
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Visual background luxury radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-indigo-50/40 blur-[120px] pointer-events-none" />

      <div className="relative bg-white/70 backdrop-blur-xl border border-slate-200/60 rounded-3xl p-6 sm:p-8 max-w-5xl mx-auto shadow-xl hover:shadow-2xl transition-all duration-300">
        
        {/* Amber brand alert line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-indigo-500 to-purple-500 rounded-t-3xl" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-800">
              <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
              <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                Strictly 3 Languages Guardrail
              </span>
            </div>

            <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-800 leading-snug">
              {t(
                'Strictly 3 Languages Guardrail for Elite Workflows',
                '語言支援天條：極致專注於三大主流語系',
                '语言支援天条：极致专注于三大主流语系'
              )}
            </h3>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {t(
                '⚠️ Created for high-end professional workflows: InstantFlow 1.3/1.4 focuses 100% of its resources on optimizing and fortifying these three premium languages. No other languages are supported to guarantee ultimate quality.',
                '⚠️ 專為高端核心工作流打造：InstantFlow 1.3/1.4 版目前全力深耕、專注精準強固於以下三種主流語系（其餘語言恕不支援），以確保最極致的產出品質：',
                '⚠️ 专为高端核心工作流打造：InstantFlow 1.3/1.4 版目前全力深耕、专注精准强固于以下三种主流语系（其余语言恕不支援），以确保最极致的产出品质：'
              )}
            </p>
          </div>

          <div className="flex items-center space-x-2 text-slate-400 font-mono text-xs shrink-0 bg-slate-50 border border-slate-100 px-3 py-2 rounded-xl">
            <Globe className="w-4 h-4 text-indigo-500" />
            <span>Core Focus Mode</span>
          </div>
        </div>

        {/* 3 Core Flags Grids */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          
          {/* Card 1: English */}
          <div className="p-5 rounded-2xl bg-slate-50/50 hover:bg-white border border-slate-100 hover:border-indigo-100 transition-all duration-300 space-y-3 group hover:shadow-lg">
            <div className="flex items-center justify-between">
              <span className="text-2xl" role="img" aria-label="USA Flag">🇺🇸</span>
              <span className="text-[9px] font-mono font-bold uppercase text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                {t('Verbatim & Formatting', '逐字轉錄與文法優化', '逐字转录与文法优化')}
              </span>
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-slate-800 text-sm font-display group-hover:text-indigo-600 transition-colors">
                English (US/UK)
              </h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                {t(
                  'Sub-second transcription with complete grammar corrections, verbatim modes, and high-performance coding vocabulary alignment.',
                  '亞秒級英文聽寫、完美拼寫與口語文法即時自動修復、對接程式碼高頻開發術語對齊。',
                  '亚秒级英文听写、完美拼写与口语文法即时自动修复、对接程式码高频开发术语对齐。'
                )}
              </p>
            </div>
          </div>

          {/* Card 2: Traditional Chinese */}
          <div className="p-5 rounded-2xl bg-slate-50/50 hover:bg-white border border-slate-100 hover:border-indigo-100 transition-all duration-300 space-y-3 group hover:shadow-lg">
            <div className="flex items-center justify-between">
              <span className="text-2xl" role="img" aria-label="Taiwan Flag">🇹🇼</span>
              <span className="text-[9px] font-mono font-bold uppercase text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                {t('Taiwan Native Terms', '台灣在地專門名詞', '台湾在地专门名词')}
              </span>
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-slate-800 text-sm font-display group-hover:text-amber-600 transition-colors">
                繁體中文 (zh-TW)
              </h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                {t(
                  'Native Taiwan terminology adaptation, localized corporate formatting, and precise mobile phone/punctuation parsing.',
                  '深耕台灣在地商務與技術專有名詞對齊，首創手機與電子郵件格式自動美化校正。',
                  '深耕台湾在地商务与技术专有名词对齐，首创手机与电子邮件格式自动美化校正。'
                )}
              </p>
            </div>
          </div>

          {/* Card 3: Simplified Chinese */}
          <div className="p-5 rounded-2xl bg-slate-50/50 hover:bg-white border border-slate-100 hover:border-indigo-100 transition-all duration-300 space-y-3 group hover:shadow-lg">
            <div className="flex items-center justify-between">
              <span className="text-2xl" role="img" aria-label="China Flag">🇨🇳</span>
              <span className="text-[9px] font-mono font-bold uppercase text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">
                {t('High Efficiency Polish', '高效潤色與格式化', '高效润色与格式化')}
              </span>
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-slate-800 text-sm font-display group-hover:text-purple-600 transition-colors">
                简体中文 (zh-CN)
              </h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                {t(
                  'Advanced semantic compression, high-performance polishing, spelling corrections, and industry-standard layout format transformation.',
                  '高階語意無損壓縮、語病修復與段落整理，自動輸出極具專業氣質的核心簡報大綱與紀要。',
                  '高阶语意无损压缩、语病修复与段落整理，自动输出极具专业气质的核心简报大纲与纪要。'
                )}
              </p>
            </div>
          </div>

        </div>

        {/* Warning Badge footer */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center space-x-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
          <span className="font-mono text-[9px] sm:text-[10px] font-semibold text-slate-400">
            {t(
              'For languages other than the three above, please do not purchase as they are officially unsupported.',
              '除上述三種語系以外，其餘語言目前官方恕不支援，非此需求者請勿購買。',
              '除上述三种语系以外，其余语言目前官方恕不支援，非此需求者请勿购买。'
            )}
          </span>
        </div>
      </div>
    </section>
  );
}
