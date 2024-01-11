import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Button from "../ui/Button";
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import { useState } from "react";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperation from "../features/cabins/CabinTableOperation";

function Cabins() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
     <CabinTableOperation/>
      </Row>
      <Row>
        <CabinTable />
       <AddCabin/>
      </Row>
    </>
  );
}

export default Cabins;
