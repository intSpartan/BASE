import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CodeEditor = ({ id }) => {
  const [socket, setSocket] = useState(null);
  const [code, setCode] = useState('');

  useEffect(() => {
    const newSocket = io(`http://localhost:3001?id=${id}`);
    setSocket(newSocket);

    newSocket.on('connect', () => {
      console.log('Connected to the server');
    });

    newSocket.on('code-update', (newCode) => {
      if (newCode !== code) {
        setCode(newCode);
      }
    });

    return () => {
      newSocket.disconnect();
    };
  }, [id, code]);

  const handleCodeChange = (newCode) => {
    setCode(newCode);
    socket.emit('code-update', newCode);
  };

  const handleCursorChange = (range, _oldRange, source) => {
    if (source === 'user') {
      socket.emit('cursor-change', range.index);
    }
  };

  useEffect(() => {
    if (!socket) return;

    socket.on('receive-cursor', (cursorPosition) => {
      const quill = document.querySelector('.ql-editor');
      if (quill) {
        const range = {
          index: cursorPosition,
          length: 0,
        };
        quill.focus();
        quill.setSelection(range);
      }
    });

    return () => {
      socket.off('receive-cursor');
    };
  }, [socket]);

  return (
    <div className="flex flex-col bg-gray-900 text-white">
      <div className="flex-grow p-4">
        <ReactQuill
          id="code-textarea"
          value={code}
          onChange={handleCodeChange}
          onChangeSelection={handleCursorChange}
          theme="snow"
          modules={{
            toolbar: [
              [{ header: [1, 2, false] }],
              ['bold', 'italic', 'underline', 'strike'],
              [{ list: 'ordered' }, { list: 'bullet' }],
              ['link', 'image'],
            ],
          }}
          formats={[
            'header',
            'bold',
            'italic',
            'underline',
            'strike',
            'list',
            'bullet',
            'link',
            'image',
          ]}
        />
      </div>
    </div>
  );
};

export default CodeEditor;