'use client'

import { motion } from "framer-motion";
import TextGenerateEffect from "@/components/ui/animations/TextGenerateEffect";
import JobFilter from "@/components/job/Filter";
import {Job} from "@/utility/types";
import List from "@/components/job/List";
import {useCallback, useEffect, useRef, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import Skeleton from "@/components//ui/Skeleton";

const Main = ({ data = [], total }: { data: Job[], total: number }) => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const loadRef = useRef<NodeJS.Timeout | null>(null)
    const pageRef = useRef(Number(searchParams.get('page')) || 1)
    const dataCount = useRef<number>(pageRef.current * 10)
    const containerRef = useRef<HTMLDivElement | null>(null);

    const [loading, setIsLoading] = useState(false)
    const [searching, setSearching] = useState(false)

    useEffect(() => {
        setSearching(false)
    }, [searchParams])

    useEffect(() => {
        setIsLoading(false)
    }, [data])

    // Load more items is for infinite loading
    const loadMoreItems = () => {
        if (dataCount.current < total) {
            // In the function used only refs as this function is cb of event listener
            pageRef.current = pageRef.current + 1
            dataCount.current = pageRef.current * 10
            setIsLoading(true)
            const location = searchParams.get('location') || '';
            const jobTitle = searchParams.get('jobTitle') || '';
            const company = searchParams.get('company') || '';
            const salary = searchParams.get('salary') || '';
            router.push(`?jobTitle=${jobTitle}&location=${location}&company=${company}&salary=${salary}&page=${pageRef.current}`)
        }
    };

    useEffect(() => {
        // Get jobs list container to add scroll listener
        const container = containerRef.current;

        const handleScroll = () => {
            if (!container) return;

            const { scrollTop, scrollHeight, clientHeight } = container;

            if (scrollTop + clientHeight >= scrollHeight - 20) {
                if (loadRef.current) {
                    clearTimeout(loadRef.current as NodeJS.Timeout)
                }

                loadRef.current = setTimeout(() => {
                    loadMoreItems();
                }, 500)
            }
        };

        if (container) {
            container.addEventListener('scroll', handleScroll);
        }

        // Cleanup on unmount
        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const handleSearch = useCallback(() => {
        setSearching(true)
    }, [])

    return (
        <main className="overflow-auto px-4 md:px-20 h-screen" ref={containerRef}>
            <motion.div
                initial={{
                    top: "50%",
                    left: "50%",
                    position: "absolute",
                    transform: 'translate(-50%, -50%)'
                }}
                animate={{
                    top: "20px"
                }}
                transition={{
                    delay: 1.5,
                    duration: 1
                }}
            >
                <TextGenerateEffect words="Job Search API Aggregator" />
            </motion.div>
            <JobFilter startSearch={handleSearch}>
               <>
                   <div className={searching ? 'hidden' : ''}>
                       <List data={data} />
                   </div>

                   { searching ? (
                       <div className="flex flex-col gap-10 my-10">
                           {[1,2,3,4].map((item) => (
                               <Skeleton key={item} />
                           ))}
                       </div>
                   ) : null }

                   { loading ? (
                       <div className="bottom-0 absolute bg-black p-2 text-center w-full translate-x-1/2 -left-1/2">
                           Loading ...
                       </div>
                   ) : null }
               </>
            </JobFilter>
        </main>
    )
}

export default Main