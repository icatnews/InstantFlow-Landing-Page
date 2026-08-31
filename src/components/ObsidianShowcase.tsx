import React, { useState, useEffect } from 'react';
import { 
  FolderPlus, 
  FolderSync, 
  Mic, 
  Sparkles, 
  CheckSquare, 
  CalendarDays, 
  Network, 
  Copy, 
  Check, 
  Play, 
  RotateCcw, 
  FileText, 
  Layers, 
  Flame,
  CheckCircle2,
  Cpu,
  ArrowRight,
  Zap,
  CornerDownRight
} from 'lucide-react';
import { Language } from '../types';

interface ObsidianShowcaseProps {
  currentLang: Language;
}

type InjectionState = 'idle' | 'processing' | 'injected';

export default function ObsidianShowcase({ currentLang }: ObsidianShowcaseProps) {
  const [activeTab, setActiveTab] = useState<'todo' | 'daily' | 'inbox'>('todo');
  const [injectionState, setInjectionState] = useState<InjectionState>('idle');
  const [progress, setProgress] = useState(0);
  const [viewMode, setViewMode] = useState<'rendered' | 'raw'>('rendered');
  const [copied, setCopied] = useState(false);
  
  // Interactive todo checkboxes state
  const [todoStates, setTodoStates] = useState<Record<string, boolean>>({
    't1': false,
    't2': false,
    't3': false,
    't4': false,
    't5': false,
  });

  const toggleTodo = (id: string) => {
    setTodoStates(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const t = (en: string, zh: string, hans: string) => {
    if (currentLang === 'en') return en;
    if (currentLang === 'hans') return hans;
    return zh;
  };

  // Reset to idle when switching tabs
  const handleTabChange = (tab: 'todo' | 'daily' | 'inbox') => {
    setActiveTab(tab);
    setInjectionState('idle');
    setProgress(0);
  };

  // Start or Stop simulation
  const handleToggleSimulation = () => {
    if (injectionState === 'processing') {
      // Cancel
      setInjectionState('idle');
      setProgress(0);
    } else {
      // Start processing
      setInjectionState('processing');
      setProgress(0);
    }
  };

  // Simulated voice playback & scan effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (injectionState === 'processing') {
      const startTime = Date.now();
      const duration = 2800; // 2.8 seconds
      
      timer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const p = Math.min(100, Math.floor((elapsed / duration) * 100));
        setProgress(p);
        if (p >= 100) {
          setInjectionState('injected');
          clearInterval(timer);
        }
      }, 40);
    }
    return () => clearInterval(timer);
  }, [injectionState]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const steps = [
    {
      step: '01',
      icon: <FolderPlus className="w-6 h-6 text-purple-400" />,
      title: {
        en: 'Create Empty Vault',
        zh: '建立空白知識庫',
        hans: '建立空白知识库'
      },
      desc: {
        en: 'Download & open Obsidian, click "Create new vault" and select any empty local folder.',
        zh: '下載並打開 Obsidian，點擊「Create new vault」建立空白資料夾。',
        hans: '下载并打开 Obsidian，点击“Create new vault”建立空白文件夹。'
      }
    },
    {
      step: '02',
      icon: <FolderSync className="w-6 h-6 text-indigo-400" />,
      title: {
        en: 'Bind Vault Path',
        zh: '綁定儲存路徑',
        hans: '绑定储存路径'
      },
      desc: {
        en: 'Open InstantFlow Settings and point the "Obsidian Vault Directory" to that folder.',
        zh: '打開 InstantFlow 設定頁面，在「Obsidian 儲存庫目錄 (Vault)」選取該資料夾。',
        hans: '打开 InstantFlow 设置页面，在“Obsidian 储存库目录 (Vault)”选取该文件夹。'
      }
    },
    {
      step: '03',
      icon: <Mic className="w-6 h-6 text-emerald-400" />,
      title: {
        en: 'Press Hotkey & Speak',
        zh: '按下熱鍵開口說',
        hans: '按下热键开口说'
      },
      desc: {
        en: 'Press hotkey in any window to speak. AI structures & writes notes in background seamlessly.',
        zh: '在任何視窗按下熱鍵說話，AI 自動在背景建構專業知識庫，無需手動排版。',
        hans: '在任何视窗按下热键说话，AI 自动在背景建构专业知识库，无需手动排版。'
      }
    }
  ];

  const tabData = {
    todo: {
      id: 'todo',
      fileName: 'Vault / ToDo.md',
      tag: { en: 'Auto Classification · Checkboxes', zh: '自動分類 · 結構化 Checkbox', hans: '自动分类 · 结构化 Checkbox' },
      voiceText: {
        zh: '「明天下午 2 點和老張開會確認圖庫流的排程，順便去全聯買兩瓶鮮奶和洗碗精，對了還要記得繳清本月份伺服器主機費用 1,450 元，還有在官網新增用戶見證展示區塊。」',
        hans: '“明天下午 2 点和老张开会确认图库流的排程，顺便去全联买两瓶鲜奶和洗碗精，对了还要记得缴清本月份服务器主机费用 1,450 元，还有在官网新增用户见证展示区块。”',
        en: '"Meet with Lao Zhang at 2 PM tomorrow to confirm StockFlow schedule, buy 2 bottles of fresh milk and dish soap, pay this month\'s server hosting fee of $1,450, and add a testimonials section on official site."'
      },
      rawMarkdown: `# 💼 工作
- [ ] 明天 14:00 與老張開會確認圖庫流排程

# 🛒 購物
- [ ] 全聯：兩瓶鮮奶、洗碗精

# 💳 付款
- [ ] 繳清本月份伺服器主機費用 $1,450 元

# 💡 靈感
- [ ] 官網新增用戶見證展示區塊`,
      renderedContent: (
        <div className="space-y-4 font-sans text-xs sm:text-sm animate-in fade-in slide-in-from-bottom-2 duration-500">
          <div className="space-y-1.5">
            <h3 className="font-bold text-indigo-300 flex items-center space-x-1.5 text-xs sm:text-sm tracking-wide">
              <span># 💼 工作</span>
            </h3>
            <div 
              onClick={() => toggleTodo('t1')}
              className={`flex items-start space-x-2.5 p-2 rounded-lg cursor-pointer transition-all ${
                todoStates['t1'] ? 'bg-slate-800/40 text-slate-500 line-through' : 'bg-slate-900/60 hover:bg-slate-800/80 text-slate-200'
              }`}
            >
              <input 
                type="checkbox" 
                checked={todoStates['t1']} 
                onChange={() => {}} 
                className="mt-0.5 rounded border-slate-700 text-purple-500 focus:ring-0 cursor-pointer accent-purple-500"
              />
              <span>明天 14:00 與老張開會確認圖庫流排程</span>
            </div>
          </div>

          <div className="space-y-1.5">
            <h3 className="font-bold text-amber-300 flex items-center space-x-1.5 text-xs sm:text-sm tracking-wide">
              <span># 🛒 購物</span>
            </h3>
            <div 
              onClick={() => toggleTodo('t2')}
              className={`flex items-start space-x-2.5 p-2 rounded-lg cursor-pointer transition-all ${
                todoStates['t2'] ? 'bg-slate-800/40 text-slate-500 line-through' : 'bg-slate-900/60 hover:bg-slate-800/80 text-slate-200'
              }`}
            >
              <input 
                type="checkbox" 
                checked={todoStates['t2']} 
                onChange={() => {}} 
                className="mt-0.5 rounded border-slate-700 text-purple-500 focus:ring-0 cursor-pointer accent-purple-500"
              />
              <span>全聯：兩瓶鮮奶、洗碗精</span>
            </div>
          </div>

          <div className="space-y-1.5">
            <h3 className="font-bold text-rose-300 flex items-center space-x-1.5 text-xs sm:text-sm tracking-wide">
              <span># 💳 付款</span>
            </h3>
            <div 
              onClick={() => toggleTodo('t3')}
              className={`flex items-start space-x-2.5 p-2 rounded-lg cursor-pointer transition-all ${
                todoStates['t3'] ? 'bg-slate-800/40 text-slate-500 line-through' : 'bg-slate-900/60 hover:bg-slate-800/80 text-slate-200'
              }`}
            >
              <input 
                type="checkbox" 
                checked={todoStates['t3']} 
                onChange={() => {}} 
                className="mt-0.5 rounded border-slate-700 text-purple-500 focus:ring-0 cursor-pointer accent-purple-500"
              />
              <span>繳清本月份伺服器主機費用 $1,450 元</span>
            </div>
          </div>

          <div className="space-y-1.5">
            <h3 className="font-bold text-emerald-300 flex items-center space-x-1.5 text-xs sm:text-sm tracking-wide">
              <span># 💡 靈感</span>
            </h3>
            <div 
              onClick={() => toggleTodo('t4')}
              className={`flex items-start space-x-2.5 p-2 rounded-lg cursor-pointer transition-all ${
                todoStates['t4'] ? 'bg-slate-800/40 text-slate-500 line-through' : 'bg-slate-900/60 hover:bg-slate-800/80 text-slate-200'
              }`}
            >
              <input 
                type="checkbox" 
                checked={todoStates['t4']} 
                onChange={() => {}} 
                className="mt-0.5 rounded border-slate-700 text-purple-500 focus:ring-0 cursor-pointer accent-purple-500"
              />
              <span>官網新增用戶見證展示區塊</span>
            </div>
          </div>
        </div>
      )
    },
    daily: {
      id: 'daily',
      fileName: 'DailyNotes / 2026 / 08 / 2026-08-31_週一.md',
      tag: { en: 'Year/Month Hierarchy · Timestamp', zh: '年月結構分層 · 時間戳流水帳', hans: '年月结构分层 · 时间戳流水账' },
      voiceText: {
        zh: '「今天天氣很舒服，早晨開發效率極高，順利解決了 Windows 上的焦點貼上延遲問題，感覺 InstantFlow 1.4 的版本越來越好用了。」',
        hans: '“今天天气很舒服，早晨开发效率极高，顺利解决了 Windows 上的焦点贴上延迟问题，感觉 InstantFlow 1.4 的版本越来越好用了。”',
        en: '"The weather is so comfortable today, morning dev productivity was super high. Fixed the Windows focus paste latency issue, InstantFlow 1.4 is getting better and better."'
      },
      rawMarkdown: `---
date: 2026-08-31
weekday: 週一
weather: 舒適 🌤️
mood: 專注充實 🎯
tags: [閃念日記, 開發, 發布]
---

# 2026-08-31_週一

- 19:52:54 今天天氣很舒服，早晨開發效率極高，順利解決了 Windows 上的焦點貼上延遲問題，感覺 InstantFlow 1.4 的版本越來越好用了。`,
      renderedContent: (
        <div className="space-y-4 font-sans text-xs sm:text-sm animate-in fade-in slide-in-from-bottom-2 duration-500">
          {/* Obsidian Properties Box */}
          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-purple-500/30 space-y-2">
            <div className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-widest flex items-center space-x-1.5 pb-1 border-b border-slate-800">
              <Layers className="w-3 h-3 text-purple-400" />
              <span>PROPERTIES (FRONTMATTER)</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
              <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800/80">
                <span className="text-slate-500 text-[10px] block font-mono">date</span>
                <span className="text-slate-200 font-semibold">2026-08-31</span>
              </div>
              <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800/80">
                <span className="text-slate-500 text-[10px] block font-mono">weekday</span>
                <span className="text-indigo-300 font-semibold">週一</span>
              </div>
              <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800/80">
                <span className="text-slate-500 text-[10px] block font-mono">weather</span>
                <span className="text-amber-300 font-semibold">舒適 🌤️</span>
              </div>
              <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800/80">
                <span className="text-slate-500 text-[10px] block font-mono">mood</span>
                <span className="text-purple-300 font-semibold">專注充實 🎯</span>
              </div>
              <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800/80 col-span-2 sm:col-span-1">
                <span className="text-slate-500 text-[10px] block font-mono">tags</span>
                <span className="text-emerald-300 font-semibold font-mono text-[11px]">[閃念日記, 開發, 發布]</span>
              </div>
            </div>
          </div>

          {/* Daily Note Content with Standard Header and Timestamp */}
          <div className="space-y-2.5 pt-1">
            <h2 className="text-sm sm:text-base font-bold text-white tracking-wide border-b border-slate-800/80 pb-1.5">
              # 2026-08-31_週一
            </h2>
            <p className="text-slate-200 leading-relaxed pl-1">
              <span className="font-mono text-purple-300 font-bold mr-2 text-xs bg-purple-950/80 px-2 py-0.5 rounded border border-purple-800/40">
                19:52:54
              </span>
              今天天氣很舒服，早晨開發效率極高，順利解決了 Windows 上的焦點貼上延遲問題，感覺 InstantFlow 1.4 的版本越來越好用了。
            </p>
          </div>
        </div>
      )
    },
    inbox: {
      id: 'inbox',
      fileName: 'Vault / Inbox.md',
      tag: { en: 'Entity Extraction · [[Wikilinks]]', zh: '自動實體識別 · [[雙向鏈接]]', hans: '自动实体识别 · [[双向链接]]' },
      voiceText: {
        zh: '「我們可以在 Gumroad 上針對 InstantFlow 1.4 版本推出調價策略，讓已購買老客戶免費升級，同時把圖庫流的自動標籤算法整合進知識庫工作流，吸引第二大腦重度用戶。」',
        hans: '“我们可以在 Gumroad 上针对 InstantFlow 1.4 版本推出调价策略，让已购买老客户免费升级，同时把图库流的自动标签算法整合进知识库工作流，吸引第二大脑重度用户。”',
        en: '"We can introduce a price adjustment on Gumroad for InstantFlow 1.4, giving existing buyers free upgrades, while integrating StockFlow\'s auto-tagging algorithm into the knowledge base workflow to attract power second brain users."'
      },
      rawMarkdown: `# Inbox

- 20:15:32 我們可以在 [[Gumroad]] 上針對 [[InstantFlow]] 1.4 版本推出調價策略，讓已購買老客戶免費升級，同時把 [[圖庫流]] 的自動標籤算法整合進知識庫工作流，吸引第二大腦重度用戶。`,
      renderedContent: (
        <div className="space-y-4 font-sans text-xs sm:text-sm animate-in fade-in slide-in-from-bottom-2 duration-500">
          <div className="space-y-2.5">
            <h2 className="text-sm sm:text-base font-bold text-white tracking-wide border-b border-slate-800/80 pb-1.5">
              # Inbox
            </h2>
            
            <p className="text-slate-200 leading-relaxed pl-1 pt-1">
              <span className="font-mono text-purple-300 font-bold mr-2 text-xs bg-purple-950/80 px-2 py-0.5 rounded border border-purple-800/40">
                20:15:32
              </span>
              我們可以在{' '}
              <span className="inline-block px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/40 font-semibold font-mono text-xs hover:bg-purple-500/30 transition cursor-pointer">
                [[Gumroad]]
              </span>{' '}
              上針對{' '}
              <span className="inline-block px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/40 font-semibold font-mono text-xs hover:bg-purple-500/30 transition cursor-pointer">
                [[InstantFlow]]
              </span>{' '}
              1.4 版本推出調價策略，讓已購買老客戶免費升級，同時把{' '}
              <span className="inline-block px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold font-mono text-xs hover:bg-emerald-500/30 transition cursor-pointer">
                [[圖庫流]]
              </span>{' '}
              的自動標籤算法整合進知識庫工作流，吸引第二大腦重度用戶。
            </p>
          </div>

          {/* Graph visual connection prompt */}
          <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-900/50 flex items-center justify-between text-xs text-purple-300">
            <div className="flex items-center space-x-2">
              <Network className="w-4 h-4 text-purple-400 shrink-0" />
              <span>自動關聯 3 個實體節點，已即時同步至 Obsidian 知識圖譜</span>
            </div>
            <span className="text-[10px] font-mono bg-purple-900/60 px-2 py-0.5 rounded text-purple-200">
              Graph Synced
            </span>
          </div>
        </div>
      )
    }
  };

  const currentTab = tabData[activeTab];

  return (
    <section id="obsidian-integration" className="py-20 bg-gradient-to-b from-slate-950 via-[#0B0C18] to-slate-950 text-slate-100 relative overflow-hidden">
      
      {/* Scanline CSS Animation Style */}
      <style>{`
        @keyframes verticalLaserScan {
          0% { top: 0%; opacity: 0.2; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { top: 96%; opacity: 0.2; }
        }
        @keyframes subtlePulseGlow {
          0%, 100% { opacity: 0.4; transform: scale(0.98); }
          50% { opacity: 0.9; transform: scale(1.02); }
        }
      `}</style>

      {/* Background Obsidian purple tech glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-indigo-900/15 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5 text-purple-400 fill-purple-400 animate-pulse" />
            <span>{t('V1.4 SNEAK PEEK • OBSIDIAN DEEP INTEGRATION', '🔥 V1.4 搶先預告 · 深度知識庫聯動', '🔥 V1.4 抢先预告 · 深度知识库联动')}</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            {t(
              'V1.4 Core Feature: Seamless Voice Writing to Obsidian Vault',
              'V1.4 核心新特性：Obsidian 知識庫無感語音寫入',
              'V1.4 核心新特性：Obsidian 知识库无感语音写入'
            )}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {t(
              'Never used Obsidian before? Get started in 30 seconds with zero friction. No need to open Obsidian—speak in any window, and AI structures notes directly into your local vault.',
              '從未接觸過 Obsidian？30 秒極速上手，零門檻建立你的第二大腦。無需打開 Obsidian，在任何視窗按下熱鍵說話，AI 自動結構化寫入本地 Vault。',
              '从未接触过 Obsidian？30 秒极速上手，零门槛建立你的第二大脑。无需打开 Obsidian，在任何视窗按下热键说话，AI 自动结构化写入本地 Vault。'
            )}
          </p>
        </div>

        {/* 3-Step Beginner Guide Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/70 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/40 rounded-3xl p-6 sm:p-7 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-purple-950/20 group"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-purple-950/80 border border-purple-800/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="font-mono text-2xl font-black text-purple-400/40">
                  {item.step}
                </span>
              </div>

              <h3 className="font-display font-extrabold text-lg text-white mb-2">
                {item.title[currentLang]}
              </h3>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {item.desc[currentLang]}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Tab Showcase (Left Voice Sample / Right Dynamic Preview) */}
        <div className="bg-slate-900/90 backdrop-blur-2xl border border-purple-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-purple-950/50 space-y-8">
          
          {/* Top Tabs Selector */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-950/80 border border-slate-800 w-full sm:w-auto">
              <button
                onClick={() => handleTabChange('todo')}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  activeTab === 'todo'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/20'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <CheckSquare className="w-4 h-4" />
                <span>{t('To-Do List (ToDo.md)', '待辦清單 (ToDo.md)', '待办清单 (ToDo.md)')}</span>
              </button>

              <button
                onClick={() => handleTabChange('daily')}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  activeTab === 'daily'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/20'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <CalendarDays className="w-4 h-4" />
                <span>{t('Daily Notes', '閃念日記 (Daily Notes)', '闪念日记 (Daily Notes)')}</span>
              </button>

              <button
                onClick={() => handleTabChange('inbox')}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  activeTab === 'inbox'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/20'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Network className="w-4 h-4" />
                <span>{t('Bi-directional Inspiration (Inbox.md)', '雙向靈感 (Inbox.md)', '双向灵感 (Inbox.md)')}</span>
              </button>
            </div>

            {/* Mode Tag Badge */}
            <div className="flex items-center space-x-2 shrink-0">
              <span className="text-[11px] font-mono font-bold text-purple-300 bg-purple-950/70 border border-purple-800/60 px-3 py-1 rounded-full">
                {currentTab.tag[currentLang]}
              </span>
            </div>
          </div>

          {/* Interactive Grid: Left Voice Input / Right Note Window */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Box: Voice Dictation Scenario */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-slate-950/80 border border-slate-800/90 rounded-2xl p-5 sm:p-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2.5 h-2.5 rounded-full ${injectionState === 'processing' ? 'bg-emerald-400 animate-ping' : 'bg-emerald-500'}`} />
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                      {t('Voice Input Scenario', '即時語音口述範例', '即时语音口述范例')}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-900/60">
                    Stage 1 Audio Stream
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 text-xs sm:text-sm leading-relaxed italic relative">
                  <p>{currentTab.voiceText[currentLang]}</p>
                </div>

                {/* Simulated Audio Waveform Bar */}
                <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="flex items-center space-x-1.5">
                      <Mic className={`w-3.5 h-3.5 ${injectionState === 'processing' ? 'text-emerald-400 animate-bounce' : 'text-slate-500'}`} />
                      <span>
                        {injectionState === 'processing'
                          ? t('Simulating Dictation...', '正在口述輸入...', '正在口述输入...')
                          : injectionState === 'injected'
                          ? t('Speech Processed & Synced', '語音已注入筆記', '语音已注入笔记')
                          : t('Ready to speak', '隨時開口說話', '随时开口说话')}
                      </span>
                    </span>
                    <span>{injectionState === 'processing' ? `${Math.round((progress / 100) * 2.8 * 10) / 10}s / 2.8s` : '2.8s'}</span>
                  </div>

                  {/* Equalizer waves */}
                  <div className="flex items-center justify-between gap-1 h-7 px-1">
                    {[40, 75, 95, 30, 85, 60, 100, 45, 90, 70, 35, 80, 65, 95, 50, 85, 40, 70, 90, 30].map((h, i) => (
                      <div
                        key={i}
                        className={`w-full rounded-full transition-all duration-150 ${
                          injectionState === 'processing'
                            ? 'bg-gradient-to-t from-purple-500 to-emerald-400' 
                            : injectionState === 'injected'
                            ? 'bg-purple-600/60'
                            : 'bg-slate-800'
                        }`}
                        style={{
                          height: injectionState === 'processing'
                            ? `${Math.max(15, (h * (progress % 30 + 70)) / 100)}%` 
                            : injectionState === 'injected'
                            ? `${Math.max(20, h * 0.4)}%`
                            : '25%'
                        }}
                      />
                    ))}
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-emerald-400 h-full transition-all duration-100" 
                      style={{ width: `${injectionState === 'processing' ? progress : injectionState === 'injected' ? 100 : 0}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Play Simulation Button */}
              <div className="pt-2">
                <button
                  onClick={handleToggleSimulation}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all duration-200 cursor-pointer shadow-lg ${
                    injectionState === 'processing'
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 hover:bg-rose-500/30'
                      : injectionState === 'injected'
                      ? 'bg-slate-800 hover:bg-slate-700 text-purple-300 border border-purple-500/40 hover:border-purple-400'
                      : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-purple-600/30 hover:scale-[1.02] active:scale-[0.98]'
                  }`}
                >
                  {injectionState === 'processing' ? (
                    <>
                      <RotateCcw className="w-4 h-4 animate-spin" />
                      <span>{t('Simulating speech... Click to Stop', '語音模擬中... 點擊停止', '语音模拟中... 点击停止')}</span>
                    </>
                  ) : injectionState === 'injected' ? (
                    <>
                      <RotateCcw className="w-4 h-4 text-purple-400" />
                      <span>{t('↻ Replay Voice Dictation & Markdown Injection', '↻ 重新播放口述與即時寫入動畫', '↻ 重新播放口述与即时写入动画')}</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      <span>{t('▶ Simulate Voice Input & AI Formatting', '▶ 模擬口述語音並自動寫入', '▶ 模拟口述语音并自动写入')}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Box: Obsidian Note Preview Window */}
            <div className="lg:col-span-7 flex flex-col justify-between bg-slate-950 border border-purple-500/30 rounded-2xl overflow-hidden shadow-2xl relative">
              
              {/* Top Laser Scanning Beam (Visible only during processing) */}
              {injectionState === 'processing' && (
                <div 
                  className="absolute left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-purple-400 to-transparent z-40 pointer-events-none"
                  style={{
                    animation: 'verticalLaserScan 1.4s ease-in-out infinite alternate',
                    boxShadow: '0 0 20px 4px #a855f7, 0 0 40px 8px #d946ef, 0 0 60px 12px rgba(168, 85, 247, 0.6)'
                  }}
                />
              )}

              {/* Obsidian Window Header Bar */}
              <div className="bg-slate-900/95 px-4 py-3 border-b border-slate-800 flex items-center justify-between flex-wrap gap-2 relative z-30">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="h-4 w-px bg-slate-800 mx-1" />
                  <span className="text-xs font-mono font-bold text-purple-300 flex items-center space-x-1.5">
                    <FileText className="w-3.5 h-3.5 text-purple-400" />
                    <span>{currentTab.fileName}</span>
                  </span>
                </div>

                <div className="flex items-center space-x-2.5">
                  {/* Success Injected Tag Badge */}
                  {injectionState === 'injected' && (
                    <span className="animate-in fade-in zoom-in-90 duration-300 inline-flex items-center space-x-1 text-[10px] font-mono font-extrabold text-emerald-300 bg-emerald-950/80 border border-emerald-500/50 px-2.5 py-0.5 rounded-full shadow-sm shadow-emerald-900/40">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>{t('✦ Auto-appended to Vault', '✦ 已成功自動追加至 Vault', '✦ 已成功自动追加至 Vault')}</span>
                    </span>
                  )}

                  {/* View Mode Toggle (Only active when injected) */}
                  {injectionState === 'injected' && (
                    <div className="flex items-center p-0.5 rounded-lg bg-slate-950 border border-slate-800 text-[11px] font-mono">
                      <button
                        onClick={() => setViewMode('rendered')}
                        className={`px-2 py-0.5 rounded font-semibold transition cursor-pointer ${
                          viewMode === 'rendered' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {t('Preview', '即時預覽', '即时预览')}
                      </button>
                      <button
                        onClick={() => setViewMode('raw')}
                        className={`px-2 py-0.5 rounded font-semibold transition cursor-pointer ${
                          viewMode === 'raw' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {t('Markdown', '原始碼', '源码')}
                      </button>
                    </div>
                  )}

                  {/* Copy Button */}
                  {injectionState === 'injected' && (
                    <button
                      onClick={() => handleCopy(currentTab.rawMarkdown)}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer"
                      title={t('Copy Markdown', '複製 Markdown', '复制 Markdown')}
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  )}
                </div>
              </div>

              {/* Obsidian Editor Body - 3 State Transitions */}
              <div className="p-6 overflow-y-auto max-h-[380px] bg-[#0c0d19]/95 min-h-[290px] flex flex-col justify-center relative">
                
                {/* 1. IDLE STATE: Blank document with glowing cursor & guide message */}
                {injectionState === 'idle' && (
                  <div className="flex flex-col items-center justify-center text-center p-6 space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-purple-950/60 border border-purple-800/40 flex items-center justify-center text-purple-400 relative">
                      <FileText className="w-7 h-7" />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-slate-950 flex items-center justify-center">
                        <Sparkles className="w-2.5 h-2.5 text-slate-950" />
                      </div>
                    </div>

                    <div className="space-y-1.5 max-w-md">
                      <p className="text-sm font-bold text-slate-200 flex items-center justify-center space-x-1.5">
                        <span>{t('Click [Simulate Voice Input] on the left', '點擊左側【模擬口述語音並自動寫入】', '点击左侧【模拟口述语音并自动写入】')}</span>
                        <span className="inline-block w-2 h-4 bg-purple-400 animate-pulse ml-1" />
                      </p>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {t(
                          'Experience real-time AI background Markdown structuring & direct file injection into your local Obsidian Vault.',
                          '體驗 AI 在後台即時語意結構化，無需打開 Obsidian 即直接物理追加寫入本地 Vault。',
                          '体验 AI 在后台即时语意结构化，无需打开 Obsidian 即直接物理追加写入本地 Vault。'
                        )}
                      </p>
                    </div>

                    <div className="pt-2 flex items-center space-x-2 text-[11px] font-mono text-purple-400/80 bg-purple-950/30 px-3 py-1.5 rounded-xl border border-purple-900/40">
                      <CornerDownRight className="w-3.5 h-3.5" />
                      <span>{t('Target Note:', '目標筆記：', '目标笔记：')} <code className="text-purple-300 font-bold">{currentTab.fileName}</code></span>
                    </div>
                  </div>
                )}

                {/* 2. PROCESSING STATE: Live scanning laser & AST structuring animation */}
                {injectionState === 'processing' && (
                  <div className="flex flex-col items-center justify-center text-center p-6 space-y-4">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl bg-purple-900/40 border border-purple-500/60 flex items-center justify-center text-purple-300 animate-pulse">
                        <Cpu className="w-7 h-7 animate-spin" style={{ animationDuration: '3s' }} />
                      </div>
                      <div className="absolute inset-0 rounded-2xl bg-purple-500/20 blur-xl animate-ping" />
                    </div>

                    <div className="space-y-2 max-w-sm">
                      <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-purple-300 bg-purple-950/90 border border-purple-700/60 px-3 py-1 rounded-full">
                        <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        <span>{t('Structuring Voice Stream...', 'AI 正在結構化語音資料...', 'AI 正在结构化语音资料...')}</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed font-mono">
                        {t(
                          'Stage 2 AST Parsing • Entity Wikilinks • Timestamp Tagging',
                          'Stage 2 實體語意解析 • [[雙向鏈接]] 自動封裝 • 寫入緩衝區',
                          'Stage 2 实体语意解析 • [[双向链接]] 自动封装 • 写入缓冲区'
                        )}
                      </p>
                    </div>

                    {/* Fake typing stream placeholder */}
                    <div className="w-full max-w-xs h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 via-indigo-400 to-emerald-400 transition-all duration-75"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* 3. INJECTED STATE: Display full Markdown notes */}
                {injectionState === 'injected' && (
                  <div className="w-full h-full">
                    {viewMode === 'rendered' ? (
                      currentTab.renderedContent
                    ) : (
                      <pre className="text-xs font-mono text-purple-200 leading-relaxed whitespace-pre-wrap selection:bg-purple-500/30 animate-in fade-in duration-300">
                        {currentTab.rawMarkdown}
                      </pre>
                    )}
                  </div>
                )}

              </div>

              {/* Bottom Status Bar */}
              <div className="bg-slate-900/80 px-4 py-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <div className="flex items-center space-x-3">
                  <span className={`flex items-center space-x-1.5 ${injectionState === 'injected' ? 'text-emerald-400' : 'text-slate-500'}`}>
                    <CheckCircle2 className="w-3 h-3" />
                    <span>
                      {injectionState === 'injected' 
                        ? 'Auto-appended via InstantFlow v1.4' 
                        : injectionState === 'processing' 
                        ? 'Streaming to Local Vault...' 
                        : 'Ready for injection'}
                    </span>
                  </span>
                  <span className="text-slate-700">•</span>
                  <span>UTF-8</span>
                </div>
                <span className={`font-bold ${injectionState === 'injected' ? 'text-purple-400' : 'text-slate-500'}`}>
                  {injectionState === 'injected' ? 'Local Vault Synced' : 'Obsidian Engine Ready'}
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Feature Subtitle / Core Value Proposition */}
        <div className="text-center pt-2 pb-4">
          <p className="text-sm sm:text-base font-semibold text-slate-300 max-w-3xl mx-auto flex items-center justify-center gap-2 flex-wrap">
            <Sparkles className="w-4 h-4 text-purple-400 shrink-0 inline" />
            <span>
              {t(
                'Zero manual configuration. Speak to shape your knowledge base. Whether multi-intent todos, yearly/monthly journals, or bi-directional link cards, InstantFlow handles everything in the background.',
                '「零手動設定，開口即成知識庫。無論是多意圖待辦、年月日記還是雙向卡片，InstantFlow 在背景為你打點一切。」',
                '“零手动设定，开口即成知识库。无论是多意图待办、年月日记还是双向卡片，InstantFlow 在背景为你打点一切。”'
              )}
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}
