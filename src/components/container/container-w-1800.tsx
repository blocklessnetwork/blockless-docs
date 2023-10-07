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
    <div className={cn("m-auto w-full max-w-[1800px] px-9", className)}>
      {children}
    </div>
  );
}
