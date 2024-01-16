import React, { useEffect, useState } from "react";
import "../Style/Input.css";
import List from "./List";
import List2 from "./List2";

function Input() {
  let [values, setvalues] = useState([
    {
      name: "Allen Walker",
      img: "../Images/boy_1.png",
      email: "Allen@gmail.com",
      status: true,
    },
    {
      name: "Tom Walker",
      img: "../Images/boy_1.png",
      email: "Tom@gmail.com",
      status: true,
    },
    {
      name: "Robert",
      img: "../Images/boy_1.png",
      email: "Robert@gmail.com",
      status: true,
    },
    {
      name: "Smith Walker",
      img: "../Images/boy_1.png",
      email: "Smith@gmail.com",
      status: true,
    },
    {
      name: "Kate Williams",
      img: "../Images/boy_1.png",
      email: "Kate@gmail.com",
      status: true,
    },
    {
      name: "Martin Brown",
      img: "../Images/boy_1.png",
      email: "Martin@gmail.com",
      status: true,
    },
    {
      name: "Paul Jones",
      img: "../Images/boy_1.png",
      email: "Paul@gmail.com",
      status: true,
    },
    {
      name: "Dwan Miller",
      img: "../Images/boy_1.png",
      email: "Miller@gmail.com",
      status: true,
    },
    {
      name: "Dom Martinez",
      img: "../Images/boy_1.png",
      email: "Martinez@gmail.com",
      status: true,
    },
    {
      name: "Mark Lopez",
      img: "../Images/boy_1.png",
      email: "Mark@gmail.com",
      status: true,
    },
    {
      name: "F. W. Taylor",
      img: "../Images/boy_1.png",
      email: "Taylor@gmail.com",
      status: true,
    },
    {
      name: "Thomas Anderson",
      img: "../Images/boy_1.png",
      email: "Thomas@gmail.com",
      status: true,
    },
    {
      name: "Nick Harris",
      img: "../Images/boy_1.png",
      email: "Nick@gmail.com",
      status: true,
    },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  let [search,setsearch]=useState([]);
  const [state, setstate] = useState(true);
  useEffect(() => {
  }, [state]);

  const handleClickevent = (e) => {
    values.map((ele, i) => {
      if (e == i) {
        let newvalues = [...values];
        newvalues[i].status = false;
        setvalues(newvalues);
      }
    });
    setstate(!state);
  };
  const handleSearch = (e) => {

    console.log(e.target.value);
    const newSearchTerm = e.target.value.toLowerCase();
    setSearchTerm(newSearchTerm);

    let newArrayAfterSearch = values.filter((ele) =>
      {return ele.name.toLowerCase().includes(newSearchTerm)}
    );
    setsearch(newArrayAfterSearch);
  
    setstate(!state);
  };
  const handlefunction = (e) => {
    values.map((ele, i) => {
      if (e == i) {
        let newvalues = [...values];
        newvalues[i].status = true;
        setvalues(newvalues);
      }
    });
    setstate(!state);
  };
  return (
    <div className="mainCon d-flex">
      {values.map((ele, i) => {
        if (!ele.status)
          return (
            <List2
              key1={i}
              img1={ele.img}
              name={ele.name}
              email={ele.email}
              handlefunction={handlefunction}
              key={i}
            />
          );
      })}
      <input
        type="text"
        className="dropdown-toggle Inputclass form-control"
        placeholder="Add new item"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onChange={(e) => {
          handleSearch(e);
        }}
      />
      <div className="dropdown container">
        <ul className="dropdown-menu">
          {search.length!=0? search.map((ele, i) => {
            if (ele.status)
              return (
                <List
                  key1={i}
                  img1={ele.img}
                  name={ele.name}
                  email={ele.email}
                  handleClickevent={handleClickevent}
                  key={i}
                />
              );
          }):values.map((ele, i) => {
            if (ele.status)
              return (
                <List
                  key1={i}
                  img1={ele.img}
                  name={ele.name}
                  email={ele.email}
                  handleClickevent={handleClickevent}
                  key={i}
                />
              );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Input;
