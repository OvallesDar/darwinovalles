export default function CardProjects({
  href,
  image,
  description,
}: {
  href: string;
  image: string;
  description: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="w-20 h-20 xl:w-36 xl:h-36 flex flex-col gap-1 items-center justify-center"
    >
      <img src={image} alt={description} className="w-12 h-12 object-contain" />
      <p className="text-[2.4vw] md:text-[1.7vw] landscape:text-[1.3vw]">
        {description}
      </p>
    </a>
  );
}
