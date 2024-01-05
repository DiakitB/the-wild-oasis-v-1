import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Button from "../ui/Button";
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import { useState } from "react";
import AddCabin from "../features/cabins/AddCabin";

function Cabins() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>firlter sort</p>
      </Row>
      <Row>
        <CabinTable />
       <AddCabin/>
      </Row>
    </>
  );
}

export default Cabins;
