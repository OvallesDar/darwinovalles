export default function Navbar() {
  return (
    <div className="flex py-3 px-6 gap-3 top-0 z-50">
      <img src="/isotipo.png" alt="Darwin Ovalles logotipo" className="w-7" />
        <p className="self-center font-bold text-lg">Portfolio</p>
        <ul className="justify-center md:justify-end items-center gap-3 flex-1 hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Cursos</li>
        </ul>
    </div>
  )
}
