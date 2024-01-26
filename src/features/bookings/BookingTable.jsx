

import styled from "styled-components";
import { useBooking } from "./useBooking";

import BookingRow from "../../features/bookings/BookingRow"

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;


// function BookingTable() {

//   const {isLoading, bookings, error} = useBooking()
//   console.log(bookings)

//   if(!bookings)  return <Empty resourceName="booking"/>
//   console.log(bookings)
//   return (
//     <Menu>
//       <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
//         <TableHeader>
//           <div>Cabin</div>
//           <div>Guest</div>
//           <div>Dates</div>
//           <div>Status</div>
//           <div>Amount</div>
//           <div></div>
//         </TableHeader>
//       {bookings.map((booking)=><BookingRow booking={booking}/>)}
//       </Table>
    
//     </Menu>
//   );
// }

// export default BookingTable;


// We could create yet another layer of abstraction on top of this. We could call this component just <Results>, like: Results({data, count, isLoading, columns, rowComponent}). Then <BookingTable> and ALL other tables would simply call that.
// BUT, creating more abstractions also has a cost! More things to remember, more complex codebase to understand. Sometimes it's okay to just copy and paste instead of creating abstractions



function BookingTable() {
  const { isLoading, bookings, error } = useBooking()

  if(bookings)console.log(bookings)
  return <Menu>
    <table>
      <TableHeader>
        <div>Cabins</div>
        <div>Guests</div>
        <div>Date</div>
        <div>Status</div>
        <div></div>
      </TableHeader>
      {bookings?.map((booking)=><BookingRow booking={booking}/>)}
    </table>
  </Menu>
}
export default BookingTable