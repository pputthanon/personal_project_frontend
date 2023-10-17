export default function BookImage({ image }) {
  return (
    <div className="flex justify-center items-center ">
      <div className="">
        <img src={image} alt="bookpic" className="rounded-xl" />
      </div>
    </div>
  );
}
