import React, { useState } from 'react';
import { Toast } from './Toast';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast',
  component: Toast,
  argTypes: {
    variant: { control: { type: 'radio' }, options: ['success', 'error', 'warning', 'info'] },
    message: { control: 'text' },
    show: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Anatomy / Structure:
- Container with variant background and text color
- Icon representing variant
- Message text
- Dismiss button with keyboard focus support

### Interaction Behavior:
- Toast auto-dismisses after a specified duration
- Dismiss button closes toast immediately
- Accessible via keyboard navigation

### Accessibility:
- Uses \`role="status"\`, \`aria-live="polite"\`, \`aria-atomic="true"\`
- Dismiss button is focusable and has \`aria-label="Close toast"\`

### Theming / Responsiveness:
- Supports light and dark mode via Tailwind classes
- Positioned fixed at bottom-right corner responsively

### Best Practices:
- Use for brief, contextual messages only
- Avoid stacking too many toasts at once
- Provide clear message and dismissal action
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Playground: Story = {
  render: () => {
    const [show, setShow] = React.useState(false);

    return (
      <div>
        <button
          onClick={() => setShow(true)}
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Show Toast
        </button>
        <Toast
          variant="info"
          message="This is an info toast message."
          show={show}
          onClose={() => setShow(false)}
        />
      </div>
    );
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    message: 'Operation completed successfully!',
    show: true,
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    message: 'Something went wrong. Please try again.',
    show: true,
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    message: 'Be careful! Check your input.',
    show: true,
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    message: 'This is an informational message.',
    show: true,
  },
};
