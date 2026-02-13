import * as react_jsx_runtime from 'react/jsx-runtime';
import { ButtonProps as ButtonProps$1 } from 'react-aria-components';
export { Checkbox, CheckboxGroup, Dialog, DialogTrigger, FieldError, Group, Heading, Input, Label, ListBox, ListBoxItem, Menu, MenuItem, MenuTrigger, Modal, ModalOverlay, Popover, Radio, RadioGroup, Select, SelectValue, Switch, Tab, TabList, TabPanel, Tabs, TextArea, TextField, Tooltip, TooltipTrigger } from 'react-aria-components';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
interface ButtonProps extends Omit<ButtonProps$1, 'data-variant'> {
    variant?: ButtonVariant;
}
declare function Button({ variant, ...props }: ButtonProps): react_jsx_runtime.JSX.Element;

export { Button, type ButtonProps, type ButtonVariant };
