import Image from "next/image";

import Maker from "./components/Maker";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between m-auto ">
      <Maker></Maker>
    </main>
  );
}
