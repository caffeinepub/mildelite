import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useSubmitInquiry() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async (data: {
      name: string;
      phone: string;
      location: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitInquiry(
        data.name,
        data.phone,
        data.location,
        data.message,
      );
    },
  });
}
