import type { ColorPalette } from "@chakra-ui/react";
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const colorPalette: ColorPalette = "orange";

const customConfig = defineConfig({
  globalCss: {
    body: {
      colorPalette,
    },
  },
  theme: {
    tokens: {
      fonts: {
        body: { value: "var(--font-mukta)" },
        heading: { value: "var(--font-mukta)" },
      },
    },
    semanticTokens: {
      radii: {
        l1: { value: "0.125rem" },
        l2: { value: "0.25rem" },
        l3: { value: "0.375rem" },
      },
      colors: {
        brand: {
          50: { value: `{colors.${colorPalette}.50}` },
          100: { value: `{colors.${colorPalette}.100}` },
          200: { value: `{colors.${colorPalette}.200}` },
          300: { value: `{colors.${colorPalette}.300}` },
          400: { value: `{colors.${colorPalette}.400}` },
          500: { value: `{colors.${colorPalette}.500}` },
          600: { value: `{colors.${colorPalette}.600}` },
          700: { value: `{colors.${colorPalette}.700}` },
          800: { value: `{colors.${colorPalette}.800}` },
          900: { value: `{colors.${colorPalette}.900}` },
          contrast: { value: `{colors.${colorPalette}.contrast}` },
          emphasized: { value: `{colors.${colorPalette}.emphasized}` },
          fg: { value: `{colors.${colorPalette}.fg}` },
          focusRing: { value: `{colors.${colorPalette}.focusRing}` },
          muted: { value: `{colors.${colorPalette}.muted}` },
          solid: { value: `{colors.${colorPalette}.solid}` },
          subtle: { value: `{colors.${colorPalette}.subtle}` },
        },
        danger: {
          50: { value: `{colors.red.50}` },
          100: { value: "{colors.red.100}" },
          200: { value: "{colors.red.200}" },
          300: { value: "{colors.red.300}" },
          400: { value: "{colors.red.400}" },
          500: { value: "{colors.red.500}" },
          600: { value: "{colors.red.600}" },
          700: { value: "{colors.red.700}" },
          800: { value: "{colors.red.800}" },
          900: { value: "{colors.red.900}" },
        },
        warning: {
          50: { value: "{colors.orange.50}" },
          100: { value: "{colors.orange.100}" },
          200: { value: "{colors.orange.200}" },
          300: { value: "{colors.orange.300}" },
          400: { value: "{colors.orange.400}" },
          500: { value: "{colors.orange.500}" },
          600: { value: "{colors.orange.600}" },
          700: { value: "{colors.orange.700}" },
          800: { value: "{colors.orange.800}" },
          900: { value: "{colors.orange.900}" },
        },
        success: {
          50: { value: "{colors.green.50}" },
          100: { value: "{colors.green.100}" },
          200: { value: "{colors.green.200}" },
          300: { value: "{colors.green.300}" },
          400: { value: "{colors.green.400}" },
          500: { value: "{colors.green.500}" },
          600: { value: "{colors.green.600}" },
          700: { value: "{colors.green.700}" },
          800: { value: "{colors.green.800}" },
          900: { value: "{colors.green.900}" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
