import type { ComponentProps } from "react";

import { Button } from "@/components/ui/button";

type CounterButtonProps = ComponentProps<typeof Button> & {
  symbol: string;
  label: string;
};

function CounterButton({ label, symbol, ...props }: CounterButtonProps) {
  console.log("CounterButton");

  return (
    <Button
      aria-label={label}
      className="size-14 rounded-2xl text-2xl font-light sm:size-16"
      size="icon"
      variant="outline"
      {...props}
    >
      {symbol}
    </Button>
  );
}

export { CounterButton };
