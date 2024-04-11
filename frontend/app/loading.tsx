import Spinner from "@/components/Spinner";

export default async function Loading() {
    return (
        <div className="flex justify-center pt-4">
            <Spinner />
        </div>
    )
}