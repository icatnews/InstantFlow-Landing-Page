import { OutputMode, Feature, FAQItem, Testimonial } from './types';

export const outputModes: OutputMode[] = [
  {
    id: 'standard',
    number: '01',
    title: {
      en: 'Standard Mode',
      zh: '標準模式',
      hans: '标准模式'
    },
    subtitle: {
      en: 'Clean text for direct input',
      zh: '乾淨的文字，供直接輸入',
      hans: '干净的文字，供直接输入'
    },
    description: {
      en: 'Use Standard mode when you want straightforward voice-to-text output for AI prompts, notes, chat, or general writing without extra formatting.',
      zh: '當你需要為 AI 提示詞、筆記、聊天或一般寫作進行最直接的語音轉文字，且不需要額外排版時，使用標準模式。',
      hans: '当你需要为 AI 提示词、笔记、聊天或一般写作进行最直接的语音转文字，且不需要额外排版时，使用标准模式。'
    },
    rawInput: {
      en: 'I met with the team today around three pm to confirm that the port for server dot ts is fixed and the current blind testing is okay no problem',
      zh: '我今天下午大概三點多的時候跟團隊開會確認那個伺服器 dot ts 的 port 已經修好了啊然後目前盲測狀態就是 okay 沒問題',
      hans: '我今天下午大概三點多的時候跟團隊開會確認那個伺服器 dot ts 的 port 已經修好了啊然後目前盲測狀態就是 okay 沒問題'
    },
    formattedOutput: {
      en: 'I met with the team today (around 3:00 PM) to confirm that the port for "server.ts" is fixed. The current blind testing status is now okay, no problem.',
      zh: '我今天下午（大約三點多）的時候跟團隊開會，確認「伺服器 dot ts」的 port 已經修好了，目前盲測狀態已轉為 okay，沒問題。',
      hans: '我今天下午（大約三點多）的時候跟團隊開會，確認「伺服器 dot ts」的 port 已經修好了，目前盲測狀態已轉為 okay，沒問題。'
    }
  },
  {
    id: 'social',
    number: '02',
    title: {
      en: 'Social Mode',
      zh: '社交模式',
      hans: '社交模式'
    },
    subtitle: {
      en: 'Color-style text with emoji density control',
      zh: '豐富色彩與自訂表情符號密度的文案',
      hans: '丰富色彩与自定表情符号密度的文案'
    },
    description: {
      en: 'Turn a plain sentence into more expressive social copy. Low, Medium, and High emoji density options let you control the energetic tone.',
      zh: '將平淡的句子轉化為極具表現力的社群貼文。提供低、中、高表情符號密度選項，讓您完美掌控貼文的活力調性。',
      hans: '将平淡的句子转化为极具表现力的社群贴文。提供低、中、高表情符号密度选项，让您完美掌控贴文的活力调性。'
    },
    rawInput: {
      en: 'Oh my god, I\'ve finally finished this part of the claude. I feel so accomplished. Let\'s go get some steak to celebrate tonight.',
      zh: '今天超級興奮可以發布 instantflow 一點三版本 語音打字從來沒有這麼順暢和快速 買一次就能終身使用',
      hans: '今天超级兴奋可以发布 instantflow 一点三版本 语音打字从来没有这么顺畅和快速 买一次就能终身使用'
    },
    formattedOutput: {
      en: 'Oh my god! 😱 I finally finished this part of the claude! 💻 I feel so accomplished! 🎉 Let\'s go get some steak to celebrate tonight! 🥩',
      zh: '今天超級興奮可以發布 InstantFlow v1.3！🔥 語音輸入從來沒有這麼順暢和快速！✨ 買一次就能終身使用！🎯',
      hans: '今天超级兴奋可以发布 InstantFlow v1.3！🔥 语音输入从来没有这么顺畅和快速！✨ 买一次就能终身使用！🎯'
    }
  },
  {
    id: 'professional',
    number: '03',
    title: {
      en: 'Professional Mode',
      zh: '公文模式',
      hans: '公文模式'
    },
    subtitle: {
      en: 'Structured summaries for formal notes',
      zh: '為正式筆記自動生成結構化摘要',
      hans: '为正式笔记自动生成结构化摘要'
    },
    description: {
      en: 'Professional mode organizes spoken content into sections such as subject, agenda, time, location, and key attendance details with dot alignment.',
      zh: '公文模式會自動將零散的口述內容，重組為結構分明的格式，包含主題、議程、時間、地點與核心出席人員細節。',
      hans: '公文模式会自动将零散的口述内容，重组为结构分明的格式，包含主题、议程、时间、地点与核心出席人员细节。'
    },
    rawInput: {
      en: 'all hands team meeting next monday at 10am in main conference room review last sprint progress and sprint completion metrics and deliverables everyone should review shared sync doc beforehand and bring notes',
      zh: '下個月AI系統全面生成制工推動說明會下週四下午兩點整在三樓大會議室同步提供線上連結主要議題是資安權限重新設定演示新版界面操作流程進行意見回饋與QA保留半小時全體開發團隊及集成片經理必須準時出席開會前完成舊版專案備存避免升級後資料衝突',
      hans: '下个月AI系统全面生成制工推动说明会下周四下午两点整在三楼大会议室同步提供在线链接主要议题是资安权限重新设定演示新版界面操作流程进行意见反馈与QA保留半小时全体开发团队及集成片经理必须准时出席开会前完成旧版专案备存避免升级后资料冲突'
    },
    formattedOutput: {
      en: `■ MAIN SUBJECT: All-Hands Team Meeting Next Monday
■ TIME        : 10am
■ LOCATION    : Main Conference Room
■ AGENDA      :
  - Review last sprint progress
    * [review] Sprint completion metrics and deliverables
■ ACTION ITEMS :
[All] - Review shared sync doc beforehand and bring notes ................................................................ [Before Meeting]`,
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
全体舆会人员 - 开会前完成旧版专案备存,避免升级后资料冲突 。。。。。。。。。。。。。。。。。。。。。深度。會議前`
    }
  },
  {
    id: 'engineer',
    number: '04',
    title: {
      en: 'Engineer Mode',
      zh: '註解模式',
      hans: '注解模式'
    },
    subtitle: {
      en: 'Developer-style comments from spoken logic',
      zh: '口述邏輯秒變開發者格式文檔',
      hans: '口述逻辑秒变开发者格式文档'
    },
    description: {
      en: 'Engineer mode converts a spoken description of a function or class into highly concise technical documentation including Function, Params, and Logic.',
      zh: '註解模式可將口述的函式或類別描述，轉化為高度簡潔、標準的程式技術文件，包含函式名稱、參數定義與核心邏輯。',
      hans: '注解模式可将口述 of 函数或类别描述，转化为高度简洁、标准的程序技术文件，包含函数名称、参数定义与核心逻辑。'
    },
    rawInput: {
      en: 'create an autofone user avatar function with params user_id string file_data binary and mod_space dictionary logic is first check format using KLON within 10000ms or throw invalidate the word error second square crop count space coordinates third upload to aws s3 bucket and update registration URL fourth set state to desired presentation',
      zh: '做一個 AutoFone User Avatar 函式參數有 user_id 字串和 file_data 二進位還有 mod_space 字典邏輯是第一步用 KLON 套件檢查上傳圖片格式是否支援或損毀不符合在 10000ms 內拋出 Invalidate the word 錯誤第二步若格式正確則自動對 Count Space 的座標進行正方形裁切第三步將裁切圖片上傳至 AWS S3 儲存桶並利用取得的註冊網址更新埋碼文字請求第四步成功後將狀態轉為所願之上簡報',
      hans: '做一个 AutoFone User Avatar 函数参数有 user_id 字串和 file_data 二进制还有 mod_space 字典逻辑是第一步用 KLON 套件检查上传图片格式是否支援或损毁不符合在 10000ms 内抛出 Invalidate the word 错误第二步若格式正确则自动对 Count Space 的坐标进行正方形裁切第三步将裁切图片上传至 AWS S3 储存桶并利用取得的注册网址更新埋码文字请求第四步成功后将状态转为所愿之上简报'
    },
    formattedOutput: {
      en: `# ========================================================================
# 📝 function : AutoFone User Avatar
# 📥 PARAMS   : user_id  -> User ID (String)
#               file_data -> Uploaded file data (Binary)
#               mod_space -> Module space settings (Dictionary)
# ⚙️ logic    :
1. Use "KLON" package to check if uploaded image format is supported or corrupt, otherwise throw "Invalidate the word" error within 10000ms.
2. If format is valid, automatically perform "Square Crop" on the "Count Space" coordinates.
3. Upload cropped image to "AWS S3" bucket and update "embedded text" request with the retrieved registration URL.
4. Upon success, set state to "desired representation" presentation.
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
1. 使用「KLON」套件检查上传图片的「格式」是否被支援或损毁,若不符合則在10000ms 内直接抛出「Invalidate the word」错误
2. 若格式正确,则自动对「Count Space」的坐标进行「正方形裁切」
3. 将裁切完成的图片上传至「AWS S3」的储存桶,并利用取得的「注册网址」更新「埋码文字」请求
4. 成功后,将状态转为「所愿之上」的简报
# ========================================================================`
    }
  }
];

