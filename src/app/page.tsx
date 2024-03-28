"use client";
import Image from "next/image";
import Button from "@/components/Button";
import RippleButton from "@/components/animatedButton";

export default function Home() {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">Components</h1>
        <Button
          secondary
          label="secondary"
        ></Button>
        <Button
          primary
          label="primary"
        ></Button>
        <br />
        <div className="w-56 mx-auto">
          <Button
            label="Button"
            full
          ></Button>
        </div>
        <RippleButton
          color="#f15959"
          className="p-5 "
          onClick={() => console.log("first")}
        >
          test ripple
        </RippleButton>
      </div>
    </>
  );
}
