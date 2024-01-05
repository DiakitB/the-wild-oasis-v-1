import { useState } from "react"
import CreateCabinForm from "./CreateCabinForm"
import Button from "../../ui/Button"
import Modal from "../../ui/Modal"

function AddCabin() {
    return <Modal>
        <Modal.Open onpens="cabin-form">
            <Button>Add new Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
            <CreateCabinForm/>
        </Modal.Window>
        {/* <Modal.Open onpens="table">
            <Button>Add new Cabin</Button>
        </Modal.Open>
        <Modal.Window name="table">
            <CreateCabinForm/>
        </Modal.Window> */}
    </Modal>
}

// export default function AddCabin() {
//     const [isModelOpen, setIsModelOpen] = useState(false)
//     return <div>
//         <Button onClick={() => setIsModelOpen((vanessa) => !vanessa)}>
//           Add a new cabin
//         </Button>
//         {isModelOpen && <Modal onClose={()=>setIsModelOpen(false)}>
//             <CreateCabinForm onCloseModel={() => setIsModelOpen(false)} />
//         </Modal>}
//     </div>
// }