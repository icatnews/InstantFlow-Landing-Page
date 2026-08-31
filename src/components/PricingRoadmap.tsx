import { CheckCircle2, ArrowUpRight, ShieldCheck, Sparkles, AudioLines, Volume2, Monitor, Laptop, Layers, Zap, BookOpen, Smile, Target, Flame, Gift } from 'lucide-react';
import React from 'react';
import { Language } from '../types';

interface PricingRoadmapProps {
  currentLang: Language;
  customStoreUrl: string;
}

export default function PricingRoadmap({ currentLang, customStoreUrl }: PricingRoadmapProps) {
  const t = (en: string, zh: string, hans: string) => {
    if (currentLang === 'en') return en;
    if (currentLang === 'hans') return hans;
    return zh;
  };

  const pricingTiers = [
    {
      id: 'win-pass',
      title: 'Windows Dual-PC Pass',
      price: '$59',
      badge: { en: '[ Early Bird Offer ]', zh: '[ 早鳥限時特惠 ]', hans: '[ 早鸟限时特惠 ]' },
      isPopular: false,
      platformIcon: <Monitor className="w-5 h-5 text-indigo-600" />,
      licenseText: {
        en: 'Authorize up to 2 Windows PCs (Lifetime License)',
        zh: '可授權 2 台 Windows 電腦（終身買斷）',
        hans: '可授权 2 台 Windows 电脑（终身买断）'
      },
      priceAlert: {
        en: '🔥 Price increasing to $79 in v1.4 (Save $20 now)',
        zh: '🔥 V1.4 正式版即將調漲至 $79（現省 $20）',
        hans: '🔥 V1.4 正式版即将调涨至 $79（现省 $20）'
      },
      buttonText: {
        en: 'Select on Gumroad ($59) ↗',
        zh: '前往 Gumroad 選購 ($59) ↗',
        hans: '前往 Gumroad 选购 ($59) ↗'
      },
      desc: {
        en: 'Perfect for Windows desktop + laptop power users.',
        zh: '適合擁有一台桌機 + 一台筆電的 Windows 極客用戶。',
        hans: '适合拥有一台台式机 + 一台笔记本的 Windows 极客用户。'
      }
    },
    {
      id: 'mac-pass',
      title: 'Mac Dual-Mac Pass',
      price: '$59',
      badge: { en: '[ Early Bird Offer ]', zh: '[ 早鳥限時特惠 ]', hans: '[ 早鸟限时特惠 ]' },
      isPopular: false,
      platformIcon: <Laptop className="w-5 h-5 text-purple-600" />,
      licenseText: {
        en: 'Authorize up to 2 Mac computers (Lifetime License)',
        zh: '可授權 2 台 Mac 電腦（終身買斷）',
        hans: '可授权 2 台 Mac 电脑（终身买断）'
      },
      priceAlert: {
        en: '🔥 Price increasing to $79 in v1.4 (Save $20 now)',
        zh: '🔥 V1.4 正式版即將調漲至 $79（現省 $20）',
        hans: '🔥 V1.4 正式版即将调涨至 $79（现省 $20）'
      },
      buttonText: {
        en: 'Select on Gumroad ($59) ↗',
        zh: '前往 Gumroad 選購 ($59) ↗',
        hans: '前往 Gumroad 选购 ($59) ↗'
      },
      desc: {
        en: 'Perfect for MacBook + iMac / Mac Studio creators.',
        zh: '適合擁有 MacBook + iMac / Mac Studio 的 Apple 創作者。',
        hans: '适合拥有 MacBook + iMac / Mac Studio 的 Apple 创作者。'
      }
    },
    {
      id: 'cross-pass',
      title: 'Ultimate Cross-Platform Pass (Win + Mac)',
      price: '$79',
      badge: { en: '🔥【Hot Pick】Early Bird', zh: '🔥【熱銷推薦】· 早鳥特惠', hans: '🔥【热销推荐】· 早鸟特惠' },
      isPopular: true,
      platformIcon: <Layers className="w-5 h-5 text-indigo-500" />,
      licenseText: {
        en: '【Hot Pick】Simultaneously authorize 1 Windows + 1 Mac',
        zh: '【熱銷推薦】同時擁有 1 台 Windows + 1 台 Mac 授權',
        hans: '【热销推荐】同时拥有 1 台 Windows + 1 台 Mac 授权'
      },
      priceAlert: {
        en: '🔥 Price increasing to $99 in v1.4 (Save $20 now)',
        zh: '🔥 V1.4 正式版即將調漲至 $99（現省 $20）',
        hans: '🔥 V1.4 正式版即将调涨至 $99（现省 $20）'
      },
      buttonText: {
        en: 'Select on Gumroad ($79) ↗',
        zh: '前往 Gumroad 選購 ($79) ↗',
        hans: '前往 Gumroad 选购 ($79) ↗'
      },
      desc: {
        en: 'Most popular option! Ideal for cross-platform creators needing both Win & Mac.',
        zh: '最受歡迎！適合跨平台同時使用 Windows 桌機與 Mac 筆電的高效工作者。',
        hans: '最受欢迎！适合跨平台同时使用 Windows 台式机与 Mac 笔记本的高效工作者。'
      }
    }
  ];

  const pricingFeatures = {
    en: [
      '100% standalone desktop Win & Mac utility (v1.3.1 - zero bloat)',
      'Unlimited transcription via your own Groq/DeepSeek API keys',
      'Trie Tree custom terminology matching engine',
      'Sub-second transcription & format response speeds',
      'Fail-Silent automatic clipboard backup safety',
      'Free lifetime upgrades to all v1.x future iterations',
    ],
    zh: [
      '100% 獨立的 Win & Mac 桌面工具程式（v1.3.1 輕量免安裝）',
      '使用您自己的 Groq/DeepSeek API 金鑰，無限轉錄',
      'Trie 樹客製化自訂字彙配對引擎',
      '低於一秒的超高速轉錄與排版回應',
      '故障隱藏 (Fail-Silent) 自動剪貼簿安全備份',
      '未來所有 v1.x 系列版本均享永久免費升級',
    ],
    hans: [
      '100% 独立的 Win & Mac 桌面工具程序（v1.3.1 轻量免安装）',
      '使用您自己的 Groq/DeepSeek API 密钥，无限转录',
      'Trie 树客制化自订字汇配对引擎',
      '低于一秒的超高速转录与排版回应',
      '故障隐藏 (Fail-Silent) 自动剪贴簿安全备份',
      '未来所有 v1.x 系列版本均享永久免费升级',
    ]
  };

  const roadmapMilestones = [
    {
      id: 'parallel-racing-engine',
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      tag: { en: 'v1.4 High Priority', zh: 'v1.4 高優先', hans: 'v1.4 高优先' },
      tagColor: 'text-amber-700 bg-amber-50 border-amber-200',
      title: { 
        en: '⚡ Parallel Racing Engine', 
        zh: '⚡ 智慧多模型並行多引擎 (Parallel Racing Engine)', 
        hans: '⚡ 智慧多模型并行多引擎 (Parallel Racing Engine)' 
      },
      desc: {
        en: 'Quadruple acceleration with extreme speed leap! V1.4 introduces an ultra-fast dual-model parallel mechanism supporting Groq & DeepSeek (with OpenAI / Gemini interfaces reserved). Low-latency asynchronous racing cuts response times down to the blink of an eye!',
        zh: '四重加速，速度飛躍！V1.4 將提供極致的雙模型並行機制，支援 Groq 與 DeepSeek（並預留 OpenAI / Gemini 接口）。透過底層非同步賽馬機制，大幅度降低等待延遲，讓語音輸入到文字拋光在眨眼間完成！',
        hans: '四重加速，速度飞跃！V1.4 将提供极致的双模型并行机制，支持 Groq 与 DeepSeek（并预留 OpenAI / Gemini 接口）。透过底层非同步赛马机制，大幅度降低等待延迟，让语音输入到文字抛光在眨眼间完成！'
      }
    },
    {
      id: 'obsidian-integration',
      icon: <BookOpen className="w-5 h-5 text-purple-600" />,
      tag: { en: 'v1.4 Live', zh: 'v1.4 已上線', hans: 'v1.4 已上线' },
      tagColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      title: { 
        en: 'Obsidian Deep Knowledge Base Integration', 
        zh: 'Obsidian 知識庫深度物理聯動', 
        hans: 'Obsidian 知识库深度物理联动' 
      },
      desc: {
        en: (
          <div className="space-y-1.5">
            <p>Built-in physical file writing for your second brain! Instant switching across three professional note modes:</p>
            <ul className="space-y-1 pl-1 text-[11px] sm:text-xs">
              <li>• <span className="font-semibold text-slate-700">Fleeting Notes</span>: Auto timestamped and appended in seconds to <code className="bg-slate-200/70 px-1 py-0.5 rounded text-[10px] font-mono">DailyNotes/YYYY-MM-DD.md</code>.</li>
              <li>• <span className="font-semibold text-slate-700">To-Do List</span>: Auto-structured into standard Markdown <code className="bg-slate-200/70 px-1 py-0.5 rounded text-[10px] font-mono">- [ ]</code> checkboxes in <code className="bg-slate-200/70 px-1 py-0.5 rounded text-[10px] font-mono">ToDo.md</code>.</li>
              <li>• <span className="font-semibold text-slate-700">Bi-directional Inspiration</span>: Stage 2 AI wraps technical keywords into <code className="bg-slate-200/70 px-1 py-0.5 rounded text-[10px] font-mono">[[wikilinks]]</code> appended to <code className="bg-slate-200/70 px-1 py-0.5 rounded text-[10px] font-mono">Inbox.md</code>, illuminating your knowledge graph!</li>
            </ul>
          </div>
        ),
        zh: (
          <div className="space-y-1.5">
            <p>為第二大腦打造的後台物理寫檔整合！支援一鍵切換三大專業筆記模式：</p>
            <ul className="space-y-1 pl-1 text-[11px] sm:text-xs">
              <li>• <span className="font-semibold text-slate-700">閃念日記</span>：自動打上即時時間戳，秒級追加至 <code className="bg-slate-200/70 px-1 py-0.5 rounded text-[10px] font-mono">DailyNotes/YYYY-MM-DD.md</code>。</li>
              <li>• <span className="font-semibold text-slate-700">待辦清單</span>：自動整理語意並生成標準 Markdown <code className="bg-slate-200/70 px-1 py-0.5 rounded text-[10px] font-mono">- [ ]</code> 待辦核取方塊至 <code className="bg-slate-200/70 px-1 py-0.5 rounded text-[10px] font-mono">ToDo.md</code>。</li>
              <li>• <span className="font-semibold text-slate-700">雙向靈感</span>：Stage 2 AI 自動識別專業技術名詞，強制封裝為 <code className="bg-slate-200/70 px-1 py-0.5 rounded text-[10px] font-mono">[[雙向鏈接]]</code> 追加至 <code className="bg-slate-200/70 px-1 py-0.5 rounded text-[10px] font-mono">Inbox.md</code>，即時點亮 Obsidian 知識圖譜！</li>
            </ul>
          </div>
        ),
        hans: (
          <div className="space-y-1.5">
            <p>为第二大脑打造的后台物理写档整合！支持一键切换三大专业笔记模式：</p>
            <ul className="space-y-1 pl-1 text-[11px] sm:text-xs">
              <li>• <span className="font-semibold text-slate-700">闪念日记</span>：自动打上即时时间戳，秒级追加至 <code className="bg-slate-200/70 px-1 py-0.5 rounded text-[10px] font-mono">DailyNotes/YYYY-MM-DD.md</code>。</li>
              <li>• <span className="font-semibold text-slate-700">待办清单</span>：自动整理语意并生成标准 Markdown <code className="bg-slate-200/70 px-1 py-0.5 rounded text-[10px] font-mono">- [ ]</code> 待办复选框至 <code className="bg-slate-200/70 px-1 py-0.5 rounded text-[10px] font-mono">ToDo.md</code>。</li>
              <li>• <span className="font-semibold text-slate-700">双向灵感</span>：Stage 2 AI 自动识别专业技术名词，强制封装为 <code className="bg-slate-200/70 px-1 py-0.5 rounded text-[10px] font-mono">[[双向链接]]</code> 追加至 <code className="bg-slate-200/70 px-1 py-0.5 rounded text-[10px] font-mono">Inbox.md</code>，即时点亮 Obsidian 知识图谱！</li>
            </ul>
          </div>
        )
      }
    },
    {
      id: 'social-emoji-polish',
      icon: <Smile className="w-5 h-5 text-pink-500" />,
      tag: { en: 'v1.4 Recommended', zh: 'v1.4 推薦', hans: 'v1.4 推荐' },
      tagColor: 'text-pink-700 bg-pink-50 border-pink-200',
      title: { 
        en: 'Social & Emoji Polish Mode', 
        zh: '社群社交潤飾模式 (Social & Emoji Polish)', 
        hans: '社群社交润饰模式 (Social & Emoji Polish)' 
      },
      desc: {
        en: 'Specially crafted for social chats and posts! Supports custom Emoji density tuning, automatically transforming stiff spoken words into friendly, expressive, and highly engaging social copy.',
        zh: '專為社群聊天與貼文設計！支援自訂 Emoji 密度調節，自動將生硬口語轉換為親切、生動且具備高互動感的社交風格文案。',
        hans: '专为社群聊天与贴文设计！支持自订 Emoji 密度调节，自动将生硬口语转换为亲切、生动且具备高互动感的社交风格文案。'
      }
    },
    {
      id: 'auto-focus-window-target',
      icon: <Target className="w-5 h-5 text-sky-500" />,
      tag: { en: 'v1.4', zh: 'v1.4', hans: 'v1.4' },
      tagColor: 'text-violet-700 bg-violet-50 border-violet-200',
      title: { 
        en: 'Auto-Focus Window Target Injection', 
        zh: '全自動焦點鎖定注入技術 (Auto-Focus Window Target)', 
        hans: '全自动焦点锁定注入技术 (Auto-Focus Window Target)' 
      },
      desc: {
        en: '1.4 brings the ultimate smooth experience! Completely eliminates manual cursor switching or clicking to focus. InstantFlow automatically locks onto the target active window upon recording and injects polished text precisely at the cursor within 400ms.',
        zh: '1.4 版帶來極致操作體驗！完全無需手動切換游標或點擊聚焦，不論你在進行何種操作，InstantFlow 都能在錄音啟動瞬間自動鎖定目標視窗，並在 400 毫秒內將文字精準注入游標位置。',
        hans: '1.4 版带来极致操作体验！完全无需手动切换游标或点击聚焦，不论你在进行何种操作，InstantFlow 都能在录音启动瞬间自动锁定目标窗口，并在 400 毫秒内将文字精准注入游标位置。'
      }
    }
  ];

  return (
    <section id="pricing-roadmap" className="py-20 bg-transparent px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-sky-100/30 to-violet-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase text-indigo-600 bg-indigo-50 border border-indigo-100">
            {t('Lifetime Pricing & Platform Options (v1.3.1)', '終身買斷授權方案 (v1.3.1 雙平台版)', '终身买断授权方案 (v1.3.1 双平台版)')}
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            {t('Buy v1.3.1 today. Own Win & Mac lifetime access.', '今天入主 v1.3.1，完美支援 Win & Mac 終身買斷。', '今天入主 v1.3.1，完美支持 Win & Mac 终身买断。')}
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            {t(
              'No subscription fees, no limits. Choose your platform pass on Gumroad and enjoy lifetime updates to all v1.x releases.',
              '無訂閱月費負擔、不設限制。請選擇適合您的平台授權方案，一次買斷，未來所有 v1.x 版本享有永久免費升級。',
              '无订阅月费负担、不设限制。请选择适合您的平台授权方案，一次买断，未来所有 v1.x 版本享有永久免费升级。'
            )}
          </p>
        </div>

        {/* 3 Gumroad Pass Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`flex flex-col justify-between rounded-3xl p-6 sm:p-8 transition-all duration-300 relative overflow-hidden ${
                tier.isPopular
                  ? 'bg-gradient-to-b from-white via-indigo-50/40 to-purple-50/60 border-2 border-indigo-500 shadow-2xl shadow-indigo-200/50 -translate-y-1'
                  : 'bg-white/80 backdrop-blur-xl border border-slate-200 shadow-xl shadow-slate-100 hover:border-indigo-300'
              }`}
            >
              {/* Top Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-xl bg-slate-100 text-slate-700">
                  {tier.platformIcon}
                </div>
                <span
                  className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-bold tracking-wide ${
                    tier.isPopular
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-200 animate-pulse'
                      : 'bg-slate-100 text-slate-600 border border-slate-200'
                  }`}
                >
                  {tier.badge[currentLang]}
                </span>
              </div>

              {/* Title & Price */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-display font-extrabold text-xl text-slate-900 leading-snug">
                    {tier.title}
                  </h3>
                  <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                    {tier.desc[currentLang]}
                  </p>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline space-x-1.5 pt-2 border-t border-slate-100">
                  <span className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight">
                    {tier.price}
                  </span>
                  <span className="text-slate-400 font-semibold text-xs">
                    {t('/ lifetime pass', '/ 終身買斷', '/ 终身买断')}
                  </span>
                </div>

                {/* Highlight text matching Gumroad options */}
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-150 text-xs font-semibold text-slate-700 leading-relaxed">
                  {tier.licenseText[currentLang]}
                </div>

                {/* Price Increase Alert */}
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-800 text-[11px] font-bold flex items-center space-x-1.5">
                  <Flame className="w-3.5 h-3.5 text-amber-600 shrink-0 fill-amber-500" />
                  <span>{tier.priceAlert[currentLang]}</span>
                </div>
              </div>

              {/* Buy Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <a
                  href={customStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-center space-x-2 w-full py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 transform active:scale-95 ${
                    tier.isPopular
                      ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-lg shadow-indigo-200'
                      : 'bg-slate-900 hover:bg-slate-800 text-white shadow-md'
                  }`}
                >
                  <span>{tier.buttonText[currentLang]}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Lifetime Guarantee Promise Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-purple-900/10 via-indigo-900/10 to-purple-900/10 border border-indigo-200/80 text-center max-w-4xl mx-auto shadow-sm">
          <p className="text-xs sm:text-sm font-bold text-indigo-950 flex items-center justify-center gap-2 flex-wrap">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 inline" />
            <span>
              {t(
                '✦ Guarantee: Buy once, enjoy free lifetime upgrades including v1.4 and all future releases. Never pay any extra upgrade fees.',
                '✦ 承諾：一次買斷，終身享有包含 V1.4 在內的所有未來版本免費升級，老用戶絕不加收費用。',
                '✦ 承诺：一次买断，终身享有包含 V1.4 在内的所有未来版本免费升级，老用户绝不加收费用。'
              )}
            </span>
          </p>
        </div>

        {/* Feature Highlights & v1.4 Roadmap side-by-side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
          
          {/* Left Column: What's included in all passes */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-indigo-600 block mb-1">
                  {t('ALL PASSES INCLUDE', '所有授權方案均包含', '所有授权方案均包含')}
                </span>
                <h3 className="font-display font-extrabold text-2xl text-slate-800">
                  {t('Core InstantFlow Capabilities', '核心極速體驗與完整功能', '核心极速体验与完整功能')}
                </h3>
              </div>

              <p className="text-slate-500 text-sm leading-relaxed border-b border-slate-100 pb-4">
                {t(
                  'Connect directly to your own Groq/DeepSeek API endpoints. Never pay unnecessary developer markups.',
                  '直接對接您個人的 Groq/DeepSeek API 連線點，從此不再為中間月租與轉錄次數限額發愁。',
                  '直接对接您个人的 Groq/DeepSeek API 连线点，从此不再为中间月租与转录次数限额发愁。'
                )}
              </p>

              {/* Bullet list of features */}
              <div className="space-y-3.5">
                {pricingFeatures[currentLang].map((feat, i) => (
                  <div key={i} className="flex items-start space-x-3 text-slate-700 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-center space-x-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>{t('Secured Gumroad checkout • Instant key delivery', 'Gumroad 安全交易認證 • 付款後立即發送金鑰', 'Gumroad 安全交易认证 • 付款后立即发送金钥')}</span>
            </div>
          </div>

          {/* Right Column: v1.4 Roadmap Timeline */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-slate-50/80 border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-inner">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-violet-600 block mb-1">
                  {t('UPCOMING FLAGSHIP MILESTONES', '即將推出的旗艦功能', '即将推出的旗舰功能')}
                </span>
                <h3 className="font-display font-extrabold text-2xl text-slate-800">
                  {t('v1.4 Roadmap Upgrade', 'v1.4 產品演進藍圖', 'v1.4 产品演进蓝图')}
                </h3>
                <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
                  {t(
                    'Current buyers lock in free permanent access to all v1.4 flagship updates.',
                    '目前購買 v1.3.1 的客戶將全自動獲得未來 v1.4 旗艦大更新之永久免費升級權限。',
                    '目前购买 v1.3.1 的客户将全自动获得未来 v1.4 旗舰大更新之永久免费升级权限。'
                  )}
                </p>
              </div>

              {/* Roadmap Milestones Staggered list */}
              <div className="space-y-5 relative before:absolute before:top-2 before:bottom-2 before:left-5 before:w-0.5 before:bg-indigo-100">
                {roadmapMilestones.map((milestone) => (
                  <div key={milestone.id} className="flex items-start space-x-4 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm shrink-0">
                      {milestone.icon}
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-display font-extrabold text-sm text-slate-800">
                          {milestone.title[currentLang]}
                        </h4>
                        <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border ${milestone.tagColor || 'text-violet-600 bg-violet-50 border-violet-100'}`}>
                          {milestone.tag[currentLang]}
                        </span>
                      </div>
                      <div className="text-slate-500 text-xs leading-relaxed">
                        {milestone.desc[currentLang]}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200/50 mt-6 text-center">
              <span className="text-slate-500 text-xs italic font-sans">
                {t('No extra fees when v1.4 launches!', 'v1.4 正式發行時絕不收取額外升級費用！', 'v1.4 正式发行时绝不收取额外升级费用！')}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
