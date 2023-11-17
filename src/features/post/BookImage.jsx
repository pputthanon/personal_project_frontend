export default function BookImage({ image }) {
  return (
    <div className="flex justify-center items-center ">
      <div className="">
        <img
          src={image}
          alt="bookpic"
          className="h-40 w-full object-cover object-center pt-4 "
        />
      </div>
    </div>
  );
}
