"use client"

import {memo} from "react";

const Tabs = ({ tabs, current, onClick }: { current: string, onClick: (key: string) => void, tabs: { key: string, label: string }[] }) => {

    return (
        <div
            className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px">
                { tabs.map((tab) => (
                    <li className="me-2" onClick={() => onClick(tab.key)} key={tab.key}>
                        <span
                            className={`cursor-pointer inline-block p-4 border-b-2 rounded-t-lg ${current === tab.key ? 'text-blue-600 border-blue-600' : ' border-transparent hover:text-gray-300 '}`}>{tab.label}</span>
                    </li>
                )) }
            </ul>
        </div>
    )
}

export default memo(Tabs)