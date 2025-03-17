import { Link } from "@heroui/react";

export default function Footer() {
  return (
    <footer className="w-full flex items-center justify-center py-3 h-[100px]">
      <Link
        isExternal
        className="flex items-center gap-1 text-current"
        href="https://site.qbitsinc.com/"
        title="nextui.org homepage"
      >
        <span className="text-default-600">Powered by</span>
        <p className="text-primary">Qbits Inc</p>
      </Link>
    </footer>
  );
}
