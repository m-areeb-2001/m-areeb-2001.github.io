import React, { useState } from 'react'

type Props = {
    htmlUrl: string;
    pdfUrl: string;
    abstract: string;
}

const CustomPublication = (props: Props) => {
    const [open, setOpen] = useState(false);
    console.log(props);
    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-2">
                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="rounded border border-gray-500 px-3 py-1 text-xs
             hover:bg-gray-700/60 cursor-pointer"
                >
                    ABS
                </button>
                <a
                    href={props.htmlUrl}
                    target="_blank"
                    className="rounded border border-gray-500 px-3 py-1 text-xs
                hover:bg-gray-700/60"
                >
                    HTML
                </a>
                <a
                    href={props.pdfUrl}
                    target="_blank"
                    className="rounded border border-gray-500 px-3 py-1 text-xs
                hover:bg-gray-700/60"
                >
                    PDF
                </a>
            </div>
            {open && (
                <div className="flex flex-col gap-2">
                    <p>{props.abstract}</p>
                </div>
            )}
        </div>
    )
}

export default CustomPublication