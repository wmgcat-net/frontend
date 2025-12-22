import Response from "@/types/response";
import { InfiniteQueryPageParamsOptions, QueryFunction, QueryFunctionContext, useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { AxiosInstance, AxiosResponse } from "axios";
import { BiLoader, BiLoaderAlt } from "react-icons/bi";

const Feed: React.FC<{
    header?: React.ReactNode;
    queryFn: QueryFunction<Response, unknown[], number>;
    queryKey: unknown[];
    isMore?: boolean;
    Component: React.ElementType;
}> = ({
    header,
    queryFn,
    queryKey,
    isMore,
    Component
}) => {

    const query = useInfiniteQuery({
        queryFn,
        queryKey,
        initialPageParam: 0,
        getNextPageParam: (lastPage: Response) => {
            const next = lastPage.offset + lastPage.limit ;
            if (next >= lastPage.total)
                return null;
            return next;
        }
    });

    console.log(query.error)

    return (
        <div className="flex flex-col gap-4">
            {header && (
                <div className="flex flex-row gap-4 justify-between items-center border-outline-primary dark:border-dark-outline-primary">
                    {header}        
                </div>
            )}
            {(query?.status == "pending") ? (
                <div className="animate-pulse w-full h-full flex justify-center items-center">
                    <BiLoaderAlt className=" animate-spin text-4xl text-outline dark:text-dark-outline"/>
                </div>
            ) : (
                query?.data?.pages?.map((page, i) => {
                    return page?.items
                        ?.map((item: unknown, i: number) => (
                            <Component
                                {...item as any}
                                key={i}
                            />
                        ));
                })
            )}
            {isMore && (
                <>
                    {query.isFetchingNextPage && (
                        <div className="animate-pulse w-full h-full flex justify-center items-center">
                            <BiLoaderAlt className=" animate-spin text-4xl text-outline dark:text-dark-outline"/>
                        </div>
                    )}
                    {query.hasNextPage && (
                        <div
                            className="flex justify-center items-center border border-outline-primary dark:border-dark-outline-primary text-outline-primary dark:text-dark-outline-primary bg-primary dark:bg-dark-primary px-4 py-2 rounded-2xl cursor-pointer"
                            onClick={() => query.fetchNextPage()}
                        >
                            Load More
                        </div>
                    )}
                </>
            )}
        </div>
    )
}

export default Feed;