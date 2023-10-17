import BookContent from "./BookContent";
import BookImage from "./BookImage";

export default function BookItem({ bookObj }) {
  return (
    <div className="bg-white">
      <BookImage image={bookObj.image} />
      <BookContent bookObj={bookObj} />
    </div>
  );
}
