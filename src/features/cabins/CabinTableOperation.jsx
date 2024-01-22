
import TableOperations from "../../ui/TableOperations"
import Filter from "../../ui/Filter"
import SortBy from "../../ui/SortBy"
export default function CabinTableOperation(){
    return <TableOperations>
        <Filter fileterField="discount"
            options={[
                { value: "all", label: "All" },
                { value: "no-discount", label: "No discount" },
                { value: "with-discount", label: "With discount" }]
            } />
        <SortBy
        options={[
          { value: "startDate-desc", label: "Sort by date (recent first)" },
          { value: "startDate-asc", label: "Sort by date (earlier first)" },
          {
            value: "totalPrice-desc",
            label: "Sort by amount (high first)",
          },
          { value: "totalPrice-asc", label: "Sort by amount (low first)" },
        ]}
      />
    </TableOperations>
}