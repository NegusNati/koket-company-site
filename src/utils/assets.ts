const imageModules = import.meta.glob<string>(
  '/public/images/**/**/*.(png|jpg|jpeg|svg|webp)',
  { eager: true, query: '?url', import: 'default' }
);

type NestedImageCollection = Record<string, Record<string, string[]>>;

// Organize images by top-level folder and then subfolder
const organizedImages: NestedImageCollection = Object.entries(imageModules).reduce(
  (acc, [path, url]) => {
    console.log("path", path);
    const parts = path.replace(/^\/public\/images\//, '').split('/');
    // parts example: ['projects', 'esl', 'image.png']
    console.log("parts", parts);
    if (parts.length > 2) {
      const topFolder = parts[0]; // e.g. 'projects'
      const subFolder = parts[1]; // e.g. 'esl'

      if (!acc[topFolder]) {
        acc[topFolder] = {};
      }
      if (!acc[topFolder][subFolder]) {
        acc[topFolder][subFolder] = [];
      }
      acc[topFolder][subFolder].push(url);
    }
    return acc;
  },
  {} as NestedImageCollection
);

/**
 * Retrieves the public URL for an image based on its top-level folder,
 * subfolder, and index.
 *
 * @param topFolder The top-level folder name (e.g., "projects").
 * @param subFolder The subfolder name (e.g., "esl").
 * @param index The zero-based index of the image within that subfolder.
 * @returns The public URL of the image, or undefined if not found.
 */
export function getImagePath(
  topFolder: string,
  subFolder: string,
  index: number
): string | undefined {
  console.log("organizedImages", organizedImages);
  console.log("topFolder, subFolder, index", topFolder, subFolder, index);

  const subFolderImages = organizedImages[topFolder]?.[subFolder];
  if (subFolderImages && index >= 0 && index < subFolderImages.length) {
    console.log("subFolderImages", subFolderImages);
    const relativePath = subFolderImages[index].replace(/^\/?public\/?/, '');
    console.log("relativePath", relativePath);
    return relativePath;
  }
  console.warn(
    `Image not found for folder "${topFolder}/${subFolder}" at index ${index}.`
  );
  return undefined;
}

// Export the nested structure if needed
export const allImagesByFolder = organizedImages;