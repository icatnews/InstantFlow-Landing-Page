import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Sparkles, Check, Copy, FileAudio } from 'lucide-react';
import { outputModes } from '../data';
import { Language } from '../types';
import MemoryDictionaryWall from './MemoryDictionaryWall';

interface InteractivePlaygroundProps {
  currentLang: Language;
}

export default function InteractivePlayground({ currentLang }: InteractivePlaygroundProps) {
  // --- AI Notepad / Formatting State ---
  const [selectedModeId, setSelectedModeId] = useState('standard');
  const [customRawInput, setCustomRawInput] = useState('');
  const [formattedOutput, setFormattedOutput] = useState('');
  const [isFormatting, setIsFormatting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [socialDensity, setSocialDensity] = useState<'low' | 'medium' | 'high'>('medium');

  const activeMode = outputModes.find(m => m.id === selectedModeId) || outputModes[0];

  const renderFormattedText = (text: string, modeId: string) => {
    if (!text) return null;
    const parts = text.split('**');
    if (parts.length > 1) {
      return (
        <span className={modeId === 'engineer' ? 'font-mono' : 'font-sans'}>
          {parts.map((part, index) => {
            if (index % 2 === 1) {
              return (
                <span key={index} className="text-emerald-400 font-extrabold bg-emerald-500/15 px-1.5 py-0.5 rounded border border-emerald-500/30 font-semibold mx-0.5 animate-pulse">
                  {part}
                </span>
              );
            }
            return part;
          })}
        </span>
      );
    }
    return <span className={modeId === 'engineer' ? 'font-mono' : 'font-sans'}>{text}</span>;
  };

  const getSocialFormattedText = (rawText: string, density: 'low' | 'medium' | 'high', lang: Language): string => {
    let text = rawText.trim();
    if (!text) return '';

    // Normalize commonly used words
    text = text
      .replace(/instantflow v1 point 3/gi, 'InstantFlow v1.3')
      .replace(/instantflow 一點三版本/g, 'InstantFlow v1.3')
      .replace(/instantflow 一点三版本/g, 'InstantFlow v1.3')
      .replace(/server dot ts/gi, 'server.ts')
      .replace(/ dot ts/gi, '.ts');

    if (lang === 'en') {
      const isOhMyGod = text.toLowerCase().includes('oh my god') || text.toLowerCase().includes('steak') || text.toLowerCase().includes('claude') || text.toLowerCase().includes('accomplished');
      
      if (isOhMyGod) {
        let clause1 = "Oh my god";
        let clause2 = "I've finally finished this part of the claude";
        let clause3 = "I feel so accomplished";
        let clause4 = "Let's go get some steak to celebrate tonight";
        
        if (text.toLowerCase().includes('code')) {
          clause2 = "I've finally finished this part of the code";
        }
        
        if (density === 'low') {
          return `${clause1}, ${clause2}. ${clause3}. ${clause4}. 🥩`;
        } else if (density === 'medium') {
          const c2 = clause2.replace("I've finally", "I finally");
          return `${clause1}! 😱 ${c2}! 💻 ${clause3}! 🎉 ${clause4}! 🥩`;
        } else {
          const c2 = clause2.replace("claude", "code");
          return `${clause1} ${c2}💻 ${clause3} 🎉 ${clause4} 🥩`;
        }
      }

      // Fallback for custom English text
      let clauses = text.split(/[,.!?]+/).map(s => s.trim()).filter(Boolean);
      if (clauses.length <= 1) {
        const transitions = ["so excited", "voice typing", "buy once", "highly recommended", "i think", "let's", "lets"];
        let tempText = text;
        transitions.forEach(t => {
          const regex = new RegExp(`\\b(${t})\\b`, 'i');
          tempText = tempText.replace(regex, '|||$1');
        });
        clauses = tempText.split('|||').map(s => s.trim()).filter(Boolean);
      }

      if (clauses.length === 0) return text;
      const emojis = ["🔥", "🚀", "✨", "🎯", "💻", "🎉", "⚡", "🌟"];

      if (density === 'low') {
        return clauses.join(', ') + '. 🥩';
      } else if (density === 'medium') {
        return clauses.map((c, i) => {
          const emo = emojis[i % emojis.length];
          return `${c}! ${emo}`;
        }).join(' ');
      } else {
        return clauses.map((c, i) => {
          const emo = emojis[i % emojis.length];
          return `${c}${emo}`;
        }).join(' ');
      }
    } else {
      // Traditional / Simplified Chinese
      const isHans = lang === 'hans';
      const isDefaultLaunch = text.includes('超級興奮') || text.includes('超级兴奋') || text.includes('終身使用') || text.includes('终身使用') || text.includes('instantflow') || text.includes('發布');

      if (isDefaultLaunch) {
        const p1 = isHans ? "今天超级兴奋可以发布 InstantFlow v1.3" : "今天超級興奮可以發布 InstantFlow v1.3";
        const p2 = isHans ? "语音输入从来没有这么顺畅和快速" : "語音輸入從來沒有這麼順暢和快速";
        const p3 = isHans ? "买一次就能终身使用" : "買一次就能終身使用";

        if (density === 'low') {
          return `${p1}，${p2}，${p3}。🚀`;
        } else if (density === 'medium') {
          return `${p1}！🔥 ${p2}！✨ ${p3}！🎯`;
        } else {
          return `${p1}🔥 ${p2}✨ ${p3}🎯`;
        }
      }

      // General Chinese
      let clauses = text.split(/[,，.。!！?？\s]+/).map(s => s.trim()).filter(Boolean);
      if (clauses.length === 0) return text;
      const emojis = ["🔥", "🚀", "✨", "🎯", "💻", "🎉", "⚡", "🌟"];

      if (density === 'low') {
        return clauses.join('，') + '。🚀';
      } else if (density === 'medium') {
        return clauses.map((c, i) => {
          const emo = emojis[i % emojis.length];
          return `${c}！${emo}`;
        }).join(' ');
      } else {
        return clauses.map((c, i) => {
          const emo = emojis[i % emojis.length];
          return `${c}${emo}`;
        }).join(' ');
      }
    }
  };

  // Set default raw input when mode changes
  useEffect(() => {
    setCustomRawInput(activeMode.rawInput[currentLang]);
    setFormattedOutput('');
  }, [selectedModeId, currentLang]);

  const handleFormat = () => {
    setIsFormatting(true);
    setFormattedOutput('');
    const delay = selectedModeId === 'dictionary' ? 1500 : 850;
    setTimeout(() => {
      const cleanCustomInput = customRawInput.trim();
      
      if (selectedModeId === 'social') {
        setFormattedOutput(getSocialFormattedText(cleanCustomInput, socialDensity, currentLang));
      } else {
        const cleanSampleInput = activeMode.rawInput[currentLang].trim();
        
        if (cleanCustomInput === cleanSampleInput || cleanCustomInput === '') {
          setFormattedOutput(activeMode.formattedOutput[currentLang]);
        } else {
          // Simple client-side pseudo polish logic based on mode
          let result = customRawInput;
          if (selectedModeId === 'professional') {
            if (currentLang === 'en') {
              const lines = customRawInput.split(/[\s,]+/);
              const subject = lines.slice(0, 4).join(' ') || "Custom Discussion";
              const agenda1 = lines.slice(4, 8).join(' ') || "Review recent progress";
              const actionItem = lines.slice(lines.length - 5).join(' ') || "Review docs beforehand";
              result = `■ MAIN SUBJECT: ${subject}
■ TIME        : 10am
■ LOCATION    : Main Conference Room
■ AGENDA      :
  - ${agenda1}
    * [review] Project milestones and deliverables
■ ACTION ITEMS :
[All] - ${actionItem} ................................................................ [Before Meeting]`;
            } else {
              const lines = customRawInput.split(/[,，\s]+/);
              const subject = lines[0] || "自訂討論會議";
              const agenda1 = lines[1] || "確認專案進度與目標";
              const agenda2 = lines[2] || "新功能操作流程展示";
              const actionItem = lines[lines.length - 1] || "開會前完成準備工作";
              
              const mainSubjectLabel = currentLang === 'hans' ? '【会议主旨】' : '【會議主旨】';
              const timeLabel = currentLang === 'hans' ? '【会议时间】' : '【會議時間】';
              const locLabel = currentLang === 'hans' ? '【会议地点】' : '【會議地點】';
              const issueLabel = currentLang === 'hans' ? '【主要议题】' : '【主要議題】';
              const reqLabel = currentLang === 'hans' ? '【出席要求】' : '【出席要求】';
              const guideLabel = currentLang === 'hans' ? '【行动指南】' : '【行動指南】';
              const confirmLabel = currentLang === 'hans' ? '-(确认)' : '-(確認)';
              const demoLabel = currentLang === 'hans' ? '-(演示)' : '-(演示)';
              const feedbackLabel = currentLang === 'hans' ? '-(进行)' : '-(進行)';
              const feedbackContent = currentLang === 'hans' ? '意见反馈与Q&A' : '意見回饋與Q&A';
              const reqContent = currentLang === 'hans' ? '全体成员准时出席' : '全體成員準時出席';
              const guidePrefix = currentLang === 'hans' ? '全体与会人员' : '全體與會人員';
              const beforeMeeting = currentLang === 'hans' ? '会议前' : '會議前';

              result = `${mainSubjectLabel}: ${subject}
${timeLabel}: ${currentLang === 'hans' ? '下周四下午两点整' : '下週四下午兩點整'}
${locLabel}: ${currentLang === 'hans' ? '三楼大会议室' : '三樓大會議室'}
${issueLabel}:
  ${confirmLabel}${agenda1}
  ${demoLabel}${agenda2}
  ${feedbackLabel}${feedbackContent}
${reqLabel}: ${reqContent}
${guideLabel}:
${guidePrefix} - ${actionItem} 。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。 ${beforeMeeting}`;
            }
          } else if (selectedModeId === 'engineer') {
            const cleanInput = customRawInput.replace(/做一個|做一个|create a function named|create an/g, '').trim();
            const words = cleanInput.split(/[\s,，]+/);
            const funcName = words[0] || "CustomFunction";
            const param1 = words[1] || "param1";
            const param2 = words[2] || "param2";
            const logic1 = words.slice(3, 8).join(' ') || (currentLang === 'en' ? "Execute core processing logic" : "執行核心處理邏輯");
            const logic2 = words.slice(8, 14).join(' ') || (currentLang === 'en' ? "Return response with payload" : "回傳處理結果與狀態");

            const param1Text = currentLang === 'en' ? "First custom parameter" : "第一個自訂參數";
            const param2Text = currentLang === 'en' ? "Second custom parameter" : "第二個自訂參數";

            result = `# ========================================================================
# 📝 function : ${funcName}
# 📥 PARAMS   : ${param1.padEnd(8, ' ')} -> ${param1Text}
#               ${param2.padEnd(8, ' ')} -> ${param2Text}
# ⚙️ logic    :
1. ${logic1}
2. ${logic2}
# ========================================================================`;
          } else if (selectedModeId === 'dictionary') {
            if (currentLang === 'en') {
              result = customRawInput
                .replace(/Jamini/gi, 'gemini')
                .replace(/Jimella/gi, 'gemini')
                .replace(/gemini 3.1 pro/gi, '**gemini 3.1 pro**')
                .replace(/gemini/g, '**gemini 3.1 pro**'); // Ensure it becomes bold as requested
            } else {
              result = customRawInput
                .replace(/Jemunai/gi, 'gemini')
                .replace(/JIMMELA/gi, 'gemini')
                .replace(/gemini\(\)的3.1火/gi, 'gemini')
                .replace(/gemini 3.1 pro/gi, '**gemini 3.1 pro**')
                .replace(/gemini/g, '**gemini 3.1 pro**'); // Ensure it becomes bold
            }
          } else {
            // Standard
            result = customRawInput.charAt(0).toUpperCase() + customRawInput.slice(1);
            result = result.replace(/ dot ts/g, '.ts').replace(/ okay/g, ' OK');
          }
          setFormattedOutput(result);
        }
      }
      setIsFormatting(false);
    }, delay);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // --- Audio File Curated Sample Player ---
  const [selectedSampleId, setSelectedSampleId] = useState<number | null>(null);
  const [sampleIsPlaying, setSampleIsPlaying] = useState(false);
  const [sampleProgress, setSampleProgress] = useState(0);
  const [sampleRawText, setSampleRawText] = useState('');
  const [sampleFormattedText, setSampleFormattedText] = useState('');

  const audioSamples = [
    {
      id: 1,
      title: {
        en: "Sample 1: Daily Memo Dictation (Standard Mode)",
        zh: "範例 1：日常工作備忘錄口述 (標準模式)",
        hans: "范例 1：日常工作备忘录口述 (标准模式)"
      },
      desc: {
        en: "A standard workplace voice note transcribing raw speech directly into clean, readable text.",
        zh: "標準的日常工作備忘錄口述，將瑣碎的想法直接轉化為乾淨、利落的對話體文字。",
        hans: "标准的日常工作备忘录口述，将琐碎的想法直接转化为干净、利落的对话体文字。"
      },
      file: "standard_memo_raw.mp3",
      duration: "0:06",
      size: "1.0 MB",
      raw: {
        en: "I met with the team today around three pm to confirm that the port for server dot ts is fixed and the current blind testing is okay no problem",
        zh: "我今天下午大概三點多的時候跟團隊開會確認那個伺服器 dot ts 的 port 已經修好了啊然後目前盲測狀態就是 okay 沒問題",
        hans: "我今天下午大概三點多的時候跟團隊開會確認那個伺服器 dot ts 的 port 已經修好了啊然後目前盲測狀態就是 okay 沒問題"
      },
      formatted: {
        en: "I met with the team today (around 3:00 PM) to confirm that the port for \"server.ts\" is fixed. The current blind testing status is now okay, no problem.",
        zh: "我今天下午（大約三點多）的時候跟團隊開會，確認「伺服器 dot ts」的 port 已經修好了，目前盲測狀態已轉為 okay，沒問題。",
        hans: "我今天下午（大約三點多）的時候跟團隊開會，確認「伺服器 dot ts」的 port 已經修好了，目前盲測狀態已轉為 okay，沒問題。"
      },
      modeId: 'standard'
    },
    {
      id: 2,
      title: {
        en: "Sample 2: Finished Claude Part (Social Mode)",
        zh: "範例 2：專案開發完成分享 (社交模式)",
        hans: "范例 2：专案开发完成分享 (社交模式)"
      },
      desc: {
        en: "A social post recording detailing the raw speech of finishing a coding session.",
        zh: "分享程式碼開發完成喜悅的口述，轉錄為不同密度的社交平台動態。",
        hans: "分享程序码开发完成喜悦的口述，转录为不同密度的社交平台动态。"
      },
      file: "product_launch.m4a",
      duration: "0:04",
      size: "0.8 MB",
      raw: {
        en: "Oh my god, I've finally finished this part of the claude. I feel so accomplished. Let's go get some steak to celebrate tonight.",
        zh: "今天超級興奮可以發布 instantflow 一點三版本 語音打字從來沒有這麼順暢和快速 買一次就能終身使用",
        hans: "今天超级兴奋可以发布 instantflow 一点三版本 语音打字从来没有这么顺畅 and 快速 买一次就能终身使用"
      },
      formatted: {
        en: "Oh my god! 😱 I finally finished this part of the claude! 💻 I feel so accomplished! 🎉 Let's go get some steak to celebrate tonight! 🥩",
        zh: "今天超級興奮可以發布 InstantFlow v1.3！🚀 語音打字從來沒有這麼順暢和快速。✨ 買一次就能終身使用！🎯 #AI工具 #高效生產力",
        hans: "今天超级兴奋可以发布 InstantFlow v1.3！🚀 语音打字从来没有这么顺畅和快速。✨ 买一次就能终身使用！🎯 #AI工具 #高效生产力"
      },
      modeId: 'social'
    },
    {
      id: 3,
      title: {
        en: "Sample 3: Meeting Dictation (Professional Mode)",
        zh: "範例 3：會議記錄口述 (公文模式)",
        hans: "范例 3：会议记录口述 (公文模式)"
      },
      desc: {
        en: "A voice recording of a regular team sync with rapid topic changes.",
        zh: "一段日常團隊開會的錄音口述，涵蓋資安權限、界面演示等議題。",
        hans: "一段日常团队开会的录音口述，涵盖资安权限、界面演示等议题。"
      },
      file: "meeting_notes_raw.mp3",
      duration: "0:05",
      size: "1.2 MB",
      raw: {
        en: "all hands team meeting next monday at 10am in main conference room review last sprint progress and sprint completion metrics and deliverables everyone should review shared sync doc beforehand and bring notes",
        zh: "下個月AI系統全面生成制工推動說明會下週四下午兩點整在三樓大會議室同步提供線上連結主要議題是資安權限重新設定演示新版界面操作流程進行意見回饋與QA保留半小時全體開發團隊及集成片經理必須準時出席開會前完成舊版專案備存避免升級後資料衝突",
        hans: "下个月AI系统全面生成制工推动说明会下周四下午两点整在三楼大会议室同步提供在线链接主要议题是资安权限重新设定演示新版界面操作流程进行意见反馈与QA保留半小时全体开发团队及集成片经理必须准时出席开会前完成旧版专案备存避免升级后资料冲突"
      },
      formatted: {
        en: `■ MAIN SUBJECT: All-Hands Team Meeting Next Monday
■ TIME        : 10am
■ LOCATION    : Main Conference Room
■ AGENDA      :
  - Review last sprint progress
    * [review] Sprint completion metrics and deliverables
■ ACTION ITEMS :
[All] - Review shared sync doc beforehand and bring notes ...... [Before Meeting]`,
        zh: `【會議主旨】: 下個月AI系統全面生成制工推動說明會
【會議時間】: 下週四下午兩點整
【會議地點】: 三樓大會議室(同步提供線上連結)
【主要議題】:
  -(確認)資安權限重新設定
  -(演示)新版界面操作流程
  -(進行)意見回饋與Q&A(保留半小時)
【出席要求】: 全體開發團隊及集成片經理必須準時出席
【行動指南】:
全體與會人員 - 開會前完成舊版專案備存,避免升級後資料衝突 。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。 會議前`,
        hans: `【会议主旨】: 下个月AI系统全面生成制工推动说明会
【会议时间】: 下周四下午两点整
【会议地点】: 三楼大会议室(同步提供在线链接)
【主要议题】:
  -(确认)资安权限重新设定
  -(演示)新版界面操作流程
  -(进行)意见反馈与Q&A(保留半小时)
【出席要求】: 全体开发团队及集成片经理必须准时出席
【行动指南】:
全体与会人员 - 开会前完成旧版专案备存,避免升级后资料冲突 。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。 会议前`
      },
      modeId: 'professional'
    },
    {
      id: 4,
      title: {
        en: "Sample 4: User Avatar API Specification (Engineer Mode)",
        zh: "範例 4：使用者頭像 API 規格口述 (註解模式)",
        hans: "范例 4：使用者头像 API 规格口述 (注解模式)"
      },
      desc: {
        en: "Detailed backend API specification containing logic, packages, and storage rules.",
        zh: "詳細的後端 API 開發規格口述，包含 KLON 套件、AWS S3 儲存規則等技術口述。",
        hans: "详细的后端 API 开发规格口述，包含 KLON 套件、AWS S3 储存规则等技术口述。"
      },
      file: "avatar_spec_api.wav",
      duration: "0:08",
      size: "2.4 MB",
      raw: {
        en: "create a function named AutoFone User Avatar parameters are user_id as string file_data as binary and mod_space as dictionary first step check format with KLON package throw Invalidate the word error within 10000ms if failed second step crop image to square of Count Space third step upload to S3 and update embed request fourth step change state to presentation upon success",
        zh: "做一個 AutoFone User Avatar 函式參數有 user_id 字串和 file_data 二進位還有 mod_space 字典邏輯是第一步用 KLON 套件檢查上傳圖片格式是否支援或損毀不符合在 10000ms 內拋出 Invalidate the word 錯誤第二步若格式正確則自動對 Count Space 的座標進行正方形裁切第三步將裁切圖片上傳至 AWS S3 儲存桶並利用取得的註冊網址更新埋碼文字請求第四步成功後將狀態轉為所願之上簡報",
        hans: "做一个 AutoFone User Avatar 函数参数有 user_id 字串和 file_data 二进制还有 mod_space 字典逻辑是第一步用 KLON 套件检查上传图片格式是否支援 or 损毁不符合在 10000ms 内抛出 Invalidate the word 错误第二步若格式正确则自动对 Count Space 的坐标进行正方形裁切第三步将裁切图片上传至 AWS S3 储存桶并利用取得的注册网址更新埋码文字请求第四步成功后将状态转为所愿之上简报"
      },
      formatted: {
        en: `# ========================================================================
# 📝 function : AutoFone User Avatar
# 📥 PARAMS   : user_id  -> user ID (string type)
#               file_data -> uploaded file data (binary type)
#               mod_space -> module space settings (dictionary type)
# ⚙️ logic    :
1. Use "KLON" package to check if uploaded image format is supported or damaged, if not, throw "Invalidate the word" error within 10000ms
2. If format is correct, automatically perform a "square crop" of the "Count Space" coordinates
3. Upload cropped image to "AWS S3" bucket and update "embed text" request using retrieved "registered URL"
4. Upon success, transition state to "as desired" presentation
# ========================================================================`,
        zh: `# ========================================================================
# 📝 function : AutoFone User Avatar
# 📥 PARAMS   : user_id  -> 使用者ID(字串型態)
#               file_data -> 上傳的檔案資料(二進位型態)
#               mod_space -> 模組空間設定(字典型態)
# ⚙️ logic    :
1. 使用「KLON」套件檢查上傳圖片的「格式」是否被支援或損毀,若不符合則在10000ms 內直接拋出「Invalidate the word」錯誤
2. 若格式正確,則自動對「Count Space」的座標進行「正方形裁切」
3. 將裁切完成的圖片上傳至「AWS S3」的儲存桶,並利用取得的「註冊網址」更新「埋碼文字」請求
4. 成功後,將狀態轉為「所願之上」的簡報
# ========================================================================`,
        hans: `# ========================================================================
# 📝 function : AutoFone User Avatar
# 📥 PARAMS   : user_id  -> 使用者ID(字串型态)
#               file_data -> 上传的档案资料(二进制型态)
#               mod_space -> 模组空间设定(字典型态)
# ⚙️ logic    :
1. 使用「KLON」套件检查上传图片的「格式」是否被支援 or 损毁,若不符合则在10000ms 内直接抛出「Invalidate the word」错误
2. 若格式正确,则自动对「Count Space」的坐标进行「正方形裁切」
3. 将裁切完成的图片上传至「AWS S3」储存桶并利用取得的注册网址更新埋码文字请求
4. 成功后,将状态转為「所愿之上」的简报
# ========================================================================`
      },
      modeId: 'engineer'
    }
  ];

  // Handle auto updates when density or language changes
  useEffect(() => {
    if (selectedModeId === 'social') {
      if (customRawInput) {
        setFormattedOutput(getSocialFormattedText(customRawInput, socialDensity, currentLang));
      }
      if (selectedSampleId === 2 && !sampleIsPlaying) {
        const sample = audioSamples.find(s => s.id === 2);
        if (sample) {
          setSampleFormattedText(getSocialFormattedText(sample.raw[currentLang], socialDensity, currentLang));
        }
      }
    }
  }, [socialDensity, currentLang, selectedModeId, customRawInput, selectedSampleId, sampleIsPlaying]);

  const playSample = (sampleId: number) => {
    setSelectedSampleId(sampleId);
    setSampleIsPlaying(true);
    setSampleProgress(0);
    setSampleRawText('');
    setSampleFormattedText('');

    const sample = audioSamples.find(s => s.id === sampleId);
    if (!sample) return;

    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      setSampleProgress(Math.min(progress, 100));

      const totalLen = sample.raw[currentLang].length;
      const charsToShow = Math.floor((progress / 100) * totalLen);
      setSampleRawText(sample.raw[currentLang].substring(0, charsToShow));

      if (progress >= 100) {
        clearInterval(interval);
        setSampleIsPlaying(false);
        setIsFormatting(true);
        const delay = sample.modeId === 'dictionary' ? 1500 : 850;
        setTimeout(() => {
          if (sample.modeId === 'social') {
            setSampleFormattedText(getSocialFormattedText(sample.raw[currentLang], socialDensity, currentLang));
          } else {
            setSampleFormattedText(sample.formatted[currentLang]);
          }
          setIsFormatting(false);
        }, delay);
      }
    }, 100);
  };

  const resetSamplePlayer = () => {
    setSelectedSampleId(null);
    setSampleIsPlaying(false);
    setSampleProgress(0);
    setSampleRawText('');
    setSampleFormattedText('');
  };

  // --- Infinite Logo Marquee Wall Data ---
  const marqueeRow1 = [
    {
      name: 'Google Chrome',
      bg: '#ffffff',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#f1f3f4" />
          <circle cx="12" cy="12" r="4" fill="#1a73e8" />
          <path d="M12 2C8.7 2 5.8 3.6 4.1 6.1l4 6.9c.1-1.5 1.3-2.7 2.8-2.9L16.4 2H12z" fill="#ea4335" />
          <path d="M22 12c0-3.3-1.6-6.2-4.1-7.9l-4 6.9c1.1 1.1 1.1 2.9 0 4l-5.5 9.5c1.1.3 2.3.5 3.6.5 5.5 0 10-4.5 10-10z" fill="#fbc02d" />
          <path d="M12 22c3.3 0 6.2-1.6 7.9-4.1l-6.9-4c-1.1 1.1-2.9 1.1-4 0L3.5 14.4C3.8 18.6 7.5 22 12 22z" fill="#34a853" />
        </svg>
      )
    },
    {
      name: 'Cursor',
      bg: '#000000',
      icon: (
        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m5 3 3.057 14.947a1 1 0 0 0 1.9.1L12 12l6.047-1.957a1 1 0 0 0 .1-1.9L5 3Z" />
        </svg>
      )
    },
    {
      name: 'Slack',
      bg: '#4a154b',
      icon: (
        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.043a2.528 2.528 0 0 1-2.522 2.52H8.823a2.528 2.528 0 0 1-2.52-2.52v-5.043zm2.52-6.342a2.528 2.528 0 0 1-2.52-2.522 2.528 2.528 0 0 1 2.52-2.522 2.528 2.528 0 0 1 2.522 2.522v2.522H8.823zm0 1.261a2.528 2.528 0 0 1 2.52 2.52v5.043a2.528 2.528 0 0 1-2.52 2.522H3.78a2.528 2.528 0 0 1-2.522-2.522V10.084a2.528 2.528 0 0 1 2.522-2.52h5.043zm6.356-3.78a2.528 2.528 0 0 1 2.522-2.523 2.528 2.528 0 0 1 2.522 2.523 2.528 2.528 0 0 1-2.522 2.52h-2.522v-2.52zm-1.262 0a2.528 2.528 0 0 1-2.522 2.52H6.3a2.528 2.528 0 0 1-2.52-2.52V3.78A2.528 2.528 0 0 1 6.3 1.258h5.043a2.528 2.528 0 0 1 2.522 2.522v5.043zm-2.522 6.342a2.528 2.528 0 0 1 2.522 2.522 2.528 2.528 0 0 1-2.522 2.522 2.528 2.528 0 0 1-2.522-2.522v-2.522h2.522zm0-1.261a2.528 2.528 0 0 1-2.522-2.52V5.043a2.528 2.528 0 0 1 2.522-2.52H20.22a2.528 2.528 0 0 1 2.522 2.52V10.084a2.528 2.528 0 0 1-2.522 2.52h-5.043z" />
        </svg>
      )
    },
    {
      name: 'Gmail',
      bg: '#ffffff',
      icon: (
        <svg className="w-4 h-4 text-[#ea4335]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      )
    },
    {
      name: 'VS Code',
      bg: '#007acc',
      icon: (
        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    },
    {
      name: 'Teams',
      bg: '#4f46e5',
      icon: (
        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm8.5-4.43c-.19-.4-.53-.7-1-.8-.5-.1-1 .1-1.3.5l-2.2 2.2V13h-2v4h4.5c.3 0 .6-.1.8-.3l1.2-1.2c.4-.4.4-1.1 0-1.5z" />
        </svg>
      )
    },
    {
      name: 'ChatGPT',
      bg: '#10a37f',
      icon: (
        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.74 11.58c0-.74-.18-1.46-.53-2.11a4.26 4.26 0 0 0-1.83-1.83c.35-.65.53-1.37.53-2.11 0-1.12-.42-2.18-1.19-2.95s-1.83-1.19-2.95-1.19c-.74 0-1.46.18-2.11.53-.51-.3-1.09-.46-1.71-.46a4.26 4.26 0 0 0-3.32 1.58A4.26 4.26 0 0 0 5.3 1.92c-1.12 0-2.18.42-2.95 1.19S1.16 4.94 1.16 6.06c0 .74.18 1.46.53 2.11-.35.51-.51 1.09-.51 1.71a4.26 4.26 0 0 0 1.58 3.32c-.35.65-.53 1.37-.53 2.11 0 1.12.42 2.18 1.19 2.95s1.83 1.19 2.95 1.19c.74 0 1.46-.18 2.11-.53.51.3 1.09.46 1.71.46.7 0 1.38-.17 2-.51.65.35 1.37.53 2.11.53 1.12 0 2.18-.42 2.95-1.19s1.19-1.83 1.19-2.95c0-.74-.18-1.46-.53-2.11.35-.51.53-1.09.53-1.71 0-.7-.17-1.38-.51-2a4.26 4.26 0 0 0 .51-2z" />
        </svg>
      )
    }
  ];

  const marqueeRow2 = [
    {
      name: 'Microsoft Edge',
      bg: '#ffffff',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#eef2f7" />
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.25.23 2.45.65 3.56.36-.6.82-1.12 1.35-1.56C5 13.1 6.5 12.5 8 12.5c2.5 0 4.5 1.5 5 4s-.5 4.5-3 5c-1-.2-2-.6-2.5-1.2.5.3 1 .4 1.5.4 3 0 5-2.5 5-5.5s-2.5-5.5-5.5-5.5c-2.5 0-4.5 1.5-5 4C2.5 11 2.2 9.5 2.5 8c.6-2.8 2.8-5 5.5-5.6C9.1 2.1 10.5 2 12 2z" fill="#0078d4" />
        </svg>
      )
    },
    {
      name: 'Google Docs',
      bg: '#2563eb',
      icon: (
        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      )
    },
    {
      name: 'Obsidian',
      bg: '#4f39a7',
      icon: (
        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 12l10 10 10-10L12 2z" />
          <path d="M12 2v20" />
          <path d="M2 12h20" />
        </svg>
      )
    },
    {
      name: currentLang === 'en' ? 'Notepad' : 'Windows 記事本',
      bg: '#0ea5e9',
      icon: (
        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      )
    },
    {
      name: 'Discord',
      bg: '#5865f2',
      icon: (
        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.27 4.73a16.14 16.14 0 0 0-4.07-1.18 10.29 10.29 0 0 0-.44.83 15 15 0 0 0-5.52 0 10.15 10.15 0 0 0-.45-.83 16.19 16.19 0 0 0-4.07 1.18A16.21 16.21 0 0 0 1.21 17.8a16.3 16.3 0 0 0 5 2.53 12.08 12.08 0 0 0 1-.77 10.44 10.44 0 0 1-1.63-.78 7.7 7.7 0 0 0 .15-.11 11.41 11.41 0 0 0 12.52 0 7.22 7.22 0 0 0 .15.11 10.82 10.82 0 0 1-1.63.78 12.51 12.51 0 0 0 1 .77 16.13 16.13 0 0 0 5-2.53 16.15 16.15 0 0 0-3.08-13.07zM8.02 15.33a1.93 1.93 0 1 1 1.93-1.93 1.93 1.93 0 0 1-1.93 1.93zm7.96 0a1.93 1.93 0 1 1 1.93-1.93 1.93 1.93 0 0 1-1.93 1.93z" />
        </svg>
      )
    },
    {
      name: currentLang === 'en' ? 'LINE Desktop' : 'LINE 電腦版',
      bg: '#06c755',
      icon: (
        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 10.15c0-4.63-4.49-8.4-10-8.4S2 5.52 2 10.15c0 4.13 3.56 7.6 8.36 8.28.32.07.77.21.88.5.1.25.07.65.03.9-.04.26-.2.12-.27.83-.09.84-.4 3.26-.17 3.26.24 0 2.22-1.34 3.12-2.14 1.15-1.02 1.62-1.5 2.27-2.3 3.48-1.52 5.78-4.8 5.78-9.33zm-11.4 2.87H8.84a.43.43 0 0 1-.44-.43v-4.3a.43.43 0 0 1 .44-.43h.33c.24 0 .43.2.43.43v3.87h1.4c.24 0 .43.2.43.43v.33a.43.43 0 0 1-.43.43zm2.25-.43a.43.43 0 0 1-.43.43h-.34a.43.43 0 0 1-.43-.43v-4.3a.43.43 0 0 1 .43-.43h.34c.24 0 .43.2.43.43v4.3zm5.02 0c0 .24-.2.43-.43.43h-.37c-.16 0-.3-.09-.37-.24L15.3 10.1v2.5a.43.43 0 0 1-.43.43h-.34a.43.43 0 0 1-.43-.43v-4.3c0-.24.2-.43.43-.43h.38c.16 0 .3.09.37.24l1.39 2.68v-2.5a.43.43 0 0 1 .43-.43h.34c.24 0 .43.2.43.43v4.3zm2.38-1.51h-1.4v.85h1.4c.24 0 .43.2.43.43v.33a.43.43 0 0 1-.43.43h-2.16a.43.43 0 0 1-.43-.43V8.72c0-.24.2-.43.43-.43h2.16c.24 0 .43.2.43.43v.33a.43.43 0 0 1-.43.43h-1.4v.85h1.4c.24 0 .43.2.43.43v.33a.43.43 0 0 1-.43.43z" />
        </svg>
      )
    },
    {
      name: 'Claude',
      bg: '#d97706',
      icon: (
        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-.25-4a1.25 1.25 0 1 1-2.5 0v-4a1.25 1.25 0 1 1 2.5 0v4z" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-transparent px-4 sm:px-6 lg:px-8 py-4">
      
      {/* 1. Header of the Playground Section */}
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
        <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase text-indigo-600 bg-indigo-50 border border-indigo-100 animate-pulse">
          {currentLang === 'en' ? 'FOUR OUTPUT MODES' : '探索四大輸出模式'}
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-800 tracking-tight">
          {currentLang === 'en' ? 'Four Output Modes, Seamless Transition' : '四大輸出模式，無縫轉換'}
        </h2>
        <p className="text-slate-500 text-sm max-w-xl mx-auto leading-relaxed">
          {currentLang === 'en'
            ? 'Switch modes to see how messy spoken transcripts instantly polish into beautiful formats, or play pre-recorded dictation to hear it live.'
            : '切換下方模式，感受雜亂的口述錄音如何完美變身；或直接播放精選語音範例，體驗智慧排版的極致魅力。'}
        </p>
      </div>

      {/* 2. Unified Content Grid */}
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* A. Mode Cards Display Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {outputModes.map((mode) => {
            const isSelected = selectedModeId === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => {
                  setSelectedModeId(mode.id);
                  // If playing a sample of a different mode, reset player so it's not confusing
                  const playingSample = audioSamples.find(s => s.id === selectedSampleId);
                  if (playingSample && playingSample.modeId !== mode.id) {
                    resetSamplePlayer();
                  }
                }}
                className={`p-5 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between h-[160px] cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? 'bg-gradient-to-tr from-white to-indigo-50/40 border-indigo-400 shadow-xl shadow-indigo-150/20 scale-[1.02]'
                    : 'bg-white border-slate-200/60 hover:border-indigo-200 hover:bg-slate-50/30 hover:shadow-lg'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-extrabold text-indigo-500 bg-indigo-50/80 px-2 py-0.5 rounded-full">
                      {mode.number}
                    </span>
                    {isSelected && <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />}
                  </div>
                  <h4 className={`font-sans font-extrabold text-sm sm:text-base ${isSelected ? 'text-indigo-900' : 'text-slate-800'}`}>
                    {mode.title[currentLang]}
                  </h4>
                  <p className="text-slate-500 text-xs mt-1.5 leading-relaxed line-clamp-2">
                    {mode.subtitle[currentLang]}
                  </p>
                </div>
                <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${isSelected ? 'text-indigo-600' : 'text-slate-400'}`}>
                  {mode.id === 'standard' && 'Standard'}
                  {mode.id === 'social' && 'Social'}
                  {mode.id === 'professional' && 'Professional'}
                  {mode.id === 'engineer' && 'Engineer'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Mode Description Banner */}
        <div className="p-5 bg-white/50 border border-slate-100 rounded-2xl text-center max-w-3xl mx-auto shadow-sm space-y-4">
          <div>
            <span className="font-sans text-xs font-extrabold text-indigo-600 block mb-1">
              {activeMode.title[currentLang]} — {activeMode.subtitle[currentLang]}
            </span>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              {activeMode.description[currentLang]}
            </p>
          </div>

          {selectedModeId === 'social' && (
            <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-3">
              <span className="text-xs font-bold text-slate-600">
                {currentLang === 'en' ? 'Emoji Density:' : '表情符號密度：'}
              </span>
              <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200">
                {[
                  { id: 'low', label: currentLang === 'en' ? 'Low' : '低密度' },
                  { id: 'medium', label: currentLang === 'en' ? 'Medium' : '中密度' },
                  { id: 'high', label: currentLang === 'en' ? 'High' : '高密度' }
                ].map((densityOpt) => {
                  const isActive = socialDensity === densityOpt.id;
                  return (
                    <button
                      key={densityOpt.id}
                      id={`density-btn-${densityOpt.id}`}
                      onClick={() => setSocialDensity(densityOpt.id as 'low' | 'medium' | 'high')}
                      className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        isActive
                          ? 'bg-indigo-600 text-white shadow-sm'
                          : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                      }`}
                    >
                      {densityOpt.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* B. Main Interactive Playground (Two Column Bento Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Column Left (Playground Textbox or Audio samples) - 5 Cols */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <div className="bg-white/80 backdrop-blur-xl border border-indigo-100/40 p-5 rounded-3xl shadow-lg flex flex-col justify-between h-full space-y-4">
              <div className="text-left space-y-1">
                <span className="text-[10px] font-mono font-bold text-indigo-600 uppercase tracking-wider block">
                  {currentLang === 'en' ? 'METHOD 1: VOICE DICTATION DEMO' : '體驗方法一：語音範例模擬播放'}
                </span>
                <h3 className="font-display font-extrabold text-lg text-slate-800">
                  {currentLang === 'en' ? 'Click pre-recorded speech' : '點擊語音範例進行播放'}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {currentLang === 'en'
                    ? 'Play real voice recordings of different scenarios to see InstantFlow structure them instantly.'
                    : '點擊下方為您準備的真實錄音，聆聽發音並看它如何即時完美排版：'}
                </p>
              </div>

              {/* Audio samples buttons list */}
              <div className="space-y-2.5 flex-1 overflow-y-auto max-h-[300px] pr-1">
                {audioSamples.map((sample) => {
                  const isPlayingThis = selectedSampleId === sample.id;
                  const isCurrentMode = selectedModeId === sample.modeId;
                  return (
                    <button
                      key={sample.id}
                      onClick={() => {
                        setSelectedModeId(sample.modeId);
                        playSample(sample.id);
                      }}
                      className={`w-full p-3.5 rounded-xl border text-left transition-all duration-300 flex items-center justify-between gap-3 cursor-pointer ${
                        isPlayingThis
                          ? 'bg-indigo-600/5 border-indigo-300 shadow-sm scale-[1.01]'
                          : isCurrentMode
                          ? 'bg-slate-50 border-slate-200'
                          : 'bg-white border-slate-100 hover:border-slate-200 hover:bg-slate-50/50'
                      }`}
                    >
                      <div className="space-y-1 flex-1 min-w-0">
                        <div className="flex items-center space-x-1.5">
                          <span className="text-sm shrink-0">
                            {sample.modeId === 'standard' && '✉️'}
                            {sample.modeId === 'social' && '🔥'}
                            {sample.modeId === 'professional' && '💼'}
                            {sample.modeId === 'engineer' && '⚙️'}
                            {sample.modeId === 'dictionary' && '📓'}
                          </span>
                          <h5 className={`font-sans font-bold text-xs truncate ${isPlayingThis ? 'text-indigo-600' : 'text-slate-700'}`}>
                            {sample.title[currentLang]}
                          </h5>
                        </div>
                        <div className="flex items-center space-x-2.5 text-[9px] font-mono text-slate-400 font-semibold">
                          <span>⏱️ {sample.duration}</span>
                          <span>💾 {sample.size}</span>
                        </div>
                      </div>
                      
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isPlayingThis ? 'bg-indigo-600 text-white' : 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100'
                      }`}>
                        <Play className={`w-3 h-3 ${isPlayingThis ? 'animate-pulse fill-current' : 'fill-current'}`} />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Divider for Custom Input */}
              <div className="border-t border-slate-100 pt-4 text-left">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  {currentLang === 'en' ? 'METHOD 2: CUSTOM TEXT TYPING' : '體驗方法二：自訂輸入原始想法'}
                </span>
                <textarea
                  value={customRawInput}
                  onChange={(e) => {
                    setCustomRawInput(e.target.value);
                    // If they type, stop sample play so they aren't typing over it
                    if (selectedSampleId !== null) {
                      resetSamplePlayer();
                    }
                  }}
                  placeholder={currentLang === 'en' ? "Or type your own raw speech script here..." : "或在此鍵入您自己的原始想法內容..."}
                  className="w-full h-24 bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl p-3 text-xs font-sans text-slate-700 resize-none outline-none shadow-inner"
                />
                <div className="flex justify-between items-center mt-2">
                  <button
                    onClick={() => {
                      resetSamplePlayer();
                      setCustomRawInput(activeMode.rawInput[currentLang]);
                    }}
                    className="flex items-center space-x-1 px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-500 text-[9px] font-bold transition border border-slate-200/50 cursor-pointer"
                  >
                    <RotateCcw className="w-2.5 h-2.5" />
                    <span>{currentLang === 'en' ? 'Default Sample' : '還原預設'}</span>
                  </button>
                  
                  <button
                    onClick={handleFormat}
                    disabled={isFormatting || !customRawInput}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition cursor-pointer disabled:opacity-50"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>{currentLang === 'en' ? 'Polish Text' : '立即美化'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Column Right (Live Player / Interactive Display) - 7 Cols */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-white/80 backdrop-blur-xl border border-indigo-100/40 p-5 sm:p-6 rounded-3xl shadow-lg relative overflow-hidden h-full">
            <div className="space-y-4 h-full flex flex-col justify-between">
              
              {/* Header Status Bar of the active demo */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse shrink-0" />
                  <span className="truncate">
                    {selectedSampleId !== null
                      ? audioSamples.find(s => s.id === selectedSampleId)?.title[currentLang]
                      : `${activeMode.title[currentLang]} - Live Playground`}
                  </span>
                </span>
                
                {selectedSampleId !== null && (
                  <button
                    onClick={resetSamplePlayer}
                    className="text-slate-400 hover:text-indigo-600 font-bold text-xs transition flex items-center space-x-1 cursor-pointer"
                  >
                    <span>{currentLang === 'en' ? 'Clear Player' : '清除播放器'}</span>
                  </button>
                )}
              </div>

              {/* Waveform Visualization area */}
              <div className="flex flex-col items-center justify-center py-4 bg-slate-50 border border-slate-100 rounded-2xl space-y-3 relative overflow-hidden">
                {sampleIsPlaying ? (
                  <div className="flex items-end justify-center space-x-1 h-7">
                    {[0.5, 0.9, 0.4, 0.8, 0.3, 0.7, 0.4, 0.95, 0.5, 0.8, 0.4, 0.6, 0.3, 0.9, 0.5, 0.7, 0.4, 0.8, 0.3, 0.6, 0.5].map((val, idx) => (
                      <div
                        key={idx}
                        className="w-[3px] bg-indigo-500 rounded-full animate-bounce"
                        style={{
                          height: `${val * 100}%`,
                          animationDelay: `${idx * 0.05}s`,
                          animationDuration: '0.8s'
                        }}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="flex items-end justify-center space-x-1 h-7">
                    {[0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3].map((val, idx) => (
                      <div
                        key={idx}
                        className="w-[3px] bg-slate-200 rounded-full"
                        style={{ height: '15%' }}
                      />
                    ))}
                  </div>
                )}

                <div className="w-full max-w-xs px-4 space-y-1">
                  <div className="flex justify-between text-[9px] font-mono text-slate-400 font-bold">
                    <span>{sampleIsPlaying ? '0:02' : '0:00'}</span>
                    <span>{selectedSampleId !== null ? audioSamples.find(s => s.id === selectedSampleId)?.duration : '0:05'}</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      style={{ width: `${selectedSampleId !== null ? sampleProgress : isFormatting ? 80 : 0}%` }}
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Twin Results Grid: Input/Speech vs Format */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                
                {/* Left Panel: Raw text input/stream */}
                <div className="flex flex-col bg-slate-50 border border-slate-200/60 rounded-2xl p-4 text-left">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    🎙️ {selectedSampleId !== null ? (currentLang === 'en' ? 'Voice Streaming' : '語音即時還原') : (currentLang === 'en' ? 'Raw Speech Text' : '原始語音內容')}
                  </span>
                  
                  <div className="flex-1 overflow-y-auto text-xs sm:text-sm text-slate-600 font-sans italic whitespace-pre-wrap leading-relaxed max-h-[280px] min-h-[100px]">
                    {selectedSampleId !== null ? (
                      sampleRawText || (currentLang === 'en' ? 'Initializing playback stream...' : '語音串流載入中...')
                    ) : (
                      customRawInput || (currentLang === 'en' ? 'Type or select a sample above...' : '請在左方輸入自訂文字，或播放範例...')
                    )}
                  </div>
                </div>

                {/* Right Panel: Polished InstantFlow outputs */}
                <div className={`flex flex-col rounded-2xl p-4 border relative text-left min-h-[100px] max-h-[160px] md:max-h-none flex-1 overflow-hidden ${
                  selectedModeId === 'engineer'
                    ? 'bg-[#1e1e1e] border-[#2c333a] text-slate-200'
                    : 'bg-slate-900 border-slate-800 text-slate-200'
                }`}>
                  <style>{`
                    @keyframes laserSweep {
                      0% { left: -5%; }
                      100% { left: 105%; }
                    }
                  `}</style>

                  {/* Purple-yellow horizontal laser sweep bar */}
                  {isFormatting && (
                    <div 
                      className="absolute top-0 bottom-0 w-[5px] bg-gradient-to-b from-amber-300 via-purple-500 to-amber-300 z-30 pointer-events-none"
                      style={{ 
                        animation: `laserSweep ${selectedModeId === 'dictionary' ? '1500ms' : '850ms'} linear forwards`,
                        boxShadow: '0 0 25px 6px #d946ef, 0 0 45px 12px #a855f7, 0 0 70px 20px #fbbf24, 0 0 100px 30px rgba(251, 191, 36, 0.4)'
                      }}
                    />
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] font-bold text-indigo-400 uppercase tracking-wider">
                      ✨ {currentLang === 'en' ? 'InstantFlow Output' : 'InstantFlow 完美排版成果'}
                    </span>
                    
                    {/* Copy Button - using Copy icon instead of Clipboard to prevent paperclip confusion */}
                    {((selectedSampleId !== null && sampleFormattedText) || (selectedSampleId === null && formattedOutput)) && (
                      <button
                        onClick={() => copyToClipboard(selectedSampleId !== null ? sampleFormattedText : formattedOutput)}
                        className="flex items-center space-x-1 text-slate-400 hover:text-indigo-400 transition cursor-pointer"
                      >
                        {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span className="text-[9px] font-bold">{copied ? 'Copied' : 'Copy'}</span>
                      </button>
                    )}
                  </div>

                  <div className="flex-1 overflow-y-auto pr-1">
                    {selectedSampleId !== null ? (
                      sampleIsPlaying ? (
                        <div className="h-full flex flex-col items-center justify-center space-y-2 text-indigo-400 py-4">
                          <Sparkles className="w-4 h-4 animate-spin" />
                          <span className="text-[10px] font-bold tracking-wide font-sans">
                            {currentLang === 'en' ? 'Polishing speech...' : '語畢自動智慧排版中...'}
                          </span>
                        </div>
                      ) : sampleFormattedText ? (
                        <pre className={`whitespace-pre-wrap leading-relaxed text-xs ${
                          selectedModeId === 'engineer' ? 'font-mono text-slate-200' : 'font-sans text-slate-200'
                        }`}>
                          {renderFormattedText(sampleFormattedText, selectedModeId)}
                        </pre>
                      ) : (
                        <div className="h-full flex items-center justify-center text-slate-500 italic font-sans text-xs py-4">
                          {currentLang === 'en' ? 'Waiting for voice end...' : '等待語音播放完畢自動排版...'}
                        </div>
                      )
                    ) : (
                      isFormatting ? (
                        <div className="h-full flex flex-col items-center justify-center space-y-2 text-indigo-400 py-4">
                          <Sparkles className="w-4 h-4 animate-spin" />
                          <span className="text-[10px] font-bold tracking-wide font-sans">
                            {currentLang === 'en' ? 'Polishing...' : '正在排版潤色...'}
                          </span>
                        </div>
                      ) : formattedOutput ? (
                        <pre className={`whitespace-pre-wrap leading-relaxed text-xs ${
                          selectedModeId === 'engineer' ? 'font-mono text-slate-200' : 'font-sans text-slate-200'
                        }`}>
                          {renderFormattedText(formattedOutput, selectedModeId)}
                        </pre>
                      ) : (
                        <div className="h-full flex items-center justify-center text-slate-500 italic font-sans text-xs py-4">
                          {currentLang === 'en' ? 'Click format button to test' : '請點擊左方「立即美化」查看結果'}
                        </div>
                      ))}
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>

      {/* 2.5 王牌核心功能亮點：AI 智慧學習 • 專屬記憶字典 (Custom Memory Dictionary) 版塊 */}
      <MemoryDictionaryWall currentLang={currentLang} />

      {/* 3. INFINITE LOGO MARQUEE WALL (Works perfectly in all your apps) */}
      <div className="mt-20 border-t border-slate-100 pt-12 text-center max-w-5xl mx-auto space-y-6">
        <div className="space-y-1">
          <span className="text-[10px] font-mono font-bold text-indigo-600 uppercase tracking-widest block">
            {currentLang === 'en' ? 'Works across all your apps' : '無縫搭配所有主流軟體，全面支援輸入'}
          </span>
          <h3 className="font-display font-extrabold text-2xl text-slate-800">
            {currentLang === 'en' ? 'If it accepts text, it works' : '只要能輸入文字的地方，就能使用 InstantFlow'}
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            {currentLang === 'en'
              ? 'ChatGPT, Claude, Cursor, Slack, Docs, Gmail — InstantFlow is globally compatible across every workspace.'
              : '不管是 ChatGPT、Claude、Cursor 等 AI 平台，還是 Slack、Teams、Notion、Office 等辦公工具，完美融入您的原有工作流。'}
          </p>
        </div>

        {/* Double-row Infinite Marquee Wall */}
        <div className="space-y-4 overflow-hidden py-4 relative">
          
          {/* Blur masks on left & right to create a seamless premium dissolve fade */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

          {/* Row 1: Sliding Left */}
          <div className="flex w-full overflow-hidden">
            <div className="flex space-x-4 animate-marquee whitespace-nowrap">
              {marqueeRow1.concat(marqueeRow1).map((app, index) => (
                <div
                  key={`${app.name}-${index}`}
                  className="inline-flex items-center space-x-3 bg-white border border-slate-100 px-5 py-3 rounded-2xl shadow-sm hover:border-indigo-200 transition-all cursor-default"
                >
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 overflow-hidden shadow-inner" style={{ backgroundColor: app.bg }}>
                    {app.icon}
                  </div>
                  <span className="font-sans font-extrabold text-sm text-slate-700 tracking-tight">{app.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Sliding Right */}
          <div className="flex w-full overflow-hidden">
            <div className="flex space-x-4 animate-marquee-reverse whitespace-nowrap">
              {marqueeRow2.concat(marqueeRow2).map((app, index) => (
                <div
                  key={`${app.name}-${index}`}
                  className="inline-flex items-center space-x-3 bg-white border border-slate-100 px-5 py-3 rounded-2xl shadow-sm hover:border-indigo-200 transition-all cursor-default"
                >
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 overflow-hidden shadow-inner" style={{ backgroundColor: app.bg }}>
                    {app.icon}
                  </div>
                  <span className="font-sans font-extrabold text-sm text-slate-700 tracking-tight">{app.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
