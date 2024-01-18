import FileSaver from "file-saver";

export const downloadImage = (_id, image) => {
  FileSaver.saveAs(image, `image-${_id}.jpg`);
};
