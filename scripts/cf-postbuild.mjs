// Cloudflare Workers Builds runs deploy as a separate step (default: npx wrangler deploy).
// Never run a second wrangler deploy from postbuild — it causes duplicate deploys and auth errors.
const onCloudflareCi =
  process.env.WORKERS_CI === '1' ||
  process.env.CF_PAGES === '1' ||
  process.env.CI === 'true' ||
  process.env.CLOUDFLARE === '1' ||
  process.cwd().startsWith('/opt/buildhome');

if (onCloudflareCi) {
  console.log('cf-postbuild: skip (Cloudflare CI deploys via the dashboard deploy command)');
  process.exit(0);
}

console.log('cf-postbuild: skip Pages deploy (local build)');
