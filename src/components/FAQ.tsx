import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { userFAQs, affiliateFAQs } from '../data';
import { Language } from '../types';

interface FAQProps {
  currentLang: Language;
}

export default function FAQ({ currentLang }: FAQProps) {
  const [activeTab, setActiveTab] = useState<'user' | 'affiliate'>('user');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  const faqList = activeTab === 'user' ? userFAQs : affiliateFAQs;

  const t = (en: string, zh: string, hans: string) => {
    if (currentLang === 'en') return en;
    if (currentLang === 'hans') return hans;
    return zh;
  };

  return (
    <section id="faq" className="py-20 bg-transparent px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase text-indigo-600 bg-indigo-50 border border-indigo-100">
            {t('Common Questions', '常見問題與解答', '常见问题与解答')}
          </span>
          <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight">
            {t('Have questions? We have answers.', '任何關於安全、定價或推廣的疑問？看這裡', '任何关于安全、定价或推广的疑问？看这里')}
          </h2>
        </div>

        {/* FAQ Tabs Selector */}
        <div className="flex justify-center">
          <div className="bg-slate-100 p-1 rounded-full border border-slate-200/50 flex">
            <button
              onClick={() => {
                setActiveTab('user');
                setExpandedId(null);
              }}
              className={`px-6 py-2.5 rounded-full font-sans text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'user'
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t('Product FAQ', '產品使用者問答', '产品使用者问答')}
            </button>
            <button
              onClick={() => {
                setActiveTab('affiliate');
                setExpandedId(null);
              }}
              className={`px-6 py-2.5 rounded-full font-sans text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'affiliate'
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t('Affiliate FAQ', '推廣夥伴問答', '推广伙伴问答')}
            </button>
          </div>
        </div>

        {/* Expandable FAQ Accordion Cards */}
        <div className="space-y-4">
          {faqList.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                className={`bg-white/75 backdrop-blur-xl border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'border-indigo-200 shadow-lg shadow-indigo-50/50'
                    : 'border-slate-200/60 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center space-x-3.5 pr-4">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${
                      isExpanded ? 'text-indigo-600' : 'text-slate-400'
                    }`} />
                    <span className="font-display font-bold text-sm sm:text-base text-slate-800 leading-snug">
                      {item.question[currentLang]}
                    </span>
                  </div>
                  <div>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-indigo-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 hover:text-slate-600" />
                    )}
                  </div>
                </button>

                {/* Answer block */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isExpanded ? 'max-h-64 border-t border-slate-100 p-5 bg-slate-50/30' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line font-sans">
                    {item.answer[currentLang]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
