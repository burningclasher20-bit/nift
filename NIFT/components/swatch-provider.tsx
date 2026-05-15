'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Fabric } from '@/types/fabric';

type ToastType = 'success' | 'info' | 'warning' | 'error';

type Toast = {
  id: string;
  message: string;
  type: ToastType;
};

interface SwatchContextValue {
  items: Fabric[];
  count: number;
  isHydrated: boolean;
  addFabric: (fabric: Fabric) => void;
  removeFabric: (id: string) => void;
  toasts: Toast[];
}

const SwatchContext = createContext<SwatchContextValue | undefined>(undefined);

function createToastId() {
  return `toast-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function SwatchProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Fabric[]>([]);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Load from localStorage
    try {
      const stored = window.localStorage.getItem('swatch-kit');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
      }
    } catch (error) {
      console.error('Failed to load swatch from localStorage:', error);
    } finally {
      // Mark as hydrated after attempting to load
      setIsHydrated(true);
    }
  }, []);

  useEffect(() => {
    // Save to localStorage whenever items change
    if (isHydrated) {
      try {
        window.localStorage.setItem('swatch-kit', JSON.stringify(items));
      } catch (error) {
        console.error('Failed to save swatch to localStorage:', error);
      }
    }
  }, [items, isHydrated]);

  const addToast = (message: string, type: ToastType = 'success') => {
    const id = createToastId();
    setToasts((current) => [...current, { id, message, type }]);
    window.setTimeout(() => {
      setToasts((current) => current.filter((toast) => toast.id !== id));
    }, 4200);
  };

  const addFabric = (fabric: Fabric) => {
    if (items.some((item) => item.id === fabric.id)) {
      addToast(`"${fabric.name}" is already in your swatch box.`, 'info');
      return;
    }

    if (items.length >= 5) {
      addToast('Ready to Request Physical Swatch Kit', 'success');
      return;
    }

    const newLength = items.length + 1;
    setItems((current) => [...current, fabric]);
    addToast(`Added "${fabric.name}" to your swatch box.`, 'success');

    if (newLength === 5) {
      addToast('Ready to Request Physical Swatch Kit', 'success');
    }
  };

  const removeFabric = (id: string) => {
    setItems((current) => current.filter((item) => item.id !== id));
  };

  const value = useMemo(
    () => ({ items, count: items.length, isHydrated, addFabric, removeFabric, toasts }),
    [items, isHydrated, toasts]
  );

  return (
    <SwatchContext.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed bottom-6 right-6 z-50 flex w-full max-w-sm flex-col gap-3 px-4 sm:px-0" aria-live="polite" aria-atomic="true">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            role="status"
            className="pointer-events-auto rounded-3xl border border-slate-200 bg-white/95 px-5 py-4 shadow-2xl backdrop-blur-md transition duration-300"
          >
            <p className="text-sm font-semibold text-ink">{toast.message}</p>
          </div>
        ))}
      </div>
    </SwatchContext.Provider>
  );
}

export function useSwatch() {
  const context = useContext(SwatchContext);
  if (!context) {
    throw new Error('useSwatch must be used within SwatchProvider');
  }
  return context;
}
