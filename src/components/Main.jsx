import React, { useState } from "react";

const Main = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            A room without a book is like <br />a body without a soul{" "}
          </h1>
        </div>
        <div className="row2">
          <h2>Find Your Book </h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your Book Name"
              value={search}
            />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <img src="../../public/images.b2.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Main;
