import Feed from "@components/Feed";


export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & share
        {/* max-md:hidden will hide the br in large devices */}
        <br className="max-md:hidden" />
        <span className="orange_gradient">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">It's an AI prompting tool for modern world to discover,
        create and share creative prompts
      </p>
      <Feed />
    </section>
  )
}
