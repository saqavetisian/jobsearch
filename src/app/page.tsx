
import Main from "@/components/pages/main";
import {getItems} from "@/requests/search";

export default async function Home({ searchParams }: { searchParams: { location?: string, jobTitle?: string, page?: string } }) {

    const res = await getItems(searchParams);

    return (
        <>
          <Main data={res.data} total={res.total} />
        </>
    );
}
