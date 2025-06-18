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
  icon: { provider: string; name: string } | string;
}) => {
  if (!icon) {
    return null;
  }

  if (typeof icon === "string") {
    return <span className="text-2xl">{icon}</span>;
  }

  if (!icon.provider || !icon.name) {
    return null;
  }

  if (icon.provider === "fa") {
    // Convert "fa-adjust" to "FaAdjust" format
    const iconName = icon.name
      .replace(/^fa-/, "")
      .replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    const pascalCaseName =
      "Fa" + iconName.charAt(0).toUpperCase() + iconName.slice(1);

    const IconComponent = FaIcons[pascalCaseName as FaIconKeys];

    if (!IconComponent) {
      console.warn(
        "Unsupported icon:",
        icon.name,
        "Converted to:",
        pascalCaseName
      );
      return <FaIcons.FaQuestionCircle />;
    }

    return <IconComponent size={24} />;
  }

  if (icon.provider === "lucide") {
    // For lucide, just use the name as is
    const IconComponent = LucideIcons[icon.name as LucideIconKeys];

    if (!IconComponent) {
      console.warn("Unsupported Lucide icon:", icon.name);
      return <LucideIcons.HelpCircle />;
    }

    return React.createElement(IconComponent as React.ComponentType, {});
  }

  // Handle other providers if you add them in the future
  console.warn("Unsupported icon provider:", icon.provider);
  return <FaIcons.FaQuestionCircle />;
};
