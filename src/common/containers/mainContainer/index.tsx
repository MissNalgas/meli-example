"use client"

import React from 'react';
import { FormEventHandler } from "react";
import SearchBox from "@common/components/searchBox";
import { useRouter } from "next/navigation";

export default function MainContainer({children} : MainContainerProps) {

    const router = useRouter();

    console.log("I forgot something?");

    const onSubmit : FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault();
        const searchElement = e.currentTarget[0] as HTMLInputElement;
        const search = searchElement.value;
        if (!search) return;

        searchElement.blur();
        router.push(`/items?search=${search}`);
    }


    return (
        <div className="min-h-screen flex flex-col">
            <div className="bg-primary p-2">
                <SearchBox
                    className="w-full max-w-screen-lg mx-auto"
                    onSearch={onSubmit}
                />
            </div>
            <div className="bg-light-gray flex-1">
                {children}
            </div>
        </div>
    )


}
interface MainContainerProps {
    children: unknown;
}
