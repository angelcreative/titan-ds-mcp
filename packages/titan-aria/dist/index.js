"use client";

// src/Button.tsx
import { Button as AriaButton } from "react-aria-components";
import { jsx } from "react/jsx-runtime";
function Button({ variant = "primary", ...props }) {
  return /* @__PURE__ */ jsx(AriaButton, { "data-variant": variant, ...props });
}

// src/index.ts
import {
  TextField,
  Label,
  Input,
  TextArea,
  FieldError,
  Group,
  Checkbox,
  CheckboxGroup,
  RadioGroup,
  Radio,
  Switch,
  Select,
  SelectValue,
  ListBox,
  ListBoxItem,
  DialogTrigger,
  Modal,
  ModalOverlay,
  Dialog,
  Heading,
  Tabs,
  TabList,
  TabPanel,
  Tab,
  MenuTrigger,
  Menu,
  MenuItem,
  Popover,
  TooltipTrigger,
  Tooltip
} from "react-aria-components";
export {
  Button,
  Checkbox,
  CheckboxGroup,
  Dialog,
  DialogTrigger,
  FieldError,
  Group,
  Heading,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Menu,
  MenuItem,
  MenuTrigger,
  Modal,
  ModalOverlay,
  Popover,
  Radio,
  RadioGroup,
  Select,
  SelectValue,
  Switch,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  TextArea,
  TextField,
  Tooltip,
  TooltipTrigger
};
//# sourceMappingURL=index.js.map