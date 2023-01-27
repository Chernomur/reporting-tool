import { FC, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import { TABLE_FORMATS } from "../../constants";
import Context from "../../context";
import "./style.css";

const ExcelReader: FC = () => {
  const { setFileValues } = useContext(Context);
  const [file, setFile] = useState<Blob>();
  const [dragActive, setDragActive] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (file) {
      console.log(TABLE_FORMATS.includes(file?.type));

      if (!TABLE_FORMATS.includes(file?.type)) {
        console.log("error file type");
      }
      handleFile();
    }
  }, [file]);

  //todo
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  }

  const handleDrag = function (e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = function (e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  function handleFile() {
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;

    reader.onload = (e: ProgressEvent<FileReader>) => {
      const bstr = e.target?.result;
      const wb = XLSX.read(bstr, {
        type: rABS ? "binary" : "array",
        bookVBA: true,
      });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws) as any;

      setFileValues(data);
    };

    if (file) {
      if (rABS) {
        reader.readAsBinaryString(file);
      } else {
        reader.readAsArrayBuffer(file);
      }
    }
  }

  return (
    <div>
      <form
        id="form-file-upload"
        onDragEnter={handleDrag as any}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="file"
          className="form-control"
          id="file"
          accept={TABLE_FORMATS.map((x) => {
            return "." + x;
          }).join(",")}
          onChange={handleChange}
        />

        <label id="label-file-upload" htmlFor="file">
          <div>
            <p>Drag and drop your file here or click</p>
          </div>
        </label>
        {dragActive && (
          <div
            id="drag-file-element"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          ></div>
        )}
      </form>
    </div>
  );
};

export default ExcelReader;
