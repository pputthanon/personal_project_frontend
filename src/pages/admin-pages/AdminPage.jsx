import { useEffect, useState } from "react";
import BookList from "../../features/post/BookList";
import Hero from "../../layout/Hero";
import axios from "../../config/axios";

export default function AdminPage() {
  const [allBook, setAllBook] = useState([]);
  useEffect(() => {
    axios
      .get("/admin")
      .then((res) => {
        setAllBook(res.data.allBooks);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="h-full flex justify-center ">
      <div className="">
        <Hero />
        <BookList allBook={allBook} setAllBook={setAllBook} />
      </div>
    </div>
  );
}
