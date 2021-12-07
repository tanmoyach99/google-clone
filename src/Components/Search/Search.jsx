import React, { useState } from "react";
import "./search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
// import { useStateValue } from "../../utilities/stateProvider";
import { actionType } from "../../utilities/reducer";
import { useStateValue } from "../../utilities/StateProvider";
// import { actionType } from "../../utilities/reducer";

const Search = ({ hideButtons }) => {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory();
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch({
      type: actionType.SEARCH_TERM,
      term: input,
    });

    history.push("/search");
  };
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__icon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" variant="outlined" onClick={submitSearch}>
            {" "}
            Google Search
          </Button>
          <Button variant="outlined"> I'm felling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            type="submit"
            variant="outlined"
            onClick={submitSearch}
            style={{ display: "none" }}
          >
            {" "}
            Search
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
