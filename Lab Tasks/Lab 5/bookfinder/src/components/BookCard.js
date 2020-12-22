const BookCard = (props) => {
  console.log(props.data);
  const ImageURL = props.data.volumeInfo.imageLinks.smallThumbnail;
  const BookTitle = props.data.volumeInfo.title;
  const BookAuthor = props.data.volumeInfo.authors;
  return (
    <div className="col s12 m4">
      <div className="card">
        <div className="card-image">
          {ImageURL == undefined ? (
            <img
              src="https://picsum.photos/200/300"
              alt=""
              style={{ width: "100", height: "200" }}
            />
          ) : (
            <img
              src={ImageURL}
              alt="book cover"
              width="100px"
            />
          )}

          <span className="card-title"><b>{BookTitle}</b></span>
        </div>
        <div className="card-content">Authors: {BookAuthor}</div>
        <div className="card-action">
          <a href="#">See Details</a>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
