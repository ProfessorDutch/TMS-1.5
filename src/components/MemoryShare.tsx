import React, { useState } from 'react';
import { Camera, Image, Heart, Share2, X, Upload } from 'lucide-react';

interface MemoryShareProps {
  onClose: () => void;
}

export default function MemoryShare({ onClose }: MemoryShareProps) {
  const [image, setImage] = useState<File | null>(null);
  const [message, setMessage] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    setShowSuccess(true);
  };

  if (showSuccess) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
        <div className="bg-white rounded-2xl max-w-2xl w-full mx-auto p-8 my-8">
          <div className="text-center">
            <Heart className="w-16 h-16 text-patriot-red mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-patriot-navy mb-4">
              Thank You for Sharing Your Memory!
            </h3>
            <p className="text-patriot-blue mb-6">
              Your story helps inspire others and shows the impact of faith in action.
            </p>
            <button
              onClick={onClose}
              className="bg-patriot-red text-white px-8 py-3 rounded-full hover:bg-patriot-crimson transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full mx-auto p-8 my-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-patriot-navy">Share Your Memory</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
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
            {previewUrl ? (
              <div className="relative">
                <img 
                  src={previewUrl} 
                  alt="Preview" 
                  className="max-h-64 mx-auto rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => {
                    setImage(null);
                    setPreviewUrl(null);
                  }}
                  className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5 text-patriot-red" />
                </button>
              </div>
            ) : (
              <>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileInput}
                  className="hidden"
                  id="memory-image"
                />
                <label
                  htmlFor="memory-image"
                  className="cursor-pointer"
                >
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-patriot-blue mb-2">Upload a photo</p>
                  <p className="text-sm text-patriot-gray">Drag and drop or click to select</p>
                </label>
              </>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Share Your Story
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
              placeholder="Tell us about this memory and how it impacted your faith journey..."
              required
            />
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-2 rounded-lg bg-patriot-red text-white hover:bg-patriot-crimson transition-colors"
            >
              Share Memory <Share2 className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}