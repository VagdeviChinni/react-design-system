import React, { useEffect } from 'react';
import classNames from 'classnames';

type ToastVariant = 'success' | 'error' | 'warning' | 'info';

interface ToastProps {
  message: string;
  show: boolean;
  onClose: () => void;
  duration?: number;
  variant?: ToastVariant;
}

const variantClasses: Record<ToastVariant, string> = {
  success: 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100',
  error: 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100',
  warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100',
  info: 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100',
};

const iconMap: Record<ToastVariant, React.ReactNode> = {
  success: '✅',
  error: '❌',
  warning: '⚠️',
  info: 'ℹ️',
};

export const Toast: React.FC<ToastProps> = ({
  message,
  show,
  onClose,
  duration = 4000,
  variant = 'info',
}) => {
  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [show, duration, onClose]);

  if (!show) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className={classNames(
        'fixed bottom-4 right-4 z-50 max-w-sm w-full px-4 py-3 rounded-lg shadow-md flex items-start justify-between gap-3 transition-opacity',
        variantClasses[variant]
      )}
    >
      <span className="text-lg">{iconMap[variant]}</span>
      <p className="flex-1 text-sm">{message}</p>
      <button
        onClick={onClose}
        className="text-sm underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900"
        aria-label="Close toast"
      >
        Dismiss
      </button>
    </div>
  );
};
