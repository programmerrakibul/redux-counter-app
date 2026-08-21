import { Card, CardContent } from "@/components/ui/card";
import type { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

function Count() {
  const count = useSelector((state: RootState) => state.counter.value);

  console.log("Count");

  return (
    <Card className="rounded-3xl border-foreground/10 bg-foreground text-background shadow-2xl shadow-foreground/10">
      <CardContent className="flex items-center justify-center px-6 py-12 sm:px-10 sm:py-16">
        <p className="font-heading text-8xl font-semibold leading-none tracking-[-0.08em] sm:text-9xl">
          {count}
        </p>
      </CardContent>
    </Card>
  );
}

export { Count };
