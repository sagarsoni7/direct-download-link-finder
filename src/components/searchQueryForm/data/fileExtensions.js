const fileExtensions = {
  Video: {
    type: "Video",
    icon: "videocam",
    extensions: ["mp4", "mkv", "mov", "avi", "wmv", "3gp", "flv", "mpg", "swf"],
  },
  Image: {
    type: "Image",
    icon: "image",
    extensions: [
      "jpg",
      "gif",
      "psd",
      "jpeg",
      "tiff",
      "pdf",
      "png",
      "raw",
      "bmp",
    ],
  },
  Audio: {
    type: "Audio",
    icon: "music_note",
    extensions: ["mp3", "wav", "mid", "ogg", "mpa", "midi", "wma"],
  },
  Compressed: {
    type: "Compressed",
    icon: "archive",
    extensions: ["zip", "7z", "deb", "rar", "pkg", "rpm", "tar.gz"],
  },
  Disc: {
    type: "Disc",
    icon: "disc_full",
    extensions: ["iso", "dmg", "vcd", "bin", "toast"],
  },
  Data: {
    type: "Data",
    icon: "storage",
    extensions: [
      "csv",
      "dbf",
      "sql",
      "vcf",
      "log",
      "tar",
      "dat",
      "mdb",
      "xml",
      "db",
      "sav",
    ],
  },
  Executable: {
    type: "Executable",
    icon: "apps",
    extensions: [
      "exe",
      "cgi",
      "jar",
      "apk",
      "pl",
      "py",
      "bat",
      "com",
      "wsf",
      "bin",
      "gadget",
    ],
  },
  Font: {
    type: "Font",
    icon: "font_download",
    extensions: ["ttf", "fnt", "fon", "otf"],
  },
  Internet: {
    type: "Internet",
    icon: "public",
    extensions: [
      "asp",
      "css",
      "part",
      "aspx",
      "htm",
      "php",
      "cer",
      "html",
      "py",
      "cfm",
      "js",
      "rss",
      "cgi",
      "jsp",
      "xhtml",
      "pl",
    ],
  },
  Word: {
    type: "Word",
    icon: "toc",
    extensions: ["doc", "pdf", "rtf", "docx", "odt", "txt"],
  },
  Presentation: {
    type: "Presentation",
    icon: "slideshow",
    extensions: ["key", "odp", "pptx", "ppt", "pps"],
  },
  Programming: {
    type: "Programming",
    icon: "code",
    extensions: ["c", "cs", "sh", "php", "h", "swift", "cpp", "java", "vb"],
  },
  Spreadsheet: {
    type: "Spreadsheet",
    icon: "insert_chart",
    extensions: ["ods", "xls", "xlsx", "xlr"],
  },
  System: {
    type: "System",
    icon: "computer",
    extensions: [
      "bak",
      "dll",
      "ini",
      "cab",
      "dmp",
      "ink",
      "cfg",
      "drv",
      "msi",
      "cpl",
      "icns",
      "sys",
      "cur",
      "ico",
    ],
  },
};

export default fileExtensions;
