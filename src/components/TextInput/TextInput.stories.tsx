import React from 'react';
import { TextInput } from './TextInput';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextInput> = {
  title: 'Data Entry/TextInput',
  component: TextInput,
  argTypes: {
    inputSize: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
      description: 'Input size: sm = small, md = medium, lg = large',
      table: {
        type: { summary: "'sm' | 'md' | 'lg'" },
        defaultValue: { summary: 'md' },
      },
    },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    onChange: { action: 'changed' },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Anatomy / Structure:
- Input field wrapped with label
- Optional error message displayed below input
- Supports sizes small, medium, large via styling

### Interaction Behavior:
- Supports typing input with controlled \`value\` and \`onChange\`
- Displays error state visually and with text

### Accessibility:
- Uses semantic \`<input>\` with \`aria-invalid\` on error
- Label properly associated with input via \`htmlFor\`
- Supports keyboard navigation and focus states

### Theming / Responsiveness:
- Supports dark mode via Tailwind classes
- Responsive input sizing

### Best Practices:
- Use descriptive placeholder and labels
- Indicate errors clearly for validation
- Choose size appropriate for context
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
    inputSize: 'md',          // use inputSize, not size
    placeholder: 'Enter text here',
    disabled: false,
    error: false,
    value: '',
  },
};

export const ErrorState: Story = {
  args: {
    inputSize: 'md',          // updated here too
    placeholder: 'Error input',
    error: true,
    value: 'Invalid input',
  },
};

export const DisabledState: Story = {
  args: {
    inputSize: 'md',          // and here
    placeholder: 'Disabled input',
    disabled: true,
    value: '',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <TextInput inputSize="sm" placeholder="Small input" value="" onChange={() => {}} />
      <TextInput inputSize="md" placeholder="Medium input" value="" onChange={() => {}} />
      <TextInput inputSize="lg" placeholder="Large input" value="" onChange={() => {}} />
    </div>
  ),
};
