import { useEffect, useState } from "react";
import BookList from "../features/post/BookList";
import Hero from "../layout/Hero";
import axios from "../config/axios";

export default function HomePage() {
  const [allBook, setAllBook] = useState([]);

  useEffect(() => {
    axios
      .get("/homepage")
      .then((res) => {
        setAllBook(res.data.books);
      })
      .catch((err) => console.log(err));
  }, []);

  // state sequence
  // init = []
  // fetch => get Data
  // set data => Array Book
  // pass props => Array Book
  // console.log(allBook);
  return (
    <div className="h-full flex justify-center ">
      <div className="">
        <Hero />
        <BookList allBook={allBook} />
      </div>
    </div>
  );
}