export const coreFeatures: Feature[] = [
  {
    id: 'trie',
    number: '01',
    title: {
      en: 'Trie Tree Dictionary Engine',
      zh: 'Trie 樹字典配對引擎',
      hans: 'Trie 树字典配对引擎'
    },
    description: {
      en: 'v1.3 refactors the matching logic into a custom Trie Tree structure. This ensures your custom terminology dictionary matches in O(N) linear time, keeping key inputs completely lag-free regardless of its size.',
      zh: 'v1.3 重構了自訂配對邏輯，改為 Trie 樹結構。這能確保您的專有名詞自訂字典在 O(N) 線性時間內完成搜尋，不論自訂項目再多，語音輸入依舊毫無延遲。',
      hans: 'v1.3 重构了自订配对逻辑，改为 Trie 树结构。这能确保您的专有名词自订字典在 O(N) 线性时间内完成搜寻，不论自订项目再多，语音输入依旧毫无延迟。'
    },
    badge: {
      en: 'Performance Boost',
      zh: '效能大躍進',
      hans: '性能大跃进'
    }
  },
  {
    id: 'groq',
    number: '02',
    title: {
      en: 'Groq-First Free Route',
      zh: '預設 Groq 極速免費通道',
      hans: '预设 Groq 极速免费通道'
    },
    description: {
      en: 'Groq is the main engine pipeline: both fast raw dictation and default smart formatting prioritize Groq API routing, meaning you can start fully operating with zero monthly software subscription fees.',
      zh: '以 Groq 作為主要底層引擎：快速的語音轉錄和預設的智慧排版都優先經由 Groq API 路由，這意味著您完全不需支付昂貴的月租費即可流暢運作。',
      hans: '以 Groq 作为主要底层引擎：快速的语音转录和预设的智慧排版都优先经由 Groq API 路由，这意味着您完全不需支付昂贵的月租费即可流畅运作。'
    },
    badge: {
      en: 'Zero Cost Startup',
      zh: '零訂閱成本',
      hans: '零订阅成本'
    }
  },
  {
    id: 'deepseek',
    number: '03',
    title: {
      en: 'DeepSeek Optional Polish',
      zh: 'DeepSeek 選用精緻美化',
      hans: 'DeepSeek 选用精致美化'
    },
    description: {
      en: 'An optional, high-quality secondary layer for users looking for unparalleled multilingual (especially Chinese & English) polishing, formatting, logic restructuring, and nuance preservation.',
      zh: '專為追求卓越多國語言（特別是中英文）潤色、排版、邏輯重組及語意修飾的使用者設計的選用高級層。',
      hans: '专为追求卓越多国语言（特别是中英文）润色、排版、逻辑重组及语意修饰的使用者设计的选用高级层。'
    },
    badge: {
      en: 'Elite Multilingual',
      zh: '多語系首選',
      hans: '多语系首选'
    }
  },
  {
    id: 'variants',
    number: '04',
    title: {
      en: 'Advanced Variant Management',
      zh: '進階多重同音模糊字詞管理',
      hans: '进阶多重同音模糊字词管理'
    },
    description: {
      en: 'Tired of AI mishearing your unique jargon? Map a single target output word to multiple homophones or misheard variations. Consolidate common misunderstandings into flawless outputs.',
      zh: '厭倦了 AI 總是聽錯您的專用術語？您可以將一個正確的目標詞彙對照多個同音或易聽錯的單字，從此自動將常見的 AI 誤判修復為完美字眼。',
      hans: '厌倦了 AI 总是听错您的专用术语？您可以将一个正确的目标词汇对照多个同音或易听错的单字，从此自动将常见的 AI 误判修复为完美字眼。'
    },
    badge: {
      en: 'Smart Correction',
      zh: '智慧錯誤修正',
      hans: '智能错误修正'
    }
  },
  {
    id: 'failsilent',
    number: '05',
    title: {
      en: 'Fail-Silent Graceful Degradation',
      zh: '無感故障隱藏 (Fail-Silent)',
      hans: '无感故障隐藏 (Fail-Silent)'
    },
    description: {
      en: 'If cloud APIs face network jitter or brief timeouts, the system quietly preserves the audio transcription or your clipboard state safely without throwing obnoxious, workflow-breaking alert modals.',
      zh: '如果雲端 API 遭遇網路波動或短暫超時，系統會悄悄在剪貼簿中保留最新語音轉錄進度，絕不跳出煩人且中斷工作的錯誤彈窗。',
      hans: '如果云端 API 遭遇网络波动或短暂超时，系统会悄悄在剪贴簿中保留最新语音转录进度，绝不跳出烦人且中断工作的错误弹窗。'
    },
    badge: {
      en: 'Rock-Solid Reliability',
      zh: '堅如磐石的穩定',
      hans: '坚如磐石的稳定'
    }
  },
  {
    id: 'portable',
    number: '06',
    title: {
      en: 'Portable Single-File Workflow',
      zh: '極簡可攜式單一執行檔',
      hans: '极简便携式单一执行档'
    },
    description: {
      en: 'No bloated installers. Core libraries and resources are bundled into a portable utility. Place ffmpeg.exe alongside InstantFlow.exe inside a single folder, and you are ready to stream.',
      zh: '拒絕臃腫的安裝包！所有核心組件均封裝至一個可攜式執行檔。只需將 ffmpeg.exe 與 InstantFlow.exe 置於同個資料夾內即可流暢使用。',
      hans: '拒绝臃肿的安装包！所有核心组件均封装至一个便携式执行档。只需将 ffmpeg.exe 与 InstantFlow.exe 置于同个文件夹内即可流畅使用。'
    },
    badge: {
      en: 'Standalone Light',
      zh: '免安裝輕量化',
      hans: '免安装轻量化'
    }
  }
];

