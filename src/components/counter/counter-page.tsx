import { Count } from "@/components/counter/count";
import { Card, CardContent } from "@/components/ui/card";
import DecrementButton from "./decrement-button";
import IncrementButton from "./increment-button";

function CounterPage() {
  console.log("CounterPage");

  return (
    <section className="flex min-h-[calc(100vh-8rem)] items-center justify-center px-5 py-14 sm:px-8">
      <div className="w-full max-w-md">
        <Count />
        <Card className="mt-5 rounded-3xl bg-card/80">
          <CardContent className="flex items-center justify-center gap-5 px-6 py-7">
            <DecrementButton />
            <IncrementButton />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export { CounterPage };
