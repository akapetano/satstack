import type { SpanProps } from "@chakra-ui/react";
import { Span } from "@chakra-ui/react";
import { forwardRef } from "react";

export const DarkMode = forwardRef<HTMLSpanElement, SpanProps>(
  function DarkMode(props, ref) {
    return (
      <Span
        color="fg"
        display="contents"
        className="chakra-theme dark"
        colorPalette="gray"
        colorScheme="dark"
        ref={ref}
        {...props}
      />
    );
  },
);
