import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Checkbox,
    Input,
    Link,
    Select,
    SelectItem,
} from "@nextui-org/react";

import { animals } from "./Data";

export default function AppJobs({ auth }) {
    let user = auth.user;
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [backdrop, setBackdrop] = React.useState("opaque");

    const backdrops = ["blur"];

    const handleOpen = (backdrop) => {
        setBackdrop(backdrop);
        onOpen();
    };

    return (
        <>
            <Head title="Jobs" />
            <AuthenticatedLayout
                user={auth.user}
                header="Jobs"
                headerAlt="Show All Jobs"
            >
                <div className="grid grid-row-3">
                    <div className=" h-full border p-5 rounded-xl">
                        <div className="flex flex-col md:flex-row justify-between">
                            <div className="flex rounded-lg border items-center mb-3 md:mb-0 gap-2">
                                <img
                                    src="/image/svg/search.svg"
                                    alt=""
                                    className="pl-[10px] h-6 "
                                />
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="rounded-md opacity-40 border-transparent outline-0"
                                />
                            </div>
                            <div className="flex gap-5 justify-between md:justify-normal">
                                {backdrops.map((b) => (
                                    <Button
                                        key={b}
                                        variant="flat"
                                        color="warning"
                                        onPress={() => handleOpen(b)}
                                        className="gap-2 text-white bg-primary-500 p-2 md:p-3 rounded-xl"
                                        startContent={
                                            <HiOutlinePlusCircle size={25} />
                                        }
                                    >
                                        Add New Job
                                    </Button>
                                ))}
                            </div>
                        </div>

                        {/* Div Content */}
                        <div className=" grid grid-cols-3 xs:grid-cols-none  pt-[46px] justify-between gap-[20px]">
                            {/* Active Jobs */}

                            <div className=" h-full border p-5 rounded-xl gap-2 ">
                                <div className="flex gap-2">
                                    <img
                                        src="/image/svg/eclipskuning.svg"
                                        alt=""
                                    />
                                    <h1 className="font-bold text-[14px]">
                                        Active Jobs
                                    </h1>
                                </div>

                                <div className="bg-[#A2A1A80D]  mt-[16px] rounded-md">
                                    {/* Div Active Job */}
                                    <div className=" flex gap-3 pt-[15px] px-[20px]">
                                        <img
                                            src="/image/svg/jobsOutline.svg"
                                            alt=""
                                        />
                                        <div>
                                            <h1 className="font-bold text-[16px]">
                                                UI/UX Designer
                                            </h1>
                                            <p className="text-gray-500">
                                                Design
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-[10px] pt-[14px] text-white">
                                        <Button className="bg-primary-500 rounded-md p-[10px]">
                                            Design
                                        </Button>
                                        <Button className="bg-primary-500 rounded-md p-[10px]">
                                            Full Time
                                        </Button>
                                        <Button className="bg-primary-500 rounded-md p-[10px]">
                                            Remote
                                        </Button>
                                    </div>

                                    <div className="grid grid-cols-2 justify-between  pt-[20px]">
                                        <div className="flex gap-[5px] items-center">
                                            <img
                                                src="/image/svg/location.svg"
                                                alt=""
                                            />
                                            <p className="text-[14px]">
                                                California, USA
                                            </p>
                                        </div>
                                        <h1 className="flex text-[16px] justify-end">
                                            <span className="font-bold">
                                                $6000
                                            </span>
                                            /Month
                                        </h1>
                                    </div>
                                </div>
                                <div className="bg-[#A2A1A80D]  mt-[16px] rounded-md">
                                    {/* Div Active Job */}
                                    <div className=" flex gap-3 pt-[15px] px-[20px]">
                                        <img
                                            src="/image/svg/jobsOutline.svg"
                                            alt=""
                                        />
                                        <div>
                                            <h1 className="font-bold text-[16px]">
                                                Sr. UX Researcher
                                            </h1>
                                            <p className="text-gray-500">
                                                Design
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-[10px] pt-[14px] text-white">
                                        <Button className="bg-primary-500 rounded-md p-[10px]">
                                            Design
                                        </Button>
                                        <Button className="bg-primary-500 rounded-md p-[10px]">
                                            Full Time
                                        </Button>
                                    </div>

                                    <div className="grid grid-cols-2 justify-between  pt-[20px]">
                                        <div className="flex gap-[5px] items-center">
                                            <img
                                                src="/image/svg/location.svg"
                                                alt=""
                                            />
                                            <p className="text-[14px]">
                                                New York, USA
                                            </p>
                                        </div>
                                        <h1 className="flex text-[16px] justify-end">
                                            <span className="font-bold">
                                                $1500
                                            </span>
                                            /Month
                                        </h1>
                                    </div>
                                </div>
                                <div className="bg-[#A2A1A80D]  mt-[16px] rounded-md">
                                    {/* Div Active Job */}
                                    <div className=" flex gap-3 pt-[15px] px-[20px]">
                                        <img
                                            src="/image/svg/jobsOutline.svg"
                                            alt=""
                                        />
                                        <div>
                                            <h1 className="font-bold text-[16px]">
                                                BDM
                                            </h1>
                                            <p className="text-gray-500">
                                                Sales
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-[10px] pt-[14px] text-white">
                                        <Button className="bg-primary-500 rounded-md p-[10px]">
                                            Sales
                                        </Button>
                                        <Button className="bg-primary-500 rounded-md p-[10px]">
                                            Full Time
                                        </Button>
                                    </div>

                                    <div className="grid grid-cols-2 justify-between  pt-[20px]">
                                        <div className="flex gap-[5px] items-center">
                                            <img
                                                src="/image/svg/location.svg"
                                                alt=""
                                            />
                                            <p className="text-[14px]">
                                                New York, USA
                                            </p>
                                        </div>
                                        <h1 className="flex text-[16px] justify-end">
                                            <span className="font-bold">
                                                $1000
                                            </span>
                                            /Month
                                        </h1>
                                    </div>
                                </div>
                            </div>

                            {/* Inactive Jobs */}
                            <div className=" h-full border p-5 rounded-xl gap-2 ">
                                <div className="flex gap-2">
                                    <img
                                        src="/image/svg/eclipsmerah.svg"
                                        alt=""
                                    />
                                    <h1 className="font-bold text-[14px]">
                                        Inactive Jobs
                                    </h1>
                                </div>

                                <div className="bg-[#A2A1A80D]  mt-[16px] rounded-md">
                                    {/* Div Active Job */}
                                    <div className=" flex gap-3 pt-[15px] px-[20px]">
                                        <img
                                            src="/image/svg/jobsOutline.svg"
                                            alt=""
                                        />
                                        <div>
                                            <h1 className="font-bold text-[16px]">
                                                Sr. UX Researcher
                                            </h1>
                                            <p className="text-gray-500">
                                                Design
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-[10px] pt-[14px] text-white">
                                        <Button className="bg-primary-500 rounded-md p-[10px]">
                                            Design
                                        </Button>
                                        <Button className="bg-primary-500 rounded-md p-[10px]">
                                            Full Time
                                        </Button>
                                    </div>

                                    <div className="grid grid-cols-2 justify-between  pt-[20px]">
                                        <div className="flex gap-[5px] items-center">
                                            <img
                                                src="/image/svg/location.svg"
                                                alt=""
                                            />
                                            <p className="text-[14px]">
                                                New York, USA
                                            </p>
                                        </div>
                                        <h1 className="flex text-[16px] justify-end">
                                            <span className="font-bold">
                                                $1500
                                            </span>
                                            /Month
                                        </h1>
                                    </div>
                                </div>
                                <div className="bg-[#A2A1A80D]  mt-[16px] rounded-md">
                                    {/* Div Active Job */}
                                    <div className=" flex gap-3 pt-[15px] px-[20px]">
                                        <img
                                            src="/image/svg/jobsOutline.svg"
                                            alt=""
                                        />
                                        <div>
                                            <h1 className="font-bold text-[16px]">
                                                BDM
                                            </h1>
                                            <p className="text-gray-500">
                                                Sales
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-[10px] pt-[14px] text-white">
                                        <Button className="bg-primary-500 rounded-md p-[10px]">
                                            Sales
                                        </Button>
                                        <Button className="bg-primary-500 rounded-md p-[10px]">
                                            Full Time
                                        </Button>
                                    </div>

                                    <div className="grid grid-cols-2 justify-between  pt-[20px]">
                                        <div className="flex gap-[5px] items-center">
                                            <img
                                                src="/image/svg/location.svg"
                                                alt=""
                                            />
                                            <p className="text-[14px]">
                                                New York, USA
                                            </p>
                                        </div>
                                        <h1 className="flex text-[16px] justify-end">
                                            <span className="font-bold">
                                                $1000
                                            </span>
                                            /Month
                                        </h1>
                                    </div>
                                </div>
                            </div>

                            {/* Completed Jobs */}
                            <div className=" h-full border p-5 rounded-xl gap-2 ">
                                <div className="flex gap-2">
                                    <img
                                        src="/image/svg/eclipshijau.svg"
                                        alt=""
                                    />
                                    <h1 className="font-bold text-[14px]">
                                        Compeleted Jobs
                                    </h1>
                                </div>

                                <div className="bg-[#A2A1A80D]  mt-[16px] rounded-md">
                                    {/* Div Active Job */}
                                    <div className=" flex gap-3 pt-[15px] px-[20px]">
                                        <img
                                            src="/image/svg/jobsOutline.svg"
                                            alt=""
                                        />
                                        <div>
                                            <h1 className="font-bold text-[16px]">
                                                UI/UX Designer
                                            </h1>
                                            <p className="text-gray-500">
                                                Design
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-[10px] pt-[14px] text-white">
                                        <Button className="bg-primary-500 rounded-md p-[10px]">
                                            Design
                                        </Button>
                                        <Button className="bg-primary-500 rounded-md p-[10px]">
                                            Full Time
                                        </Button>
                                        <Button className="bg-primary-500 rounded-md p-[10px]">
                                            Remote
                                        </Button>
                                    </div>

                                    <div className="grid grid-cols-2 justify-between  pt-[20px]">
                                        <div className="flex gap-[5px] items-center">
                                            <img
                                                src="/image/svg/location.svg"
                                                alt=""
                                            />
                                            <p className="text-[14px]">
                                                California, USA
                                            </p>
                                        </div>
                                        <h1 className="flex text-[16px] justify-end">
                                            <span className="font-bold">
                                                $6000
                                            </span>
                                            /Month
                                        </h1>
                                    </div>
                                </div>
                                <div className="bg-[#A2A1A80D]  mt-[16px] rounded-md">
                                    {/* Div Active Job */}
                                    <div className=" flex gap-3 pt-[15px] px-[20px]">
                                        <img
                                            src="/image/svg/jobsOutline.svg"
                                            alt=""
                                        />
                                        <div>
                                            <h1 className="font-bold text-[16px]">
                                                Sr. UX Researcher
                                            </h1>
                                            <p className="text-gray-500">
                                                Design
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-[10px] pt-[14px] text-white">
                                        <Button className="bg-primary-500 rounded-md p-[10px]">
                                            Design
                                        </Button>
                                        <Button className="bg-primary-500 rounded-md p-[10px]">
                                            Full Time
                                        </Button>
                                    </div>

                                    <div className="grid grid-cols-2 justify-between  pt-[20px]">
                                        <div className="flex gap-[5px] items-center">
                                            <img
                                                src="/image/svg/location.svg"
                                                alt=""
                                            />
                                            <p className="text-[14px]">
                                                New York, USA
                                            </p>
                                        </div>
                                        <h1 className="flex text-[16px] justify-end">
                                            <span className="font-bold">
                                                $1500
                                            </span>
                                            /Month
                                        </h1>
                                    </div>
                                </div>
                                <div className="bg-[#A2A1A80D]  mt-[16px] rounded-md">
                                    {/* Div Active Job */}
                                    <div className=" flex gap-3 pt-[15px] px-[20px]">
                                        <img
                                            src="/image/svg/jobsOutline.svg"
                                            alt=""
                                        />
                                        <div>
                                            <h1 className="font-bold text-[16px]">
                                                BDM
                                            </h1>
                                            <p className="text-gray-500">
                                                Sales
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-[10px] pt-[14px] text-white">
                                        <Button className="bg-primary-500 rounded-md p-[10px]">
                                            Sales
                                        </Button>
                                        <Button className="bg-primary-500 rounded-md p-[10px]">
                                            Full Time
                                        </Button>
                                    </div>

                                    <div className="grid grid-cols-2 justify-between  pt-[20px]">
                                        <div className="flex gap-[5px] items-center">
                                            <img
                                                src="/image/svg/location.svg"
                                                alt=""
                                            />
                                            <p className="text-[14px]">
                                                New York, USA
                                            </p>
                                        </div>
                                        <h1 className="flex text-[16px] justify-end">
                                            <span className="font-bold">
                                                $1000
                                            </span>
                                            /Month
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Div Content */}
                    </div>
                </div>

                <Modal
                    backdrop={backdrop}
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    placement="top-center"
                    className="bg-white border border-solid rounded-xl"
                >
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">
                                    Add New Jobs
                                </ModalHeader>
                                <ModalBody>
                                    <Select
                                        isRequired
                                        placeholder="Select Department "
                                        selectionMode="multiple"
                                        className=" border rounded-lg opacity-60"
                                    >
                                        {animals.map((animal) => (
                                            <SelectItem
                                                key={animal.value}
                                                value={animal.value}
                                                className="bg-white opacity-80"
                                            >
                                                {animal.label}
                                            </SelectItem>
                                        ))}
                                    </Select>

                                    <Input
                                        type="text"
                                        placeholder="Enter Job Title"
                                        className="border rounded-lg"
                                    />

                                    <Select
                                        isRequired
                                        placeholder="Select Location "
                                        className=" border rounded-lg opacity-60"
                                    >
                                        {animals.map((animal) => (
                                            <SelectItem
                                                key={animal.value}
                                                value={animal.value}
                                                className="bg-white opacity-80"
                                            >
                                                {animal.label}
                                            </SelectItem>
                                        ))}
                                    </Select>

                                    <Input
                                        type="number"
                                        placeholder="Enter Amount"
                                        className="border rounded-lg"
                                        
                                    />

                                    <h1 className="font-bold">Select Type</h1>
                                    <div className="flex gap-[20px] mt-[16px]">
                                        <Checkbox
                                            defaultSelected
                                            color=""
                                            radius="full"
                                        >
                                            Office
                                        </Checkbox>
                                        <Checkbox defaultSelected radius="full">
                                            Work From Home
                                        </Checkbox>
                                    </div>
                                </ModalBody>

                                <div className="flex justify-center gap-[11px] mb-[20px] mt-[30px]">
                                    <Button className="border rounded-lg px-[70px] py-2 " onPress={onClose}>
                                        Close
                                    </Button>
                                    <Button className="bg-primary-500 border rounded-lg px-[70px] py-2 text-white">
                                        Add
                                    </Button>
                                </div>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </AuthenticatedLayout>
        </>
    );
}
