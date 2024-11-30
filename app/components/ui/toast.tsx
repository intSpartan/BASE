import * as React from "react";

// Define the type for ToastActionElement
export type ToastActionElement = React.ReactElement<
  React.HTMLProps<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement>
>;

// Define the interface for ToastProps
export interface ToastProps {
  id?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
  open?: boolean;
  variant?: "default" | "destructive" | "success"; // Add variants as needed
  onOpenChange?: (open: boolean) => void;
}