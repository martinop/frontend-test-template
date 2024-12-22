import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-700">
      <div className="container mx-auto px-4 flex justify-center py-16">
        <Link href="/">
          <Image
            src="/apply-digital-logo.svg"
            alt="Apply Digital"
            width={170}
            height={44}
          />
        </Link>
      </div>
    </footer>
  );
}
