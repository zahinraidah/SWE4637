import React from "react";
import Dropdown from "./Dropdown";
const Searchbar = (props) => {
  return (
    <div className="container">
      <div className="row" style={{
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
      }}>
        <section className="col s6 offset-s4">
          <form 
          action="" 
          onSubmit={props.handleSubmit} 
          style = {{width: '100%'}}>
            <div className="input-field">
              <input
                placeholder="Search for books"
                type="text"
                onChange={props.handleChange}
              />
              <Dropdown/>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Searchbar;
