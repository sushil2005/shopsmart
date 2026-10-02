import { useState } from 'react';
import {
  Sparkles,
  Send,
  HelpCircle,
  Scale,
  DollarSign,
  AlertCircle,
  Info,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';
import { products, categories } from '../data/products.js';
import {
  askShoppingAssistant,
  compareProductsWithAI,
  getBudgetRecommendations,
  isApiKeyConfigured
} from '../services/gemini.js';

export default function AIAssistant() {
  const [activeMode, setActiveMode] = useState('advisor');
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState(null);
  const [error, setError] = useState(null);

  const [compareSelection, setCompareSelection] = useState([products[0].id, products[1].id]);
  const [compareContext, setCompareContext] = useState('');

  const [budgetForm, setBudgetForm] = useState({
    category: 'Laptops',
    budget: 1200,
    intendedUse: 'Programming and university coursework',
    priorities: 'Battery endurance and display clarity'
  });

  const samplePrompts = [
    'I need a smartphone under $900 with a powerful camera system.',
    'I need a laptop for programming and long college work sessions.',
    'Which headphones are best suited for long study sessions with ANC?',
    'What is the best smartwatch option for marathon running and battery life?',
    'Recommend an ergonomic mouse and portable power bank for travel.'
  ];

  const handleAskAdvisor = async (promptText) => {
    const query = promptText || userInput;
    if (!query.trim()) return;

    setIsLoading(true);
    setError(null);
    setAiResponse(null);

    try {
      const result = await askShoppingAssistant(query);
      setAiResponse(result);
    } catch (err) {
      setError(err.message || 'An error occurred while contacting the Gemini API.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCompareSubmit = async (e) => {
    e.preventDefault();
    if (compareSelection.length < 2) {
      setError('Please select at least 2 products to compare.');
      return;
    }

    const selectedProductObjs = products.filter((p) => compareSelection.includes(p.id));
    setIsLoading(true);
    setError(null);
    setAiResponse(null);

    try {
      const result = await compareProductsWithAI(selectedProductObjs, compareContext);
      setAiResponse(result);
    } catch (err) {
      setError(err.message || 'Comparison analysis failed.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBudgetSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setAiResponse(null);

    try {
      const result = await getBudgetRecommendations(budgetForm);
      setAiResponse(result);
    } catch (err) {
      setError(err.message || 'Budget assessment failed.');
    } finally {
      setIsLoading(false);
    }
  };

  const hasConfiguredKey = isApiKeyConfigured();

  return (
    <div className="container" style={{ padding: '2rem 1.25rem 4rem' }}>
      <div style={{ marginBottom: '1.75rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-secondary)', fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.35rem' }}>
          <Sparkles size={16} />
          Powered by Gemini AI (gemini-3.8-flash)
        </div>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
          ShopSmart Shopping Assistant
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '720px' }}>
          Get neutral, grounded buying advice based exclusively on the ShopSmart product catalog. No speculative claims or absolute winner declarations.
        </p>

        {!hasConfiguredKey && (
          <div style={{
            marginTop: '1rem',
            padding: '0.85rem 1.25rem',
            borderRadius: 'var(--radius-md)',
            background: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.25)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontSize: '0.875rem'
          }}>
            <Info size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
            <span>
              <strong>Environment Status:</strong> Using local grounded recommendation engine. Set <code>VITE_GEMINI_API_KEY</code> in your environment for live cloud generation.
            </span>
          </div>
        )}
      </div>

      <div className="ai-assistant-layout">
        <aside className="ai-sidebar">
          <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '0.75rem' }}>
            Assistant Modes
          </h3>
          <button
            type="button"
            className={`ai-mode-btn ${activeMode === 'advisor' ? 'active' : ''}`}
            onClick={() => {
              setActiveMode('advisor');
              setAiResponse(null);
            }}
          >
            <HelpCircle size={18} />
            <span>Shopping Advisor</span>
          </button>

          <button
            type="button"
            className={`ai-mode-btn ${activeMode === 'compare' ? 'active' : ''}`}
            onClick={() => {
              setActiveMode('compare');
              setAiResponse(null);
            }}
          >
            <Scale size={18} />
            <span>AI Product Compare</span>
          </button>

          <button
            type="button"
            className={`ai-mode-btn ${activeMode === 'budget' ? 'active' : ''}`}
            onClick={() => {
              setActiveMode('budget');
              setAiResponse(null);
            }}
          >
            <DollarSign size={18} />
            <span>Budget Assistant</span>
          </button>
        </aside>

        <main className="ai-chat-box">
          {activeMode === 'advisor' && (
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                Ask Anything About Our Catalog
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1.25rem' }}>
                Click a sample inquiry below or describe your requirements, workflow, and preferences.
              </p>

              <div className="quick-prompts-row">
                {samplePrompts.map((p, i) => (
                  <button
                    key={i}
                    type="button"
                    className="quick-prompt-chip"
                    onClick={() => {
                      setUserInput(p);
                      handleAskAdvisor(p);
                    }}
                  >
                    "{p}"
                  </button>
                ))}
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAskAdvisor();
                }}
                className="ai-input-form"
              >
                <textarea
                  className="ai-textarea"
                  placeholder="e.g. Which headphones offer the best passive comfort for flights, and how do they compare in price?"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  rows={2}
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isLoading || !userInput.trim()}
                  style={{ alignSelf: 'flex-end', height: '52px' }}
                >
                  <Send size={16} />
                  Ask AI
                </button>
              </form>
            </div>
          )}

          {activeMode === 'compare' && (
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                Compare Catalog Items with Gemini
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1.25rem' }}>
                Select 2 or 3 products from the ShopSmart catalog to receive an unbiased comparison highlighting hardware specifications and suitability.
              </p>

              <form onSubmit={handleCompareSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
                  {[0, 1, 2].map((slot) => (
                    <div key={slot}>
                      <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
                        Product {slot + 1} {slot === 2 ? '(Optional)' : ''}
                      </label>
                      <select
                        className="catalog-sort-select"
                        style={{ width: '100%' }}
                        value={compareSelection[slot] || ''}
                        onChange={(e) => {
                          const val = e.target.value;
                          setCompareSelection((prev) => {
                            const next = [...prev];
                            if (val) {
                              next[slot] = val;
                            } else {
                              next.splice(slot, 1);
                            }
                            return next;
                          });
                        }}
                      >
                        <option value="">{slot === 2 ? 'None selected' : 'Choose a product...'}</option>
                        {products.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.brand} - {p.name} (${p.price})
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
                    Specific focus or target workflow (Optional)
                  </label>
                  <input
                    type="text"
                    className="search-input"
                    placeholder="e.g. Compare these laptops for university engineering coursework and occasional gaming."
                    value={compareContext}
                    onChange={(e) => setCompareContext(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isLoading || compareSelection.filter(Boolean).length < 2}
                  style={{ background: 'var(--accent-secondary)' }}
                >
                  <Scale size={16} />
                  Analyze with Gemini
                </button>
              </form>
            </div>
          )}

          {activeMode === 'budget' && (
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                AI Budget & Priority Matcher
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1.25rem' }}>
                Specify your financial envelope, preferred category, and primary needs to receive catalog matches within budget.
              </p>

              <form onSubmit={handleBudgetSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
                      Target Category
                    </label>
                    <select
                      className="catalog-sort-select"
                      style={{ width: '100%' }}
                      value={budgetForm.category}
                      onChange={(e) => setBudgetForm({ ...budgetForm, category: e.target.value })}
                    >
                      {categories.filter((c) => c.id !== 'all').map((c) => (
                        <option key={c.id} value={c.name}>{c.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
                      Max Budget: ${budgetForm.budget}
                    </label>
                    <input
                      type="range"
                      min="100"
                      max="2500"
                      step="50"
                      className="range-input"
                      value={budgetForm.budget}
                      onChange={(e) => setBudgetForm({ ...budgetForm, budget: Number(e.target.value) })}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
                    Intended Use
                  </label>
                  <input
                    type="text"
                    className="search-input"
                    value={budgetForm.intendedUse}
                    onChange={(e) => setBudgetForm({ ...budgetForm, intendedUse: e.target.value })}
                    placeholder="e.g. Daily commute podcasts, software development, wedding photography..."
                  />
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
                    Important Priorities
                  </label>
                  <input
                    type="text"
                    className="search-input"
                    value={budgetForm.priorities}
                    onChange={(e) => setBudgetForm({ ...budgetForm, priorities: e.target.value })}
                    placeholder="e.g. Battery life, quiet operation, bright screen, physical dials..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isLoading}
                >
                  <DollarSign size={16} />
                  Evaluate Budget Fit
                </button>
              </form>
            </div>
          )}

          {isLoading && (
            <div style={{ padding: '2.5rem 1rem', textAlign: 'center' }}>
              <div className="loading-skeleton" style={{ width: '50%', height: '22px', margin: '0 auto 1rem' }} />
              <div className="loading-skeleton" style={{ width: '85%', height: '70px', margin: '0 auto 1rem' }} />
              <div className="loading-skeleton" style={{ width: '75%', height: '50px', margin: '0 auto' }} />
              <p style={{ marginTop: '1.25rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                Analyzing catalog records and validating hardware specifications...
              </p>
            </div>
          )}

          {error && (
            <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: 'var(--radius-sm)', color: 'var(--accent-danger)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          {aiResponse && (
            <div className="ai-response-container">
              {typeof aiResponse === 'object' && aiResponse.isDemoFallback && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(59, 130, 246, 0.15)', border: '1px solid rgba(59, 130, 246, 0.3)', padding: '0.5rem 0.85rem', borderRadius: 'var(--radius-sm)', marginBottom: '1rem', fontSize: '0.8125rem', color: 'var(--accent-primary)' }}>
                  <Info size={16} />
                  <span>Demonstration analysis grounded in catalog dataset. Set VITE_GEMINI_API_KEY for live Gemini 3.8 Flash queries.</span>
                </div>
              )}
              <div style={{ whiteSpace: 'pre-wrap', color: 'var(--text-primary)', fontSize: '0.9375rem' }}>
                {typeof aiResponse === 'object' ? aiResponse.text : aiResponse}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
