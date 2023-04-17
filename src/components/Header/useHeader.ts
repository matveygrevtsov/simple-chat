import { navigation } from "@/constants/navigation";
import { useRouter } from "next/router";

export interface Route {
  title: string;
  path: string;
  isActive: boolean;
}

export const useHeader = () => {
  const { pathname } = useRouter();

  function getRoutes(): Route[] {
    return navigation.unauthorized.map((navLink) => ({
      ...navLink,
      isActive: navLink.path === pathname,
    }));
  }

  return { routes: getRoutes() };
};
