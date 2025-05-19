// src/components/Typography/Typography.tsx

import React from 'react';
import classNames from 'classnames';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'paragraph'
  | 'caption'
  | 'label'
  | 'helper';

interface TypographyProps {
  variant?: TypographyVariant;
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  color?: 'default' | 'brand';
}

const variantClasses: Record<TypographyVariant, string> = {
  h1: 'text-3xl md:text-4xl font-bold leading-tight tracking-wide',
  h2: 'text-2xl md:text-3xl font-semibold leading-snug tracking-normal',
  h3: 'text-xl md:text-2xl font-semibold leading-snug tracking-normal',
  h4: 'text-lg md:text-xl font-medium leading-snug tracking-wide',
  h5: 'text-base md:text-lg font-medium leading-normal tracking-wide',
  h6: 'text-sm md:text-base font-medium leading-normal tracking-normal',
  paragraph: 'text-base leading-relaxed tracking-normal',
  caption: 'text-sm text-gray-500 dark:text-gray-400 tracking-wide',
  label: 'text-sm font-semibold tracking-wide',
  helper: 'text-xs text-gray-400 dark:text-gray-500 tracking-wide',
};

const colorClasses: Record<'default' | 'brand', string> = {
  default: 'text-gray-900 dark:text-gray-100',
  brand: 'text-brand-light dark:text-brand-dark',
};

export const Typography: React.FC<TypographyProps> = ({
  variant = 'paragraph',
  children,
  className,
  as,
  color = 'default',
}) => {
  const Component =
    as || (variant.startsWith('h') ? (variant as keyof JSX.IntrinsicElements) : 'p');

  return (
    <Component
      className={classNames(
        variantClasses[variant],
        colorClasses[color],
        className
      )}
    >
      {children}
    </Component>
  );
};
