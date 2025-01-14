import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardProject from "./components/CardProject";

export default function App() {
  return (
    <div className="font-inter">
      <Navbar />
      <main>
        <Hero />
        <CardProject></CardProject>
      </main>
    </div>
  );
}
