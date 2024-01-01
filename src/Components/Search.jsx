// export default function Search(){
//     return(
//         <>
//             <div>Search</div>
//         </>
//     )
// }

import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

import { useContext, useState } from "react";
import AppContext from "../Data/Contex";

export default function SearchBox() {
  const { query, setQuery, isError } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="search-section">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search movie"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>

        {/* 
        <Button variant="contained" type="submit">
          Search
        </Button> */}
      </form>
      <div className="card-error">
        <p>{isError.show && isError.msg}</p>
      </div>
    </div>
  );
}
