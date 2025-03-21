import Navbar from "./components/shared/navbar";

const App = () => {
  return (
    <div className="p-5 pt-20">
      <Navbar />
      <main className="space-y-40">
        <section id="our-process" className="h-screen  p-10">
          <h1 className="text-3xl">Our Process</h1>
          <p>This is the Our Process section.</p>
        </section>
        <section id="about-us" className="h-screen  p-10">
          <h1 className="text-3xl">About Us</h1>
          <p>This is the About Us section.</p>
        </section>
        <section id="philosophy" className="h-screen  p-10">
          <h1 className="text-3xl">Philosophy</h1>
          <p>This is the Philosophy section.</p>
        </section>
        <section id="blog" className="h-screen  p-10">
          <h1 className="text-3xl">Blog</h1>
          <p>This is the Blog section.</p>
        </section>
      </main>
    </div>
  );
};

export default App;
