import BookItem from "./BookItem";

export default function BookList({ allBook }) {
  return (
    <div className="flex flex-col">
      {allBook.map((el) => (
        <BookItem key={el.id} bookObj={el} />
      ))}
    </div>
  );
}
