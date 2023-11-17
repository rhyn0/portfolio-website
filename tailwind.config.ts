/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: ["class"],
   content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
   theme: {
      container: {
         center: true,
         padding: "2rem",
         screens: {
            "2xl": "1400px",
         },
      },
      extend: {
         colors: {
            border: "hsl(var(--border))",
            input: "hsl(var(--input))",
            ring: "hsl(var(--ring))",
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            primary: {
               DEFAULT: "hsl(var(--primary))",
               foreground: "hsl(var(--primary-foreground))",
            },
            secondary: {
               DEFAULT: "hsl(var(--secondary))",
               foreground: "hsl(var(--secondary-foreground))",
            },
            destructive: {
               DEFAULT: "hsl(var(--destructive))",
               foreground: "hsl(var(--destructive-foreground))",
            },
            muted: {
               DEFAULT: "hsl(var(--muted))",
               foreground: "hsl(var(--muted-foreground))",
            },
            accent: {
               DEFAULT: "hsl(var(--accent))",
               foreground: "hsl(var(--accent-foreground))",
            },
            popover: {
               DEFAULT: "hsl(var(--popover))",
               foreground: "hsl(var(--popover-foreground))",
            },
            card: {
               DEFAULT: "hsl(var(--card))",
               foreground: "hsl(var(--card-foreground))",
            },
            plum: {
               100: "#84717E",
               300: "#796773",
               500: "#6E5E69",
               700: "#63545E",
               900: "#584B53",
            },
            brick: {
               100: "#AC7277",
               300: "#9D5C63",
               500: "#9A5B60",
               700: "#8D5358",
               900: "#814B50",
            },
            "sky-blue": {
               100: "#D6E3F8",
               300: "#CBDBF6",
               500: "#BACFF3",
               700: "#A8C2F0",
               900: "#96B6ED",
            },
            cream: {
               100: "#FEF5EF",
               300: "#FEF3EC",
               500: "#FDE6D8",
               700: "#FCDAC5",
               900: "#FBCEB1",
            },
            khaki: {
               100: "#EED5BE",
               300: "#EACBAE",
               500: "#E6C19E",
               700: "#E2B68D",
               900: "#DEAC7D",
            },
         },
         borderRadius: {
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
         },
         keyframes: {
            "accordion-down": {
               from: { height: 0 },
               to: { height: "var(--radix-accordion-content-height)" },
            },
            "accordion-up": {
               from: { height: "var(--radix-accordion-content-height)" },
               to: { height: 0 },
            },
         },
         animation: {
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
         },
      },
   },
   plugins: [require("tailwindcss-animate")],
};
