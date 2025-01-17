import { TableCell, TableRow } from "@/components/ui/table";
import { Doc } from "../../../convex/_generated/dataModel";

interface DocumentRowProps {
  document: Doc<"documents">;
};

export const DocumentRow = ({ document } : DocumentRowProps ) => {
  return (
    <TableRow
      className="cursor-pointer"
    >

    </TableRow>
  )
}