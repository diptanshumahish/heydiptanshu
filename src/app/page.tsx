import { Header } from "@/components";

export default async function Home() {
  return (
    <main className="w-full dark:bg-backgroundDark bg-backgroundLight">
      <Header />
      <div className="h-screen"></div>
    </main>
  );
}
