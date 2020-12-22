import React from "react";
import BookCard from "./BookCard";

const BookList = (props) => {
  return (
    <div className="ui four column grid" style={{ padding: "50px" }}>
    {Array.isArray(props.books)
      ? props.books.map((book, i) => {
          return <BookCard data={book} key={i} />;
        })
      : " "}
  </div>
  );
};

export default BookList;
