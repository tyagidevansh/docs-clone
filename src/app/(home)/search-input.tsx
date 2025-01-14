import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

 export const SearchInput = () => {
  return (
    <div className="flex-1 flex items-center justify-center">
      <form
        className="relative max-w-[720px] w-full"
      >
        <Input 
          placeholder="Search"
          className="md:text-base placeholder:text-neutral-800 px-14 w-full border-none focus-visible:shadow-[0_1px_1px_rgba(65, 69, 73, .4),0_1px_3px_1px_1px_rgba(65, 69, 73, .15)] bg-[#F0F4F8] rounded-full f-[48px] focus-visible:ring-0 focus:bg-white"
        />
        <Button
          type="submit"
          variant="ghost"
          size="icon"
          className="absolute left-3 top-1/2 -translate-x-1/2 [&_svg]:size-5 rounded-full"
        >
          <SearchIcon />
        </Button>
      </form>
    </div>
  );
 }