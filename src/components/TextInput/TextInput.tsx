// src/components/TextInput/TextInput.tsx

import React, { useId, forwardRef } from 'react';
import classNames from 'classnames';

type TextInputSize = 'sm' | 'md' | 'lg';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
  disabled?: boolean;
  inputSize?: TextInputSize;
  id?: string;
}

const sizeClasses: Record<TextInputSize, string> = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-3 py-2 text-base',
  lg: 'px-4 py-3 text-lg',
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({
  label,
  helperText,
  error = false,
  disabled = false,
  inputSize = 'md',
  id,
  className,
  ...props
}, ref) => {
  const generatedId = useId();
  const inputId = id || generatedId;

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label
          htmlFor={inputId}
          className={classNames(
            'font-medium text-sm',
            disabled ? 'text-gray-400 dark:text-gray-500' : 'text-gray-700 dark:text-gray-300'
          )}
        >
          {label}
        </label>
      )}

      <input
        id={inputId}
        ref={ref}
        className={classNames(
          'rounded-md border outline-none transition-colors',
          sizeClasses[inputSize],
          disabled
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white',
          error
            ? 'border-red-500 focus:ring-1 focus:ring-red-500'
            : 'border-gray-300 dark:border-gray-600 focus:ring-1 focus:ring-blue-500',
          className
        )}
        disabled={disabled}
        aria-invalid={error}
        aria-disabled={disabled}
        {...props}
      />

      {helperText && (
        <p
          className={classNames(
            'text-xs',
            error ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'
          )}
        >
          {helperText}
        </p>
      )}
    </div>
  );
});

TextInput.displayName = 'TextInput';
