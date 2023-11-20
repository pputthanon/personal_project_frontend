import { useEffect, useState } from "react";
import BookList from "../../features/post/BookList";
import Hero from "../../layout/Hero";
import axios from "../../config/axios";

export default function AdminPage() {
  const [allBook, setAllBook] = useState([]);
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    axios
      .get("/admin")
      .then((res) => {
        return setAllBook(res.data.allBooks);
      })
      .catch((err) => console.log(err));
  }, [update]);

  return (
    <div className="h-full flex justify-center ">
      <div className="">
        <Hero />
        <BookList
          allBook={allBook}
          setAllBook={setAllBook}
          update={update}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  );
}
