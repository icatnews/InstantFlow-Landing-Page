import React from 'react';

interface SocialMatrixProps {
  className?: string;
}

export default function SocialMatrix({ className = '' }: SocialMatrixProps) {
  const socialItems = [
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@InstantFlow_Official',
      title: 'InstantFlow Official',
      colorHover: 'hover:text-[#FF0000] hover:scale-110',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/StockflowA7798',
      title: 'X / Twitter',
      colorHover: 'hover:text-[#1DA1F2] hover:scale-110',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'Threads',
      url: 'https://www.threads.com/@instantflow_net',
      title: 'Threads',
      colorHover: 'hover:text-[#E1306C] hover:scale-110',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5 2C6.7 2 2 6.7 2 12.5S6.7 23 12.5 23h5.2c1.3 0 2.3-1 2.3-2.3v-.5c0-1.3-1-2.3-2.3-2.3H12.5C9.2 17.9 6.5 15.2 6.5 12s2.7-5.9 6-5.9c3.2 0 5.8 2.5 6 5.6.1 1.2-.6 2.3-1.7 2.6-1 .3-2-.3-2.4-1.2-.4-.9-1.3-1.5-2.4-1.5-1.7 0-3 1.3-3 3s1.3 3 3 3c1.1 0 2.1-.6 2.5-1.6.3.7 1.1 1.2 1.9 1.2 1.5 0 2.8-1.2 2.8-2.7C21.1 7.2 17.2 4.1 12.5 4.1c-4.4 0-8 3.6-8 8s3.6 8 8 8h5.2c.3 0 .5.2.5.5v.5c0 .3-.2.5-.5.5H12.5c-5 0-9.1-4.1-9.1-9.1S7.5 3.1 12.5 3.1c4.4 0 8.1 3 9.1 7.2.1.3.4.5.7.4.3-.1.5-.4.4-.7C21.5 5.2 17.3 2 12.5 2z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/instantflow-joanne/',
      title: 'InstantFlow Joanne',
      colorHover: 'hover:text-[#0077B5] hover:scale-110',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      url: 'https://github.com/icatnews/InstantFlow-AI-Dictation-Windows',
      title: 'GitHub Repository',
      colorHover: 'hover:text-[#6366f1] hover:scale-110',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      )
    }
  ];

  return (
    <div className={`flex items-center space-x-3.5 ${className}`}>
      {socialItems.map((item) => (
        <a
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          title={item.title}
          className={`text-slate-400 hover:text-slate-900 transition-all duration-300 transform ${item.colorHover}`}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
