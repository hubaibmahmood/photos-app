"use client";

import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { use, useState } from "react";

type UploadResult = {
  info: {
    public_id: string;
    height: number;
    width: number;
  };
  event: "success";
};

export default function Home() {
  const [id, setId] = useState("");
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton
        onUpload={(result: any) => {
          setId(result.info.public_id);
          setWidth(result.info.width);
          setHeight(result.info.height);
          console.log(id);
        }}
        uploadPreset="swemombo"
      />

      {id && (
        <CldImage
          width={width}
          height={height}
          src={id}
          sizes="100vw"
          alt="Description of my image"
        />
      )}
    </main>
  );
}
