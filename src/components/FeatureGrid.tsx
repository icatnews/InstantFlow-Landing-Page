import { Cpu, Zap, Sparkles, Languages, ShieldCheck, Box, CheckCircle } from 'lucide-react';
import { coreFeatures } from '../data';
import { Language } from '../types';

interface FeatureGridProps {
  currentLang: Language;
}

export default function FeatureGrid({ currentLang }: FeatureGridProps) {
  const getIcon = (id: string) => {
    switch (id) {
      case 'trie':
        return <Cpu className="w-5 h-5 text-indigo-600" />;
      case 'groq':
        return <Zap className="w-5 h-5 text-amber-500" />;
      case 'deepseek':
        return <Sparkles className="w-5 h-5 text-purple-500" />;
      case 'variants':
        return <Languages className="w-5 h-5 text-sky-500" />;
      case 'failsilent':
        return <ShieldCheck className="w-5 h-5 text-emerald-500" />;
      case 'portable':
        return <Box className="w-5 h-5 text-indigo-500" />;
      default:
        return <CheckCircle className="w-5 h-5 text-slate-500" />;
    }
  };

  const t = (en: string, zh: string, hans: string) => {
    if (currentLang === 'en') return en;
    if (currentLang === 'hans') return hans;
    return zh;
  };

  return (
    <section id="features" className="py-20 bg-transparent px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Blur Circles */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase text-indigo-600 bg-indigo-50 border border-indigo-100">
            {t('Built for Power Users', '專為極致工作流而生', '专为极致工作流而生')}
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            {t('Heavy daily dictation, not just transcription.', '強悍的日常語音輸入，絕不只是逐字稿。', '强悍的日常语音输入，绝不只是逐字稿。')}
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            {t(
              'Our architectural upgrades ensure InstantFlow remains rock-solid even when custom dictionaries expand, APIs fluctuate, or homophones match.',
              '我們進行了深度的架構升級，確保即使自訂字典無上限擴展、API 連線速度波動、或者面臨繁雜同音字，InstantFlow 依然穩健可靠。',
              '我们进行了深度的架构升级，确保即使自订字典无上限扩展、API 连线速度波动、或者面临繁杂同音字，InstantFlow 依然稳健可靠。'
            )}
          </p>
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {coreFeatures.map((feature, idx) => (
            <div
              key={feature.id}
              className="group relative bg-white/80 backdrop-blur-xl border border-slate-200/60 hover:border-indigo-300 rounded-2xl p-6 sm:p-8 transition-all duration-300 transform hover:-translate-y-1.5 shadow-md hover:shadow-2xl hover:shadow-indigo-100/40"
            >
              {/* Feature Accent Glow micro borders */}
              <div className={`absolute -inset-[1px] bg-gradient-to-r ${
                idx % 3 === 0 
                  ? 'from-indigo-500/20 via-purple-500/10 to-transparent' 
                  : idx % 3 === 1 
                    ? 'from-purple-500/20 via-amber-400/10 to-transparent'
                    : 'from-amber-400/20 via-indigo-500/10 to-transparent'
              } opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none`} />

              <div className="flex items-start justify-between mb-6 relative z-10">
                {/* Icon Circle */}
                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-150 flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                  {getIcon(feature.id)}
                </div>

                {/* Badge/Tag */}
                {feature.badge && (
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-100/80 text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                    {feature.badge[currentLang]}
                  </span>
                )}
              </div>

              {/* Title & Desc */}
              <div className="space-y-3 relative z-10">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono font-semibold text-indigo-400">
                    {feature.number}
                  </span>
                  <h3 className="font-display font-bold text-lg text-slate-800">
                    {feature.title[currentLang]}
                  </h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.description[currentLang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
