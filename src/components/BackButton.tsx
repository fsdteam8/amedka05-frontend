"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation"; // ✅ Correct import
import React from "react";

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/"); // fallback to home page
    }
  };

  return (
    <div>
      <Button
        onClick={handleBack}
        variant="ghost"
        size="icon"
        className="mb-8 text-white hover:bg-white/10"
      >
        <ArrowLeft className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default BackButton;
