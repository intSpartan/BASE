"use client"

import { useRouter } from 'next/navigation';
import CodeEditor from '../../components/CodeEditor';

const EditorPage = ({ params }) => {
  const router = useRouter();
  const { id } = params;

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-8">Code Editor</h1>
      <div className="w-full max-w-4xl">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Editing Document - {id}</h2>
          <div className="h-96">
            <CodeEditor id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorPage;