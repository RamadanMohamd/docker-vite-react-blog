import { FormattedItem } from '../types/utils'

export function BlogCard({ blog }: { blog: FormattedItem }) {
  const handleOpen = (url: string) => {
    window.open(url, '_blank')
  }
  return (
    <div onClick={() => handleOpen(blog.url)} className="cursor-pointer flex flex-col gap-8 group">
      <div className="border-2 relative border-primary before:transition-all before:duration-300 before:content-[''] before:absolute before:bg-primary before:size-full before:z-10 before:top-0 before:left-0 lg:group-hover:before:top-[10px] lg:group-hover:before:left-[10px]">
        <img src={blog.image} alt="blog image" loading='lazy' className="w-full relative z-20 bg-primary aspect-video" />
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-lg text-primary font-bold">
          {blog.title}
        </p>
        <p className="text-primary">
          {blog.description}
        </p>
      </div>
    </div>
  );
}
