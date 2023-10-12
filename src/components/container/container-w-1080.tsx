import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerW1080Props {
  className?: string;
  children?: ReactNode;
}

export default function ContainerW1080({
  className,
  children,
}: ContainerW1080Props) {
  return (
    <div
      className={cn(
        "nx-mx-auto w-full nx-max-w-[1080px] nx-px-9 nx-min-[1116px]:px-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
