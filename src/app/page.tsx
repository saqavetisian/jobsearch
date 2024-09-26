
import Main from "@/components/pages/main";
import {getItems} from "@/requests/search";
import {Filter} from "@/utility/types";
import Error from "@/components/ui/Error";

export default async function Home({ searchParams }: { searchParams: Filter }) {

    const res = await getItems(searchParams);

    // Error handling of request, add ?error=1 to URL to test it
    if (!res.ok) {
        return <Error />
    }

    // Get data on success and pass to main page content
    const {data} = await res.json()

    return (
        <>
          <Main data={data} total={data.total} />
        </>
    );
}
