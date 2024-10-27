import {Link} from "@inertiajs/react";

export default function Home( {name} ) {
    return (
        <>
            <h1 className="title">Hello {name}</h1>
            <Link preserveScroll className="block title mt-[500px]" href="/">
                {new Date().toLocaleTimeString()}
            </Link>
        </>
    );
}
