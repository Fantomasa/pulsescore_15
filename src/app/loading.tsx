import Spinner from "@/components/common/Spinner";

function loading() {
  return (
    <div className="w-full flex justify-center">
      <Spinner />
    </div>
  );
}

export default loading;
