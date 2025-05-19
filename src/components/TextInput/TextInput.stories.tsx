// src/components/TextInput/TextInput.stories.tsx

import React from 'react';
import { TextInput } from './TextInput';
import { Typography } from '../Typography/Typography';  // Adjust path as needed
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextInput> = {
  title: 'Form/TextInput',
  component: TextInput,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],  // size as string union
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    onChange: { action: 'changed' },
  },
  parameters: {
    docs: {
      description: {
        component: `
# TextInput Component

A text input field component supporting multiple sizes, disabled and error states.

## Accessibility Notes

- Use \`label\` elements to associate inputs with descriptive text.
- Use appropriate \`aria-invalid\` and \`aria-describedby\` for error messages.
- Ensure color contrast meets WCAG AA standards.
- Provide keyboard focus styles for usability.

        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Playground: Story = {
  args: {
    placeholder: 'Enter text',
    size: 'medium',
    disabled: false,
    error: false,
    value: '',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    size: 'medium',
    disabled: true,
  },
};

export const ErrorState: Story = {
  args: {
    placeholder: 'Error input',
    size: 'medium',
    error: true,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4 p-4">
      <TextInput placeholder="Small size" size="small" />
      <TextInput placeholder="Medium size" size="medium" />
      <TextInput placeholder="Large size" size="large" />
    </div>
  ),
};

export const BestPractices: Story = {
  render: () => (
    <div className="space-y-2 p-4">
      <Typography variant="h2">Best Practices</Typography>
      <ul className="list-disc pl-5 space-y-2 text-base">
        <li>Always provide a clear label for inputs for accessibility.</li>
        <li>Use placeholder text only as a hint, not as a label substitute.</li>
        <li>Ensure sufficient color contrast for text and error states.</li>
        <li>Do not disable inputs without clear reason; consider readonly if needed.</li>
        <li>Use error states with ARIA attributes to notify assistive tech users.</li>
      </ul>
    </div>
  ),
};
