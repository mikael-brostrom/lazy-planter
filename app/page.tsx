import Image from "next/image";
import ColorForm from "./components/form";

export default async function Home() {
  const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
  return (
    <div className="bg-orange-300 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center justify-center text-center">
        <div>
        <Image
        className="object-contain"
          src="/images/tree-trans.png"
          alt="Next.js logo"
          width={200}
          height={200}
          priority
        />
        </div>
        <div>
        <h1 className="text-black">Find the plant of your dreams</h1>
          <ColorForm />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

        <p className="text-black">Email us at lazyPlanters@hotmail.com</p>
      </footer>
    </div>
  );
}
