"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  email: z.string().min(8, {
    message: "Du måste skriva mer email",
  }),
  name: z.string().min(2, {
    message: "Du måste skriva mer namn",
  }),
  meddelande: z.string().min(2, {
    message: "Du måste skriva mer namn",
  }),
});
export default function Kontakt() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      meddelande: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <section className="h-[492px] md:h-[800px] flex items-center justify-center  overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(75%_67%_at_center_center,rgb(140,69,255,.5)_2%,rgb(14,0,46,.5)_72%,transparent)]" />
        <div className="container flex flex-col items-center justify-center relative mt-16 md:-mt-32">
          <h1 className="text-8xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))]  bg-clip-text text-transparent text-center">
            Kontakta oss
          </h1>
          <p className="text-sm md:text-lg text-foreground/70 max-w-sm md:max-w-xl text-center mt-5">
            Konsultmatch.se är en plattform som enkelt kopplar samman konsulter
            och företag. Konsulter kan utforska jobbuppdrag från företag, medan
            företag kan söka efter specifika konsulter och matchas med rätt
            kompetens för sina projekt. En smidig och effektiv lösning för båda
            parter att hitta rätt samarbeten.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="container">
          <h1>Uppdrag</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email" {...field} />
                    </FormControl>
                    <FormDescription>
                     Email
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Namn</FormLabel>
                    <FormControl>
                      <Input placeholder="name" {...field} />
                    </FormControl>
                    <FormDescription>
                      Namn
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="meddelande"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meddelande</FormLabel>
                    <FormControl>
                      <Textarea placeholder="meddelande" {...field} />
                    </FormControl>
                    <FormDescription>
                      Meddelande
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Skicka</Button>
            </form>
          </Form>
        </div>
      </section>
    </>
  );
}
