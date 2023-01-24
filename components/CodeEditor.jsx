import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { darcula } from '@uiw/codemirror-theme-darcula';

function CodeEditor({code, setCode}) {
  const onChange = React.useCallback((value) => {
    setCode(value);
  }, []);
  return (
    <div className='mt-[20px]'>
        <CodeMirror
        value={code}
        height="400px"
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
        />
    </div>
  )
}

export default CodeEditor;