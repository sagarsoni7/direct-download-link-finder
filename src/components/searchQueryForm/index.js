import React, { useState } from "react";
import CheckboxGroup from "react-checkbox-group";
import isEmpty from "is-empty";
import {
  Collapsible,
  CollapsibleItem,
  Icon,
  TextInput,
  Button,
} from "react-materialize";

import "./index.css";

import fileExtensions from "./data/fileExtensions";

function SearchQueryForm({ performSearch }) {
  const [fileName, setFileName] = useState("");
  const [fileFormat, setFileFormat] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmpty(fileName)) return;
    if (isEmpty(fileFormat)) return;
    performSearch(fileName, fileFormat);
    setFileName(" ");
    setFileFormat([]);
  };

  const handleSelectAllSubTypes = (e) => {
    const selectedExtension = fileExtensions[e.target.name];
    const allSubTypes = selectedExtension.extensions;
    if (e.target.checked) {
      let tempArr = [...allSubTypes, ...fileFormat];
      setFileFormat(tempArr);
    } else {
      let arr1 = [...fileFormat];
      let difference = arr1.filter((x) => !allSubTypes.includes(x));
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
          onChange={(e) => setFileName(e.target.value)}
          className="fileNameInput"
        />

        <CheckboxGroup required value={fileFormat} onChange={setFileFormat}>
          {(Checkbox) => (
            <div>
              <div>
                <Collapsible popout>
                  {Object.keys(fileExtensions).map((requiredExtension) => (
                    <CollapsibleItem
                      header={fileExtensions[requiredExtension].type}
                      icon={
                        <Icon
                          children={fileExtensions[requiredExtension].icon}
                        />
                      }
                      key={fileExtensions[requiredExtension].type}
                    >
                      <div className="row">
                        <div className="col s12">
                          <label>
                            <input
                              type="checkbox"
                              name={fileExtensions[requiredExtension].type}
                              onClick={handleSelectAllSubTypes}
                            />
                            <span>
                              Select All{" "}
                              {fileExtensions[requiredExtension].type}
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col s4">
                          {fileExtensions[requiredExtension].extensions.map(
                            (extension, index) => (
                              <p key={index + 1}>
                                <label>
                                  <Checkbox value={extension} />
                                  <span> {extension}</span>
                                </label>
                              </p>
                            )
                          )}
                        </div>
                      </div>
                    </CollapsibleItem>
                  ))}
                </Collapsible>
              </div>
            </div>
          )}
        </CheckboxGroup>

        <div className="row">
          <Button type="submit" waves="light">
            Search
            <Icon right>search</Icon>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SearchQueryForm;
