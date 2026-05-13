export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const targetUrl =
      env.OPENAI_BASE_URL +
      url.pathname +
      url.search;
    const headers = new Headers(request.headers);
    headers.set(
      "Authorization",
      `Bearer ${env.OPENAI_API_KEY}`
    );
    const response = await fetch(targetUrl, {
      method: request.method,
      headers,
      body: request.body
    });
    return new Response(response.body, {
      status: response.status,
      headers: response.headers
    });
  }
}