import { BlogCard } from "../components"
import { FormattedItem } from "../types/utils"

export function RecentBlogs({ blogs }: { blogs: FormattedItem[] }) {
  return (
    <section className="py-8">
      <p className="text-primary text-lg font-bold mb-4">Recent Blogs</p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {
          blogs.map((blog, index) => {
            return <BlogCard blog={blog} key={index} />
          })
        }
      </div>
    </section>
  )
}



