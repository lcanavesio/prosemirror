import { Editor, HtmlEditor, Toolbar } from "@aeaton/react-prosemirror";
import {
  // plugins,
  // schema,
  toolbar,
} from "@aeaton/react-prosemirror-config-default";
import { useState } from "react";
import { paginationPlugin, schema } from 'prosemirror-pagination'
import "./styles/demo.css";
import "./styles/prosemirror.css";

const initialValue = `<p></p>`;

const App = (): JSX.Element => {
  const [html, setHTML] = useState<string>(initialValue);

  return (
    <div>
      <div className="prosemirror-demo">
        <div className="prosemirror-demo-editor">
          <HtmlEditor
            schema={schema}
            plugins={paginationPlugin}
            value={initialValue}
            handleChange={setHTML}
            debounce={1000}
          >
            <Toolbar toolbar={toolbar} />
            <Editor autoFocus />
          </HtmlEditor>
        </div>
      </div>
      <div className="prosemirror-demo-output">
        <pre>{html}</pre>
      </div>
    </div>
  );
};

export default App;
