function canonicalRedirect(request) {
  const url = new URL(request.url);
  let changed = false;

  if (url.hostname.startsWith('www.')) {
    url.hostname = url.hostname.slice(4);
    changed = true;
  }

  if (url.protocol === 'http:') {
    url.protocol = 'https:';
    changed = true;
  }

  if (!changed) return null;
  return Response.redirect(url.toString(), 301);
}

function withHtmlCharset(response, requestUrl) {
  const contentType = response.headers.get('content-type') ?? '';
  const isHtml =
    contentType.includes('text/html') ||
    contentType.includes('application/xhtml+xml') ||
    (!contentType && !requestUrl.includes('.'));

  if (!isHtml || contentType.includes('charset=')) return response;

  const headers = new Headers(response.headers);
  headers.set('Content-Type', 'text/html; charset=UTF-8');
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export async function onRequest(context) {
  const redirect = canonicalRedirect(context.request);
  if (redirect) return redirect;

  const response = await context.next();
  return withHtmlCharset(response, context.request.url);
}
