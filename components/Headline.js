import React from "react";

export function Headline(props) {
    console.log(props);
    return (
        <div>
            <h1>{props.page} Page</h1>
            <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                <li className="mb-2 tracking-[-.01em]">
                    Get started by editing{" "}
                    {props.children}
                    .
                </li>
                <li className="tracking-[-.01em]">
                    Save and see your changes instantly.
                </li>
            </ol>
        </div>


    );
}
