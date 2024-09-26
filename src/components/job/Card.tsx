'use client'

import {Job} from "@/utility/types";
import {motion} from "framer-motion";

const JobCard = ({ job, handleFavouritesToggle, isFavourite }: { job: Job, handleFavouritesToggle: (jobId: string) => void, isFavourite: boolean }) => {

    return (
        <motion.div
            className="border border-gray-700 rounded-lg bg-gray-800 p-4"
            initial={{
                y: 40
            }}
            whileInView={{
                y: 0
            }}
            whileHover={{
                scale: 1.02
            }}
        >
            <h2 className="font-bold text-xl text-sky-800 flex justify-between items-center">
                {job.title}
                <button onClick={() => handleFavouritesToggle(job.id)}>
                    { isFavourite ? (
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#D3E0E3"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path fill="#fff" d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"/></svg>
                    ) }
                </button>
            </h2>

            <p className="font-semibold text-md my-2">
                💵 {job.salary}
            </p>

            <p className="text-md">
                {job.company}
            </p>

            <p className="text-zinc-400">
                {job.description}
            </p>

            <p className="mt-2">
                <a href={job.applicationUrl} target="_blank" className="text-blue-500 hover:text-blue-600">
                    {job.applicationUrl}
                </a>
            </p>
        </motion.div>
    )
}

export default JobCard