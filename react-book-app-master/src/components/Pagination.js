import React from "react";

const Pagination = (props) => {
  const pages = [];
  if (props.currentPage == 1) {
    pages.push(
      <a className="disabled item">
        <i className="chevron left icon"></i>
      </a>
    );
  } else {
    pages.push(
      <a className="item" onClick={()=>{
        props.newpageBook(props.currentPage-1);
      }}>
        <i className="chevron left icon"></i>
      </a>
    );
  }
  for (let index = 1; index <= props.totalpage; index++) {
    let active = "";
    if (index == props.currentPage) {
      active = "active";
    }
    let className=active+" item"
    pages.push(
      <a
        className={className}
        onClick={() => {
          props.newpageBook(index);
        }}
      >
        {index}
      </a>
    );
    
  }
  if (props.currentPage == props.totalpage) {
    pages.push(
      <a className="disabled item">
        <i className="chevron right icon"></i>
      </a>
    );
  } else {
    pages.push(
      <a
        className="item"
        onClick={() => {
          props.newpageBook(props.currentPage +1);
        }}
      >
        <i className="chevron right icon"></i>
      </a>
    );
  }
  return (
    <div
      className="ui pagination menu"
      style={{ marginInlineStart:"10%",marginBottom: "10%" }}
    >
      {pages}
    </div>
  );
};

export default Pagination;
