/**
 * Theme configuration for the FreelanceHub application
 * Centralizes design tokens for consistent usage across components
 */

export const theme = {
  // Colors - use tailwind classes when possible (e.g., bg-primary-500)
  colors: {
    primary: {
      50: "#F1F6F9",
      100: "#E4EBF0",
      200: "#D7E0E7",
      300: "#CAD5DE",
      400: "#9BA4B4",
      500: "#394867", // main primary
      600: "#14274E", // dark primary
      700: "#111F3E",
      800: "#0E172E",
      900: "#0B0F1E",
    },
    background: "#F1F6F9",
    surface: "#FFFFFF",
    text: {
      primary: "#14274E",
      secondary: "#394867",
      muted: "#9BA4B4",
    },
    gray: {
      50: "#F1F6F9",
      100: "#E4EBF0",
      200: "#D7E0E7",
      300: "#CAD5DE",
      400: "#9BA4B4",
      500: "#394867",
      600: "#14274E",
      700: "#111F3E",
      800: "#0E172E",
      900: "#0B0F1E",
    },
  },

  // Font sizes
  fontSize: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
  },

  // Spacing scale
  spacing: {
    px: "1px",
    0: "0",
    0.5: "0.125rem", // 2px
    1: "0.25rem", // 4px
    1.5: "0.375rem", // 6px
    2: "0.5rem", // 8px
    2.5: "0.625rem", // 10px
    3: "0.75rem", // 12px
    3.5: "0.875rem", // 14px
    4: "1rem", // 16px
    5: "1.25rem", // 20px
    6: "1.5rem", // 24px
    7: "1.75rem", // 28px
    8: "2rem", // 32px
    9: "2.25rem", // 36px
    10: "2.5rem", // 40px
    11: "2.75rem", // 44px
    12: "3rem", // 48px
    14: "3.5rem", // 56px
    16: "4rem", // 64px
    20: "5rem", // 80px
    24: "6rem", // 96px
    28: "7rem", // 112px
    32: "8rem", // 128px
    36: "9rem", // 144px
    40: "10rem", // 160px
    44: "11rem", // 176px
    48: "12rem", // 192px
    52: "13rem", // 208px
    56: "14rem", // 224px
    60: "15rem", // 240px
    64: "16rem", // 256px
    72: "18rem", // 288px
    80: "20rem", // 320px
    96: "24rem", // 384px
    128: "32rem", // 512px
  },

  // Border radius
  borderRadius: {
    none: "0",
    sm: "0.125rem", // 2px
    DEFAULT: "0.25rem", // 4px
    md: "0.375rem", // 6px
    lg: "0.5rem", // 8px
    xl: "0.75rem", // 12px
    "2xl": "1rem", // 16px
    full: "9999px",
  },

  // Z-index scale for layering management
  zIndex: {
    0: "0",
    10: "10", // Background elements
    20: "20", // Regular UI elements
    30: "30", // Sticky elements
    40: "40", // Navbar
    50: "50", // Dropdowns
    60: "60", // Modals backdrop
    70: "70", // Modals
    80: "80", // Tooltips
    90: "90", // Notifications
    100: "100", // Reserved for critical overlays
    auto: "auto",
  },

  // Common elements styling
  elements: {
    button: {
      primary:
        "bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
      secondary:
        "bg-primary-400 hover:bg-primary-500 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
      outline:
        "border border-primary-500 text-primary-500 hover:bg-primary-50 font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
      ghost:
        "text-primary-500 hover:bg-primary-50 font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
    },
    input:
      "w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200",
    card: "bg-white rounded-lg shadow-card p-6 border border-gray-100",
    badge: {
      primary:
        "bg-primary-100 text-primary-600 text-xs font-medium px-2.5 py-0.5 rounded-full",
      secondary:
        "bg-primary-50 text-primary-500 text-xs font-medium px-2.5 py-0.5 rounded-full",
      success:
        "bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full",
      warning:
        "bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full",
      gray: "bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full",
    },
  },

  // Media query breakpoints
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
};

// Common utility functions for theme
export const utils = {
  // Convert hex to rgba
  hexToRgba: (hex, alpha = 1) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  },

  // Generates class names conditionally
  classNames: (...classes) => {
    return classes.filter(Boolean).join(" ");
  },
};

export default {
  theme,
  utils,
};
