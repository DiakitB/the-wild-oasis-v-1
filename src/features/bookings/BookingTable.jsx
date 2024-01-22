import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import styled from "styled-components";



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
import Body from "../../ui/Table";
import Empty from "../../ui/Empty";
import { useBooking } from "./useBooking";

function BookingTable() {

  const {isLoading, bookings, error} = useBooking()
  console.log(bookings)

  if(!bookings)  return <Empty resourceName="booking"/>
  console.log(bookings)
  return (
    <Menu>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <TableHeader>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </TableHeader>

        <Body
          data={bookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />
      </Table>
    </Menu>
  );
}

export default BookingTable;
