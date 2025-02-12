import { type NextRequest } from 'next/server'


export async function GET(request: NextRequest) {
    // Do something with the request object here
    const searchParams = request.nextUrl.searchParams
    const plantId = searchParams.get('id');

    const response = await fetch(`https://trefle.io/api/v1/plants/${plantId}?token=${process.env.TREFLE_API}`);
    const data: Response = await response.json();
    // console.log(data)

  
    // Return a JSON response
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }