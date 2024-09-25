'use client'


import JobCard from "./Card";
import {motion} from "framer-motion";

import {Job} from "@/utility/types";

const List = ({data}: { data: Job[] }) => {

    return (
        <motion.div
            className="flex-col gap-10 w-full"
            initial={{
                marginTop: "40px",
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
            {data.length > 0 ? data.map((job) => (
                <JobCard key={job.id} job={job}/>
            )) : "no data"}

        </motion.div>
    )
}

export default List