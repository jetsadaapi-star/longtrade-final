"use client";

import dynamic from "next/dynamic";

const SupportWidget = dynamic(() => import("@/components/SupportWidget"), { ssr: false });

export default function ClientSupportWidget() {
    return <SupportWidget />;
}
