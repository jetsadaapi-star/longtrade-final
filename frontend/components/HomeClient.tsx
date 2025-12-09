"use client";

import { useState } from "react";
import OpenAccountModal from "@/components/OpenAccountModal";

export default function HomeClient() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <button
                    type="button"
                    onClick={() => setOpenModal(true)}
                    className="btn btn-primary"
                >
                    เปิดบัญชีเทรดกับ XM
                </button>
            </div>

            <OpenAccountModal open={openModal} onClose={() => setOpenModal(false)} />
        </>
    );
}
