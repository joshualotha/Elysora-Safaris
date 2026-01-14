import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Resolves the full URL for an image path.
 * Handles:
 * 1. Absolute URLs (http/https)
 * 2. Uploaded files (uploads/...) -> /storage/uploads/...
 * 3. Static assets (images/...) -> /images/...
 * 4. Legacy stems (hero-1) -> /images/hero-1.jpg
 * 5. Other relative paths -> /storage/... (default fallback)
 */
export function resolveImagePath(path?: string | null): string {
  if (!path) return '';

  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  // Uploaded files (usually in storage/app/public/uploads)
  if (path.startsWith('uploads/')) {
    return `/storage/${path}`;
  }

  // Legacy carousel files (stored directly in storage/app/public/carousel)
  if (path.startsWith('carousel/')) {
    return `/storage/${path}`;
  }

  // Static assets in public/images
  if (path.startsWith('images/')) {
    return `/${path}`;
  }

  // Legacy stems (no slashes, no dots) -> assume public/images/*.jpg
  if (!path.includes('/') && !path.includes('.')) {
    return `/images/${path}.jpg`;
  }

  // Default fallback for other relative paths (e.g. site_images root)
  // Check if it has an extension, if so assume storage or public root?
  // Safest default for "unknown" paths in this system seems to be storage
  // EXCEPT if it is a root file like "Welcome-to-the-Wild.png" which is in public/
  if (path === 'Welcome-to-the-Wild.png') {
    return `/${path}`;
  }

  return `/storage/${path}`;
}
