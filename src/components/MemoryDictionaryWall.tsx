import React, { useState, useEffect } from 'react';
import { Sparkles, Check, Save, MousePointer, RefreshCw, Layers } from 'lucide-react';
import { Language } from '../types';

interface MemoryDictionaryWallProps {
  currentLang: Language;
}

type AnimationPhase = 'initial' | 'highlighting' | 'popup' | 'saving' | 'corrected';

export default function MemoryDictionaryWall({ currentLang }: MemoryDictionaryWallProps) {
  const [phase, setPhase] = useState<AnimationPhase>('initial');
  const [typedText, setTypedText] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);

  // Helper translations for internal labels
  const t = (en: string, zh: string, hans: string) => {
    if (currentLang === 'en') return en;
    if (currentLang === 'zh') return zh;
    return hans;
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    // Auto-running loop sequence
    if (phase === 'initial') {
      setTypedText('');
      setShowConfetti(false);
      timer = setTimeout(() => setPhase('highlighting'), 2500);
    } else if (phase === 'highlighting') {
      timer = setTimeout(() => setPhase('popup'), 2200);
    } else if (phase === 'popup') {
      // Simulate typing speed of "gemini 3.1 pro"
      const targetText = 'gemini 3.1 pro';
      let currentIdx = 0;
      const typeInterval = setInterval(() => {
        if (currentIdx <= targetText.length) {
          setTypedText(targetText.slice(0, currentIdx));
          currentIdx++;
        } else {
          clearInterval(typeInterval);
          // Proceed to save
          timer = setTimeout(() => setPhase('saving'), 800);
        }
      }, 100);
      
      return () => {
        clearInterval(typeInterval);
        clearTimeout(timer);
      };
    } else if (phase === 'saving') {
      timer = setTimeout(() => {
        setPhase('corrected');
        setShowConfetti(true);
      }, 1500);
    } else if (phase === 'corrected') {
      // Stay in corrected state for 5 seconds, then loop back
      timer = setTimeout(() => setPhase('initial'), 5000);
    }

    return () => clearTimeout(timer);
  }, [phase]);

  const triggerReset = () => {
    setPhase('initial');
  };

  return (
    <div className="max-w-5xl mx-auto mt-16 bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 border border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden text-left">
      {/* Glow decorations */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Decorative Cybernetic Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.12),rgba(255,255,255,0))]" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Side: Mock UI settings screen of Custom Dictionary */}
        <div className="lg:col-span-7 bg-slate-950/90 border border-slate-800 rounded-2xl p-5 space-y-4 shadow-2xl relative min-h-[360px] flex flex-col justify-between">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 bg-indigo-500/10 text-indigo-400 rounded-lg">
                📘
              </span>
              <div>
                <h4 className="font-sans font-extrabold text-sm text-slate-100 flex items-center gap-1.5">
                  {t('Custom Memory Dictionary (v1.3)', 'AI 智慧學習 • 專屬記憶字典 (v1.3)', 'AI 智慧学习 • 专属记忆字典 (v1.3)')}
                  <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded-full font-mono">LIVE SIMULATOR</span>
                </h4>
                <p className="text-[9px] font-mono text-slate-500 font-bold uppercase tracking-wider">
                  {t('LOCAL COGNITIVE MEMORY TUNING', '地端大腦主動認知微調組件', '地端大脑主动认知微调组件')}
                </p>
              </div>
            </div>
            
            {/* Phase Status Indicator */}
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-mono text-slate-400">
                {phase === 'initial' && t('Listening...', '正在聆聽語音...', '正在聆听语音...')}
                {phase === 'highlighting' && t('Highlighting variants...', '偵測並框選發音變體...', '侦测并框选发音变体...')}
                {phase === 'popup' && t('Auto-matching...', '配對記憶映射中...', '配对记忆映射中...')}
                {phase === 'saving' && t('Saving to OS store...', '加密儲存至本地作業系統...', '加密存储至本地作业系统...')}
                {phase === 'corrected' && t('Corrected Instantly!', '100% 訂正成功！', '100% 订正成功！')}
              </span>
              <span className={`flex h-2.5 w-2.5 rounded-full ${phase === 'corrected' ? 'bg-emerald-400 animate-pulse' : 'bg-indigo-400 animate-ping'}`} />
            </div>
          </div>

          {/* Active Transcription Area */}
          <div className="space-y-4 my-auto relative">
            
            {/* Custom Interactive Floating Cursor simulation */}
            {phase === 'highlighting' && (
              <div className="absolute top-2 left-1/4 z-30 pointer-events-none animate-bounce transition-all duration-1000">
                <div className="flex flex-col items-center">
                  <MousePointer className="w-6 h-6 text-indigo-400 drop-shadow-[0_2px_8px_rgba(99,102,241,0.5)] fill-indigo-400" />
                  <span className="text-[10px] font-bold text-white bg-indigo-600 px-2 py-0.5 rounded-full shadow-lg mt-1 font-mono uppercase tracking-wider">
                    {t('Highlighting...', '滑鼠框選錯字...', '鼠标框选错字...')}
                  </span>
                </div>
              </div>
            )}

            {/* Transcription Display */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                  {t('DETECTION TRANSCRIPT FRAME', '地端原始語音轉錄視窗', '地端原始语音转录视窗')}
                </span>
                {phase === 'corrected' && (
                  <span className="text-[9px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 animate-pulse">
                    ✨ {t('COGNITIVE LOCK MATCHED', '主動認知匹配鎖定', '主动认知匹配锁定')}
                  </span>
                )}
              </div>

              {/* The Text Block containing animation */}
              <div className="bg-slate-900/80 p-4 sm:p-5 rounded-xl border border-slate-800 text-slate-300 font-sans text-xs sm:text-sm leading-relaxed relative min-h-[110px] flex items-center">
                {phase === 'corrected' && (
                  /* Laser sweeping effect across the container */
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/15 to-transparent w-1/3 h-full animate-[shimmer_1.5s_infinite] pointer-events-none" />
                )}
                
                <p className="z-10 transition-all duration-500 text-left w-full">
                  {phase === 'initial' && (
                    <>
                      {t('We send prompts to ', '我們今天重新跟 ', '我们今天重新跟 ')}
                      <span className="text-rose-400 border border-rose-500/20 bg-rose-500/5 rounded px-1 py-0.5 font-semibold">Jemunai 3.1 pro</span>
                      {t(' or mishears as ', ' 下指令，或者是聽成 ', ' 下指令，或者是听成 ')}
                      <span className="text-rose-400 border border-rose-500/20 bg-rose-500/5 rounded px-1 py-0.5 font-semibold">JIMMELA 3.1 pro</span>
                      {t(' or deforms into ', ' 甚至變形字成 ', ' 甚至变形字成 ')}
                      <span className="text-rose-400 border border-rose-500/20 bg-rose-500/5 rounded px-1 py-0.5 font-semibold">gemini()的3.1火</span>
                      {t(' but it does not matter.', ' 都沒有關係。', ' 都没有关系。')}
                    </>
                  )}

                  {phase === 'highlighting' && (
                    <>
                      {t('We send prompts to ', '我們今天重新跟 ', '我们今天重新跟 ')}
                      <span className="text-white border border-indigo-500 bg-indigo-500/40 rounded px-1 py-0.5 font-semibold transition-all duration-300 shadow-[0_0_12px_rgba(99,102,241,0.6)] animate-pulse">
                        Jemunai 3.1 pro
                      </span>
                      {t(' or mishears as ', ' 下指令，或者是聽成 ', ' 下指令，或者是听成 ')}
                      <span className="text-white border border-indigo-500 bg-indigo-500/40 rounded px-1 py-0.5 font-semibold transition-all duration-300 shadow-[0_0_12px_rgba(99,102,241,0.6)] animate-pulse">
                        JIMMELA 3.1 pro
                      </span>
                      {t(' or deforms into ', ' 甚至變形字成 ', ' 甚至变形字成 ')}
                      <span className="text-rose-400 border border-rose-500/20 bg-rose-500/5 rounded px-1 py-0.5 font-semibold">gemini()的3.1火</span>
                      {t(' but it does not matter.', ' 都沒有關係。', ' 都沒有關係。')}
                    </>
                  )}

                  {(phase === 'popup' || phase === 'saving') && (
                    <>
                      {t('We send prompts to ', '我們今天重新跟 ', '我们今天重新跟 ')}
                      <span className="text-indigo-300 border border-indigo-800 bg-indigo-950/80 rounded px-1 py-0.5 font-semibold transition-all duration-300">
                        Jemunai 3.1 pro
                      </span>
                      {t(' or mishears as ', ' 下指令，或者是聽成 ', ' 下指令，或者是听成 ')}
                      <span className="text-indigo-300 border border-indigo-800 bg-indigo-950/80 rounded px-1 py-0.5 font-semibold transition-all duration-300">
                        JIMMELA 3.1 pro
                      </span>
                      {t(' or deforms into ', ' 甚至變形字成 ', ' 甚至变形字成 ')}
                      <span className="text-rose-400 border border-rose-500/20 bg-rose-500/5 rounded px-1 py-0.5 font-semibold">gemini()的3.1火</span>
                      {t(' but it does not matter.', ' 都沒有關係。', ' 都沒有關係。')}
                    </>
                  )}

                  {phase === 'corrected' && (
                    <>
                      {t('We send prompts to ', '我們今天重新跟 ', '我们今天重新跟 ')}
                      <strong className="text-emerald-300 border border-emerald-500/30 bg-emerald-500/10 rounded px-1.5 py-0.5 shadow-[0_0_10px_rgba(52,211,153,0.2)] animate-[pulse_2s_infinite]">
                        gemini 3.1 pro
                      </strong>
                      {t(' or mishears as ', ' 下指令，或者是聽成 ', ' 下指令，或者是听成 ')}
                      <strong className="text-emerald-300 border border-emerald-500/30 bg-emerald-500/10 rounded px-1.5 py-0.5 shadow-[0_0_10px_rgba(52,211,153,0.2)] animate-[pulse_2s_infinite]">
                        gemini 3.1 pro
                      </strong>
                      {t(' or deforms into ', ' 甚至變形字成 ', ' 甚至变形字成 ')}
                      <strong className="text-emerald-300 border border-emerald-500/30 bg-emerald-500/10 rounded px-1.5 py-0.5 shadow-[0_0_10px_rgba(52,211,153,0.2)] animate-[pulse_2s_infinite]">
                        gemini 3.1 pro
                      </strong>
                      {t(' but it does not matter.', ' 都沒有關係。', ' 都沒有關係。')}
                    </>
                  )}
                </p>

                {/* Floating Alignment Input Popup */}
                {(phase === 'popup' || phase === 'saving') && (
                  <div className="absolute right-3 sm:right-6 -bottom-6 z-20 bg-slate-900 border border-indigo-500 rounded-xl p-3 shadow-2xl w-60 animate-in slide-in-from-bottom-3 duration-300 text-left">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 mb-2">
                      <span className="text-[9px] font-mono font-bold text-indigo-400 uppercase flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5 animate-spin" />
                        {t('✨ ADD CUSTOM MEMORY', '✨ 新增專屬記憶', '✨ 新增专属记忆')}
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-ping" />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[8px] text-slate-500 font-mono uppercase block">{t('Correct Mapped Text', '正確校正文字內容', '正确校正文字内容')}</label>
                      <div className="relative">
                        <input
                          type="text"
                          readOnly
                          value={typedText}
                          className="w-full bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs font-mono text-emerald-400 outline-none"
                        />
                        {typedText === '' && (
                          <span className="absolute left-2 top-1 text-xs text-slate-600 font-mono animate-pulse">|</span>
                        )}
                      </div>
                      
                      {phase === 'saving' ? (
                        <div className="w-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 py-1 rounded text-[10px] font-bold font-mono text-center flex items-center justify-center gap-1">
                          <Check className="w-3 h-3 text-emerald-400 animate-bounce" />
                          <span>{t('SAVED SUCCESSFULLY 💾', '儲存成功 💾', '储存成功 💾')}</span>
                        </div>
                      ) : (
                        <div className="w-full bg-indigo-600/30 border border-indigo-500/50 text-indigo-300 py-1 rounded text-[9px] font-mono text-center">
                          {t('Press Enter to Apply...', '請按下 Enter 鍵套用...', '请按下 Enter 键套用...')}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Dynamic Alignment Flow Indicator (Physical diagram representation) */}
            <div className="space-y-2 mt-4 text-left">
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block">
                {t('ONE-KEY MAPPED ALIGNMENT PIPELINE', '滑鼠 HIGHLIGHT 框選 • 一鍵物理永久訂正管線', '鼠标 HIGHLIGHT 框选 • 一键物理永久订定管线')}
              </span>
              <div className="flex flex-col sm:flex-row gap-2.5 items-stretch sm:items-center">
                <div className={`px-3 py-2 rounded-xl flex items-center space-x-2 text-[10px] font-mono font-bold flex-1 transition-all duration-500 ${phase === 'corrected' ? 'bg-slate-900/40 border border-slate-800 text-slate-600 line-through' : 'bg-rose-500/5 border border-rose-500/20 text-rose-400'}`}>
                  <span>🔍</span>
                  <span>{t('Variant: Jemunai / JIMMELA / 3.1火', '語音變體：Jemunai / JIMMELA / 3.1火', '語音變體：Jemunai / JIMMELA / 3.1火')}</span>
                </div>
                
                <span className={`text-center font-bold font-mono transition-all duration-500 ${phase === 'corrected' ? 'text-emerald-500 rotate-180 sm:rotate-0' : 'text-slate-600'}`}>➔</span>
                
                <div className={`px-3 py-2 rounded-xl flex items-center space-x-2 text-[10px] font-mono font-bold flex-1 transition-all duration-500 ${phase === 'corrected' ? 'bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.2)]' : 'bg-slate-900 border border-slate-800 text-slate-500'}`}>
                  <span>✨</span>
                  <span>{t('Output: gemini 3.1 pro', '校正輸出：gemini 3.1 pro', '校正输出：gemini 3.1 pro')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer of the Live Simulator Screen */}
          <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-[9px] text-slate-500 font-mono">
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {t('Status: Cognitive Autopilot Tuned', '狀態：主動學習精準校正中', '状态：主动学习精准校正中')}
            </span>
            <button 
              onClick={triggerReset}
              className="hover:text-white transition flex items-center gap-1 px-2 py-0.5 bg-slate-900 border border-slate-800 hover:border-slate-700 rounded text-[9px] font-mono cursor-pointer"
              title="Reset Simulator Animation"
            >
              <RefreshCw className="w-2.5 h-2.5" />
              <span>{t('Reset Simulation', '重置模擬動畫', '重置模拟动画')}</span>
            </button>
          </div>
        </div>

        {/* Right Side: Copywriting */}
        <div className="lg:col-span-5 text-left space-y-4 lg:pl-4">
          <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[10px] font-mono font-bold uppercase tracking-wider">
            <span>⭐️</span>
            <span>{t('EXCLUSIVE COGNITIVE ACE FEATURE', '1.3 獨家地端主動學習核心', '1.3 独家地端主动学习核心')}</span>
          </div>
          
          <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-tight leading-snug">
            {currentLang === 'en' ? (
              <>
                AI Smart Learning <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-indigo-300">
                  Custom Memory Dictionary
                </span>
              </>
            ) : (
              <>
                AI 智慧學習 <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-indigo-300">
                  專屬記憶字典技術
                </span>
              </>
            )}
          </h3>

          <p className="text-slate-300 text-sm leading-relaxed font-sans">
            {currentLang === 'en' ? (
              "💡 A local brain with active learning capabilities: When facing background noise or random misheard phonetic homonyms from LLMs, simply highlight with your mouse and save via shortcut. Next time you speak, it corrects instantly and perfectly!"
            ) : (
              "💡 擁有主動學習能力的地端大腦：遇到雜音或大模型隨機聽錯的同音變體字，只需滑鼠 Highlight 框選、按下快捷鍵即可永久記憶，下次開講自動完美校正！"
            )}
          </p>

          <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-4 text-[11px] font-sans">
            <div className="space-y-1">
              <span className="text-slate-400 block font-bold">🎯 {currentLang === 'en' ? 'Zero Setup Noise' : '零配置免設定'}</span>
              <span className="text-slate-500">{currentLang === 'en' ? 'Works fully on local edge' : '本地地端自主運行'}</span>
            </div>
            <div className="space-y-1">
              <span className="text-slate-400 block font-bold">⚡️ {currentLang === 'en' ? 'One-Key Mapping' : '一鍵綁定更正'}</span>
              <span className="text-slate-500">{currentLang === 'en' ? 'No cloud database leak' : '不經雲端絕無隱私洩露'}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
