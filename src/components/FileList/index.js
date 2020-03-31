import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";

import { MdCheckCircle, MdError, MdLink } from "react-icons/md";

import { Container, FileInfo, Preview } from "./styles";

const FileList = () => (
  <Container>
    <li>
      <FileInfo>
        <Preview src="https://p1.hiclipart.com/preview/471/717/95/android-lollipop-icons-sheets-excel-icon-png-clipart.jpg" />
        <div>
          <strong>Exemplo.xlsl</strong>
          <span>
            14kb <button onClick={() => {}}>Excluir</button>
          </span>
        </div>
      </FileInfo>

      <div>
        <CircularProgressbar
          styles={{ root: { width: 24 }, path: { stroke: "#7159c1" } }}
          strokeWidth={10}
          percentage={40}
        />

        <a
          href="https://p1.hiclipart.com/preview/471/717/95/android-lollipop-icons-sheets-excel-icon-png-clipart.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
        </a>

        <MdCheckCircle size={24} color="#78e5d5" />
        <MdError size={24} color="#e57878" />
      </div>
    </li>
  </Container>
);

export default FileList;
