'use client'

import {Job} from "@/utility/types";
import {motion} from "framer-motion";

const JobCard = ({ job }: { job: Job }) => {

    return (
        <motion.div
            className="border rounded-lg p-4 cursor-pointer"
            initial={{
                y: 30
            }}
            whileInView={{
                y: 0
            }}
            whileHover={{
                scale: 1.02
            }}
        >
            <h2 className="font-bold text-xl text-sky-800">
                {job.title}
            </h2>
            <p className="font-semibold text-md my-2">
                💵 {job.salary}
            </p>

            <p className="text-zinc-400">
                {job.description}
            </p>
        </motion.div>
    )
}

export default JobCard