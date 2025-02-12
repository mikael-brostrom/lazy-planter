import { type NextRequest } from 'next/server'

interface Synonym {
    synonyms: string[];
}

interface Links {
    self: string;
    plant: string;
    genus: string;
}

export interface DataItem {
    id: number;
    common_name: string;
    slug: string;
    scientific_name: string;
    year: number;
    bibliography: string;
    author: string;
    status: string;
    rank: string;
    family_common_name: string;
    genus_id: number;
    image_url: string;
    synonyms: Synonym[];
    genus: string;
    family: string;
    links: Links;
}

interface Response {
    data: DataItem[];
}


export async function GET(request: NextRequest) {
    // Do something with the request object here
    const searchParams = request.nextUrl.searchParams
    const color = searchParams.get('color');
    const isEdible = searchParams.get('isEdible');

    const response = await fetch(`https://trefle.io/api/v1/plants?token=${process.env.TREFLE_API}&[flower_color]=${color}&filter[edible]=${isEdible}`);
    const data: Response = await response.json();
    // console.log(data)


    const filteredData = data.data.map(item => ({
        id: item.id,
        common_name: item.common_name,
        image_url: item.image_url,
    }));
  
    // Return a JSON response
    return new Response(JSON.stringify(filteredData), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }