export async function GET(request: Request) {

    // Return a JSON response
    return new Response("hello world", {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }