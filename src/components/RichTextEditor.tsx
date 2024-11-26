import React from 'react';
import { Bold, Italic, List, Quote } from 'lucide-react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      <div className="flex items-center gap-2 p-2 border-b border-gray-300 bg-gray-50">
        <button
          type="button"
          className="p-1 rounded hover:bg-gray-200 transition-colors"
          onClick={() => {
            const selection = window.getSelection()?.toString();
            if (selection) {
              onChange(value.replace(selection, `**${selection}**`));
            }
          }}
        >
          <Bold className="w-4 h-4" />
        </button>
        <button
          type="button"
          className="p-1 rounded hover:bg-gray-200 transition-colors"
          onClick={() => {
            const selection = window.getSelection()?.toString();
            if (selection) {
              onChange(value.replace(selection, `*${selection}*`));
            }
          }}
        >
          <Italic className="w-4 h-4" />
        </button>
        <button
          type="button"
          className="p-1 rounded hover:bg-gray-200 transition-colors"
          onClick={() => {
            onChange(value + '\n- ');
          }}
        >
          <List className="w-4 h-4" />
        </button>
        <button
          type="button"
          className="p-1 rounded hover:bg-gray-200 transition-colors"
          onClick={() => {
            const selection = window.getSelection()?.toString();
            if (selection) {
              onChange(value.replace(selection, `> ${selection}`));
            }
          }}
        >
          <Quote className="w-4 h-4" />
        </button>
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-4 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-patriot-red"
        placeholder="Share your story..."
      />
    </div>
  );
}