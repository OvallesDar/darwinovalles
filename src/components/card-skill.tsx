export default function CardSkill({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  return (
    <div className="w-20 h-20 xl:w-36 xl:h-36 flex flex-col gap-1 items-center justify-center">
      <img src={image} alt={title} className="w-12 h-12 object-contain" />
      <p className="text-[2.4vw] md:text-[1.7vw] landscape:text-[1.3vw]">
        {title}
      </p>
    </div>
  );
}
