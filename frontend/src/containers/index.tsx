import {
    useQuery,
} from '@tanstack/react-query'
import { useSearch } from '../store/useSearch';
import { useFetchAPI } from '../hooks/useFetch';
import { RecentBlogs } from '../containers/recent-blogs';
import { AllBlogs } from '../containers/all-blogs';
import { formatData } from '../utils';
import ErrorBoundary from '../error-boundry';

export function BlogsContainer() {
    const {  query, sources, sourceKeys } = useSearch();
    const fetchAPI = useFetchAPI();
    const { isPending, error, data } = useQuery({
        queryKey: ['repoData', sources, query],
        queryFn: () => fetchAPI(sourceKeys)(query),
        select: (data: any) => {
            const allBlogs = data.map((item: any) => {
                if ('articles' in item)
                    return item.articles;
                if ('results' in item?.response)
                    return item?.response?.results;
                if ('docs' in item?.response)
                    return item?.response?.docs
            });
            return formatData(allBlogs.flat());
        },
    });

    if (isPending) return <div>Loading...</div>;
    if (error) {
        console.log(error)
        return <ErrorBoundary>
            <div className="text-red-400 text-lg error-boundary flex items-center justify-center flex-col h-[48vh]">
                <h2>Uh oh!</h2>
                <p>
                    There was an error with this listing. <a className="underline" href="/">Click here</a>{" "}
                    to refresh.
                </p>
            </div>
        </ErrorBoundary>
    }
    
    return (
        <>
            <RecentBlogs blogs={data.slice(0, 2)} />
            <AllBlogs blogs={data} />
        </>
    )
}



