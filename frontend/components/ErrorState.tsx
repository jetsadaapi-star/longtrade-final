"use client";

import { AlertCircle, RefreshCw } from "lucide-react";

interface ErrorStateProps {
    message?: string;
    onRetry?: () => void;
    className?: string;
}

export default function ErrorState({
    message = "เกิดข้อผิดพลาดในการโหลดข้อมูล",
    onRetry,
    className = ""
}: ErrorStateProps) {
    return (
        <div className={`flex flex-col items-center justify-center py-12 ${className}`}>
            <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
                <AlertCircle className="w-8 h-8 text-red-500" />
            </div>
            <p className="text-white/90 text-lg mb-4">{message}</p>
            {onRetry && (
                <button
                    onClick={onRetry}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 transition text-sm font-medium"
                >
                    <RefreshCw className="w-4 h-4" />
                    ลองอีกครั้ง
                </button>
            )}
        </div>
    );
}
