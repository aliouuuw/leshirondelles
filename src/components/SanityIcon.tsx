import React from "react";
import * as FaIcons from "react-icons/fa";
import * as LucideIcons from "lucide-react";

type FaIconKeys = keyof typeof FaIcons;
type LucideIconKeys = keyof typeof LucideIcons;

// This is a placeholder component.
// In a real application, you would use a library like 'react-icons'
// or a custom SVG sprite system to render the actual icons.
export const SanityIcon = ({
  icon,
}: {
  icon: { provider: string; name: string };
}) => {
  if (!icon || !icon.provider || !icon.name) {
    return null;
  }

  if (icon.provider === "fa") {
    const IconComponent = FaIcons[icon.name as FaIconKeys];

    if (!IconComponent) {
      console.warn("Unsupported icon:", icon.name);
      return <FaIcons.FaQuestionCircle />;
    }

    return <IconComponent />;
  }

  if (icon.provider === "lucide") {
    const IconComponent = LucideIcons[icon.name as LucideIconKeys];

    if (!IconComponent) {
      console.warn("Unsupported Lucide icon:", icon.name);
      return <LucideIcons.HelpCircle />;
    }

    // @ts-ignore
    return <IconComponent />;
  }

  // Handle other providers if you add them in the future
  console.warn("Unsupported icon provider:", icon.provider);
  return <FaIcons.FaQuestionCircle />;
};
