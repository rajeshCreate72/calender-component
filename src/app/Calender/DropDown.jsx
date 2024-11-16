import { Menu, MenuButton, MenuItem, MenuItems, Button } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export default function DropDown() {
    const [reccuringTime, setRecurringTime] = useState("");

    const onClickItem = (value) => {
        console.log(value);
        setRecurringTime(value);
    };

    return (
        <Menu
            as="div"
            className="flex flex-row justify-center items-center relative inline-block text-left"
        >
            <div>
                <MenuButton className="inline-flex w-50 justify-center gap-x-1.5 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-grey-200">
                    {reccuringTime || "Select interval"}
                    <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute top-10 left-46 z-10 mt-2 w-56 rounded-md bg-black shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-5 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
                <div className="py-1">
                    <MenuItem>
                        <button
                            onClick={() => onClickItem("Daily")}
                            className="block px-4 py-2 text-sm text-white-900 data-[focus]:bg-white-100 data-[focus]:text-white-200 data-[focus]:outline-none"
                        >
                            Daily
                        </button>
                    </MenuItem>
                    <MenuItem>
                        <button
                            onClick={() => onClickItem("Weekly")}
                            className="block px-4 py-2 text-sm text-white-900 data-[focus]:bg-white-100 data-[focus]:text-white-200 data-[focus]:outline-none"
                        >
                            Weekly
                        </button>
                    </MenuItem>
                    <MenuItem>
                        <button
                            onClick={() => onClickItem("Monthly")}
                            className="block px-4 py-2 text-sm text-white-900 data-[focus]:bg-white-100 data-[focus]:text-white-200 data-[focus]:outline-none"
                        >
                            Monthly
                        </button>
                    </MenuItem>
                    <MenuItem>
                        <button
                            onClick={() => onClickItem("Yearly")}
                            className="block px-4 py-2 text-sm text-white-900 data-[focus]:bg-white-100 data-[focus]:text-white-200 data-[focus]:outline-none"
                        >
                            Yearly
                        </button>
                    </MenuItem>
                </div>
            </MenuItems>

            <div className="">
                <Button className="bg-blue-500 rounded-lg p-2 m-2">Add task</Button>
            </div>
        </Menu>
    );
}
