export default function CartImage({ image }) {
  return (
    <div>
      <div className="">
        <img src={image} alt="bookpic" className="rounded-xl" />
      </div>
    </div>
  );
}
