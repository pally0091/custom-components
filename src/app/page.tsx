import Image from "next/image";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
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
    </>
  );
}
