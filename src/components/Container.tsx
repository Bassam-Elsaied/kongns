import type { ReactNode } from "react";

export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-360 px-8 max-[720px]:px-5 ${className}`}
    >
      {children}
    </div>
  );
}
