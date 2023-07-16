import ProductCard from "@/components/Home/ProductCard";

const Products = () => {
  const mockData = [
    {
      name: "Product 1",
      price: 10.99,
      category: "6123456789abcdef0123456",
      imageUrl:
        "https://m.media-amazon.com/images/I/41y52nOCieS._SY300_SX300_QL70_FMwebp_.jpg",
      description: "This is product 1.",
      authorId: "abcdef012345678901234567",
    },
    {
      name: "Product 2",
      price: 19.99,
      category: "abcdef012345678901234567",
      imageUrl:
        "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SX679_.jpg",
      description: "This is product 2.",
      authorId: "6123456789abcdef0123456",
    },
    {
      name: "Product 3",
      price: 8.99,
      category: "6123456789abcdef0123456",
      imageUrl:
        "https://m.media-amazon.com/images/I/31i9Fft3dqL._SY300_SX300_QL70_FMwebp_.jpg",
      authorId: "abcdef012345678901234567",
    },
    {
      name: "Product 4",
      price: 14.99,
      category: "abcdef012345678901234567",
      imageUrl:
        "https://m.media-amazon.com/images/I/61C7blR0ZAL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      description: "This is product 4.",
      authorId: "6123456789abcdef0123456",
    },
    {
      name: "Product 4",
      price: 14.99,
      category: "abcdef012345678901234567",
      imageUrl:
        "https://m.media-amazon.com/images/I/61C7blR0ZAL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      description: "This is product 4.",
      authorId: "6123456789abcdef0123456",
    },
  ];

  return (
    <section className="px-2 py-6 mt-6">
      <div className="flex flex-wrap gap-4 justify-center mt-4">
        {mockData.map((item, key) => (
          <ProductCard
            key={key}
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
