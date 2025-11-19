"use client";

import * as React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { Check, X } from "lucide-react";

interface ToastContextType {
  success: (title: string, description?: string) => void;
  error: (title: string, description?: string) => void;
}

const ToastContext = React.createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = React.useState<
    { id: number; title: string; description?: string; variant: "success" | "error" }[]
  >([]);

  const addToast = (toast: Omit<typeof toasts[0], "id">) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { ...toast, id }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 4000);
  };

  const value = {
    success: (title: string, description?: string) =>
      addToast({ title, description, variant: "success" }),
    error: (title: string, description?: string) =>
      addToast({ title, description, variant: "error" }),
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastPrimitive.Provider swipeDirection="right">
        <div className="fixed bottom-5 right-5 flex flex-col gap-2 z-50">
          {toasts.map((t) => (
            <ToastPrimitive.Root
              key={t.id}
              className={`flex items-start gap-2 p-4 rounded shadow-md border ${
                t.variant === "success"
                  ? "bg-green-50 text-green-900"
                  : "bg-red-50 text-red-900"
              }`}
            >
              {t.variant === "success" ? (
                <Check className="w-5 h-5" />
              ) : (
                <X className="w-5 h-5" />
              )}
              <div className="flex flex-col">
                <ToastPrimitive.Title className="font-bold">{t.title}</ToastPrimitive.Title>
                {t.description && (
                  <ToastPrimitive.Description>{t.description}</ToastPrimitive.Description>
                )}
              </div>
            </ToastPrimitive.Root>
          ))}
        </div>
      </ToastPrimitive.Provider>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = React.useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within a ToastProvider");
  return context;
};
