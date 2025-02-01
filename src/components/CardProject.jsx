import cardImage from "../assets/project.webp";

export default function CardProject() {
  return (
    <div className="mt-10">
      <img
        src={cardImage}
        alt="project"
        className="w-full object-cover h-96 rounded-xl"
      />
      <h3 className="text-slate-300 text-xl mt-4 font-semibold tracking-tight">
        Landing page
      </h3>
      <p className="text-slate-400 mt-2 leading-tight tracking-tight text-sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat cum
        facilis voluptatum itaque similique in!
      </p>
    </div>
  );
}
