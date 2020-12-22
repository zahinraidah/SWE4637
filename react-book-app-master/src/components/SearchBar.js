import React from "react";

const SearchBar=(props)=>{
    return (
      <div className="ui search" style={{ marginLeft: "37%" }}>
        <form onSubmit={props.handleSubmit}>
          <div
            className="ui icon input"
            style={{ width: "40%", height: "50px" }}
          >
            <input
              className="prompt"
              type="text"
              placeholder="Search Books..."
              onChange={props.handleChange}
            />
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    );
}

export default SearchBar;