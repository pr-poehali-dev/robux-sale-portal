import RobuxCard from "./RobuxCard";

const RobuxCatalog = () => {
  const robuxPackages = [
    {
      amount: 400,
      price: 349,
      discount: 10,
    },
    {
      amount: 800,
      price: 699,
      discount: 15,
      bonus: 100,
    },
    {
      amount: 1700,
      price: 1299,
      discount: 20,
      bonus: 200,
      isPopular: true,
    },
    {
      amount: 4500,
      price: 3199,
      discount: 25,
      bonus: 500,
    },
    {
      amount: 10000,
      price: 6999,
      discount: 30,
      bonus: 1500,
    },
    {
      amount: 22500,
      price: 14999,
      discount: 35,
      bonus: 3500,
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-montserrat">
            Выбери свой пакет <span className="text-purple-600">Robux</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Лучшие цены на рынке с мгновенной доставкой на твой аккаунт
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {robuxPackages.map((pkg, index) => (
            <RobuxCard key={index} {...pkg} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Нужен индивидуальный пакет?</p>
          <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
            Связаться с поддержкой →
          </button>
        </div>
      </div>
    </section>
  );
};

export default RobuxCatalog;
