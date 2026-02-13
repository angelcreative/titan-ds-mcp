import type { ButtonProps as AriaButtonProps } from 'react-aria-components';
import { Button as AriaButton } from 'react-aria-components';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

export interface ButtonProps extends Omit<AriaButtonProps, 'data-variant'> {
  variant?: ButtonVariant;
}

export function Button({ variant = 'primary', ...props }: ButtonProps) {
  return <AriaButton data-variant={variant} {...props} />;
}
