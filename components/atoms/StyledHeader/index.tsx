import React from "react";
import { styledHeaderVariants } from "@/constants/styledHeaderVariants";

// HOCs
// import { WithValidateVariantIsInStyles } from "@/hocs/WithValidateVariantIsInStyles";
import { WithValidateVariantIsInStyles } from '@/hocs/WithValidateVariantIsInStyles';

// Styles
import styles from "./styles.module.scss";

type StyledHeaderVariant = keyof typeof styledHeaderVariants;

interface StyledHeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  color?: string;
  fontFamily?: string;
  variant?: StyledHeaderVariant;
  caps?: boolean;
  children?: React.ReactNode;
}

const StyledHeader: React.FC<StyledHeaderProps> = ({
  color,
  fontFamily,
  caps,
  children,
  variant = "hero" as StyledHeaderVariant,
  ...rest
}) => {
  const HeaderTag = styledHeaderVariants[variant] as React.ElementType<
    React.HTMLAttributes<HTMLHeadingElement>
  >;
  const className = styles[variant];

  return (
    <HeaderTag
      className={className}
      style={{
        color,
        fontFamily,
        textTransform: caps ? "uppercase" : "none",
      }}
      {...rest}
    >
      {children}
    </HeaderTag>
  );
};

export default WithValidateVariantIsInStyles(styles)(StyledHeader);

StyledHeader.displayName = 'StyledHeader';

