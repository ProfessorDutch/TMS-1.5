import React, { useState } from 'react';
import { Heart, Share2, Users } from 'lucide-react';
import RichTextEditor from './RichTextEditor';

export default function AmbassadorForm({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    church: '',
    story: '',
    platform: '',
    followers: '',
    motivation: ''
  });

  // Form implementation here...
  
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full mx-auto p-8">
        {/* Form content here */}
      </div>
    </div>
  );
}