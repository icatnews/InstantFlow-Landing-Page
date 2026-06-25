import { DollarSign, ArrowUpRight, ClipboardCheck, UserPlus, KeyRound, Share2 } from 'lucide-react';
import { Language } from '../types';

interface AffiliateSectionProps {
  currentLang: Language;
}

export default function AffiliateSection({ currentLang }: AffiliateSectionProps) {
  const steps = [
    {
      id: 1,
      icon: <UserPlus className="w-5 h-5 text-indigo-600" />,
      title: { en: 'Join First', zh: '1. 快速註冊與申請', hans: '1. 快速注册与申请' },
      desc: {
        en: 'Click "Apply via Gumroad" to submit your request using your free Gumroad creator account.',
        zh: '點擊下方「透過 Gumroad 申請」按鈕，使用您免費的 Gumroad 帳戶送出合作夥伴申請。',
        hans: '点击下方“透过 Gumroad 申请”按钮，使用您免费的 Gumroad 账户送出合作伙伴申请。'
      }
    },
    {
      id: 2,
      icon: <KeyRound className="w-5 h-5 text-violet-600" />,
      title: { en: 'Get Your Link', zh: '2. 獲得專屬推薦碼', hans: '2. 获得专属推荐码' },
      desc: {
        en: 'Once our team approves your application (usually within 24-48 hours), you will receive a unique referral link.',
        zh: '經我們團隊在 24-48 小時內審核通過後，您將立刻拿到一條代表您身分的專屬推廣連結。',
        hans: '经我们团队在 24-48 小时内审核通过后，您将立刻拿到一条代表您身份的专属推广连结。'
      }
    },
    {
      id: 3,
      icon: <Share2 className="w-5 h-5 text-sky-500" />,
      title: { en: 'Promote & Share', zh: '3. 分享並獲取回報', hans: '3. 分享并获取回报' },
      desc: {
        en: 'Share InstantFlow with your audience. Earn 30% on every single successful license key sale!',
        zh: '向您的粉絲或社群分享 InstantFlow。每當有人經由您的連結成功購買，您就能賺取 30% 傭金！',
        hans: '向您的粉丝或社群分享 InstantFlow。每当有人经由您的连结成功购买，您就能赚取 30% 佣金！'
      }
    }
  ];

  const t = (en: string, zh: string, hans: string) => {
    if (currentLang === 'en') return en;
    if (currentLang === 'hans') return hans;
    return zh;
  };

  return (
    <section id="affiliate" className="py-20 bg-slate-50 border-y border-slate-200/50 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-tr from-sky-200/10 to-indigo-200/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase text-indigo-600 bg-indigo-50 border border-indigo-100 animate-pulse">
            {t('Affiliate Partner Program', '合作夥伴推廣計畫', '合作伙伴推广计划')}
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            {t('Earn 30% on every successful referral.', '分享並推廣，每筆訂單可賺取高達 30% 的佣金。', '分享并推广，每笔订单可赚取高达 30% 的佣金。')}
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            {t(
              'Works perfectly for creators, tech bloggers, productivity hack enthusiasts, developers, and AI educators.',
              '完美契合開發者、部落客、效率工具達人、內容創作者以及各類 AI 工具宣傳導師。',
              '完美契合开发者、部落客、效率工具达人、内容创作者以及各类 AI 工具宣传导师。'
            )}
          </p>
        </div>

        {/* Highlight Banner Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/80 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg">
          
          {/* Pitch Left column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-2.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl text-slate-800">
                {t('Simple Pain Point. Simple Pitch.', '痛點明確，超好推廣', '痛点明确，超好推广')}
              </h3>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              {t(
                'InstantFlow resolves a massive daily frustration for power users who dictate frequently but hate standard AI transcription typos. With sub-second dictionary lookup and zero recurring subscriptions, the conversion rates sell itself.',
                '許多重度 AI 使用者渴望流暢用語音輸入，卻受夠了語音逐字稿錯字連篇與永無止盡的訂閱月費負擔。InstantFlow 透過 Trie 樹客製字典與一次買斷機制完美擊中痛點，超高成交轉換率無可匹敵。',
                '许多重度 AI 使用者渴望流畅语音输入，却受够了语音逐字稿错字连篇与永无止境的订阅月费负担。InstantFlow 东方 Trie 树客制字典与一次买断机制完美击中痛点，超高成交转换率无可匹敌。'
              )}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="font-display font-extrabold text-indigo-600 text-sm block mb-1">
                  {t('30% Commission', '30% 優渥分潤', '30% 优渥分润')}
                </span>
                <p className="text-slate-500 text-xs">
                  {t(
                    'No capping on earnings. Get paid automatically on Gumroad.',
                    '獎金分潤無上限。直接經由 Gumroad 安全支付入帳。',
                    '奖金分润无上限。直接经由 Gumroad 安全支付入帐。'
                  )}
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="font-display font-extrabold text-violet-600 text-sm block mb-1">
                  {t('Highly Captivating Demo', '超吸睛短片宣傳題材', '超吸睛短片宣传题材')}
                </span>
                <p className="text-slate-500 text-xs">
                  {t(
                    'Extremely easy to showcase speed differences in short 15-second reels.',
                    '利用簡單的語音打字對比，15 秒短影音即可帶來海量轉化率。',
                    '利用简单的语音打字对比，15 秒短影音即可带来海量转化率。'
                  )}
                </p>
              </div>
            </div>

            {/* Application CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
              <a
                href="https://gumroad.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center space-x-1.5 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-md transition-all duration-300"
              >
                <span>{t('Apply via Gumroad', '透過 Gumroad 提交申請', '透过 Gumroad 提交申请')}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#faq"
                className="flex items-center justify-center space-x-1.5 px-6 py-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-all"
              >
                <ClipboardCheck className="w-4 h-4 text-slate-500" />
                <span>{t('How it Works', '了解推廣機制', '了解推广机制')}</span>
              </a>
            </div>
          </div>

          {/* Steps Right column */}
          <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200/60 space-y-6">
            <h4 className="font-display font-extrabold text-sm text-slate-700 uppercase tracking-wider block border-b border-slate-200 pb-3">
              {t('EASY STEP-BY-STEP PROCESS', '只要三步驟，即刻開始賺取推薦金', '只要三步骤，即刻开始赚取推荐金')}
            </h4>
            
            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.id} className="flex items-start space-x-4">
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shadow-sm shrink-0">
                    {step.icon}
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-display font-extrabold text-sm text-slate-800">
                      {step.title[currentLang]}
                    </h5>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {step.desc[currentLang]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
