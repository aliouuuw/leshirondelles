import React from "react";

// This is a placeholder component.
// In a real application, you would use a library like 'react-icons'
// or a custom SVG sprite system to render the actual icons.
export const SanityIcon = ({ icon }: { icon: any }) => {
  // The 'icon' object from Sanity might have various shapes.
  // We're just rendering a fallback for now.
  // You might get icon data as { provider: 'fa', name: 'FaStar' } for example.
  if (icon && icon.name) {
    return <span className="text-4xl">Icon: {icon.name}</span>;
  }
  return <span className="text-4xl">◆</span>;
};
