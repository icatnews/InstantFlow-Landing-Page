import React from 'react';
import { Language } from '../types';

interface TestimonialsProps {
  currentLang: Language;
}

interface LocalTestimonial {
  id: string;
  author: string;
  handle: string;
  avatar: string;
  role: {
    en: string;
    zh: string;
    hans: string;
  };
  content: {
    en: { text: string; highlight: string };
    zh: { text: string; highlight: string };
    hans: { text: string; highlight: string };
  };
}

const localTestimonials: LocalTestimonial[] = [
  {
    id: 't1',
    author: 'Alex',
    handle: '@alex_dev',
    avatar: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=150&h=150&q=80',
    role: {
      en: 'Software Engineer',
      zh: '軟體工程師',
      hans: '软件工程师'
    },
    content: {
      en: {
        text: 'The Engineer Mode is incredible! Speak logic and it auto-comments, tripling coding speed.',
        highlight: 'Engineer Mode'
      },
      zh: {
        text: '工程師模式太強了！說出邏輯就自動轉成格式化註釋，效率直接翻三倍。',
        highlight: '格式化註釋'
      },
      hans: {
        text: '工程师模式太强了！说出逻辑就自动转成格式化注释，效率直接翻三倍。',
        highlight: '格式化注释'
      }
    }
  },
  {
    id: 't2',
    author: '陳小姐',
    handle: '@clara_mktg',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80',
    role: {
      en: 'Marketing Director',
      zh: '行銷主管',
      hans: '营销主管'
    },
    content: {
      en: {
        text: 'Social Mode captures my exact emotional tone; drafted a whole day of copy on my commute.',
        highlight: 'Social Mode'
      },
      zh: {
        text: '社群模式精準捕捉我的情緒語調，通勤時就能完成整天的文案初稿。',
        highlight: '社群模式'
      },
      hans: {
        text: '社群模式精准捕捉我的情绪语调，通勤时就能完成整天的文案初稿。',
        highlight: '社群模式'
      }
    }
  },
  {
    id: 't3',
    author: '王教授',
    handle: '@prof_wang',
    avatar: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=150&h=150&q=80',
    role: {
      en: 'Researcher',
      zh: '研究員',
      hans: '研究员'
    },
    content: {
      en: {
        text: 'Superb bilingual recognition! Flawless handling of specialized academic terminology.',
        highlight: 'bilingual recognition'
      },
      zh: {
        text: '中英夾雜辨識極佳。整理深度訪談錄音時，專有名詞完全難不倒它。',
        highlight: '中英夾雜'
      },
      hans: {
        text: '中英夹杂辨识极佳。整理深度访谈录音时，专有名词完全难不倒它。',
        highlight: '中英夹杂'
      }
    }
  },
  {
    id: 't4',
    author: '張同學',
    handle: '@student_chang',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80',
    role: {
      en: 'Law Student',
      zh: '法律系學生',
      hans: '法律系学生'
    },
    content: {
      en: {
        text: 'Perfect for organizing long spoken reports, saving massive post-editing hassle.',
        highlight: 'long spoken reports'
      },
      zh: {
        text: '協助長篇口述報告的整理，省下了大量查閱與重新排版的繁瑣手續。',
        highlight: '長篇口述報告'
      },
      hans: {
        text: '协助长篇口述报告的整理，省下了大量查阅与重新排版的繁琐手续。',
        highlight: '长篇口述报告'
      }
    }
  },
  {
    id: 't5',
    author: '現有用戶 A',
    handle: '@user_a_dev',
    avatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=150&h=150&q=80',
    role: {
      en: 'Web Developer',
      zh: '網頁開發者',
      hans: '网页开发者'
    },
    content: {
      en: {
        text: 'No more manual filler word correction. My speech feels as pristine as writing.',
        highlight: 'filler word correction'
      },
      zh: {
        text: '不用再費心修正贅字，InstantFlow 讓我的語音輸入像精心打字一樣專業。',
        highlight: '修正贅字'
      },
      hans: {
        text: '不用再费心修正赘字，InstantFlow 让我的语音输入像精心打字一样专业。',
        highlight: '赘字'
      }
    }
  },
  {
    id: 't6',
    author: '阿豪',
    handle: '@nomad_hao',
    avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=150&h=150&q=80',
    role: {
      en: 'Digital Nomad',
      zh: '數位遊牧者',
      hans: '数字游牧者'
    },
    content: {
      en: {
        text: 'Maintains high-accuracy outdoor voice capture even in noisy open-air cafes.',
        highlight: 'outdoor voice capture'
      },
      zh: {
        text: '在戶外環境下仍能保持高準確度的語音紀錄，收音與降噪效果令人驚艷。',
        highlight: '戶外環境'
      },
      hans: {
        text: '在户外环境下仍能保持高准确度的语音纪录，收音与降噪效果令人惊艳。',
        highlight: '户外环境'
      }
    }
  },
  {
    id: 't7',
    author: 'Jason',
    handle: '@jason_pm',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&h=150&q=80',
    role: {
      en: 'Project Manager',
      zh: '專案經理',
      hans: '专案经理'
    },
    content: {
      en: {
        text: 'The fastest response I have ever tried. Near zero latency with Groq API keys.',
        highlight: 'Near zero latency'
      },
      zh: {
        text: '反應速度是我試過最快的。配合 Groq API 幾乎零延遲，真正做到思如泉湧。',
        highlight: '幾乎零延遲'
      },
      hans: {
        text: '反应速度是我试过最快的。配合 Groq API 几乎零延迟，真正做到思如泉涌。',
        highlight: '几乎零延迟'
      }
    }
  },
  {
    id: 't8',
    author: '林同學',
    handle: '@student_lin',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&h=150&q=80',
    role: {
      en: 'Student',
      zh: '學生',
      hans: '学生'
    },
    content: {
      en: {
        text: 'As a dyslexic student, InstantFlow liberated me from formatting agony.',
        highlight: 'dyslexic student'
      },
      zh: {
        text: '身為讀寫障礙者，InstantFlow 讓我不再為報告排版痛苦，改變了我的學習方式。',
        highlight: '讀寫障礙者'
      },
      hans: {
        text: '身为读写障碍者，InstantFlow 让我不再为报告排版痛苦，改变了我的学习方式。',
        highlight: '读写障碍者'
      }
    }
  },
  {
    id: 't9',
    author: 'Sophia',
    handle: '@sophia_creatives',
    avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=150&h=150&q=80',
    role: {
      en: 'Freelance Creator',
      zh: '自由創作者',
      hans: '自由创作者'
    },
    content: {
      en: {
        text: 'I love capturing ideas while walking in the park. The transcription stability is comforting.',
        highlight: 'transcription stability'
      },
      zh: {
        text: '拋棄鍵盤後，我更喜歡在公園漫步時紀錄靈感。轉文字的穩定性令人安心。',
        highlight: '轉文字的穩定性'
      },
      hans: {
        text: '抛弃键盘后，我更喜欢在公园漫步时纪录灵感。转文字的稳定性令人安心。',
        highlight: '转文字的稳定性'
      }
    }
  },
  {
    id: 't10',
    author: '現有用戶 B',
    handle: '@user_b_notion',
    avatar: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&w=150&h=150&q=80',
    role: {
      en: 'Notion Power User',
      zh: '研發工程師',
      hans: '研发工程师'
    },
    content: {
      en: {
        text: 'Seamlessly integrates with everything from VS Code to Notion. A true flow state.',
        highlight: 'integrates with everything'
      },
      zh: {
        text: '從 VS Code 到 Notion，它是唯一能無縫融入我所有工作流的 AI 助手。',
        highlight: '無縫融入'
      },
      hans: {
        text: '从 VS Code 到 Notion，它是唯一能无缝融入我所有工作流 of AI 助手。',
        highlight: '无缝融入'
      }
    }
  },
  {
    id: 't11',
    author: 'Emily',
    handle: '@emily_design',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&h=150&q=80',
    role: {
      en: 'UI Designer',
      zh: 'UI 設計師',
      hans: 'UI 设计师'
    },
    content: {
      en: {
        text: 'Saves hours by auto-formatting spoken specs directly into bulleted markdown files.',
        highlight: 'auto-formatting spoken specs'
      },
      zh: {
        text: '口述設計規格書時，自動轉成 Markdown 清晰條列，溝通效率提升百分之百。',
        highlight: '自動轉成 Markdown'
      },
      hans: {
        text: '口述设计规格书时，自动转成 Markdown 清晰条列，沟通效率提升百分之百。',
        highlight: '自动转成 Markdown'
      }
    }
  },
  {
    id: 't12',
    author: '小馬',
    handle: '@xiaoma_tech',
    avatar: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=150&h=150&q=80',
    role: {
      en: 'Tech Reviewer',
      zh: '科技評測主',
      hans: '科技评测主'
    },
    content: {
      en: {
        text: 'Pay-as-you-go with your own API key is a genius move. Ditch subscription fees.',
        highlight: 'Pay-as-you-go'
      },
      zh: {
        text: '自備 API 密鑰按量計費省爆！沒有訂閱制月費負擔，真正的生產力神器。',
        highlight: '按量計費'
      },
      hans: {
        text: '自备 API 密钥按量计费省爆！没有订阅制月费负担，真正的生产力神器。',
        highlight: '按量计费'
      }
    }
  }
];

