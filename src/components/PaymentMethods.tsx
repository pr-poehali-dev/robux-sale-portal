import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const PaymentMethods = () => {
  const paymentMethods = [
    {
      category: "Банковские карты",
      methods: ["Visa", "MasterCard", "Мир"],
      icon: "CreditCard",
      color: "text-blue-600",
    },
    {
      category: "Электронные кошельки",
      methods: ["ЮMoney", "Qiwi", "WebMoney"],
      icon: "Wallet",
      color: "text-green-600",
    },
    {
      category: "Криптовалюты",
      methods: ["Bitcoin", "Ethereum", "USDT"],
      icon: "Coins",
      color: "text-orange-600",
    },
    {
      category: "Мобильные платежи",
      methods: ["СберПей", "Тинькофф", "Альфа-Банк"],
      icon: "Smartphone",
      color: "text-purple-600",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-montserrat">
            Способы <span className="text-purple-600">оплаты</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выбери удобный способ оплаты из множества доступных вариантов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {paymentMethods.map((method, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <Icon
                  name={method.icon as any}
                  className={`mx-auto mb-3 ${method.color}`}
                  size={48}
                />
                <CardTitle className="text-lg font-semibold">
                  {method.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {method.methods.map((paymentMethod, idx) => (
                    <div
                      key={idx}
                      className="text-sm text-gray-600 bg-gray-50 rounded-md py-2 px-3"
                    >
                      {paymentMethod}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-green-50 border border-green-200 rounded-lg px-6 py-4">
            <Icon name="Shield" className="text-green-600" size={24} />
            <span className="text-green-700 font-medium">
              Все платежи защищены SSL-шифрованием
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
