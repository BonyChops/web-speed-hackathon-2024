import fileType from 'file-type';

const SUPPORTED_MIME_TYPE_LIST = ['image/bmp', 'image/jpeg', 'image/png', 'image/webp', 'image/avif', 'image/jxl'];

export async function isSupportedImage(image: File): Promise<boolean> {
  const arrayBuffer = await image.arrayBuffer();
  const type = await fileType.fileTypeFromBuffer(arrayBuffer);
  if (type === undefined) {
    return false;
  }
  return SUPPORTED_MIME_TYPE_LIST.includes(type?.mime);
}
