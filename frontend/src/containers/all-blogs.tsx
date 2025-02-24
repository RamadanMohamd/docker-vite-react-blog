import { BlogCard } from "../components"
import { FormattedItem } from "../types/utils"
export function AllBlogs({ blogs }: { blogs: FormattedItem[] }) {
    return (
        <section className="py-8">
            <p className="text-primary text-lg font-bold mb-4">All blogs</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    blogs.map((blog, index) => {
                        return <BlogCard blog={blog} key={index} />
                    })
                }
            </div>
        </section>

    )
}