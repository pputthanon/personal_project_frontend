import BookItem from "./BookItem";

export default function BookList({ allBook, update, setUpdate }) {
  return (
    <div className="">
      <div className="grid grid-cols-5 gap-2 w-full mt-6">
        {allBook?.map((el) =>
          el.status === "AVAILABLE" ? (
            <BookItem
              key={el.id}
              bookObj={el}
              update={update}
              setUpdate={setUpdate}
            />
          ) : null
        )}
      </div>
    </div>
  );
}