const HighlightText = ({ text, highlight }: { text: string; highlight: string }) => {
  if (!highlight) return <span>{text}</span>;
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  return (
    <>
      {parts.map((part, i) => 
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={i} className="text-[#DEFF9A] font-bold">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
};

export default function Testimonials({ currentLang }: TestimonialsProps) {
  const t = (en: string, zh: string, hans: string) => {
    if (currentLang === 'en') return en;
    if (currentLang === 'hans') return hans;
    return zh;
  };

  const row1 = localTestimonials.slice(0, 6);
  const row2 = localTestimonials.slice(6, 12);

  return (
    <section id="testimonials" className="py-24 bg-[#0A0A0B] border-t border-b border-slate-900 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* CSS infinite marquee and hover pausing stylesheet */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .custom-marquee-left {
          display: flex;
          width: max-content;
          animation: marquee-left 35s linear infinite;
        }
        .custom-marquee-right {
          display: flex;
          width: max-content;
          animation: marquee-right 35s linear infinite;
        }
        .custom-marquee-left:hover,
        .custom-marquee-right:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Elegant dark atmosphere glows */}
      <div className="absolute top-1/4 left-[-10%] w-[45%] h-[45%] rounded-full bg-indigo-900/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[45%] h-[45%] rounded-full bg-emerald-900/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header section with real social signals */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#DEFF9A] bg-[#DEFF9A]/10 border border-[#DEFF9A]/20">
            <span>✨</span>
            <span>{t('LOVED BY THE COMMUNITY', '社群實測口碑反饋', '社群实测口碑反馈')}</span>
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-none">
            {t('Let Trust Flow Freely', '讓信任感隨時流動', '让信任感随时流动')}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-sans">
            {t(
              'No generic testimonials. See how power users optimize their workflow, solve phonetic variant problems, and ditch subscription plans completely.',
              '拒絕罐頭套版好評。看看專業高階使用者如何優化他們的口述工作流、解決同音字拼寫問題，並徹底告別訂閱制。',
              '拒绝罐头套版好评。看看专业高阶使用者如何优化他们的口述工作流、解决同音字拼写问题，并彻底告别订阅制。'
            )}
          </p>
        </div>

        {/* Marquee Layout */}
        <div className="w-full overflow-hidden space-y-6 py-4">
          
          {/* Row 1: Leftward Marquee (Always visible) */}
          <div className="w-full overflow-hidden relative">
            <div className="custom-marquee-left gap-6 py-2">
              {row1.concat(row1).map((test, idx) => (
                <div
                  key={`${test.id}-r1-${idx}`}
                  className="w-[300px] shrink-0 bg-[#1A1A1A] rounded-[24px] p-6 text-left flex flex-col justify-between transition-all duration-300 border border-slate-800/40 hover:border-[#DEFF9A]/30 hover:shadow-lg hover:shadow-[#DEFF9A]/[0.02]"
                >
                  <div className="flex flex-col h-full justify-between gap-5">
                    <p className="text-slate-200 text-sm font-sans font-medium leading-relaxed">
                      “<HighlightText text={test.content[currentLang].text} highlight={test.content[currentLang].highlight} />”
                    </p>
                    
                    {/* Profile */}
                    <div className="flex items-center space-x-3 pt-3 border-t border-slate-800/80">
                      <img
                        src={test.avatar}
                        alt={test.author}
                        referrerPolicy="no-referrer"
                        className="w-9 h-9 rounded-full object-cover border border-slate-800 shrink-0"
                      />
                      <div className="text-left overflow-hidden">
                        <span className="font-sans font-bold text-xs text-white block truncate">
                          {test.author}
                        </span>
                        <span className="font-mono text-[9px] text-slate-500 font-semibold block truncate uppercase tracking-wider">
                          {test.handle} • {test.role[currentLang]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Rightward Marquee (On desktop, scroll opposite; on mobile, hide or stack under row 1) */}
          {/* Mobile Ready: 在手機上改為單行滾動，隱藏第二行 */}
          <div className="w-full overflow-hidden relative sm:block hidden">
            <div className="custom-marquee-right gap-6 py-2">
              {row2.concat(row2).map((test, idx) => (
                <div
                  key={`${test.id}-r2-${idx}`}
                  className="w-[300px] shrink-0 bg-[#1A1A1A] rounded-[24px] p-6 text-left flex flex-col justify-between transition-all duration-300 border border-slate-800/40 hover:border-[#DEFF9A]/30 hover:shadow-lg hover:shadow-[#DEFF9A]/[0.02]"
                >
                  <div className="flex flex-col h-full justify-between gap-5">
                    <p className="text-slate-200 text-sm font-sans font-medium leading-relaxed">
                      “<HighlightText text={test.content[currentLang].text} highlight={test.content[currentLang].highlight} />”
                    </p>
                    
                    {/* Profile */}
                    <div className="flex items-center space-x-3 pt-3 border-t border-slate-800/80">
                      <img
                        src={test.avatar}
                        alt={test.author}
                        referrerPolicy="no-referrer"
                        className="w-9 h-9 rounded-full object-cover border border-slate-800 shrink-0"
                      />
                      <div className="text-left overflow-hidden">
                        <span className="font-sans font-bold text-xs text-white block truncate">
                          {test.author}
                        </span>
                        <span className="font-mono text-[9px] text-slate-500 font-semibold block truncate uppercase tracking-wider">
                          {test.handle} • {test.role[currentLang]}
                        </span>
                      </div>
                    </div>
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
