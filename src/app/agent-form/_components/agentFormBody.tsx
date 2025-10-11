"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ImagePlus, Loader2, Trash2 } from "lucide-react";
import Image from "next/image";
import { useCreateAgent } from "@/hooks/ApiCalling";

const formSchema = z.object({
    fullName: z.string().min(1, "Full name is required"),
    designation: z.string().min(1, "Designation is required"),
    phoneNumber: z.string().min(1, "Phone number is required"),
    brandName: z.string().min(1, "Brand name is required"),
    emailAddress: z.string().email("Invalid email address"),
    workingFrom: z.string().min(1, "Working from is required"),
    country: z.string().min(1, "Country is required"),
    image: z
        .any()
        .refine((file) => file instanceof File, "Please upload an image"),
});

export default function AgentForm() {
    const [image, setImage] = useState<File | null>(null);
    const createAgent = useCreateAgent()


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            designation: "",
            phoneNumber: "",
            brandName: "",
            emailAddress: "",
            workingFrom: "",
            country: "",
            image: undefined,
        },
    });

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setImage(file);
        form.setValue("image", file);
    };

    const removeImage = () => {
        setImage(null);
        form.setValue("image", undefined);
    };


    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        createAgent.mutate(values);

    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 mx-auto py-10"
            >
                {/* === Full Name & Designation === */}
                <div className="grid grid-cols-12 gap-10">
                    <div className="col-span-6">
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Full Name"
                                            className="border border-[#929292] py-4"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="col-span-6">
                        <FormField
                            control={form.control}
                            name="designation"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Designation</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Designation"
                                            className="border border-[#929292] py-4"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                {/* === Phone Number & Brand Name === */}
                <div className="grid grid-cols-12 gap-10">
                    <div className="col-span-6">
                        <FormField
                            control={form.control}
                            name="phoneNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Phone Number"
                                            className="border border-[#929292] py-4"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="col-span-6">
                        <FormField
                            control={form.control}
                            name="brandName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Brand Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Brand Name"
                                            className="border border-[#929292] py-4"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                {/* === Email & Working From === */}
                <div className="grid grid-cols-12 gap-10">
                    <div className="col-span-6">
                        <FormField
                            control={form.control}
                            name="emailAddress"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email Address</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Email Address"
                                            type="email"
                                            className="border border-[#929292] py-4"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="col-span-6">
                        <FormField
                            control={form.control}
                            name="workingFrom"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Working From</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Working From"
                                            className="border border-[#929292] py-4"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                {/* === Country & Image Upload === */}
                <div className="grid grid-cols-12 gap-10">
                    <div className="col-span-6">
                        <FormField
                            control={form.control}
                            name="country"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Country</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Country"
                                            className="border border-[#929292] py-4"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="col-span-6">
                        <FormField
                            control={form.control}
                            name="image"
                            render={() => (
                                <FormItem>
                                    <FormLabel>Image</FormLabel>
                                    <div className="border-2 border-dashed border-[#929292] rounded-lg p-3">
                                        <div className="flex flex-wrap gap-4 justify-center">
                                            {image ? (
                                                <div className="relative w-full h-[200px] border border-gray-700 rounded overflow-hidden">
                                                    <Image
                                                        src={URL.createObjectURL(image)}
                                                        alt="Uploaded"
                                                        fill
                                                        className="object-cover rounded"
                                                    />
                                                    <button
                                                        type="button"
                                                        className="absolute top-0 right-0 bg-black/70 text-white p-1"
                                                        onClick={removeImage}
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            ) : (
                                                <label
                                                    htmlFor="image-upload"
                                                    className="w-16 h-16 border border-[#929292] rounded flex items-center justify-center cursor-pointer"
                                                >
                                                    <ImagePlus className="h-6 w-6 text-gray-500" />
                                                </label>
                                            )}
                                        </div>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                            className="hidden"
                                            id="image-upload"
                                        />
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                <div className="lg:col-span-2 flex justify-end">
                    <Button
                        type="submit"
                        disabled={createAgent.isPending}
                        className="bg-[linear-gradient(135deg,#7DD3DD_0%,#89CFF0_50%,#A7C8F7_100%)] text-[#131313]"
                    >
                        Send Request {createAgent.isPending && <Loader2 className="animate-spin ml-2" />}
                    </Button>
                </div>
            </form>
        </Form>
    );
}
