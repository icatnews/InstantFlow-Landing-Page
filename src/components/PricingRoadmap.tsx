import { CheckCircle2, ArrowUpRight, ShieldCheck, Sparkles, AudioLines, Volume2, Monitor, Laptop, Layers, Zap } from 'lucide-react';
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
      badge: { en: 'Windows Dual-PC', zh: 'Windows 雙機版', hans: 'Windows 双机版' },
      isPopular: false,
      platformIcon: <Monitor className="w-5 h-5 text-indigo-600" />,
      licenseText: {
        en: 'Authorize up to 2 Windows PCs (Lifetime License)',
        zh: '可授權 2 台 Windows 電腦（終身買斷）',
        hans: '可授权 2 台 Windows 电脑（终身买断）'
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
      badge: { en: 'Mac Dual-Mac', zh: 'Mac 雙機版', hans: 'Mac 双机版' },
      isPopular: false,
      platformIcon: <Laptop className="w-5 h-5 text-purple-600" />,
      licenseText: {
        en: 'Authorize up to 2 Mac computers (Lifetime License)',
        zh: '可授權 2 台 Mac 電腦（終身買斷）',
        hans: '可授权 2 台 Mac 电脑（终身买断）'
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
      badge: { en: '🔥 Hot Pick', zh: '🔥【熱銷推薦】', hans: '🔥【热销推荐】' },
      isPopular: true,
      platformIcon: <Layers className="w-5 h-5 text-indigo-500" />,
      licenseText: {
        en: '【Hot Pick】Simultaneously authorize 1 Windows + 1 Mac',
        zh: '【熱銷推薦】同時擁有 1 台 Windows + 1 台 Mac 授權',
        hans: '【热销推荐】同时拥有 1 台 Windows + 1 台 Mac 授权'
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
      tag: { en: 'v1.4 Max Upgrade', zh: 'v1.4 滿血進化', hans: 'v1.4 满血进化' },
      title: { 
        en: '⚡ Parallel Racing Engine (Groq + DeepSeek + OpenAI + Gemini)', 
        zh: '⚡ 智慧多模型全網非同步併行競速機制 (Parallel Racing Engine)', 
        hans: '⚡ 智慧多模型全网非同步并行竞速机制 (Parallel Racing Engine)' 
      },
      desc: {
        en: 'Four-way parallel racing—whichever model is fastest wins! v1.4 introduces native OpenAI & Gemini API Key integrations alongside Groq and DeepSeek. Upon dictation, background requests shoot simultaneously to all 4 models. Whichever responds first in milliseconds is adopted instantly while cancelling the other 3. Completely eliminates single API queuing or timeouts for zero-wait 0.5s dictation & polishing!',
        zh: '四強聯動，誰快用誰！v1.4 將競速架構推向極致極限。除了現有的 Groq 與 DeepSeek，全新引進 OpenAI API Key 與 Gemini API Key 物理入駐！當您完成語音口述，系統將在背景以非同步併行架構，同時向 Groq、DeepSeek、OpenAI、Gemini 全球四個頂級 AI 大模型發射處理請求。不論哪一個模型的伺服器在毫秒間最快傳回結果，系統就瞬間採用誰，並物理取消另外三條慢速連線！徹底終結單一 API 遭遇尖峰排隊、網路波動或超時卡死的絕症，實現真正無感、零等待的 0.5 秒終極文字聽寫與拋光！',
        hans: '四强联动，谁快用谁！v1.4 将竞速架构推向极致极限。除了现有的 Groq 与 DeepSeek，全新引进 OpenAI API Key 与 Gemini API Key 物理入住！当您完成语音口述，系统将在背景以非同步并行架构，同时向 Groq、DeepSeek、OpenAI、Gemini 全球四个顶级 AI 大模型发射处理请求。不论哪一个模型的服务器在毫秒间最快传回结果，系统就瞬间采用谁，并物理取消另外三条慢速连线！彻底终结单一 API 遭遇尖峰排队、网络波动或超时卡死的绝症，实现真正无感、零等待的 0.5 秒终极文字听写与抛光！'
      }
    },
    {
      id: 'voice-id',
      icon: <AudioLines className="w-5 h-5 text-indigo-600" />,
      tag: { en: 'Scheduled v1.4', zh: '規劃於 v1.4', hans: '规划于 v1.4' },
      title: { en: 'Voice ID Verification', zh: '聲紋特徵身分驗證', hans: '声纹特征身份验证' },
      desc: {
        en: 'v1.4 will introduce cutting-edge audio feature recognition to securely memorize and lock onto the owner\'s unique voice profile.',
        zh: 'v1.4 將引入前沿聲紋特徵識別技術，深度學習並僅鎖定軟體所有者的獨特聲音訊號。',
        hans: 'v1.4 将引入前沿声纹特征识别技术，深度学习并仅锁定软件所有者的独特声音信号。'
      }
    },
    {
      id: 'noise-isolation',
      icon: <Volume2 className="w-5 h-5 text-violet-600" />,
      tag: { en: 'Scheduled v1.4', zh: '規劃於 v1.4', hans: '规划于 v1.4' },
      title: { en: 'Total Background Noise Isolation', zh: '極致背景人聲與噪音過濾', hans: '极致背景人声与噪音过滤' },
      desc: {
        en: 'Whether in a busy cafe, high-speed train, or next to chatting colleagues, the engine filters out non-owners, keeping inputs 100% focused.',
        zh: '不論是在嘈雜的咖啡廳、高速行駛的高鐵、或是身處大聲聊天的同事身旁，過濾引擎會自動排除非擁有者的雜音人聲。',
        hans: '不论是在嘈杂的咖啡厅、高速行驶的高铁、或是身处大声聊天的同事身旁，过滤引擎会自动排除非拥有者的杂音人声。'
      }
    },
    {
      id: 'dictation-engine',
      icon: <Sparkles className="w-5 h-5 text-sky-500" />,
      tag: { en: 'Scheduled v1.4', zh: '規劃於 v1.4', hans: '规划于 v1.4' },
      title: { 
        en: '🔥 Auto-Focus Window Targeting Technology', 
        zh: '🔥 全自動流標錨定技術 (Auto-Focus Window Target)', 
        hans: '🔥 全自动游标锚定技术 (Auto-Focus Window Target)' 
      },
      desc: {
        en: 'A revolutionary upgrade in v1.4! Completely eliminates the tedious process of manually switching windows. No matter what app you are currently in, just click and speak. Upon text polishing, InstantFlow leverages system APIs to perform atomic "auto-focus targeting," precisely inserting your perfect text into the original input field within 400ms.',
        zh: '1.4 版迎來革命性升級！完全顛覆傳統手動切換視窗的繁瑣流程。不論您在做什麼，一鍵開講，InstantFlow 結束轉錄時會進行原子級「自動流標起始點錨定」，在 400 毫秒內精準定位並將完美文字直接注入原始輸入框。',
        hans: '1.4 版迎来革命性升级！完全颠覆传统手动切换窗口的繁琐流程。不论您在做什么，一键开讲，InstantFlow 结束转录时会进行原子级「自动游标起始点锚定」，在 400 毫秒内精准定位并将完美文字直接注入原始输入框。'
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
                  <span>{t(`Select on Gumroad (${tier.price})`, `前往 Gumroad 選購 (${tier.price})`, `前往 Gumroad 选购 (${tier.price})`)}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
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
                        <span className="text-[9px] font-mono font-bold text-violet-600 bg-violet-50 px-2 py-0.5 rounded-full border border-violet-100">
                          {milestone.tag[currentLang]}
                        </span>
                      </div>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        {milestone.desc[currentLang]}
                      </p>
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
