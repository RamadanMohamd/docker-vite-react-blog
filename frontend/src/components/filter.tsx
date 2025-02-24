import classNames from "classnames";
import { useSearch } from "../store/useSearch";

let debounce: NodeJS.Timeout | null = null;

export const Filter = () => {
    const allSources = ["News API", "Gurdian API", "New York Times API"]
    const { sources, addOrRemoveSource, setQuery } = useSearch();
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (debounce)
            clearTimeout(debounce)

        debounce = setTimeout(() => {
            setQuery(event.target.value);
        }, 300)
    };

    return (
        <>
            <div className="flex flex-col sm:flex-row sm:gap-0 w-full md:max-w-[500px] gap-4">
                <input
                    onChange={handleInputChange}
                    className="w-full bg-white placeholder:text-primary placeholder:font-bold text-slate-700 text-sm border-2 border-primary rounded-md sm:rounded-tr-none sm:rounded-br-none px-3 py-2  shadow-sm focus:shadow focus:outline-none"
                    placeholder="Type here..."
                />
                <button className="bg-primary text-white rounded-md py-2 min-w-[150px] sm:rounded-tl-none sm:rounded-bl-none">
                    Search
                </button>
            </div>
            <div className="mt-8 flex gap-2 items-center flex-wrap">

                {allSources.map((source) => (
                    <span onClick={() => addOrRemoveSource(source)} key={source} className={classNames("cursor-pointer border-2 border-primary px-2 rounded-full text-primary text-sm", {
                        "bg-primary text-secondary": sources.includes(source)
                    })}>
                        {source}
                    </span>
                ))}
            </div>
        </>
    );
}