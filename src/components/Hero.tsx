import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="robux-gradient text-white py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-orange-500 text-white text-lg px-4 py-2">
            🎮 #1 Магазин Robux в России
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-montserrat">
            Купи{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-orange-300">
              Robux
            </span>
            <br />
            за секунды!
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Мгновенная доставка • Лучшие цены • Безопасные платежи
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 text-white font-bold py-4 px-8 text-lg"
            >
              <Icon name="Zap" className="mr-2" size={20} />
              Купить Robux
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 py-4 px-8 text-lg"
            >
              <Icon name="Gift" className="mr-2" size={20} />
              Подарить другу
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Shield" className="text-green-400" size={24} />
              <span className="text-sm">100% Безопасно</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Clock" className="text-green-400" size={24} />
              <span className="text-sm">Мгновенная доставка</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Headphones" className="text-green-400" size={24} />
              <span className="text-sm">Поддержка 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
