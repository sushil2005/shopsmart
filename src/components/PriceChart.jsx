import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';
import { formatCurrency } from '../utils/formatters.js';

export default function PriceChart({ product }) {
  if (!product || !product.priceHistory || product.priceHistory.length === 0) {
    return null;
  }

  const prices = product.priceHistory.map((item) => item.price);
  const lowestPrice = Math.min(...prices);
  const highestPrice = Math.max(...prices);
  const currentPrice = product.price;
  const isDropping = prices[prices.length - 1] <= prices[0];

  return (
    <div className="price-chart-container">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Price Tracking History</h4>
          <span className="badge badge-neutral" style={{ marginTop: '0.25rem', fontSize: '0.7rem' }}>
            Demo price history
          </span>
        </div>
        <span style={{ fontSize: '0.8125rem', color: isDropping ? 'var(--accent-success)' : 'var(--text-secondary)', fontWeight: 600 }}>
          {isDropping ? '↓ Price trend is downward over 6 months' : 'Price stabilized'}
        </span>
      </div>

      <div className="price-chart-stats">
        <div className="chart-stat-item">
          <span className="chart-stat-label">Current Demo Price</span>
          <span className="chart-stat-value">{formatCurrency(currentPrice)}</span>
        </div>
        <div className="chart-stat-item">
          <span className="chart-stat-label">Lowest Recorded</span>
          <span className="chart-stat-value" style={{ color: 'var(--accent-success)' }}>
            {formatCurrency(lowestPrice)}
          </span>
        </div>
        <div className="chart-stat-item">
          <span className="chart-stat-label">Peak Recorded</span>
          <span className="chart-stat-value" style={{ color: 'var(--text-muted)' }}>
            {formatCurrency(highestPrice)}
          </span>
        </div>
      </div>

      <div style={{ width: '100%', height: 260 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={product.priceHistory} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-subtle)" vertical={false} />
            <XAxis
              dataKey="month"
              stroke="var(--text-muted)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="var(--text-muted)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              domain={['auto', 'auto']}
              tickFormatter={(v) => `$${v}`}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div style={{
                      background: 'var(--bg-surface-elevated)',
                      border: '1px solid var(--border-strong)',
                      padding: '0.5rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      boxShadow: 'var(--shadow-md)',
                      fontSize: '0.8125rem'
                    }}>
                      <p style={{ color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                        {payload[0].payload.month} Demo Price
                      </p>
                      <p style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '1rem' }}>
                        {formatCurrency(payload[0].value)}
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#3B82F6"
              strokeWidth={2.5}
              fillOpacity={1}
              fill="url(#priceGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.85rem', fontStyle: 'italic' }}>
        Note: Figures represent simulated historical demo data for application demonstration purposes and do not reflect live external market ticker values.
      </p>
    </div>
  );
}
