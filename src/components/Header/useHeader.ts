import { routesForLoggedInUser } from "@/constants/navigation";
import { useRouter } from "next/router";

export interface Route {
  title: string;
  path: string;
  isActive: boolean;
}

export const useHeader = () => {
  const { pathname } = useRouter();

  function getRoutes(): Route[] {
    return routesForLoggedInUser.map((routeConfig) => ({
      ...routeConfig,
      isActive: routeConfig.path === pathname,
    }));
  }

  return { routes: getRoutes() };
};
