import Header from "./Header/Header";
import ChargerSection from "./ChargerSection/ChargerSection";

function App() {
  return (
    <div className="flex h-screen flex-col bg-linear-to-b from-indigo-800 to-gray-900">
      <Header />
      <main className="flex gap-5 flex-grow p-5">
        <ChargerSection id={1} />
        <ChargerSection id={2} />
      </main>
    </div>
  );
}

export default App;
