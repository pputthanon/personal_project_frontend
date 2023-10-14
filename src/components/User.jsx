import defaultImage from "../assets/picture.png";

export default function User() {
  //   const defaultClass = "rounded-full aspect-square";
  //   const classes = defaultClass + " " + className;

  return (
    <img
      src={defaultImage}
      alt="user"
      className="rounded-full aspect-square h-10"
    />
  );
}
