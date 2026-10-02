import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { useApp } from '../context/AppContext.jsx';

export default function Toast() {
  const { toasts, removeToast } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div className="toast-container" role="region" aria-live="polite">
      {toasts.map((toast) => {
        let Icon = Info;
        let className = 'toast-info';
        if (toast.type === 'success') {
          Icon = CheckCircle2;
          className = 'toast-success';
        } else if (toast.type === 'warning' || toast.type === 'error') {
          Icon = AlertCircle;
          className = 'toast-warning';
        }

        return (
          <div key={toast.id} className={`toast-item ${className}`}>
            <Icon size={18} />
            <span style={{ flex: 1 }}>{toast.message}</span>
            <button
              type="button"
              onClick={() => removeToast(toast.id)}
              style={{ color: 'var(--text-muted)', display: 'flex' }}
              aria-label="Dismiss notification"
            >
              <X size={15} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
