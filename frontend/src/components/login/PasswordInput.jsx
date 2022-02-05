import React from 'react';

import { HiOutlineKey } from "react-icons/hi";

export const PasswordInput = ({ props }) => {
    return (
        <div className="flex space-x-1 items-center">
            <HiOutlineKey className="w-6 h-6" />
            <input onChange={(e) => props(e.target.value)} className="border-b-2 border-mycolor-500 py-1 px-2 w-full focus:outline-none focus:border-black" type="password" placeholder="Password"/>
        </div>
    )
}
