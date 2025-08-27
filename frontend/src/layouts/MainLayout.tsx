import DarkVeil from "../components/ReactBits/DarkVeil/DarkVeil"; // Importa el componente

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 -z-10">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
          resolutionScale={1.4}
        />
      </div>

      {/* Contenido principal */}
      <main className="flex-grow">{children}</main>
    </div>
  );
}