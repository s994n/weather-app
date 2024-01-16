import React from "react";
import {
  validateVariantIsInStyles,
  Styles,
} from "@/utils/validateVariantIsInStyles";

export const WithValidateVariantIsInStyles =
  (styles: Styles) =>
  <T extends object>(WrappedComponent: React.ComponentType<T>) => {
    const WithValidateVariantIsInStyles: React.FC<T> = (props) => {
      if ("variant" in props && styles) {
        validateVariantIsInStyles(
          styles,
          props["variant"] as string,
          WrappedComponent
        );
      }

      return <WrappedComponent {...props} />;
    };

    WithValidateVariantIsInStyles.displayName = `WithValidateVariantIsInStyles(${
      WrappedComponent.displayName || WrappedComponent.name
    })`;

    return WithValidateVariantIsInStyles;
  };
