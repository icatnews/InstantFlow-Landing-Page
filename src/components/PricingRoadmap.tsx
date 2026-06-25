import { CheckCircle2, ArrowUpRight, ShieldCheck, Sparkles, AudioLines, Volume2 } from 'lucide-react';
import { Language } from '../types';

interface PricingRoadmapProps {
  currentLang: Language;
  customStoreUrl: string;
}

export default function PricingRoadmap({ currentLang, customStoreUrl }: PricingRoadmapProps) {
  const pricingFeatures = {
    en: [
      '1 Standard License key (Up to 2 PCs simultaneously)',
      '100% standalone desktop Windows utility (Zero bloat)',
      'Unlimited transcription via your own Groq/DeepSeek API keys',
      'Trie Tree custom terminology matching engine',
      'Sub-second transcription response speeds',
      'Fail-Silent automatic clipboard backup safety',
      'Free lifetime upgrades to all v1.x future iterations',
    ],
    zh: [
      '1 組標準授權金鑰（可同時在最多 2 台電腦上啟用）',
      '100% 獨立的 Windows 桌面工具程式（輕量免安裝）',
      '使用您自己的 Groq/DeepSeek API 金鑰，無限轉錄',
      'Trie 樹客製化自訂字彙配對引擎',
      '低於一秒的超高速轉錄與排版回應',
      '故障隱藏 (Fail-Silent) 自動剪貼簿安全備份',
      '未來所有 v1.x 系列版本均享永久免費升級',
    ],
    hans: [
      '1 组标准授权金钥（可同时在最多 2 台电脑上启用）',
      '100% 独立的 Windows 桌面工具程序（轻量免安装）',
      '使用您自己的 Groq/DeepSeek API 密钥，无限转录',
      'Trie 树客制化自订字汇配对引擎',
      '低于一秒的超高速转录与排版回应',
      '故障隐藏 (Fail-Silent) 自动剪贴簿安全备份',
      '未来所有 v1.x 系列版本均享永久免费升级',
    ]
  };

  const roadmapMilestones = [
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
        en: 'A revolutionary upgrade in v1.4! Completely eliminates the tedious process of manually switching windows. No matter what app you are currently in, just click and speak. Upon text polishing, InstantFlow leverages Windows APIs to perform atomic "auto-focus targeting," precisely inserting your perfect text into the original input field within 400ms. True uninterrupted flow—keeping your hands and focus exactly where they belong!',
        zh: '1.4 版迎來革命性升級！完全顛覆傳統需要手動切換視窗的繁瑣流程。不論您在做什麼，一鍵開講，InstantFlow 結束轉錄時會透過 Windows API 進行原子級「自動流標起始點錨定」，在 400 毫秒內精準定位並將完美文字直接注入原始輸入框。真正的無縫銜接，讓您的雙手與視線永遠留在創作的核心頁面！',
        hans: '1.4 版迎来革命性升级！完全颠覆传统需要手动切换窗口的繁琐流程。不论您在做什么，一键开讲，InstantFlow 结束转录时会通过 Windows API 进行原子级「自动游标起始点锚定」，在 400 毫秒内精准定位并将完美文字直接注入原始输入框。真正的无缝衔接，让您的双手与视线永远留在创作的核心页面！'
      }
    }
  ];

  const t = (en: string, zh: string, hans: string) => {
    if (currentLang === 'en') return en;
    if (currentLang === 'hans') return hans;
    return zh;
  };

  return (
    <section id="pricing-roadmap" className="py-20 bg-transparent px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-sky-100/30 to-violet-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase text-indigo-600 bg-indigo-50 border border-indigo-100">
            {t('Lifetime Pricing & Roadmap', '終身授權與產品路線圖', '终身授权与产品路线图')}
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            {t('Buy v1.3 today. Get v1.4 as a free upgrade.', '今天入主 v1.3，免費升級 v1.4 旗艦大改版。', '今天入主 v1.3，免费升级 v1.4 旗舰大改版。')}
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            {t(
              'No subscription fees, no limits, no servers in between. Just flawless local control with your own Keys.',
              '無訂閱月費負擔、不設限制、不經手任何中間伺服器。僅憑您的個人金鑰，即可享受完美的本機自訂掌控權。',
              '无订阅月费负担、不设限制、不经手任何中间服务器。仅凭您的个人金钥，即可享受完美的本机自订掌控权。'
            )}
          </p>
        </div>

        {/* Side-by-Side Pricing Card & Roadmap Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Premium Pricing Card (8 cols or 6 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-white/80 backdrop-blur-xl border-2 border-indigo-500/80 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-indigo-100 relative overflow-hidden">
            
            {/* Top right corner decorative ribbon */}
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white bg-indigo-600 shadow-sm animate-pulse">
                <Sparkles className="w-2.5 h-2.5" />
                <span>{t('Best Choice', '終身首選', '终身首选')}</span>
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-indigo-600 block mb-1">
                  {t('INSTANTFLOW STANDARD LICENSE', 'INSTANTFLOW 標準終身授權', 'INSTANTFLOW 标准终身授权')}
                </span>
                <h3 className="font-display font-extrabold text-2xl text-slate-800">
                  {t('Buy Once, Own Forever', '一次買斷，終身受用', '一次买断，终身受用')}
                </h3>
              </div>

              {/* Price Tag */}
              <div className="flex items-baseline space-x-2">
                <span className="font-display font-black text-5xl sm:text-6xl text-slate-900 tracking-tight">$59</span>
                <span className="text-slate-500 font-semibold text-sm">
                  {t('/ one-time purchase', '/ 一次性付款', '/ 一次性付款')}
                </span>
              </div>

              <p className="text-slate-500 text-sm leading-relaxed border-b border-slate-100 pb-6">
                {t(
                  'Connect directly to your own Groq/DeepSeek API endpoints. Never suffer from rising developer margin costs.',
                  '直接對接您個人的 Groq/DeepSeek API 連線點，從此不再為開發商灌水的中間月租與轉錄次數限額發愁。',
                  '直接对接您个人的 Groq/DeepSeek API 连线点，从此不再为开发商灌水的中间月租与转录次数限额发愁。'
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

            {/* Gumroad Action Button */}
            <div className="pt-8 border-t border-slate-100 mt-8">
              <a
                href={customStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center space-x-2 w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-base shadow-lg shadow-indigo-150 transition-all duration-300 transform active:scale-95"
              >
                <span>{t('Buy Now on Gumroad ($59)', '立即在 Gumroad 購買 ($59)', '立即在 Gumroad 购买 ($59)')}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <div className="flex items-center justify-center space-x-2 mt-4 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>{t('Secured Gumroad checkout • Instant key delivery', 'Gumroad 安全交易認證 • 付款後立即發送金鑰', 'Gumroad 安全交易认证 • 付款后立即发送金钥')}</span>
              </div>
            </div>

          </div>

          {/* Right Column: v1.4 Roadmap Timeline */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-slate-50/70 border border-slate-200/60 rounded-3xl p-6 sm:p-8 shadow-inner">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-violet-600 block mb-1">
                  {t('UPCOMING FLAGSHIP MILESTONES', '即將推出的旗艦功能', '即将推出的旗舰功能')}
                </span>
                <h3 className="font-display font-extrabold text-2xl text-slate-800">
                  {t('v1.4 Roadmap', 'v1.4 產品演進藍圖', 'v1.4 产品演进蓝图')}
                </h3>
                <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
                  {t(
                    'Current buyers lock in free permanent access to the following next-gen updates.',
                    '目前購買 v1.3 的客戶將全自動獲得未來 v1.4 旗艦大更新之永久免費升級權限。',
                    '目前购买 v1.3 的客户将全自动获得未来 v1.4 旗舰大更新之永久免费升级权限。'
                  )}
                </p>
              </div>

              {/* Roadmap Milestones Staggered list */}
              <div className="space-y-6 relative before:absolute before:top-2 before:bottom-2 before:left-5 before:w-0.5 before:bg-indigo-100">
                {roadmapMilestones.map((milestone) => (
                  <div key={milestone.id} className="flex items-start space-x-4 relative z-10">
                    {/* Circle icon */}
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
