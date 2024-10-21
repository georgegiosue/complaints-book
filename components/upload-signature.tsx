"use client";

import { useState } from "react";
import { DrawSignature } from "./draw-signature";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export const UploadSignature = () => {
  const [signature, setSignature] = useState<string | null>(null);

  const handleSignatureUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setSignature(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <Label>Firma del Consumidor</Label>
      <div className="grid grid-cols-1 md:grid-cols-2 space-x-4">
        <Input type="file" accept="image/*" onChange={handleSignatureUpload} />
        <section className="flex flex-col items-center w-full relative">
          <div className="md:absolute top-0 left-1 p-2 bg-transparent">
            O dibuje su firma
          </div>
          <DrawSignature />
        </section>
      </div>
      {signature && (
        <img src={signature} alt="Firma cargada" className="mt-2 max-w-xs" />
      )}
    </>
  );
};
