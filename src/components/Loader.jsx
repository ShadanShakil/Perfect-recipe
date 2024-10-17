import { Spinner } from "@nextui-org/react";

function Loader() {
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className="flex gap-4">
        <Spinner label="Loading..." color="danger" size="lg" />
      </div>
    </div>
  );
}

export default Loader;
