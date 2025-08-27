import GlassSurface from "../ReactBits/GlassSurface/GlassSurface";

export default function Navbar() {
  const navItems = [
    { name: "Sobre Mi", href: "#aboutMe" },
    { name: "Proyectos", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <GlassSurface
      className="w-[50%] h-16 mx-auto mt-6"
      displace={8}
      distortionScale={-80}
      redOffset={2}
      greenOffset={8}
      blueOffset={10}
      brightness={5}
      opacity={0.15}
      mixBlendMode="normal"
    >
      <nav className="flex items-center justify-between w-full px-4">
        <div className="flex items-center gap-2">
        <span className="text-amber-100 font-semibold text-lg">Sebastian Alejadro</span>
        <span className="text-white font-semibold text-lg">Reibold</span>
        </div>

        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
              href="{item.href}"
              className="text-white/90 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </GlassSurface>
  );
}
