"use client";

import { Loader2 } from "lucide-react";

interface LoadingStateProps {
    message?: string;
    className?: string;
}

export default function LoadingState({
    message = "กำลังโหลด...",
    className = ""
}: LoadingStateProps) {
    return (
        <div className={`flex flex-col items-center justify-center py-12 ${className}`}>
            <Loader2 className="w-12 h-12 text-red-500 animate-spin mb-4" />
            <p className="text-white/70 text-lg">{message}</p>
        </div>
    );
}
