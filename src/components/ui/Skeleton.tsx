'use client'

import { motion } from "framer-motion";

const Skeleton = () => {

    return (
        <motion.div
            initial={{
                y: 40
            }}
            animate={{
                y: 0
            }}
            className="space-y-2.5 animate-pulse border rounded-lg p-4 w-full" >
            <div className="flex items-center w-full">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32" />
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
            </div>
            <div className="flex items-center w-full ">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full" />
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
            </div>
            <div className="flex items-center w-full">
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
                <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80" />
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
            </div>
            <div className="flex items-center w-full ">
                <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full" />
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
            </div>
            <div className="flex items-center w-full">
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-32" />
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
                <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full" />
            </div>
            <div className="flex items-center w-full">
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"/>
                <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80" />
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
            </div>
            <span className="sr-only">Loading...</span>
        </motion.div>
    )
}

export default Skeleton