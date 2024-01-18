import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const getJobs = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/jobs", {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch topics");
        }

        return res.json();
    } catch (error) {
        console.log("Error loading topics: ", error);
    }
};

export default async function TopicsList() {
    // Fetch the list of jobs using getJobs function
    const { jobs } = await getJobs();

    return (
        <>
            {/* Map over each job and create a rectangular card */}
            {jobs.map((t) => (
                <div
                    key={t._id}
                    className="p-4 border border-slate-300 my-3 flex justify-between items-start rounded-md"
                >
                    <div>
                        <h2 className="font-bold text-2xl">{t.title}</h2>
                        <div>{t.description}</div>
                    </div>

                    <div className="flex gap-2">
                        <HiPencilAlt id={t._id} />
                        <Link href={`/editTopic/${t._id}`}>
                            <HiPencilAlt size={24} />
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}