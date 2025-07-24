import React from "react";

type Variant =
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "blockquote"
  | "pre"
  | "code";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: Variant;
  className?: string;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ variant = "p", className = "", ...props }, ref) => {
    const Tag = variant as React.ElementType;

    const baseClass = "prose prose-sm md:prose md:prose-base";

    return <Tag ref={ref} className={`${baseClass} ${className}`} {...props} />;
  }
);

Typography.displayName = "Typography";

export default Typography;
