
import TableOperations from "../../ui/TableOperations"
import Filter from "../../ui/Filter"
export default function CabinTableOperation(){
    return <TableOperations>
        <Filter fileterField="discount" options={[{value: "all", label: "All"}, {value: "no-discount", label: "No discount"}, {value: "with-discount", label: "With discount"}]}/>
    </TableOperations>
}