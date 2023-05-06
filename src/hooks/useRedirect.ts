import { useRouter } from "next/router";

export function useRedirect() {
  const router = useRouter();

  function redirect(path: string) {
    if (typeof window !== "undefined") {
      router.push(path);
    }
  }

  return { redirect };
}
