import React, { useEffect, useState } from "react";
import { CodeBlock, atomOneLight } from "react-code-blocks";

interface CodeProps {
  content: string;
  language: string;
}
const Code: React.FC<CodeProps> = ({ content, language }) => {
  return (
    <pre>
      <CodeBlock
        text={content}
        language={language}
        showLineNumbers={true}
        startingLineNumber={true}
        theme={atomOneLight}
      />
    </pre>
  );
};

export default Code;
