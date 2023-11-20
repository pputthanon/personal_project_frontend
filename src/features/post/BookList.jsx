import BookItem from "./BookItem";

export default function BookList({ allBook }) {
  return (
    <div className="">
      <div className="grid grid-cols-5 gap-2 w-full mt-6">
        {allBook?.map((el) => (
          <BookItem key={el.id} bookObj={el} />
        ))}
      </div>
    </div>
  );
}
