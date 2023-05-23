import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 2357741,
      product: "MACBOOK",
      img: "./images/mac.jpeg",
      customer: "Ankita",
      date: "1 March",
      amount: 92000,
      method: "Online",
      status: "Approved",
    },
    {
      id: 1143155,
      product: "LAPTOP",
      img: "./images/laptop.jpg",
      customer: "Sanskar katyare",
      date: "1 March",
      amount: 78500,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "TAB",
      img: "./images/tab.jpeg",
      customer: "Vaibhaiv kothari",
      date: "1 March",
      amount: 65000,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "MOBILE",
      img: "./images/mon.jpeg",
      customer: " Aashi mishra",
      date: "1 March",
      amount: 35000,
      method: "Cash on Delivery",
      status: "Pending",
    },

    {
      id: 2342355,
      product: "HEADPHONE",
      img: "./images/headphone.jpeg",
      customer: "Sufiya hussain",
      date: "1 March",
      amount: 20000,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
