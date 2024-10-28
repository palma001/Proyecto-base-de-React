export function blobToURL(blob) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
      const base64data = reader.result;
      resolve(base64data);
    };
  });
}

export async function fileToBlob(file, handleUpdate) {
  const { content, size } = file;
  let chunks = [];
  let i = 0;
  const totalCount = Math.round(size / 250000);

  for await (const chunk of content) {
    if (handleUpdate) {
      handleUpdate(i, totalCount);
    }
    chunks.push(chunk);
    i++;
  }
  return new Blob(chunks);
}

export async function base64ToBlob(blobUrl, name) {
  return new Promise((resolve, reject) => {
    fetch(blobUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const file = new File([blob], name, { type: blob.type });
        resolve(file);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
