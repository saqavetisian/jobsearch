'use client'

import React, {memo, useEffect, useState, useRef} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import {motion} from "framer-motion";
import LabelInputContainer from "@/components/ui/form/LabelInputContainer";
import {Label} from "@/components/ui/form/Label";
import {Input} from "@/components/ui/form/Input";

const JobFilter = ({ startSearch }: { startSearch: () => void }) => {
    const timerRef = useRef<null | NodeJS.Timeout>(null);
    const router = useRouter()
    const searchParams = useSearchParams()

    const [formValues, setFormValues] = useState<{jobTitle: string, location: string}>({jobTitle: '', location: ''});

    useEffect(() => {
        const location = searchParams.get('location') || '';
        const jobTitle = searchParams.get('jobTitle') || '';
        setFormValues({jobTitle, location})
    }, [])

    const handleSearch = (newState: {jobTitle: string, location: string}) => {
        startSearch()
        router.push(`?jobTitle=${newState.jobTitle}&location=${newState.location}&page=1`)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormValues((prevState) => {

            const newState: {jobTitle: string, location: string} = {
                ...prevState,
                [name]: value
            }

            if (timerRef.current) {
                clearTimeout(timerRef.current as NodeJS.Timeout)
            }

            timerRef.current = setTimeout(() => {
                handleSearch(newState)
            }, 500);

            return newState
        });
    };

    return (
        <motion.section
            className="sticky top-0 bg-black z-10 py-4"
            initial={{
                opacity: 0,
                marginTop: "50px",
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                delay: 2.5,
                duration: 1
            }}
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <LabelInputContainer className="md:col-span-2">
                    <Label htmlFor="job-title">
                        Job title 💼
                    </Label>
                    <Input
                        id="job-title"
                        placeholder="React enthusiast ... 🚀"
                        type="text"
                        value={formValues.jobTitle}
                        name="jobTitle"
                        onChange={handleChange}
                    />
                </LabelInputContainer>
                <LabelInputContainer>
                    <Label htmlFor="location">location ✈</Label>
                    <Input
                        id="location"
                        placeholder="Armenia/Yerevan"
                        type="text"
                        value={formValues.location}
                        name="location"
                        onChange={handleChange}
                    />
                </LabelInputContainer>
            </div>

        </motion.section>
    )
}

export default memo(JobFilter)