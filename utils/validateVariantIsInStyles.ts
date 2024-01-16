export interface Styles {
  [key: string]: string;
}

export function validateVariantIsInStyles(
  styles: { [key: string]: string },
  variant: string,
  component: React.ComponentType<any>
) {
  const componentName = component.displayName || component.name || "Component";
  if (process.env.NODE_ENV !== "production" && !styles[variant]) {
    console.warn(
      `The variant '${variant}' does not correspond to a class in ${componentName}/styles.module.scss`
    );
  }
}
