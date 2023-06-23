import Image from "next/image";
import Link from "next/Link";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return (
    <>
      <main className="min-h-screen max-w-7xl mx-auto px-5 mt-20">
        <section className="flex flex-col space-12 pb-44">
          <h1 className="text-5xl text-center mb-20 font-bold">
            DEALS OF THE DAY
          </h1>
          <div className="grid grid-cols-1  gap-y-10 gap-x-6 sm:grid-cols-2  xl:grid-cols-4 lg:grid-cols-3">
            {products &&
              products.map((item) => {
                return (
                  <>
                    <div className="overflow-hidden hover:scale-105 transition-transform ease-out duration-200">
                      <Link href={`/product/${item.id}`}>
                        <div key={item.id}>
                          <div className="w-64 rounded h-96 overflow-hidden shadow-lg m-4">
                            <Image
                              className="flex items-center "
                              src={item.image}
                              alt="Product"
                              width={150}
                              height={20}
                            />
                            <div className="flex py-2">
                              <div className="font-bold  mb-1">
                                {item.title}
                              </div>
                              <p className="text-gray-700 text-base px-2 font-bold">
                                ${item.price}
                              </p>
                            </div>
                            <div className="">
                              <span className="inline-block text-sm font-semibold text-gray-700 mr-2 mb-2">
                              {item.description}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </>
                );
              })}
          </div>
        </section>
      </main>
    </>
  );
}
