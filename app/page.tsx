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
            <Link
                className="btn-primary"
                href="/lesson/3">
                Lesson 3
            </Link>
            <Link
                className="btn-primary"
                href="/lesson/4">
                Lesson 4
            </Link>
            <Link
                className="btn-primary"
                href="/lesson/5">
                Lesson 5
            </Link>
            <Link
                className="btn-primary"
                href="/lesson/6">
                Lesson 6
            </Link>
            <Link
                className="btn-primary"
                href="/lesson/7">
                Lesson 7
            </Link>
            <Link
                className="btn-primary"
                href="/lesson/8">
                Lesson 8
            </Link>
            <Link
                className="btn-primary"
                href="/lesson/9">
                Lesson 9
            </Link>
        </div>
    )
}

export default Home;