export const userFAQs: FAQItem[] = [
  {
    id: 'private',
    question: {
      en: 'How private is InstantFlow compared to other tools?',
      zh: '與其他軟體相比，InstantFlow 的隱私安全性如何？',
      hans: '与其他软件相比，InstantFlow 的隐私安全性如何？'
    },
    answer: {
      en: 'Unlike other tools that route your transcripts through centralized background servers, InstantFlow runs stand-alone. All transcripts pass directly from your local machine to your chosen API provider (Groq/DeepSeek) using your personal keys. Your voice data never hits NovaFlow Labs\' servers.',
      zh: '與其他將您的逐字稿上傳到中央背景伺服器的工具不同，InstantFlow 是一款完全獨立的桌面程式。所有的語音轉錄資料會直接使用您的個人金鑰，從本機傳輸至您所指定的 API 服務商 (Groq/DeepSeek)。您的語音數據絕不會經過 NovaFlow Labs 的任何伺服器。',
      hans: '与其他将您的逐字稿上传到中央背景服务器的工具不同，InstantFlow 是一款完全独立的桌面程序。所有的语音转录数据会直接使用您的个人金钥，从本机传输至您所指定的 API 服务商 (Groq/DeepSeek)。您的语音数据绝不会经过 NovaFlow Labs 的任何服务器。'
    }
  },
  {
    id: 'api-keys',
    question: {
      en: 'Do I need to prepare my own API keys for InstantFlow?',
      zh: '使用 InstantFlow 需要自備 API 金鑰（API Key）嗎？',
      hans: '使用 InstantFlow 需要自备 API 金钥（API Key）吗？'
    },
    answer: {
      en: 'Yes, this is the core design for achieving "absolute local privacy." To protect your privacy, you must use your own API keys. InstantFlow v1.3/1.4 enforces a strict "dual Groq keys isolation policy": you must apply for two different free Groq API keys using different emails (one for primary transcription column A, and another for fallback polishing column B) for smooth operation! The advanced DeepSeek polishing key is optional, which you can choose to load for premium corporate polishing.',
      zh: '是的，這正是我們實踐「地端絕對隱私」的核心設計。為了保障您的隱私不外洩，您必須自備 API Key。InstantFlow 1.3/1.4 版有嚴格的【Groq 雙金鑰隔離天條】：您必須使用不同的 Email 申請「兩組」不同的免費 Groq API Key（一組綁定 A 欄作為聽寫主軸，一組綁定 B 欄作為備援拋光），軟體方能順暢運作！至於 DeepSeek 進階拋光金鑰則為「選填（Optional）」，您可以依據高階商務潤色需求自由決定是否加載。',
      hans: '是的，这正是我们实践“地端绝对隐私”的核心设计。为了保障您的隐私不外泄，您必须自备 API Key。InstantFlow 1.3/1.4 版有严格的【Groq 双金钥隔离天条】：您必须使用不同的 Email 申请“两组”不同的免费 Groq API Key（一组绑定 A 栏作为听写主轴，一组绑定 B 栏作为备援抛光），软件方能顺畅运作！至于 DeepSeek 进阶抛光金钥则为“选填（Optional）”，您可以依据高阶商务润色需求自由决定是否加载。'
    }
  },
  {
    id: 'mac-support',
    question: {
      en: 'Does InstantFlow support macOS or Linux?',
      zh: 'InstantFlow 是否支援 macOS 或 Linux 系統？',
      hans: 'InstantFlow 是否支持 macOS 或 Linux 系统？'
    },
    answer: {
      en: 'Currently, InstantFlow is optimized specifically as a lightweight Windows native power-user executable. Expanding native support to other OS variants is under review for future roadmap iterations.',
      zh: '目前，InstantFlow 專為 Windows 系統的高階使用者進行了極致的效能優化與輕量化打包。未來我們會評估將此原生體驗擴展至 macOS 與 Linux 的可行性。',
      hans: '目前，InstantFlow 专为 Windows 系统的高阶使用者进行了极致的效能优化与轻量化打包。未来我们会评估将此原生体验扩展至 macOS 与 Linux 的可行性。'
    }
  },
  {
    id: 'license-terms',
    question: {
      en: 'What are the license terms for a single purchase?',
      zh: '一次性購買的授權條款是什麼？',
      hans: '一次性购买的授权条款是什么？'
    },
    answer: {
      en: 'A single standard license key grants you activation rights on up to 2 personal computers simultaneously, with free permanent upgrades to all v1.x iterations.',
      zh: '購買一份標準授權金鑰，您即可同時在最多 2 台個人電腦上啟動軟體，並享有所有 v1.x 系列版本的永久免費升級服務。',
      hans: '购买一份标准授权金钥，您即可同时在最多 2 台个人电脑上启动软件，并享有所有 v1.x 系列版本的永久免费升级服务。'
    }
  }
];

