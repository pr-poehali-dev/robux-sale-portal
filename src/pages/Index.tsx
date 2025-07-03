import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RobuxCatalog from "@/components/RobuxCatalog";
import PaymentMethods from "@/components/PaymentMethods";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <RobuxCatalog />
      <PaymentMethods />
    </div>
  );
};

export default Index;
