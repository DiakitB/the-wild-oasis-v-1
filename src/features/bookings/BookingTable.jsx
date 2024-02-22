

import styled from "styled-components";
import { useBooking } from "./useBooking";

import BookingRow from "../../features/bookings/BookingRow"
import Pagination from "../../ui/Pagination";

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

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`
function BookingTable() {
  const { isLoading, bookings,count, error } = useBooking()

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
      {bookings?.map((booking) => <BookingRow booking={booking} />)}
      <Footer>
        <Pagination count={count}/>
      </Footer>
    </table>
    
  </Menu>
}
export default BookingTable