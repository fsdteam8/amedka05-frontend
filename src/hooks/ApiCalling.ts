import { createContact } from "@/lib/contact";
import { getAllTrip } from "@/lib/trip";
import { contactDataType } from "@/types/contactDataType";
import { TripsApiResponse } from "@/types/tripDataType";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";


export function useContactMutation() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (payload: contactDataType) => createContact(payload),
        onSuccess: () => {
            toast.success("Contact created successfully");
            queryClient.invalidateQueries({ queryKey: ["contact"] });
        },
        onError: (error: unknown) => {
            if (error instanceof Error) toast.error(error.message || "Update failed");
            else toast.error("Update failed");
        },
    });
}



export function useTripContent() {
    return useQuery<TripsApiResponse>({
        queryKey: ["Trip"],
        queryFn: () => {
            return getAllTrip()
        },

    })
}
