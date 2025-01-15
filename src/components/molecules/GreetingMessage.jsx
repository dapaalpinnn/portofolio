import ImageAnimation from "../atoms/ImageAnimation";
import handImage from "../../assets/hand.webp";

export default function GreetingMessage() {
  return (
    <div className="flex gap-2 items-center mx-auto">
      <ImageAnimation
        src={handImage}
        alt="storm"
        className="w-6 origin-bottom mb-1 -z-10"
      />
      <p className="w-full text-sm text-green-400 text-left sm:text-lg">
        Hi Everyone!
      </p>
    </div>
  );
}
