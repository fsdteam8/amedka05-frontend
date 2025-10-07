"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "../ui/card"
import Image from "next/image"
import { useContactMutation } from "@/hooks/ApiCalling"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
    fullName: z.string().min(1),
    selectOption: z.string(),
    phoneNumber: z.string().min(1),
    email: z.string(),
    message: z.string(),
})

export default function ContactUsForm() {
    const contactMutation = useContactMutation()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        contactMutation.mutate({
            fullName: values.fullName,
            selectOption: values.selectOption,
            phoneNumber: values.phoneNumber,
            email: values.email,
            message: values.message,
        })
    }

    return (
        <div className="px-4 sm:px-6 lg:px-8 py-24">
            <Card className="container rounded-lg overflow-hidden border-none p-0 bg-[#1A1919]">
                <CardContent className="flex flex-col lg:flex-row p-0">
                    {/* Left: Form */}
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="w-full lg:w-1/2 space-y-8 p-6 sm:p-10 lg:p-[60px]"
                        >
                            <div>
                                <h1 className="text-[#7DD3DD] text-2xl sm:text-3xl lg:text-[40px] font-normal italic">
                                    Let’s Build Something Together
                                </h1>
                                <p className="text-[#929292] text-sm sm:text-base lg:text-[16px] mt-2">
                                    You have a project, collaboration, or idea? Get in touch and
                                    our team will respond shortly.
                                </p>
                            </div>

                            <FormField
                                control={form.control}
                                name="fullName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[#E6E7E6]">Full Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Full Name"
                                                className="border text-white p-3 border-[#929292]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="selectOption"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[#E6E7E6]">
                                            Select Option
                                        </FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger className="border border-[#929292] text-white">
                                                    <SelectValue placeholder="Select Option" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="creator">
                                                    Creator
                                                </SelectItem>
                                                <SelectItem value="agent">
                                                    Agent
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phoneNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[#E6E7E6]">
                                            Phone Number
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Phone Number"
                                                className="border text-white p-3 border-[#929292]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[#E6E7E6]">
                                            Email Address
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Email Address"
                                                type="email"
                                                className="border text-white p-3 border-[#929292]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[#E6E7E6]">Message</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                rows={5}
                                                placeholder="Message"
                                                className="resize-none border text-white p-3 border-[#929292]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button
                                type="submit"
                                className="w-full text-[#1A1919] py-3 font-semibold bg-[linear-gradient(135deg,#7DD3DD_0%,#89CFF0_50%,#A7C8F7_100%)] hover:brightness-110 transition-all duration-300"
                            >
                                Send Message {contactMutation.isPending && <Loader2 className="animate-spin" />}
                            </Button>
                        </form>
                    </Form>

                    {/* Right: Image with overlay */}
                    <div className="relative w-full lg:w-1/2 h-64 sm:h-96 lg:h-[900px]">
                        <Image
                            src="/contact.png"
                            alt="Professional businessman with headset working on laptop"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50"></div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
