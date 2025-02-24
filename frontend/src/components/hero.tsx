import { Filter } from "./filter";

export function Hero() {
    return (
      <section className="py-6 px-2 bg-secondary text-primary flex flex-col gap-4 lg:gap-0 sm:items-center">
        <p className="font-bold text-sm lg:text-xl">Our blog</p>
        <h1 className="text-3xl lg:text-7xl font-bold lg:mb-6">Blogger</h1>
        <Filter />
      </section>
    );
  }
  