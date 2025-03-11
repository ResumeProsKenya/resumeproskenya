import { ReactNode } from "react";

interface SocialIconProps {
  href: string;
  icon: ReactNode;
  color: string;
}

export default function SocialIcon({ href, icon, color }: SocialIconProps) {
  return (
    <a 
      href={href} 
      className={`neumorphic w-10 h-10 flex items-center justify-center ${color} border-none focus:outline-none transition-all duration-300`}
      style={{
        borderRadius: '50%',
        background: '#f0f0f0',
        boxShadow: '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.boxShadow = 'inset 4px 4px 8px #d1d9e6, inset -4px -4px 8px #ffffff';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.boxShadow = '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff';
      }}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}
