import React from 'react';
import { Typography } from './Typography';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Typography> = {
  title: 'Foundation/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'paragraph', 'caption', 'label', 'helper',
      ],
    },
    color: {
      control: { type: 'radio' },
      options: ['default', 'brand'],
    },
    as: {
      control: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Anatomy / Structure:
- Text wrapped in semantic HTML tags (h1–h6, p, span)
- Variant controls size, weight, line height, and letter spacing
- Color prop applies theme colors including brand variants

### Interaction Behavior:
- Static text component, no interaction by default

### Accessibility:
- Uses semantic HTML tags by default for correct screen reader interpretation
- Can override tag with \`as\` prop for custom semantics

### Theming / Responsiveness:
- Supports light/dark mode colors
- Responsive font sizes via Tailwind defaults or overrides

### Best Practices:
- Use appropriate \`variant\` to maintain hierarchy and consistency
- Prefer semantic HTML tags for accessibility
- Use brand colors sparingly to highlight important text
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Playground: Story = {
  args: {
    variant: 'h1',
    color: 'default',
    children: 'This is a Heading',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 p-4 bg-white dark:bg-gray-900">
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
      <Typography variant="paragraph">
        This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.
      </Typography>
      <Typography variant="label">Label Text</Typography>
      <Typography variant="caption">Caption text</Typography>
      <Typography variant="helper">Helper text here</Typography>

      <hr className="border-gray-300 dark:border-gray-700" />

      <Typography variant="h2" color="brand">Brand Color Heading</Typography>
      <Typography variant="paragraph" color="brand">Brand color paragraph text.</Typography>
    </div>
  ),
};
