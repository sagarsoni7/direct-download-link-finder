import React, { useState } from "react";
import CheckboxGroup from "react-checkbox-group";
import isEmpty from "is-empty";
import { Collapsible, CollapsibleItem, Icon,TextInput,Button } from "react-materialize";

import "./index.css";

function SearchQueryForm({ performSearch }) {
  const [fileName, setFileName] = useState("");
  const [fileFormat, setFileFormat] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    if (isEmpty(fileName)) return;
    if (isEmpty(fileFormat)) return;
    performSearch(fileName, fileFormat);
    setFileName(" ");
    setFileFormat([]);
  };

  const toggleSelectAllVideo = e => {
    let videoFormats = [
      "mp4",
      "mkv",
      "mov",
      "avi",
      "wmv",
      "3gp",
      "flv",
      "mpg",
      "swf"
    ];
    if (e.target.checked) {
     
      let tempArr = [...videoFormats, ...fileFormat];
      console.log(tempArr);
      setFileFormat(tempArr);
    } else {
      let arr1=[...fileFormat];
      let difference = arr1.filter(x => !videoFormats.includes(x));
      console.log(difference)
      setFileFormat([...difference]);
    }
  };

  
  const toggleSelectAllImage = e => {
   
      let imageFormats = [
        "jpg",
        "gif",
        "psd",
        "jpeg",
        "tiff",
        "pdf",
        "png",
        "raw",
        "bmp"
      ];
      if (e.target.checked) {
     
        let tempArr = [...imageFormats, ...fileFormat];
        console.log(tempArr);
        setFileFormat(tempArr);
      } else {
        let arr1=[...fileFormat];
        let difference = arr1.filter(x => !imageFormats.includes(x));
        console.log(difference)
        setFileFormat([...difference]);
      }
  };
  const toggleSelectAllAudio = e => {
    
     let AudioFormats= ["mp3", "wav", "mid", "ogg", "mpa", "midi", "wma"];
      if (e.target.checked) {
     
        let tempArr = [...AudioFormats, ...fileFormat];
        console.log(tempArr);
        setFileFormat(tempArr);
      } else {
        let arr1=[...fileFormat];
        let difference = arr1.filter(x => !AudioFormats.includes(x));
        console.log(difference)
        setFileFormat([...difference]);
      }
  };
  const toggleSelectAllCompressed = e => {
   
      let CompressedFormats= ["zip", "7z", "deb", "rar", "pkg", "rpm", "tar.gz"];
      if (e.target.checked) {
     
        let tempArr = [...CompressedFormats, ...fileFormat];
        console.log(tempArr);
        setFileFormat(tempArr);
      } else {
        let arr1=[...fileFormat];
        let difference = arr1.filter(x => !CompressedFormats.includes(x));
        console.log(difference)
        setFileFormat([...difference]);
      }
  };
  const toggleSelectAllDisc = e => {
    
    let DiscFormats= ["iso", "dmg", "vcd", "bin", "toast"];
    if (e.target.checked) {
     
      let tempArr = [...DiscFormats, ...fileFormat];
      console.log(tempArr);
      setFileFormat(tempArr);
    } else {
      let arr1=[...fileFormat];
      let difference = arr1.filter(x => !DiscFormats.includes(x));
      console.log(difference)
      setFileFormat([...difference]);
    }
    
  };
  const toggleSelectAllData = e => {
  
     let DataFormats= [
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
        "sav"
      ];
      if (e.target.checked) {
     
        let tempArr = [...DataFormats, ...fileFormat];
        console.log(tempArr);
        setFileFormat(tempArr);
      } else {
        let arr1=[...fileFormat];
        let difference = arr1.filter(x => !DataFormats.includes(x));
        console.log(difference)
        setFileFormat([...difference]);
      }
  };
  const toggleSelectAllExecutable = e => {
 
      let ExecutableFormats= [
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
        "gadget"
      ];
      if (e.target.checked) {
     
        let tempArr = [...ExecutableFormats, ...fileFormat];
        console.log(tempArr);
        setFileFormat(tempArr);
      } else {
        let arr1=[...fileFormat];
        let difference = arr1.filter(x => !ExecutableFormats.includes(x));
        console.log(difference)
        setFileFormat([...difference]);
      }
  };
  const toggleSelectAllFont = e => {
  
      let FontFormats= ["ttf", "fnt", "fon", "otf"];
      if (e.target.checked) {
     
        let tempArr = [...FontFormats, ...fileFormat];
        console.log(tempArr);
        setFileFormat(tempArr);
      } else {
        let arr1=[...fileFormat];
        let difference = arr1.filter(x => !FontFormats.includes(x));
        console.log(difference)
        setFileFormat([...difference]);
      }
  };
  const toggleSelectAllInternet = e => {
  
     let InternetFormats=[
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
        "pl"
      ];
      if (e.target.checked) {
     
        let tempArr = [...InternetFormats, ...fileFormat];
        console.log(tempArr);
        setFileFormat(tempArr);
      } else {
        let arr1=[...fileFormat];
        let difference = arr1.filter(x => !InternetFormats.includes(x));
        console.log(difference)
        setFileFormat([...difference]);
      }
  
  };
  const toggleSelectAllWord = e => {
  
     let WordFormats= ["doc", "pdf", "rtf", "docx", "odt", "txt"];
      if (e.target.checked) {
     
        let tempArr = [...WordFormats, ...fileFormat];
        console.log(tempArr);
        setFileFormat(tempArr);
      } else {
        let arr1=[...fileFormat];
        let difference = arr1.filter(x => !WordFormats.includes(x));
        console.log(difference)
        setFileFormat([...difference]);
      }
    
  };
  const toggleSelectAllPresentation = e => {
  
     let PresentationFormats= ["key", "odp", "pptx", "ppt", "pps"];
      if (e.target.checked) {
     
        let tempArr = [...PresentationFormats, ...fileFormat];
        console.log(tempArr);
        setFileFormat(tempArr);
      } else {
        let arr1=[...fileFormat];
        let difference = arr1.filter(x => !PresentationFormats.includes(x));
        console.log(difference)
        setFileFormat([...difference]);
      }
   
  };
  const toggleSelectAllProgramming = e => {
  
     let ProgrammingFormats=[
        "c",
        "cs",
        "sh",
        "php",
        "h",
        "swift",
        "cpp",
        "java",
        "vb"
      ];
      if (e.target.checked) {
     
        let tempArr = [...ProgrammingFormats, ...fileFormat];
        console.log(tempArr);
        setFileFormat(tempArr);
      } else {
        let arr1=[...fileFormat];
        let difference = arr1.filter(x => !ProgrammingFormats.includes(x));
        console.log(difference)
        setFileFormat([...difference]);
      }
   
  };
  const toggleSelectAllSpreadsheet = e => {
    
    let SpreadsheetFormats= ["ods", "xls", "xlsx", "xlr"];
      if (e.target.checked) {
     
        let tempArr = [...SpreadsheetFormats, ...fileFormat];
        console.log(tempArr);
        setFileFormat(tempArr);
      } else {
        let arr1=[...fileFormat];
        let difference = arr1.filter(x => !SpreadsheetFormats.includes(x));
        console.log(difference)
        setFileFormat([...difference]);
      }
   
  };
  const toggleSelectAllSystem = e => {
 
     let SystemFormats= [
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
        "ico"
      ];
      if (e.target.checked) {
     
        let tempArr = [...SystemFormats, ...fileFormat];
        console.log(tempArr);
        setFileFormat(tempArr);
      } else {
        let arr1=[...fileFormat];
        let difference = arr1.filter(x => !SystemFormats.includes(x));
        console.log(difference)
        setFileFormat([...difference]);
      }
  };

  return (
    <div>

      <form onSubmit={handleSubmit}>
        
          
          <TextInput
          label="Enter File Name"
            required
            type="text"
            value={fileName}
            onChange={e => setFileName(e.target.value)}
            className="fileNameInput"
          />
       

        <CheckboxGroup
          name="fruits"
          required
          value={fileFormat}
          onChange={setFileFormat}
        >
          {Checkbox => (
            <div>
              <div>
                <Collapsible popout>
                  <CollapsibleItem
                    header="Video"
                    icon={<Icon children="videocam" />}
                  >
                    <div className="row">
                      <div className="col s12">
                        <label>
                          <input
                            onChange={toggleSelectAllVideo}
                            type="checkbox"
                          />

                          <span>Select All Video</span>
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="mp4" />
                            <span> mp4</span>
                          </label>
                        </p>

                        <p>
                          <label>
                            <Checkbox value="mkv" />
                            <span> mkv</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="mov" />
                            <span> mov</span>
                          </label>
                        </p>
                      </div>
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="avi" />
                            <span> avi</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="wmv" />
                            <span> wmv</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="3gp" />
                            <span> 3gp</span>
                          </label>
                        </p>
                      </div>
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="flv" />
                            <span> flv</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="mpg" />
                            <span> mpg</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="swf" />
                            <span> swf</span>
                          </label>
                        </p>
                      </div>
                    </div>
                  </CollapsibleItem>
                  <CollapsibleItem
                    header="Image"
                    icon={<Icon children="image" />}
                  >
                    <div className="row">
                      <div className="col s12">
                        <label>
                          <input
                            onChange={toggleSelectAllImage}
                            type="checkbox"
                          />

                          <span>Select All Image</span>
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="jpg" />
                            <span> jpg</span>
                          </label>
                        </p>

                        <p>
                          <label>
                            <Checkbox value="jpeg" />
                            <span> jpeg</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="png" />
                            <span> png</span>
                          </label>
                        </p>
                      </div>
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="gif" />
                            <span> gif</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="tiff" />
                            <span> tiff</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="raw" />
                            <span> raw</span>
                          </label>
                        </p>
                      </div>
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="psd" />
                            <span> psd</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="pdf" />
                            <span> pdf</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="bmp" />
                            <span> bmp</span>
                          </label>
                        </p>
                      </div>
                    </div>
                  </CollapsibleItem>
                  <CollapsibleItem
                    header="Audio"
                    icon={<Icon children="music_note" />}
                  >
                    <div className="row">
                      <div className="col s12">
                        <label>
                          <input
                            onChange={toggleSelectAllAudio}
                            type="checkbox"
                          />

                          <span>Select All Audio</span>
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="mp3" />
                            <span> mp3</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="ogg" />
                            <span> ogg</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="wma" />
                            <span> wma</span>
                          </label>
                        </p>
                      </div>
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="wav" />
                            <span> wav</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="mpa" />
                            <span> mpa</span>
                          </label>
                        </p>
                      </div>
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="mid" />
                            <span> mid</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="midi" />
                            <span> midi</span>
                          </label>
                        </p>
                      </div>
                    </div>
                  </CollapsibleItem>
                  <CollapsibleItem
                    header="Compressed"
                    icon={<Icon children="archive" />}
                  >
                    <div className="row">
                      <div className="col s12">
                        <label>
                          <input
                            onChange={toggleSelectAllCompressed}
                            type="checkbox"
                          />

                          <span>Select All Compressed</span>
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="zip" />
                            <span> zip</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="rar" />
                            <span> rar</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="tar.gz" />
                            <span> tar.gz</span>
                          </label>
                        </p>
                      </div>
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="7z" />
                            <span> 7z</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="pkg" />
                            <span> pkg</span>
                          </label>
                        </p>
                      </div>
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="deb" />
                            <span> deb</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="rpm" />
                            <span> rpm</span>
                          </label>
                        </p>
                      </div>
                    </div>
                  </CollapsibleItem>
                  <CollapsibleItem
                    header="Disc"
                    icon={<Icon children="disc_full" />}
                  >
                    <div className="row">
                      <div className="col s12">
                        <label>
                          <input
                            onChange={toggleSelectAllDisc}
                            type="checkbox"
                          />

                          <span>Select All Disc</span>
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="iso" />
                            <span> iso</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="bin" />
                            <span> bin</span>
                          </label>
                        </p>
                      </div>
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="dmg" />
                            <span> dmg</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="toast" />
                            <span> toast</span>
                          </label>
                        </p>
                      </div>
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="vcd" />
                            <span> vcd</span>
                          </label>
                        </p>
                      </div>
                    </div>
                  </CollapsibleItem>
                  <CollapsibleItem
                    header="Data"
                    icon={<Icon children="storage" />}
                  >
                    <div className="row">
                      <div className="col s12">
                        <label>
                          <input
                            onChange={toggleSelectAllData}
                            type="checkbox"
                          />

                          <span>Select All Data</span>
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="csv" />
                            <span> csv</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="vcf" />
                            <span> vcf</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="dat" />
                            <span> dat</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="db" />
                            <span> db</span>
                          </label>
                        </p>
                      </div>
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="dbf" />
                            <span> dbf</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="log" />
                            <span> log</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="mdb" />
                            <span> mdb</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="sav" />
                            <span> sav</span>
                          </label>
                        </p>
                      </div>
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="sql" />
                            <span> sql</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="tar" />
                            <span> tar</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="xml" />
                            <span> xml</span>
                          </label>
                        </p>
                      </div>
                    </div>
                  </CollapsibleItem>
                  <CollapsibleItem
                    header="Executable"
                    icon={<Icon children="apps" />}
                  >
                    <div className="row">
                      <div className="col s12">
                        <label>
                          <input
                            onChange={toggleSelectAllExecutable}
                            type="checkbox"
                          />

                          <span>Select All Executable</span>
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="exe" />
                            <span> exe</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="apk" />
                            <span> apk</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="bat" />
                            <span> bat</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="bin" />
                            <span> bin</span>
                          </label>
                        </p>
                      </div>
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="cgi" />
                            <span> cgi</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="pl" />
                            <span> pl</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="com" />
                            <span> com</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="gadget" />
                            <span> gadget</span>
                          </label>
                        </p>
                      </div>
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="jar" />
                            <span> jar</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="py" />
                            <span> py</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="wsf" />
                            <span> wsf</span>
                          </label>
                        </p>
                      </div>
                    </div>
                  </CollapsibleItem>
                  <CollapsibleItem
                    header="Font"
                    icon={<Icon children="font_download" />}
                  >
                    <div className="row">
                      <div className="col s12">
                        <label>
                          <input
                            onChange={toggleSelectAllFont}
                            type="checkbox"
                          />

                          <span>Select All Font</span>
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="ttf" />
                            <span> ttf</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="otf" />
                            <span> otf</span>
                          </label>
                        </p>
                      </div>
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="fnt" />
                            <span> fnt</span>
                          </label>
                        </p>
                      </div>
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="fon" />
                            <span> fon</span>
                          </label>
                        </p>
                      </div>
                    </div>
                  </CollapsibleItem>
                  <CollapsibleItem
                    header="Internet"
                    icon={<Icon children="public" />}
                  >
                    <div className="row">
                      <div className="col s12">
                        <label>
                          <input
                            onChange={toggleSelectAllInternet}
                            type="checkbox"
                          />

                          <span>Select All Internet</span>
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="asp" />
                            <span> asp</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="aspx" />
                            <span> aspx</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="cer" />
                            <span> cer</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="cfm" />
                            <span> cfm</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="cgi" />
                            <span> cgi</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="pl" />
                            <span> pl</span>
                          </label>
                        </p>
                      </div>
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="css" />
                            <span> css</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="htm" />
                            <span> htm</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="html" />
                            <span> html</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="js" />
                            <span> js</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="jsp" />
                            <span> jsp</span>
                          </label>
                        </p>
                      </div>
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="part" />
                            <span> part</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="php" />
                            <span> php</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="py" />
                            <span> py</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="rss" />
                            <span> rss</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="xhtml" />
                            <span> xhtml</span>
                          </label>
                        </p>
                      </div>
                    </div>
                  </CollapsibleItem>
                  <CollapsibleItem
                    header="Presentation"
                    icon={<Icon children="slideshow" />}
                  >
                    <div className="row">
                      <div className="col s12">
                        <label>
                          <input
                            onChange={toggleSelectAllPresentation}
                            type="checkbox"
                          />

                          <span>Select All Presentation</span>
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s4">
                        {" "}
                        <p>
                          <label>
                            <Checkbox value="key" />
                            <span> key</span>
                          </label>
                        </p>
                        <label>
                          <Checkbox value="ppt" />
                          <span> ppt</span>
                        </label>
                      </div>
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="odp" />
                            <span> odp</span>
                          </label>
                        </p>

                        <p>
                          <label>
                            <Checkbox value="pps" />
                            <span> pps</span>
                          </label>
                        </p>
                      </div>
                      <div className="col s4">
                        <p></p>
                        <p>
                          <label>
                            <Checkbox value="pptx" />
                            <span> pptx</span>
                          </label>
                        </p>
                      </div>
                    </div>
                  </CollapsibleItem>
                  <CollapsibleItem
                    header="Programming"
                    icon={<Icon children="code" />}
                  >
                    <div className="row">
                      <div className="col s12">
                        <label>
                          <input
                            onChange={toggleSelectAllProgramming}
                            type="checkbox"
                          />

                          <span>Select All Programming</span>
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="c" />
                            <span> c</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="php" />
                            <span> php</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="cpp" />
                            <span> cpp</span>
                          </label>
                        </p>
                      </div>
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="cs" />
                            <span> cs</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="h" />
                            <span> h</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="java" />
                            <span> java</span>
                          </label>
                        </p>
                      </div>
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="sh" />
                            <span> sh</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="swift" />
                            <span> swift</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="vb" />
                            <span> vb</span>
                          </label>
                        </p>
                      </div>
                    </div>
                  </CollapsibleItem>
                  <CollapsibleItem
                    header="Spreadsheet"
                    icon={<Icon children="insert_chart" />}
                  >
                    <div className="row">
                      <div className="col s12">
                        <label>
                          <input
                            onChange={toggleSelectAllSpreadsheet}
                            type="checkbox"
                          />

                          <span>Select All Spreadsheet</span>
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="ods" />
                            <span> ods</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="xlr" />
                            <span> xlr</span>
                          </label>
                        </p>
                      </div>
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="xls" />
                            <span> xls</span>
                          </label>
                        </p>
                      </div>
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="xlsx" />
                            <span> xlsx</span>
                          </label>
                        </p>
                      </div>
                    </div>
                  </CollapsibleItem>
                  <CollapsibleItem
                    header="System"
                    icon={<Icon children="computer" />}
                  >
                    <div className="row">
                      <div className="col s12">
                        <label>
                          <input
                            onChange={toggleSelectAllSystem}
                            type="checkbox"
                          />

                          <span>Select All System</span>
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="bak" />
                            <span> bak</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="cab" />
                            <span> cab</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="cfg" />
                            <span> cfg</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="cpl" />
                            <span> cpl</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="cur" />
                            <span> cur</span>
                          </label>
                        </p>
                      </div>
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="dll" />
                            <span> dll</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="dmp" />
                            <span> dmp</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="drv" />
                            <span> drv</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="icns" />
                            <span> icns</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="ico" />
                            <span> ico</span>
                          </label>
                        </p>
                      </div>
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="ini" />
                            <span> ini</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="lnk" />
                            <span> lnk</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="msi" />
                            <span> msi</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="sys" />
                            <span> sys</span>
                          </label>
                        </p>
                      </div>
                    </div>
                  </CollapsibleItem>
                  <CollapsibleItem header="Word" icon={<Icon children="toc" />}>
                    <div className="row">
                      <div className="col s12">
                        <label>
                          <input
                            onChange={toggleSelectAllWord}
                            type="checkbox"
                          />

                          <span>Select All Word</span>
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="doc" />
                            <span> doc</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="docx" />
                            <span> docx</span>
                          </label>
                        </p>
                      </div>
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="pdf" />
                            <span> pdf</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="odt" />
                            <span> odt</span>
                          </label>
                        </p>
                      </div>
                      <div className="col s4">
                        <p>
                          <label>
                            <Checkbox value="rtf" />
                            <span> rtf</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <Checkbox value="txt" />
                            <span> txt</span>
                          </label>
                        </p>
                      </div>
                    </div>
                  </CollapsibleItem>
                </Collapsible>
              </div>
            </div>
          )}
        </CheckboxGroup>

        <div className="row">
        <Button type="submit" waves="light">
Find
<Icon right>
search
</Icon>
</Button>
        </div>
      </form>
    </div>
  );
}

export default SearchQueryForm;
