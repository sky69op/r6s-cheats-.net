export type SharePlatform =
  | 'facebook'
  | 'x'
  | 'linkedin'
  | 'reddit'
  | 'whatsapp'
  | 'telegram'
  | 'email';

export const SHARE_PLATFORMS: readonly SharePlatform[] = [
  'facebook',
  'x',
  'linkedin',
  'reddit',
  'whatsapp',
  'telegram',
  'email',
];

export function buildShareUrl(platform: SharePlatform, pageUrl: string, title: string): string {
  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedTitle = encodeURIComponent(title);

  switch (platform) {
    case 'facebook':
      return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    case 'x':
      return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
    case 'linkedin':
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
    case 'reddit':
      return `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`;
    case 'whatsapp':
      return `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`;
    case 'telegram':
      return `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`;
    case 'email':
      return `mailto:?subject=${encodedTitle}&body=${encodedTitle}%0A%0A${encodedUrl}`;
  }
}
