import React, { useState } from 'react';
import './ImageAnalyzer.css'; 

export const Contact = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState('');
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setResult('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) return alert("Please upload an image first");

    const suggestions = [
      "🌱 Switch to reusable items to reduce plastic waste.",
      "🚲 Try biking instead of driving short distances.",
      "💡 Replace old bulbs with energy-efficient LEDs.",
      "🌍 Avoid single-use packaging.",
      "🥦 Eat more plant-based meals for a lower carbon footprint.",
      "🔌 Unplug devices when not in use to save energy.",
      "🧴 Recycle your plastic bottles regularly.",
      "☀ Consider installing solar panels if possible.",
      "📦 Reuse cardboard and reduce packaging waste."
    ];

    setLoading(true);
    setTimeout(() => {
      const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
      setResult(randomSuggestion);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="image-analyzer-container">
      <div className="image-analyzer-card">
        <h2 className="title">🌿 Image Analyzer</h2>

        <form onSubmit={handleSubmit}>
          <input type="file" accept="image/*" onChange={handleImageUpload} className="file-input" />

          {preview && (
            <div className="preview-container">
              <p className="preview-label">Preview:</p>
              <img src={preview} alt="Preview" className="preview-image" />
            </div>
          )}

          <button type="submit" className="analyze-button">Analyze Image</button>
        </form>

        {loading && <p className="loading-text">Analyzing image...</p>}

        {result && !loading && (
          <div className="result-box">
            <p className="result-title">✅ Suggestion:</p>
            <p>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};