import React, { 
    // useEffect, useState
 } from "react";
import styled from "styled-components";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
const Search = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;
const SearchInputs = styled.div``;
const Searchbar = styled.input``;

const SearchBar = () => {
    // const navigate = useNavigate();
//   const [query, setQuery] = useState("");
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchCharacters = async () => {

//       const res = await axios.get(`http://localhost:8080/search/${query}`);
//       setData(res.data);
//     };
//     if (query.length === 0 || query.length > 2) fetchCharacters();
//   }, [query]);
// const [text, setText] = useState("");
// const handleChange = (e) => {
//   setText(e.target.value);
//   if (e.key === "Enter") {
//     navigate(`http://localhost:8080/search/${text}`);
//   }
// };
  
  return (
    <>
    <Search>
      <SearchInputs>
        <Searchbar placeholder="Search" 
        // onKeyUp={handleChange}
        ></Searchbar>
      </SearchInputs>
    </Search>
    </>
  );
};

export default SearchBar;
