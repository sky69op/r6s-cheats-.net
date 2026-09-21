import { defineMiddleware } from 'astro:middleware';
import { getAffiliateForGoPath } from './config/affiliate';

export const onRequest = defineMiddleware((context, next) => {
  const destination = getAffiliateForGoPath(context.url.pathname);
  if (destination) {
    return context.redirect(destination, 302);
  }
  return next();
});
