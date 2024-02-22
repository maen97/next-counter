"use client"

import Link from "next/link"
import { useRouter, usePathname } from 'next/navigation'
import { useState } from "react"

const Nav = () => {
    const [showNavigateDialog, setShowNavigateDialog] = useState<boolean>(false)
    const { push } = useRouter()
    // Get the current pathname
    const pathname = usePathname();

    // handle navigation to advanced page
    const handleNavigate = () => {
        // Close the dialog and navigate if not on the advanced page
        setShowNavigateDialog(false);
        push('/advanced');
    };
    return (
        <>
            <nav className="bg-neutral-900">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex flex-1 items-center justify-center sm:items-stretch ">
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <Link href="/" className="text-gray-300 hover:bg-neutral-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                        aria-current="page">Home</Link>
                                    <button
                                        onClick={() => pathname !== '/advanced' && setShowNavigateDialog(true)}
                                        className="text-gray-300 hover:bg-neutral-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Advanced (Bonus)</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {showNavigateDialog && <ConfirmDialog handleConfirm={handleNavigate} handleDismiss={() => setShowNavigateDialog(false)} />}
        </>
    )
}

export default Nav


const ConfirmDialog = ({ handleDismiss, handleConfirm }: { handleDismiss: () => void, handleConfirm: () => void }) => {
    return <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
    >
        <div className="fixed inset-0 bg-zinc-900 bg-opacity-75 transition-opacity" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div className="relative transform overflow-hidden rounded-lg bg-zinc-900 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-zinc-900 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-violet-100 sm:mx-0 sm:h-10 sm:w-10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-violet-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                                </svg>

                            </div>
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <h3
                                    className="text-base font-semibold leading-6 text-zinc-200"
                                    id="modal-title"
                                >
                                    Advanced Counter
                                </h3>
                                <div className="mt-2">
                                    <p className="text-sm text-zinc-100">
                                        Are you sure you want to see the advanced version of this counter?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                            type="button"
                            onClick={handleConfirm}
                            className="inline-flex w-full justify-center rounded-md bg-violet-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 sm:ml-3 sm:w-auto"
                        >
                            Continue
                        </button>
                        <button
                            type="button"
                            onClick={handleDismiss}
                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        >
                            No, thanks
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

}