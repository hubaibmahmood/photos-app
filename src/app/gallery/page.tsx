"use client";

import { CldUploadButton } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

export default function GalleryPage() {
  return (
    <section>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <Button asChild>
          <div className="flex gap-2">
            <Upload />
            <CldUploadButton
              onUpload={(result: any) => {
                //   setId(result.info.public_id);
                //   setWidth(result.info.width);
                //   setHeight(result.info.height);
                //   console.log(id);
              }}
              uploadPreset="swemombo"
            />
          </div>
        </Button>
      </div>
    </section>
  );
}