export const affiliateFAQs: FAQItem[] = [
  {
    id: 'need-to-buy',
    question: {
      en: 'Do I need to purchase InstantFlow before becoming an affiliate?',
      zh: '在申請推廣夥伴（Affiliate）之前，我必須先購買 InstantFlow 嗎？',
      hans: '在申请推广伙伴（Affiliate）之前，我必须先购买 InstantFlow 吗？'
    },
    answer: {
      en: 'No, purchase is not required! While owning and testing the software makes authentic sharing easier, anyone with an audience of AI enthusiasts, developers, or creators can apply and promote immediately.',
      zh: '不需要！雖然實際擁有並體驗軟體會讓您的分享更加真實，但只要您擁有對 AI、開發者或高效生產力感興趣的受眾，即可立即申請並開始推廣。',
      hans: '不需要！虽然实际拥有并体验软件会让您的分享更加真实，但只要您拥有对 AI、开发者或高效生产力感兴趣的受众，即可立即申请并开始推广。'
    }
  },
  {
    id: 'commission-rate',
    question: {
      en: 'How much commission do I earn, and when is it paid?',
      zh: '我可以獲得多少佣金？什麼時候會收到款項？',
      hans: '我可以获得多少佣金？什么时候会收到款项？'
    },
    answer: {
      en: 'You will receive a 30% commission on every successful sale driven by your custom referral link. Payouts are handled securely and automatically through Gumroad\'s standard platform schedule.',
      zh: '透過您的專屬推廣連結每成功售出一套軟體，您即可獲得高達 30% 的佣金。款項發放將經由 Gumroad 的標準付款排程，安全且自動地發放給您。',
      hans: '透过您的专属推广连结每成功售出一套软件，您即可获得高达 30% 的佣金。款项发放将经由 Gumroad 的标准付款排程，安全且自动地发放给您。'
    }
  },
  {
    id: 'apply-link',
    question: {
      en: 'How do I submit my application to join?',
      zh: '我該如何提交申請加入這個推廣計畫？',
      hans: '我该如何提交申请加入这个推广计划？'
    },
    answer: {
      en: 'Simply click our "Apply via Gumroad" link, log into your Gumroad account (or register a free account), and write a brief overview of how you plan to share InstantFlow. We review and approve applications within 24-48 hours.',
      zh: '只需點擊我們網頁上的「透過 Gumroad 申請」連結，登入您的 Gumroad 帳戶（或免費註冊一個），並簡短寫下您預計如何分享 InstantFlow。我們通常會在 24 到 48 小時內進行審核並開通權限。',
      hans: '只需点击我们网页上的“透过 Gumroad 申请”连结，登入您的 Gumroad 帐户（或免费注册一个），并简短写下您预计如何分享 InstantFlow。我们通常会在 24 到 48 小时内进行审核并开通权限。'
    }
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    author: 'Adrian Nuțu',
    handle: '@adrian_dev',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
    role: {
      en: 'Independent Developer',
      zh: '獨立開發者',
      hans: '独立开发者'
    },
    content: {
      en: 'Whisper Base local is near instant in OpenWhispr, but for my daily code dictation workflow, InstantFlow with Groq routing takes it to a whole new level of speed on Windows. The custom dictionary is a game changer.',
      zh: 'OpenWhispr 的本機轉錄非常迅速，但針對我日常的程式碼口述工作流，InstantFlow 搭配 Groq 的路由架構將 Windows 上的輸入速度提升到了全新境界！其專屬自訂字典功能簡則是神作。',
      hans: 'OpenWhispr 的本机转录非常迅速，但针对我日常的程序代码口述工作流，InstantFlow 搭配 Groq 的路由架构将 Windows 上的输入速度提升到了全新境界！其专属自订字典功能简直是神作。'
    }
  },
  {
    id: 't2',
    author: 'Keisuke',
    handle: '@keisuke_creates',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    role: {
      en: 'Productivity Creator',
      zh: '生產力內容創作者',
      hans: '生产力内容创作者'
    },
    content: {
      en: 'The best voice input solution I\'ve found recently. I used to subscribe to other flow assistants, but paying $59 once for InstantFlow with my own API keys is amazing. Totally saved me from subscription fatigue.',
      zh: '這是我最近發現最頂級的語音輸入方案。我以前曾訂閱其他語音助理，但只要花費一次性 $59 美元購買 InstantFlow 並搭配我自己的金鑰，感覺太棒了！徹底把我從永無止境的訂閱地獄中拯救了出來。',
      hans: '这是我最近发现最顶级的语音输入方案。我以前曾订阅其他语音助理，但只要花费一次性 $59 美元购买 InstantFlow 并搭配我自己金钥，感觉太棒了！彻底把我从无底洞般的订阅地狱中拯救了出来。'
    }
  },
  {
    id: 't3',
    author: 'Adrian N.',
    handle: '@adrian_n',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
    role: {
      en: 'Content Marketer',
      zh: '內容行銷專家',
      hans: '内容营销专家'
    },
    content: {
      en: 'Social mode formatting is ridiculously accurate. I can dictate a random stream of raw ideas walking around my office and instantly output highly engaging, emoji-rich posts ready to publish on LinkedIn or X.',
      zh: '「社群媒體模式」的智慧排版精準到不可思議！我能在辦公室邊散步邊隨意口述一堆零散想法，軟體就能秒變極具吸引力、充滿表情符號的精美文案，並直接發布到 LinkedIn 或 X。',
      hans: '“社交媒体模式”的智慧排版精准到不可思议！我能在办公室边散步边随意口述一堆零散想法，软件就能秒变极具吸引力、充满表情符号的精美文案，并直接发布到 LinkedIn 或 X。'
    }
  },
  {
    id: 't4',
    author: 'Alvis L.',
    handle: '@alvis_creates',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80',
    role: {
      en: 'Content Creator',
      zh: '內容創作者',
      hans: '内容创作者'
    },
    content: {
      en: 'Life saver for typing-slow creators! I used to struggle writing posts. Now I just blurt out raw ideas and let InstantFlow auto-format and add perfect emojis. I get a high-quality post in 5 minutes flat!',
      zh: '打字慢創作者的救星！我以前寫一篇文章要想半天，現在直接用語音拼命唸，透過 InstantFlow 自動排版和加上精美表情符號，5分鐘就能產出一篇高品質社群貼文，省下的時間太多了！',
      hans: '打字慢创作者的救星！我以前写一篇文章要想半天，现在直接用语音拼命念，透过 InstantFlow 自动排版和加上精美表情符号，5分钟就能产出一篇高质量社群贴文，省下的时间太多了！'
    }
  },
  {
    id: 't5',
    author: 'Marcus Chen',
    handle: '@marcus_dev',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&h=150&q=80',
    role: {
      en: 'Senior Backend Engineer',
      zh: '資深後端工程師',
      hans: '资深后端工程师'
    },
    content: {
      en: 'The ultimate cheat code for engineers writing code comments and docs. Dictate logical flows and it formats it into clean Markdown/comments in a split second. No more manual typing for documentation!',
      zh: '這絕對是工程師寫代碼註解與文檔的神速外掛！口述邏輯結構就能一秒生成標準 markdown、公文或註解格式，精確度高達 99%。再也不用一邊想程式碼一邊痛苦敲打鍵盤寫說明了！',
      hans: '这绝对是工程师写代码注解与文档的神速外挂！口述逻辑结构就能一秒生成标准 markdown、公文或注解格式，精确度高达 99%。再也不用一边想代码一边痛苦敲打键盘写说明了！'
    }
  },
  {
    id: 't6',
    author: 'Rebecca Wu',
    handle: '@rebecca_mkt',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80',
    role: {
      en: 'Growth Marketer',
      zh: '增長行銷負責人',
      hans: '增长营销负责人'
    },
    content: {
      en: 'Say goodbye to $20/month subscription traps, self-owned keys are the absolute best! Highly secure, local execution, and free usage by pairing two free Groq API keys under isolation. Truly saved my wallet!',
      zh: '告別每月 20 美金高昂訂閱、自備金鑰萬歲！這款買斷制地端軟體完全拯救了我的錢包。配合兩組免費的 Groq API Key 實行雙金鑰隔離，打字再多也完全免費，地端運行隱私性滿分！',
      hans: '告别每月 20 美金高昂订阅、自备金钥万岁！这款买断制地端软件完全拯救了我的钱包。配合两组免费的 Groq API Key 实行双金钥隔离，打字再多也完全免费，地端运行隐私性满分！'
    }
  },
  {
    id: 't7',
    author: 'Dr. James Tseng',
    handle: '@dr_james',
    avatar: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&w=150&h=150&q=80',
    role: {
      en: 'AI Researcher',
      zh: 'AI 學術研究員',
      hans: 'AI 学术研究员'
    },
    content: {
      en: 'The homophone mapping dictionary is flawless! Hardcore technical terms in our field were always misheard by raw speech tools, but now they are instantly corrected to proper technical casings 100% of the time.',
      zh: 'InstantFlow 將同音詞模糊對照做得太棒了！像我們領域的專用論文術語（例如 KLON、AutoFone）以前總是被聽寫 AI 弄錯。設定自訂替換表後，現在百分之百輸出精準拼寫！',
      hans: 'InstantFlow 将同音词模糊对照做得太棒了！像我们领域的专用论文术语（例如 KLON、AutoFone）以前总是被听写 AI 弄错。设定自订替换表后，现在百分之百输出精准拼写！'
    }
  },
  {
    id: 't8',
    author: 'Sophia Yang',
    handle: '@sophia_assistant',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80',
    role: {
      en: 'Executive Assistant',
      zh: '執行總監特助',
      hans: '执行总监特助'
    },
    content: {
      en: 'I dictate raw meeting notes and Professional Mode formats it all with dot alignments, actions, and subjects. Everyone at work thinks I am a high-speed steno genius, but I just run InstantFlow.',
      zh: '開會一邊聽一邊用嘴唸出來，公文模式直接幫我對齊時間、地點、議程，連小數點和對齊線都畫得一絲不苟。同事還以為我是速記達人，其實我只是裝了 InstantFlow！',
      hans: '开会一边听一边用嘴念出来，公文模式直接帮我对齐时间、地点、议程，连小数点和对齐线都画得一丝不苟。同事还以为我是速记达人，其实我只是装了 InstantFlow！'
    }
  }
];
