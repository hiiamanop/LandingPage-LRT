// components/artikel/ArtikelHeader.tsx
import React from 'react';

interface ArticleHeaderProps {
  title: string;
  date: string;
  likes?: number;
  shares?: number;
}

const ArticleHeader = ({ title, date, likes = 0, shares = 0 }: ArticleHeaderProps) => {
  return (
    <div className="flex flex-col items-center gap-6 mb-8">
      {/* Judul Artikel */}
      <h1 className="text-gray-500 font-poppins text-4xl md:text-5xl font-bold leading-[150%] tracking-[0.5px] text-center">
        {title}
      </h1>
      
      {/* Info Card Container */}
      <div className="flex items-center gap-3">
        {/* Tanggal */}
        <div className="flex items-center gap-3 px-2 py-1 bg-gray-200 rounded">
          <span className="text-gray-500 sfPro text-lg font-normal leading-[150%] tracking-[0.5px]">
            Diunggah pada {date}
          </span>
        </div>
        
        {/* Like Button */}
        <div className="flex items-center gap-3 px-2 py-1 bg-gray-200 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path d="M16.2804 22.6H12.4804C11.9204 22.6 10.7004 22.43 10.0504 21.78L7.02035 19.44L7.94035 18.25L11.0404 20.65C11.2904 20.89 11.9204 21.09 12.4804 21.09H16.2804C17.1804 21.09 18.1504 20.37 18.3504 19.56L20.7704 12.21C20.9304 11.77 20.9004 11.37 20.6904 11.08C20.4704 10.77 20.0704 10.59 19.5804 10.59H15.5804C15.0604 10.59 14.5804 10.37 14.2504 9.98999C13.9104 9.59999 13.7604 9.07999 13.8404 8.53999L14.3404 5.32999C14.4604 4.76999 14.0804 4.13999 13.5404 3.95999C13.0504 3.77999 12.4204 4.03999 12.2004 4.35999L8.10035 10.46L6.86035 9.62999L10.9604 3.52999C11.5904 2.58999 12.9704 2.13999 14.0504 2.54999C15.3004 2.95999 16.1004 4.33999 15.8204 5.61999L15.3304 8.76999C15.3204 8.83999 15.3204 8.93999 15.3904 9.01999C15.4404 9.06999 15.5104 9.09999 15.5904 9.09999H19.5904C20.5704 9.09999 21.4204 9.50999 21.9204 10.22C22.4104 10.91 22.5104 11.82 22.1904 12.7L19.8004 19.98C19.4304 21.43 17.8904 22.6 16.2804 22.6Z" fill="#303030"/>
            <path d="M5.37988 21.5H4.37988C2.52988 21.5 1.62988 20.63 1.62988 18.85V9.04999C1.62988 7.26999 2.52988 6.39999 4.37988 6.39999H5.37988C7.22988 6.39999 8.12988 7.26999 8.12988 9.04999V18.85C8.12988 20.63 7.22988 21.5 5.37988 21.5ZM4.37988 7.89999C3.28988 7.89999 3.12988 8.15999 3.12988 9.04999V18.85C3.12988 19.74 3.28988 20 4.37988 20H5.37988C6.46988 20 6.62988 19.74 6.62988 18.85V9.04999C6.62988 8.15999 6.46988 7.89999 5.37988 7.89999H4.37988Z" fill="#303030"/>
          </svg>
          <span className="text-gray-500 sfPro text-lg">{likes}</span>
        </div>
        
        {/* Share Button */}
        <div className="flex items-center gap-3 px-2 py-1 bg-gray-200 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path d="M14.2199 22.13C13.0399 22.13 11.3699 21.3 10.0499 17.33L9.32988 15.17L7.16988 14.45C3.20988 13.13 2.37988 11.46 2.37988 10.28C2.37988 9.11001 3.20988 7.43001 7.16988 6.10001L15.6599 3.27001C17.7799 2.56001 19.5499 2.77001 20.6399 3.85001C21.7299 4.93001 21.9399 6.71001 21.2299 8.83001L18.3999 17.32C17.0699 21.3 15.3999 22.13 14.2199 22.13ZM7.63988 7.53001C4.85988 8.46001 3.86988 9.56001 3.86988 10.28C3.86988 11 4.85988 12.1 7.63988 13.02L10.1599 13.86C10.3799 13.93 10.5599 14.11 10.6299 14.33L11.4699 16.85C12.3899 19.63 13.4999 20.62 14.2199 20.62C14.9399 20.62 16.0399 19.63 16.9699 16.85L19.7999 8.36001C20.3099 6.82001 20.2199 5.56001 19.5699 4.91001C18.9199 4.26001 17.6599 4.18001 16.1299 4.69001L7.63988 7.53001Z" fill="#303030"/>
            <path d="M10.1098 14.9C9.9198 14.9 9.7298 14.83 9.5798 14.68C9.2898 14.39 9.2898 13.91 9.5798 13.62L13.1598 10.03C13.4498 9.74 13.9298 9.74 14.2198 10.03C14.5098 10.32 14.5098 10.8 14.2198 11.09L10.6398 14.68C10.4998 14.83 10.2998 14.9 10.1098 14.9Z" fill="#303030"/>
          </svg>
          <span className="text-gray-500 sfPro text-lg">{shares}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleHeader;