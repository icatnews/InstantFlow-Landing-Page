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
  platform: 'x' | 'github' | 'producthunt' | 'youtube';
  role: {
    en: string;
    zh: string;
    hans: string;
  };
  content: {
    en: string;
    zh: string;
    hans: string;
  };
}

const localTestimonials: LocalTestimonial[] = [
  {
    id: 't1',
    author: 'Ethan Vance',
    handle: '@ethan_codes',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80',
    platform: 'github',
    role: {
      en: 'Senior Frontend Dev',
      zh: '資深前端工程師',
      hans: '资深前端工程师'
    },
    content: {
      en: 'Honestly, I was skeptical about dictating code comments inside VS Code. But pairing InstantFlow with my self-provided Groq key makes it near zero latency. The custom dictionary perfectly catches JIMMELA / Jemunai homophone variants instead of messing up our internal product names. My only minor complaint is that the local shortcut setup had a small learning curve on Windows, but once configured, it’s lightning fast.',
      zh: '說實話，我本來對在 VS Code 裡用口述寫程式註解與邏輯持懷疑態度。但將 InstantFlow 搭配我自己申請的 Groq 金鑰後，延遲低到幾乎沒有。最神的是專屬記憶字典能完美辨識 JIMMELA / Jemunai 等同音變體字，不再弄亂我們內部的產品名稱。唯一的微小建議是：Windows 上的全域快捷鍵設定一開始需要花點時間理解，但設定完後速度真的快到不可思議。',
      hans: '说实话，我本来对在 VS Code 里用口述写程序注解与文件持怀疑态度。但将 InstantFlow 搭配我自己申请的 Groq 金钥后，延迟低到几乎没有。最神的是专属记忆字典能完美辨识 JIMMELA / Jemunai 等同音变体字，不再弄乱我们内部的产品名称。唯一的微小建议是：Windows 上的全域快捷键设定一开始需要花点时间理解，但设定完后速度真的快到不可思议。'
    }
  },
  {
    id: 't2',
    author: 'Clara Lindqvist',
    handle: '@clara_ux',
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&h=150&q=80',
    platform: 'x',
    role: {
      en: 'Lead Product Designer',
      zh: '設計團隊負責人',
      hans: '设计团队负责人'
    },
    content: {
      en: 'As someone with mild ADHD, typing out structured design spec docs is a nightmare. I just open InstantFlow, talk continuously for 3 minutes, and let the Engineer mode clean up my chaotic spoken sentences into markdown comments. I save about $20/month since I use my own Groq API key instead of paying a fixed SaaS subscription. Absolute game changer.',
      zh: '身為輕微 ADHD 患者，要我一字字敲出結構化的設計規格文件簡直是噩夢。我現在只要開啟 InstantFlow，連續口述 3 分鐘，然後讓「註解模式」把我雜亂無章的口語整理成 Markdown 格式文件。而且因為可以用我自己的 Groq API key，省去了每個月 20 美元的 SaaS 固定訂閱費，直接省爆！',
      hans: '身为轻微 ADHD 患者，要我一字字敲出结构化的设计规格文件简直是噩梦。我现在只要开启 InstantFlow，连续口述 3 分钟，然后让“注解模式”把我杂乱无章的口语整理成 Markdown 格式文件。而且因为可以用我自己的 Groq API key，省去了每个月 20 美元的 SaaS 固定订阅费，直接省爆！'
    }
  },
  {
    id: 't3',
    author: 'Matteo Ricci',
    handle: '@matteo_writes',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&h=150&q=80',
    platform: 'producthunt',
    role: {
      en: 'Tech Columnist',
      zh: '科技專欄作家',
      hans: '科技专栏作家'
    },
    content: {
      en: 'Flow is currently blowing my mind. No bloated subscription, no cloud server tracking my raw inputs. Just pure edge-first privacy paired with extreme speed. Wish there was a Linux client, but for my Windows work machine, it is standard equipment now.',
      zh: '這款工具真的刷新了我的認知。沒有臃腫的訂閱，也沒有雲端伺服器在竊聽我的語音。純地端隱私搭配極致的傳輸速度。雖然很希望未來能推出 Linux 版本，但就目前在我的 Windows 工作機上，這已經是標配了。',
      hans: '这款工具真的刷新了我的认知。没有臃肿的订阅，也没有云端服务器在窃听我的语音。纯地端隐私搭配极致的传输速度。虽然很希望未来能推出 Linux 版本，但就目前在我的 Windows 工作机上，这已经是标配了。',
    }
  },
  {
    id: 't5',
    author: 'Kenji Takahashi',
    handle: '@kenji_codes',
    avatar: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=150&h=150&q=80',
    platform: 'github',
    role: {
      en: 'Indie Creator',
      zh: '獨立開發者',
      hans: '独立开发者'
    },
    content: {
      en: 'Most speech-to-text tools choke on technical terms like `AWS S3`, `mod_space` or `KLON`. Having a local O(N) homophone matching dictionary that instantly corrects misheard phonetics into proper code-case is absolute genius. It actually works out-of-the-box.',
      zh: '多數語音轉文字工具遇到 `AWS S3`、`mod_space` 或 `KLON` 這種術語就完蛋。而這裡配備的地端 O(N) 同音字典映射，能把聽錯的音節瞬間修正成標準程式碼寫法，這點太天才了。居然真的開箱即用。',
      hans: '多数语音转文字工具遇到 `AWS S3`、`mod_space` 或 `KLON` 这种术语就完蛋。而这里配备的地端 O(N) 同音字典映射，能把听错的音节瞬间修正成标准程式码写法，这点太天才了。居然真的开箱即用。'
    }
  },
  {
    id: 't6',
    author: 'Marcus Vance',
    handle: '@marcus_reviews',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80',
    platform: 'youtube',
    role: {
      en: 'Tech Reviewer',
      zh: '科技硬體評測創作者',
      hans: '科技硬件评测创作者'
    },
    content: {
      en: 'I review productivity gear for a living. At first, speaking instead of typing felt awkward. But once you configure the CapsLock key trigger and set up your own custom hotkeys, the friction is gone. It outputs beautiful transcripts using your own API credentials, so you pay exactly for what you use. Highly recommended for power users.',
      zh: '我平常的工作就是評測各種生產力工具。老實說，起初用講話代替打字讓我覺得有點彆扭。但當你設定好 CapsLock 鍵做為全域觸發，並調整好快捷鍵後，那種阻礙感就完全消失了。它透過你自己的 API 金鑰來輸出極美觀的文本，用多少付多少。高階使用者強力推薦。',
      hans: '我平常的工作就是评测各种生产力工具。老实说，起初用讲话代替打字让我觉得有点别扭。但当你设定好 CapsLock 键做为全局触发，并调整好快捷键后，那种阻碍感就完全消失了。它透过你自己 API 金钥来输出极美观的文本，用多少付多少。高阶使用者強力推荐。'
    }
  },
  {
    id: 't7',
    author: 'Chloe DuPont',
    handle: '@chloe_pm',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
    platform: 'producthunt',
    role: {
      en: 'Remote PM',
      zh: '遠端專案經理',
      hans: '远端专案经理'
    },
    content: {
      en: 'My team meets online daily, and taking meeting notes was a drag. Now, during discussions, I just dictate action items in "Professional Mode". It filters out my "ums", "ahs", and repetitive fillers, instantly generating clean, structured bullet points. The engineers on my team love how clear my updates are now. I just wish the UI had a darker secondary theme option, but the current layout is extremely crisp.',
      zh: '我們團隊每天都開線上會議，整理會議紀錄以前是個苦差事。現在討論時，我直接用「公文/專業模式」口述代辦事項。它會自動過濾掉我的「呃」、「啊」以及重複贅字，瞬間生成乾淨、結構化的條列重點。現在研發團隊超愛我發出的更新文件。唯一希望是介面能多個深色主題選項，不過目前的清爽排版已經非常出色了。',
      hans: '我们团队每天都开线上会议，整理会议纪录以前是个苦差事。现在讨论时，我直接用“公文/专业模式”口述代办事项。它会自动过滤掉我的“呃”、“啊”以及重复字，瞬间生成干净、结构化的条列重点。现在研发团队超爱我发出的更新文件。唯一希望是介面能多个深色主题选项，不过目前的清爽排版已经非常出色了。'
    }
  }
];

