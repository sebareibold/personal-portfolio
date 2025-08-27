export default function Footer() {
  return (
    <footer className="
      relative z-10
      bg-white/10 
      backdrop-blur-md 
      border-t border-white/20 
      text-white text-center py-6
    ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Texto y derechos */}
        <p className="text-sm">
          © 2025 React Bits. Todos los derechos reservados.
        </p>

        {/* Navegación rápida */}
        <nav className="flex gap-4 text-sm">
          <a href="#about" className="hover:underline">Sobre mí</a>
          <a href="#skills" className="hover:underline">Habilidades</a>
          <a href="#projects" className="hover:underline">Proyectos</a>
          <a href="#contact" className="hover:underline">Contacto</a>
        </nav>

        {/* Redes sociales */}
        <div className="flex gap-4">
          <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
            <img src="/icons/github.svg" alt="GitHub" className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
          </a>
          <a href="mailto:tuemail@example.com">
            <img src="/icons/mail.svg" alt="Email" className="w-5 h-5" />
          </a>
        </div>

      </div>
    </footer>
  );
}
