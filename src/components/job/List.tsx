'use client'


import JobCard from "./Card";
import {motion} from "framer-motion";

import {Job} from "@/utility/types";
import Link from "next/link";
import {useCallback, useMemo, useState} from "react";
import Tabs from "../ui/Tabs";

const List = ({data}: { data: Job[] }) => {

    const [favourites, setFavourites] = useState<string[]>([])
    const [currentTab, setCurrentTab] = useState<string>('1')

    // function will handle bookmark and un-bookmark events
    const handleFavouritesToggle = useCallback((favouriteId: string) => {
        setFavourites((prevState: string[]) => {
            if (prevState.includes(favouriteId)) {
                return prevState.filter((favourite) => favourite !== favouriteId)
            } else {
                return [...prevState, favouriteId]
            }
        })
    }, [])

    // FUnction will handle tabs change All/Bookmarked
    const handleCurrentTab = useCallback((tab: string) => {
        setCurrentTab(tab)
    }, [])


    const tabData = useMemo(() => {
        if (currentTab === '1') {
            return data
        }

        return data.filter((job) => favourites.includes(job.id))
    }, [data, favourites, currentTab])

    return (
        <motion.div
            className="flex-col gap-10 w-full"
            initial={{
                display: "none"
            }}
            animate={{
                display: "flex",
            }}
            transition={{
                delay: 2.5,
                duration: 1
            }}
        >
            <Tabs onClick={handleCurrentTab} current={currentTab} tabs={[{ label: 'All', key: '1' },{ label: 'Bookmarked', key: '2' }]} />
            {tabData.length > 0 ? tabData.map((job) => (
                <JobCard key={job.id} job={job} handleFavouritesToggle={handleFavouritesToggle} isFavourite={favourites.includes(job.id)} />
            )) : (
                <div className="w-full flex items-center flex-wrap justify-center gap-10">
                    <div className="grid gap-4 w-60">
                        <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="125" height="131"
                             viewBox="0 0 125 131" fill="none">
                            <path
                                d="M0.420654 68.7842C0.420654 34.3298 28.349 6.55554 62.6493 6.55554C96.8982 6.55554 124.865 34.3169 124.865 68.7842C124.865 83.4036 119.829 96.8539 111.376 107.465C99.7244 122.174 81.9191 131 62.6493 131C43.251 131 25.5485 122.11 13.9095 107.465C5.4565 96.8539 0.420654 83.4036 0.420654 68.7842Z"
                                fill="#EEF2FF"/>
                            <path
                                d="M79.0504 0.608781L79.0504 0.608667L79.0398 0.607237C78.5451 0.540687 78.045 0.5 77.5408 0.5H24.2077C18.772 0.5 14.3651 4.88403 14.3651 10.3009V116.144C14.3651 121.56 18.772 125.944 24.2077 125.944H101.078C106.527 125.944 110.921 121.56 110.921 116.144V31.8189C110.921 31.0754 110.839 30.3445 110.676 29.6268L110.676 29.6266C110.241 27.7171 109.221 25.9432 107.737 24.6014C107.737 24.6012 107.737 24.601 107.736 24.6008L84.1766 3.0858C84.1765 3.08565 84.1763 3.08551 84.1762 3.08537C82.7355 1.75954 80.9542 0.906612 79.0504 0.608781Z"
                                fill="white" stroke="#E5E7EB"/>
                            <ellipse cx="65.4207" cy="65.9999" rx="22.7778" ry="22.7778" fill="#EEF2FF"/>
                            <path
                                d="M81.0688 49.9324L81.0686 49.9321C72.3048 41.1815 58.1172 41.1811 49.3659 49.9324C40.602 58.6834 40.6019 72.8839 49.3656 81.6351C58.117 90.3995 72.305 90.3991 81.0688 81.6353C89.82 72.8842 89.82 58.6835 81.0688 49.9324ZM86.3177 44.6839C97.9698 56.3362 97.9698 75.2316 86.3177 86.8839C74.6526 98.5364 55.7695 98.5364 44.1044 86.884C32.452 75.2317 32.452 56.336 44.1044 44.6837C55.7695 33.0313 74.6526 33.0314 86.3177 44.6839Z"
                                stroke="#E5E7EB"/>
                            <path
                                d="M90.3809 96.9595L83.3998 89.9712C85.6764 88.1961 87.7307 86.1207 89.3998 83.9797L96.3803 90.9673L90.3809 96.9595Z"
                                stroke="#E5E7EB"/>
                            <path
                                d="M113.474 102.318L113.473 102.318L100.63 89.4866C100.629 89.4861 100.629 89.4856 100.628 89.4852C99.5215 88.3644 97.7182 88.3685 96.6026 89.4841L88.9049 97.1818C87.7989 98.2878 87.8024 100.088 88.9024 101.204L88.9049 101.206L101.752 114.053C104.982 117.284 110.243 117.284 113.474 114.053C116.717 110.809 116.717 105.562 113.474 102.318Z"
                                fill="#A5B4FC" stroke="#818CF8"/>
                            <path
                                d="M67.9584 71.0607C67.4332 71.0607 66.9977 70.6252 66.9977 70.0873C66.9977 67.9355 63.7445 67.9355 63.7445 70.0873C63.7445 70.6252 63.309 71.0607 62.771 71.0607C62.2459 71.0607 61.8104 70.6252 61.8104 70.0873C61.8104 65.3739 68.9318 65.3867 68.9318 70.0873C68.9318 70.6252 68.4963 71.0607 67.9584 71.0607Z"
                                fill="#4F46E5"/>
                            <path
                                d="M76.2197 62.8253H72.1979C71.66 62.8253 71.2245 62.3898 71.2245 61.8519C71.2245 61.3267 71.66 60.8912 72.1979 60.8912H76.2197C76.7576 60.8912 77.1931 61.3267 77.1931 61.8519C77.1931 62.3898 76.7576 62.8253 76.2197 62.8253Z"
                                fill="#4F46E5"/>
                            <path
                                d="M58.5445 62.8252H54.5227C53.9848 62.8252 53.5493 62.3897 53.5493 61.8517C53.5493 61.3266 53.9848 60.8911 54.5227 60.8911H58.5445C59.0696 60.8911 59.5051 61.3266 59.5051 61.8517C59.5051 62.3897 59.0696 62.8252 58.5445 62.8252Z"
                                fill="#4F46E5"/>
                            <rect x="31.5317" y="17.6666" width="33.3333" height="2.22222" rx="1.11111" fill="#4F46E5"/>
                            <rect x="31.5317" y="108.778" width="44.4444" height="4.44444" rx="2.22222" fill="#A5B4FC"/>
                            <rect x="31.5317" y="24.3334" width="11.1111" height="2.22222" rx="1.11111" fill="#4F46E5"/>
                            <ellipse cx="45.9762" cy="25.4445" rx="1.11111" ry="1.11111" fill="#4F46E5"/>
                            <ellipse cx="50.4207" cy="25.4445" rx="1.11111" ry="1.11111" fill="#4F46E5"/>
                            <ellipse cx="54.8651" cy="25.4445" rx="1.11111" ry="1.11111" fill="#4F46E5"/>
                        </svg>
                        <div>
                            <h2 className="text-center text-white text-lg font-semibold leading-7 pb-1">There’s no {currentTab === '1' ? 'bookmarked' : ''}
                                jobs here</h2>
                            <p className="text-center text-white text-base font-normal leading-relaxed pb-4">Try
                                changing your filters to <br/>see jobs </p>
                            <div className="flex gap-3">
                                <Link href="/"
                                      className="w-full text-center px-3 py-2 rounded-full border border-gray-300 text-gray-100 text-xs font-semibold leading-4">
                                    Clear Filter
                                </Link>

                                <Link href="/"
                                    className="w-full text-center px-3 py-2 text-center bg-indigo-600 hover:bg-indigo-700 transition-all duration-500 rounded-full text-white text-xs font-semibold leading-4"> Change
                                    Filter
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </motion.div>
    )
}

export default List