// Helper to render platform SVGs
const PlatformIcon = ({ platform }: { platform: LocalTestimonial['platform'] }) => {
  if (platform === 'x') {
    return (
      <svg className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }
  if (platform === 'github') {
    return (
      <svg className="w-4 h-4 text-slate-400 group-hover:text-slate-800 transition-colors" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    );
  }
  if (platform === 'producthunt') {
    return (
      <svg className="w-4 h-4 text-slate-400 group-hover:text-amber-600 transition-colors" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.6 10H10v3h3.6c.8 0 1.4-.7 1.4-1.5s-.6-1.5-1.4-1.5zm.4-6H6v16h4v-6h4c2.8 0 5-2.2 5-5s-2.2-5-5-5z" />
      </svg>
    );
  }
  // youtube
  return (
    <svg className="w-4 h-4 text-slate-400 group-hover:text-red-600 transition-colors" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.5 12 3.5 12 3.5s-7.518 0-9.388.553a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11C4.482 20.5 12 20.5 12 20.5s7.518 0 9.388-.553a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
};

export default function Testimonials({ currentLang }: TestimonialsProps) {
  const t = (en: string, zh: string, hans: string) => {
    if (currentLang === 'en') return en;
    if (currentLang === 'hans') return hans;
    return zh;
  };

  return (
    <section id="testimonials" className="py-24 bg-slate-50/40 border-t border-b border-slate-100 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-[-10%] w-[45%] h-[45%] rounded-full bg-indigo-100/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[45%] h-[45%] rounded-full bg-purple-100/20 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header section with real social signals */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-100">
            <span>✨</span>
            <span>{t('LOVED BY THE COMMUNITY', '社群實測口碑反饋', '社群实测口碑反馈')}</span>
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none">
            {t('Real feedback from developers and creators', '來自開發者與創作者的真實推薦', '来自开发者与创作者的真实推荐')}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto font-sans">
            {t(
              'No generic testimonials. See how power users optimize their workflow, solve phonetic variant problems, and ditch subscription plans completely.',
              '拒絕罐頭套版好評。看看專業高階使用者如何優化他們的口述工作流、解決同音字拼寫問題，並徹底告別訂閱制。',
              '拒绝罐头套版好评。看看专业高阶使用者如何优化他们的口述工作流、解决同音字拼写问题，并彻底告别订阅制。'
            )}
          </p>
        </div>

        {/* Real Asymmetric Masonry (Columns layout) */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance]">
          {localTestimonials.map((test) => (
            <div
              key={test.id}
              className="break-inside-avoid bg-white/90 backdrop-blur-md border border-slate-200/60 rounded-2xl p-6 sm:p-7 flex flex-col hover:shadow-xl hover:border-indigo-300 hover:shadow-indigo-500/[0.02] transition-all duration-300 w-full relative group mb-6"
            >
              {/* Platform badge in top-right corner */}
              <div className="absolute top-6 right-6 p-2 rounded-full bg-slate-50 border border-slate-100/80 group-hover:bg-indigo-50/50 group-hover:border-indigo-100/60 transition-all duration-300">
                <PlatformIcon platform={test.platform} />
              </div>

              {/* Card Quote Line Accent Style */}
              <div className="border-l-2 border-indigo-500/20 pl-4 space-y-3 mt-1.5">
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-sans font-medium text-left">
                  "{test.content[currentLang]}"
                </p>
              </div>

              {/* Author Profile section */}
              <div className="flex items-center space-x-3 pt-5 border-t border-slate-100 mt-6">
                <img
                  src={test.avatar}
                  alt={test.author}
                  referrerPolicy="no-referrer"
                  className="w-9 h-9 rounded-full object-cover border border-slate-200/50 shrink-0"
                />
                <div className="text-left overflow-hidden">
                  <span className="font-display font-bold text-xs sm:text-sm text-slate-800 block truncate">
                    {test.author}
                  </span>
                  <span className="font-mono text-[9px] text-slate-400 font-semibold block truncate uppercase tracking-wider">
                    {test.handle} • {test.role[currentLang]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
