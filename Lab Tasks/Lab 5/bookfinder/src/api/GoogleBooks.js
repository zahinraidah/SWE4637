import axios from "axios";

const BookDB = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/",
});

const getBooksByTerm = (SearchTerm, setBooks, page_number, setTotalPages) => {
  BookDB.get("/volumes/", {
    params: {
      q: SearchTerm,
      startIndex: page_number,
      maxResults: 24,
    },
  }).then((response) => {
    console.log(response.data);
    setBooks(response.data.items);
    setTotalPages(Math.ceil(response.data.totalItems/24));
  });
};

export { getBooksByTerm };