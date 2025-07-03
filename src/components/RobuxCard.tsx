import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface RobuxCardProps {
  amount: number;
  price: number;
  discount?: number;
  isPopular?: boolean;
  bonus?: number;
}

const RobuxCard = ({
  amount,
  price,
  discount,
  isPopular,
  bonus,
}: RobuxCardProps) => {
  const originalPrice = discount ? price / (1 - discount / 100) : price;
  const totalRobux = amount + (bonus || 0);

  return (
    <Card
      className={`relative robux-card transition-all duration-300 hover:robux-glow hover:scale-105 ${isPopular ? "ring-2 ring-purple-500" : ""}`}
    >
      {isPopular && (
        <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-orange-500 text-white">
          🔥 Популярно
        </Badge>
      )}

      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-purple-600 font-montserrat">
          <Icon name="Coins" className="inline mr-2" size={24} />
          {amount.toLocaleString()} R$
        </CardTitle>
        {bonus && (
          <CardDescription className="text-green-500 font-medium">
            + {bonus.toLocaleString()} бонусных R$
          </CardDescription>
        )}
      </CardHeader>

      <CardContent className="text-center">
        <div className="mb-4">
          <div className="text-3xl font-bold text-gray-800">
            {discount && (
              <span className="text-lg text-gray-400 line-through mr-2">
                {originalPrice.toFixed(0)}₽
              </span>
            )}
            <span className="text-purple-600">{price}₽</span>
          </div>
          {discount && (
            <Badge variant="destructive" className="mt-2">
              -{discount}%
            </Badge>
          )}
        </div>

        <div className="text-sm text-gray-600 mb-4">
          <p>💳 Карты, кошельки, крипто</p>
          <p>⚡ Мгновенная доставка</p>
        </div>
      </CardContent>

      <CardFooter>
        <Button
          className="w-full bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 text-white font-bold py-3 text-lg"
          size="lg"
        >
          <Icon name="ShoppingCart" className="mr-2" size={20} />
          Купить сейчас
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RobuxCard;
