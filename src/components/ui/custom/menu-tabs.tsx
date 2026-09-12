import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function MenuTabs() {
  return (
    <Tabs defaultValue="hot-drinks" className="w-full">
      <TabsList className="mx-auto flex w-fit gap-2 rounded-full bg-[#EFE5D8] p-1">
        <TabsTrigger
          value="hot-drinks"
          className="rounded-full px-5 py-2 text-[#6F4E37] data-[state=active]:bg-[#6F4E37] data-[state=active]:text-white"
        >
          Hot Drinks
        </TabsTrigger>

        <TabsTrigger
          value="cold-drinks"
          className="rounded-full px-5 py-2 text-[#6F4E37] data-[state=active]:bg-[#6F4E37] data-[state=active]:text-white"
        >
          Cold Drinks
        </TabsTrigger>

        <TabsTrigger
          value="pastries"
          className="rounded-full px-5 py-2 text-[#6F4E37] data-[state=active]:bg-[#6F4E37] data-[state=active]:text-white"
        >
          Pastries
        </TabsTrigger>

        <TabsTrigger
          value="desserts"
          className="rounded-full px-5 py-2 text-[#6F4E37] data-[state=active]:bg-[#6F4E37] data-[state=active]:text-white"
        >
          Desserts
        </TabsTrigger>
      </TabsList>

      <TabsContent value="hot-drinks">Hot drinks here</TabsContent>

      <TabsContent value="cold-drinks">Cold drinks here</TabsContent>

      <TabsContent value="pastries">Pastries here</TabsContent>

      <TabsContent value="desserts">Desserts here</TabsContent>
    </Tabs>
  );
}
