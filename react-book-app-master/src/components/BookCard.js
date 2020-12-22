import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

const BookCard = (props) => {
  const details = props.data.volumeInfo;
  let imageUrl = "https://picsum.photos/id/1040/200/300";
  if (details.imageLinks != undefined && details.imageLinks.thumbnail !=undefined) {
    imageUrl = details.imageLinks.thumbnail;
  }
  let author = " ";
  if (details.authors != null) {
    author = details.authors.join(", ");
  }
  const category = details.categories;
  return (
    <div className="column">
      <div className="ui fluid card">
        <div className="image">
          <img src={imageUrl} />
        </div>
        <div className="content">
          <h3>{details.title}</h3>
          <div className="description">
            <div>
              Author(s):<h4>{author}</h4>
            </div>
            <div>
              Category:<h4>{category}</h4>
            </div>
          </div>
        </div>
        <div className="extra content">
          {details.averageRating != null ? (
            <i className="large star icon" style={{ color: "#FFDF00" }}></i>
          ) : (
            <i className="large star icon"></i>
          )}
          {details.averageRating}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
