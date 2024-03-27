import { PlusIcon } from "@heroicons/react/24/outline";

export default function Form() {
  return (
    <form className="flex items-center mt-2">
      <PlusIcon className="w-5 h-5 text-gray-400 fill-current" />
      <input
        className="flex-grow h-8 ml-4 bg-transparent focus:outline-none font-medium border-none"
        type="text"
        placeholder="add a new task"
      />
    </form>
  );
}
