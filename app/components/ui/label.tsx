'use client';

import React from 'react';
import { cn } from "../../../lib/utils";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean; // Optional property to show an asterisk for required fields
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, children, required, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          "block text-sm font-medium text-black", // Base text color for visibility
          // "hover:text-gray-900", // Slightly darker on hover for contrast
          // "dark:text-gray-100 dark:hover:text-gray-200", // Handle dark mode styling
          // "transition-colors duration-200 ease-in-out", // Smooth transitions
          className
        )}
        {...props}
      >
        {children}
        {required && <span className="ml-1 text-red-500">*</span>} {/* Required asterisk in red */}
      </label>
    );
  }
);

Label.displayName = "Label";

export { Label };
