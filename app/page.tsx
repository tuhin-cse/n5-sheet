import Link from "next/link";

const Home = () => {
    return (
        <div className="flex w-screen justify-center items-center py-20">
            <Link
                className="btn-primary"
                href="/lesson/1">
                Lesson 1
            </Link>

        </div>
    )
}

export default Home;


