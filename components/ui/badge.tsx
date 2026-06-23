import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type BadgeTone = "neutral" | "success" | "warning";

type BadgeProps = ComponentPropsWithoutRef<"span"> & {
  tone?: BadgeTone;
};

const toneClassName: Record<BadgeTone, string> = {
  neutral: "border-border bg-panel-strong text-foreground",
  success: "border-emerald-200 bg-emerald-50 text-emerald-800",
  warning: "border-amber-200 bg-amber-50 text-amber-800",
};

export function Badge({ className, tone = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex h-6 items-center rounded-md border px-2 text-xs font-medium",
        toneClassName[tone],
        className,
      )}
      {...props}
    />
  );
}

