import Link from "next/link";

const Home = () => {
    return (
        <div className="flex flex-col gap-4 w-screen justify-center items-center py-20">
            <Link
                className="btn-primary"
                href="/lesson/1">
                Lesson 1
            </Link>
            <Link
                className="btn-primary"
                href="/lesson/2">
                Lesson 2
            </Link>

        </div>
    )
}

export default Home;


