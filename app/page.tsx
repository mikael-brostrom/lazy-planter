import Image from "next/image";
import { json } from "stream/consumers";
import ColorForm from "./components/form";

export default async function Home() {
  const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/images/OIP.jpg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div>
        <h1>Find the plant of your dreams</h1>
          <ColorForm />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

        <p>Email us at lazyPlanters@hotmail.com</p>
      </footer>
    </div>
  );
}
