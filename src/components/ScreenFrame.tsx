import Image from "next/image";

/**
 * Browser-chrome frame around a product screenshot. Fills its container, so
 * callers own the aspect ratio and rounding.
 */
export default function ScreenFrame({
  src,
  alt,
  tint,
  sizes,
  priority = false,
  compact = false,
}: {
  src: string;
  alt: string;
  tint: string;
  sizes: string;
  priority?: boolean;
  compact?: boolean;
}) {
  const dot = compact ? "size-1.5" : "size-2.5";

  return (
    <span
      dir="ltr"
      className="flex h-full w-full flex-col overflow-hidden"
      style={{ background: tint }}
    >
      <span
        className={`flex shrink-0 items-center border-b border-line bg-black/20 ${
          compact ? "gap-1.5 px-3 py-2.5" : "gap-2 px-4 py-3.5"
        }`}
      >
        <span className={`${dot} rounded-full bg-white/25`} />
        <span className={`${dot} rounded-full bg-white/20`} />
        <span className={`${dot} rounded-full bg-white/15`} />
      </span>

      <span className="relative flex-1 overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top"
        />
      </span>
    </span>
  );
}
