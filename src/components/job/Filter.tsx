'use client'

import React, {memo, useEffect, useState, useRef, ReactNode} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import {motion} from "framer-motion";
import LabelInputContainer from "@/components/ui/form/LabelInputContainer";
import {Label} from "@/components/ui/form/Label";
import {Input} from "@/components/ui/form/Input";
import {Filter} from "@/utility/types";
import {ReadonlyURLSearchParams} from "next/dist/client/components/navigation";

const JobFilter = ({ startSearch, children }: { startSearch: () => void, children: ReactNode }) => {
    const timerRef = useRef<null | NodeJS.Timeout>(null);
    const router = useRouter()
    const searchParams: ReadonlyURLSearchParams = useSearchParams()

    const [formValues, setFormValues] = useState<Filter>({jobTitle: '', location: '', company: '', salary: ''});

    useEffect(() => {
        // On mount get values from url and set it to form
        const location = searchParams.get('location') || '';
        const jobTitle = searchParams.get('jobTitle') || '';
        const company = searchParams.get('company') || '';
        const salary = searchParams.get('salary') || '';
        setFormValues({jobTitle, location, company, salary})
    }, [])

    const handleSearch = (newState: Filter) => {
        startSearch()
        // Route params change will fire getItems function again, this is shallow routing
        router.push(`?jobTitle=${newState.jobTitle}&location=${newState.location}&company=${newState.company}&salary=${newState.salary}&page=1`)
    }

    // Component is controllable, the function handle form change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormValues((prevState) => {

            const newState: Filter = {
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
            className="bg-black z-10 py-4"
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
            <div className="sticky top-0 z-10 bg-black grid grid-cols-1 md:grid-cols-3 gap-4">
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
            <div className="grid grid-cols-1 md:grid-cols-4 md:gap-10">
                <div className="my-8 md:p-4 flex flex-col gap-10">
                    <LabelInputContainer>
                        <Label htmlFor="company">
                           Company
                        </Label>
                        <Input
                            id="company"
                            placeholder="Leading dev comp"
                            type="text"
                            value={formValues.company}
                            name="company"
                            onChange={handleChange}
                        />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="company">
                            Salary
                        </Label>
                        <Input
                            id="salary"
                            placeholder="Estimated Salary ..."
                            type="number"
                            value={formValues.salary}
                            name="salary"
                            onChange={handleChange}
                        />
                    </LabelInputContainer>
                </div>
                <div className="md:col-span-3">
                    {children}
                </div>
            </div>
        </motion.section>
    )
}

export default memo(JobFilter)