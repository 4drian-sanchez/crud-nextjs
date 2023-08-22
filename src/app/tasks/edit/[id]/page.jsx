import HomePage from "@/app//new/page"

const page = ({ params: { id } }) => {
    console.log(id)

    return (
        <HomePage />
    )
}

export default page