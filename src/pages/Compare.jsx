import { useState } from 'react';
import { Sparkles, Trash2, Plus, Info, CheckCircle2, AlertCircle } from 'lucide-react';
import { useApp } from '../context/AppContext.jsx';
import ComparisonTable from '../components/ComparisonTable.jsx';
import AddToCompareModal from '../components/AddToCompareModal.jsx';
import { compareProductsWithAI } from '../services/gemini.js';

export default function Compare() {
  const { compareList, removeFromCompare, clearCompare } = useApp();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState(null);
  const [aiError, setAiError] = useState(null);
  const [userNotes, setUserNotes] = useState('');

  const handleAskAI = async () => {
    if (compareList.length < 2) return;
    setIsAiLoading(true);
    setAiError(null);
    setAiAnalysis(null);

    try {
      const result = await compareProductsWithAI(compareList, userNotes);
      setAiAnalysis(result);
    } catch (err) {
      setAiError(err.message || 'Failed to complete AI comparison.');
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <div className="container" style={{ padding: '2rem 1.25rem 4rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.4rem' }}>
            Product Comparison
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Objective side-by-side analysis without automated winner declaration.
          </p>
        </div>

        {compareList.length > 0 && (
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              type="button"
              className="btn btn-ghost btn-sm"
              onClick={clearCompare}
              style={{ color: 'var(--text-muted)' }}
            >
              <Trash2 size={15} />
              Clear Comparison ({compareList.length})
            </button>
            {compareList.length < 3 && (
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => setIsAddModalOpen(true)}
              >
                <Plus size={15} />
                Add Product
              </button>
            )}
          </div>
        )}
      </div>

      <ComparisonTable
        products={compareList}
        onRemove={removeFromCompare}
        onOpenAddModal={() => setIsAddModalOpen(true)}
        onAskAI={compareList.length >= 2 ? handleAskAI : null}
      />

      {compareList.length >= 2 && (
        <section style={{ marginTop: '2.5rem', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '1.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
            <Sparkles size={20} style={{ color: 'var(--accent-secondary)' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Gemini AI Comparative Breakdown</h3>
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Generate a neutral, structured evaluation explaining key differences, hardware strengths, and which user each model suits best based on catalog data.
          </p>

          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
            <input
              type="text"
              className="search-input"
              placeholder="Optional focus (e.g. 'For programming', 'For battery endurance', 'For photography')..."
              value={userNotes}
              onChange={(e) => setUserNotes(e.target.value)}
              style={{ flex: 1, minWidth: '260px' }}
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleAskAI}
              disabled={isAiLoading}
              style={{ background: 'var(--accent-secondary)' }}
            >
              {isAiLoading ? 'Analyzing...' : 'Generate AI Comparison'}
            </button>
          </div>

          {isAiLoading && (
            <div style={{ padding: '2rem 1rem', textAlign: 'center' }}>
              <div className="loading-skeleton" style={{ width: '60%', height: '24px', margin: '0 auto 1rem' }} />
              <div className="loading-skeleton" style={{ width: '90%', height: '80px', margin: '0 auto 1rem' }} />
              <div className="loading-skeleton" style={{ width: '80%', height: '60px', margin: '0 auto' }} />
              <p style={{ marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                Consulting Gemini with catalog specs...
              </p>
            </div>
          )}

          {aiError && (
            <div style={{ padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: 'var(--radius-sm)', color: 'var(--accent-danger)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <AlertCircle size={18} />
              <span>{aiError}</span>
            </div>
          )}

          {aiAnalysis && (
            <div className="ai-response-container">
              {typeof aiAnalysis === 'object' && aiAnalysis.isDemoFallback && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(59, 130, 246, 0.15)', border: '1px solid rgba(59, 130, 246, 0.3)', padding: '0.5rem 0.85rem', borderRadius: 'var(--radius-sm)', marginBottom: '1rem', fontSize: '0.8125rem', color: 'var(--accent-primary)' }}>
                  <Info size={16} />
                  <span>Showing local catalog evaluation. Configure VITE_GEMINI_API_KEY for live streaming Gemini 3.8 Flash queries.</span>
                </div>
              )}
              <div style={{ whiteSpace: 'pre-wrap', color: 'var(--text-primary)', fontSize: '0.9375rem' }}>
                {typeof aiAnalysis === 'object' ? aiAnalysis.text : aiAnalysis}
              </div>
            </div>
          )}
        </section>
      )}

      <AddToCompareModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </div>
  );
}
