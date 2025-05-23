export async function POST(req) {
  try {
    const body = await req.json();

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: process.env.API_ACCESS_KEY,
        name: body.name,
        email: body.email,
        message: body.message,
      }),
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, message: 'Server error' }), {
      status: 500,
    });
  }
}
