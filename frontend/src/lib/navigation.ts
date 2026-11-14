import { navigation } from "@/config/navigation";

export function isActivePath(pathname: string, href: string) {
  if (href === navigation.home) return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}
