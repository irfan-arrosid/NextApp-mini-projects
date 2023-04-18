import Posts from "./components/posts";

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center text-white">
        Hi there, &nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Irfan</span>
        </span>
      </p>
      <Posts />
    </main>
  )
}
