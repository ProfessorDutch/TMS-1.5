import React, { useState } from 'react';
import { Upload, PlusCircle, X } from 'lucide-react';

interface CreateBlessingRequestProps {
  onClose: () => void;
}

export default function CreateBlessingRequest({ onClose }: CreateBlessingRequestProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(prev => [...prev, ...droppedFiles]);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...selectedFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl w-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900">Request a Blessing</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-4xl leading-none"
          >
            ×
          </button>
        </div>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Youth's Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent transition-all"
              placeholder="Enter name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Their Story
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent transition-all"
              placeholder="Share their journey and how this blessing will impact their life..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Event Details
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent transition-all"
              placeholder="Youth camp, retreat, mission trip, etc."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount Needed
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="number"
                  className="w-full pl-8 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent transition-all"
                  placeholder="0.00"
                />
              </div>
            </div>
          </div>

          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              dragActive 
                ? 'border-patriot-red bg-patriot-cream' 
                : 'border-gray-300 hover:border-patriot-red hover:bg-patriot-cream'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              type="file"
              multiple
              onChange={handleFileInput}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">Upload photos</p>
              <p className="text-sm text-gray-500">Drag and drop or click to select files</p>
            </label>
          </div>

          {files.length > 0 && (
            <div className="space-y-2">
              {files.map((file, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
                  <span className="text-sm text-gray-600">{file.name}</span>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="text-gray-400 hover:text-patriot-red transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-patriot-red text-white py-3 px-6 rounded-full font-semibold hover:bg-patriot-crimson transition-colors flex items-center justify-center gap-2"
          >
            <PlusCircle className="w-5 h-5" />
            Create Blessing Request
          </button>
        </form>
      </div>
    </div>
  );
}