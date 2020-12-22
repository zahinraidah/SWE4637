import axios from "axios";

const googleBooks = axios.create({
  baseURL: "https://www.googleapis.com/books/v1",
});

const getBooksByTitle = (searchTitle, setBooks, startIndex, setTotalPage) => {
  googleBooks
    .get("/volumes/", {
      params: {
        q: searchTitle,
        startIndex: startIndex,
        maxResults: 20,
      },
    })
    .then((response) => {
      setBooks(response.data.items);
      setTotalPage(Math.ceil(response.data.totalItems / 20));
    })
    .catch((error) => console.log(error));
};

export {getBooksByTitle} ;