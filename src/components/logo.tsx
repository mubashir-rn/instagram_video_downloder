import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import logo from "@/assets/webtoolkit.png";

export function Logo({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("relative", className)} {...props}>
      <Image
        src={logo}
        alt="Webtoolkit Logo"
        fill
        style={{ objectFit: "contain" }}
        priority
      />
    </div>
  );
}
