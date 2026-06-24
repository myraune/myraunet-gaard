"use client";
import { Leaf } from 'lucide-react';

interface DecorativeDividerProps {
  className?: string;
}

const DecorativeDivider = ({ className = '' }: DecorativeDividerProps) => {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="flex items-center gap-2 text-primary/40">
        <Leaf className="w-4 h-4 rotate-[-30deg]" />
        <div className="w-2 h-2 rounded-full bg-primary/40"></div>
        <Leaf className="w-4 h-4 rotate-[30deg]" />
      </div>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </div>
  );
};

export default DecorativeDivider;
