import type { SpanProps } from "@chakra-ui/react";
import { Span } from "@chakra-ui/react";
import { forwardRef } from "react";

export const LightMode = forwardRef<HTMLSpanElement, SpanProps>(
  function LightMode(props, ref) {
    return (
      <Span
        color="fg"
        display="contents"
        className="chakra-theme light"
        colorPalette="gray"
        colorScheme="light"
        ref={ref}
        {...props}
      />
    );
  },
);
