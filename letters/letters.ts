import { useRouter } from "next/router";

export const useUsername = (): string | undefined => {
  const router = useRouter();

  return router.query.username?.toString();
};
