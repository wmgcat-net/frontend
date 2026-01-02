import Response from "@/types/response";
import { QueryFunction, useInfiniteQuery } from "@tanstack/react-query";
import { BiLoaderAlt } from "react-icons/bi";

const Feed: React.FC<{
    header?: React.ReactNode;
    queryFn: QueryFunction<Response, unknown[], number>;
    queryKey: unknown[];
    isMore?: boolean;
    Component: React.ElementType;
    direction?: "vertical" | "horizontal";
}> = ({
    header,
    queryFn,
    queryKey,
    isMore,
    Component,
    direction="vertical"
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
    
    return (
        <div className="flex flex-col gap-4">
            {header && (
                <div className="flex flex-row gap-4 justify-between items-center border-outline-primary dark:border-dark-outline-primary">
                    {header}        
                </div>
            )}
            <div className={`gap-4 ${direction == "vertical" ? "flex flex-col" : "grid grid-cols-3 max-lg:grid-cols-1"}`}>
                {(query?.status == "pending") ? (
                    <div className="animate-pulse w-full h-full flex justify-center items-center">
                        <BiLoaderAlt className=" animate-spin text-4xl text-outline dark:text-dark-outline"/>
                    </div>
                ) : (
                    query?.isError ? (
                        <p>Error :(</p>
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
                    )
                )}
            </div>
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
    );
}

export default Feed;