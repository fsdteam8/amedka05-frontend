import { getAgent } from "@/lib/agent";
import { createAgent } from "@/lib/agentForm";
import { createContact } from "@/lib/contact";
import { createNewsletter } from "@/lib/newsletter";
import { getShop } from "@/lib/shop";
import { getAllTrip, getAllTripContent } from "@/lib/trip";
import { AgentApiResponse, AgentData } from "@/types/agentDataType";
import { contactDataType } from "@/types/contactDataType";
import { EventResponse } from "@/types/contentDataType";
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

export function useGetContentTrip() {
    return useQuery<EventResponse>({
        queryKey: ["event"],
        queryFn: () => {
            return getAllTripContent()
        },

    })
}

export function useCreateAgent() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (payload:AgentData) => createAgent(payload),
        onSuccess: () => {
            toast.success("Pertnership created successfully");
            queryClient.invalidateQueries({ queryKey: ["agent"] });
        },
        onError: (error: unknown) => {
            if (error instanceof Error) toast.error(error.message || "Update failed");
            else toast.error("Update failed");
        },
    });
}

export function useNewsletter() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (payload: { email: string }) => createNewsletter(payload),
        onSuccess: () => {
            toast.success("newsletter created successfully");
            queryClient.invalidateQueries({ queryKey: ["newsletter"] });
        },
        onError: (error: unknown) => {
            if (error instanceof Error) toast.error(error.message || "Update failed");
            else toast.error("Update failed");
        },
    });
}
