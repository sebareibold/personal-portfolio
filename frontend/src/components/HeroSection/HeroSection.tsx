export default function HeroSection() {
    return (
      <section id="home" className="bg-gradient-to-r from-purple-500 to-black text-white text-center py-20">
        <button className="bg-gray-800 text-white rounded-full px-6 py-2 mb-4">New Background</button>
        <h1 className="text-4xl font-bold mb-6">Become emboldened by the flame of ambition</h1>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-black rounded-full px-6 py-2">Get Started</button>
          <button className="bg-gray-700 text-white rounded-full px-6 py-2">Learn More</button>
        </div>
      </section>
    );
  }