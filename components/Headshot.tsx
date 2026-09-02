import Image from "next/image";

export function Headshot({ size = 96 }: { size?: number }) {
  return (
    <Image
      src="/profilephoto.png"
      alt="Kendra Johng"
      width={size}
      height={size}
      className="shrink-0 rounded-full object-cover shadow-plum"
      style={{ width: size, height: size }}
      priority
    />
  );
}
