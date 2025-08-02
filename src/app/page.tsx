// import GET_HOME_PAGE_REQUEST from "@/data/queries/GET_HOME_PAGE"
// import GET_POSTS from "@/data/queries/GET_POSTS"
import { About, Blog, Hero, Offer, Partners, Projects } from "@/views/home"

export default async function HomePage() {
  // const { page: { homepage: { about, blog, hero, industries, offer, partners, projects } } } = await GET_HOME_PAGE_REQUEST();

  // console.log(blog)

  // const posts = await GET_POSTS()
  // console.log(`posts`, posts)

  return (
    <div>
      <Hero />
      <main className="space-y-36 mt-24" >
        <About />
        <Offer />
        <Projects />
        {/* <Blog
          posts={posts}
        /> */}
      </main>
      <aside className="mt-12" >
        <Partners />
      </aside>
    </div>
  )
}
