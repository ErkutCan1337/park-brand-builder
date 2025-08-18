import Header from "@/components/Header";
import Resources from "@/components/Resources";
import Footer from "@/components/Footer";

const ResourcesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Resources />
      </main>
      <Footer />
    </div>
  );
};

export default ResourcesPage;