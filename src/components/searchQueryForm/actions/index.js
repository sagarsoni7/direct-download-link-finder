export const performSearch = (fileName, fileFormat) => {
  let CombinedFileFormat = fileFormat.join("|");
  window.open(
    "https://google.com/search?q=" +
      fileName +
      " -inurl:(htm|html|php|pls|txt) intitle:index.of “last modified” (" +
      CombinedFileFormat +
      ")",
    "_blank"
  );
};
