import { getAgent } from "@/lib/agent";
import { createContact } from "@/lib/contact";
import { getShop } from "@/lib/shop";
import { getAllTrip } from "@/lib/trip";
import { AgentApiResponse } from "@/types/agentDataType";
import { contactDataType } from "@/types/contactDataType";
import { PartnershipApiResponse } from "@/types/shopDataType";
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

export function useAgentGet() {
    return useQuery<AgentApiResponse>({
        queryKey: ["agent"],
        queryFn: () => {
            return getAgent()
        },

    })
}

export function useShop() {
    return useQuery<PartnershipApiResponse>({
        queryKey: ["agent"],
        queryFn: () => {
            return getShop()
        },

    })
}
