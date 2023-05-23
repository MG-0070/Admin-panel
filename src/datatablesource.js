export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userpro = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "product",
    headerName: "Product",
    width: 100,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    width: 100,
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Sanskita",
    img: "./images/sanskita.avif",
    status: "active",
    email: "sanskita@gmail.com",
    age: 22,
  },
  {
    id: 2,
    username: "Anku",
    img: "./images/anku.avif",
    email: "anku@gmail.com",
    status: "passive",
    age: 21,
  },
  {
    id: 3,
    username: "Shivam dubey",
    img: "./images/shivam.avif",
    email: "shivam@gmail.com",
    status: "pending",
    age: 25,
  },
  {
    id: 4,
    username: "Ankit",
    img: "./images/ankit.avif",
    email: "ankit@gmail.com",
    status: "active",
    age: 20,
  },
  {
    id: 5,
    username: "Tarun kumar",
    img: "./images/tarun.avif",
    email: "tarun@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Ankita kumari",
    img: "./images/ankita.avif",
    email: "ankita@gmail.com",
    status: "active",
    age: 18,
  },
  {
    id: 7,
    username: "Sanskar katyare",
    img: "./images/sanskar.avif",
    email: "sanskar@gmail.com",
    status: "passive",
    age: 19,
  },
  {
    id: 8,
    username: "Vaibhaiv kothari",
    img: "./images/ankit.avif",
    email: "8snow@gmail.com",
    status: "active",
    age: 24,
  },
  {
    id: 9,
    username: "Aashi mishra",
    img: "./images/sanskita.avif",
    email: "aashi@gmail.com",
    status: "pending",
    age: 25,
  },
  {
    id: 10,
    username: "Sufiya hussain",
    img: "./images/ankita.avif",
    email: "sufiya@gmail.com",
    status: "active",
    age: 26,
  },
];

export const userproduct = [
  {
    id: 1,
    username: "Sanskita",
    img: "./images/sanskita.avif",
    quantity: "8k",
    email: "sanskita@gmail.com",
    product: "laptop",
  },
  {
    id: 2,
    username: "Anku",
    img: "./images/anku.avif",
    email: "anku@gmail.com",
    quantity: "12k",
    product: "Macbook",
  },
  {
    id: 3,
    username: "Shivam dubey",
    img: "./images/shivam.avif",
    email: "shivam@gmail.com",
    quantity: "22k",
    product: "Mobile",
  },
  {
    id: 4,
    username: "Ankit",
    img: "./images/ankit.avif",
    email: "ankit@gmail.com",
    quantity: "30k",
    product: "Headphones",
  },
  {
    id: 5,
    username: "Tarun kumar",
    img: "./images/tarun.avif",
    email: "tarun@gmail.com",
    quantity: "17k",
    product: "Laptop",
  },
  {
    id: 6,
    username: "Ankita kumari",
    img: "./images/ankita.avif",
    email: "ankita@gmail.com",
    quantity: "14k",
    product: "Macbook",
  },
  {
    id: 7,
    username: "Sanskar katyare",
    img: "./images/sanskar.avif",
    email: "sanskar@gmail.com",
    quantity: "19k",
    product: "Tab",
  },
  {
    id: 8,
    username: "Vaibhaiv kothari",
    img: "./images/ankit.avif",
    email: "8snow@gmail.com",
    quantity: "29k",
    product: "Mobile",
  },
  {
    id: 9,
    username: "Aashi mishra",
    img: "./images/sanskita.avif",
    email: "aashi@gmail.com",
    quantity: "20k",
    product: "Tab",
  },
  {
    id: 10,
    username: "Sufiya hussain",
    img: "./images/ankita.avif",
    email: "sufiya@gmail.com",
    quantity: "12k",
    product: "Headphones",
  },
];
