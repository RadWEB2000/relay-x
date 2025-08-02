export default async function CityPage({ params }: {
    params: {
        city: string;
    }
}) {

    const { city } = await params;

    return (
        <>
            <h1>Miasto {city} </h1>
        </>
    )
}