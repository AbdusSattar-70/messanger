import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello Messenger App!</h1>
      <Link href={"/contact"}>Go to contact</Link>
    </main>
  )
}
