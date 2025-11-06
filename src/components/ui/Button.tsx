import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function Button({ 
  children, 
  href, 
  onClick, 
  variant = 'primary',
  className = '' 
}: ButtonProps) {
  const baseClasses = `
    inline-block
    px-8
    py-4
    font-mono
    text-sm
    font-medium
    tracking-wider
    uppercase
    transition-all
    duration-300
    border
    relative
    overflow-hidden
    group
    ${variant === 'primary' 
      ? 'border-[#39FF14] text-[#39FF14] bg-transparent hover:bg-[#39FF14] hover:text-black hover:shadow-[0_0_20px_rgba(57,255,20,0.5)]' 
      : 'border-white text-white bg-transparent hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]'
    }
    ${className}
  `;

  const content = (
    <span className="relative z-10">
      {children}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
        <span className="absolute inset-0 bg-[#39FF14] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {content}
      <span className={`absolute inset-0 ${variant === 'primary' ? 'bg-[#39FF14]' : 'bg-white'} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></span>
    </button>
  );
}

