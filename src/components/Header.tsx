import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-purple-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Gamepad2" className="text-purple-600" size={32} />
            <h1 className="text-2xl font-bold text-purple-600 font-montserrat">
              RobuxStore
            </h1>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              ⚡ Быстро
            </Badge>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-purple-600"
            >
              <Icon name="Home" className="mr-2" size={16} />
              Главная
            </Button>
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-purple-600"
            >
              <Icon name="ShoppingBag" className="mr-2" size={16} />
              Мои покупки
            </Button>
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-purple-600"
            >
              <Icon name="Gift" className="mr-2" size={16} />
              Подарки
            </Button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Icon name="User" className="mr-2" size={16} />
              Войти
            </Button>
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
              <Icon name="UserPlus" className="mr-2" size={16} />
              Регистрация
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
