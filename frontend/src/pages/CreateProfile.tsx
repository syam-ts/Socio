import { useState } from "react";

interface IForm {
  username: string;
  mobile: number;
  bio: string;
}

const CreateProfile = () => {
  const [form, setForm] = useState<IForm>({
    username: "",
    mobile: 0,
    bio: "",
  });

  // const onChangeHandler = (e: any) => {
  //   const [key, value] = e.target;
  //   setForm((prev) => (
  //   ))
  // }

  return (
    <div className="md:grid md:justify-center my-50">
      <div className="flex justify-center">
        <p className="text-3xl font-extrabold">Create Your Profile</p>
      </div>
      <form>
        <div className="bg-gray-300 rounded-full w-20 h-20 flex mx-auto p-3">
          <img src="" alt="user-image" />
        </div>
        <div className="my-12 grid gap-5 ">
          <input
            type="text"
            className="py-3 pr-50 pl-2 rounded-sm bg-gray-200 outline-none"
            placeholder="username"
          />
          <input
            type="number"
            className="py-3 pr-50 pl-2 rounded-sm bg-gray-200 outline-none"
            placeholder="mobile"
          />
          <input
            type="text"
            className="py-3 pr-50 pl-2 rounded-sm bg-gray-200 outline-none"
            placeholder="bio"
          />
          <button className="bg-blue-700 py-2.5 rounded-sm text-white font-bold">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProfile;
