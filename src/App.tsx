import * as React from "react";
import "./styles.css";
import Terminal from "terminal-in-react";
import pseudoFileSystem from "terminal-in-react-pseudo-file-system-plugin";
import NodeEvalPlugin from 'terminal-in-react-node-eval-plugin';

const FileSystemPlugin = pseudoFileSystem();

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <Terminal
  plugins={[
    FileSystemPlugin,
    {
      class: NodeEvalPlugin,
      config: {
        filesystem: FileSystemPlugin.displayName
      }
    }
  ]}
/>
    </div>
  );
}
