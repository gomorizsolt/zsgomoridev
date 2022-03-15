import { useMemo } from "react";
import { useRouter } from "next/router";

const NAVIGATION_ITEMS = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "blog", path: "/blog" },
  { name: "achievements", path: "/achievements" },
  { name: "projects", path: "/projects" },
  { name: "uses", path: "/uses" },
];

export const useNavigationItems = () => {
  const router = useRouter();

  const navigationItems = useMemo(
    () =>
      NAVIGATION_ITEMS.map(({ name, path }) => {
        const isActive = path === router.pathname;

        return { name, path, isActive };
      }),
    [router.pathname]
  );

  return { navigationItems };
};
