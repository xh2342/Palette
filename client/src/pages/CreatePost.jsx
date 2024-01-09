import { useState } from "react";
import { FormField, Loader } from "../components";
import { preview } from "../assets";
const CreatePost = () => {
  const [post, setPost] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [generating, setGenerating] = useState(false);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const generateImage = () => {};

  return (
    <section className="flex flex-col gap-4 w-auto md:w-1/2 xl:w-1/3 md:mx-auto mx-4">
      <div className="flex flex-col mt-4">
        <h1 className="text-3xl font-semibold">Your Post</h1>
        <p className="text-sm mt-2">
          Create your own post with DALL-E AI and share it with the community!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <FormField
          labelName="Creator"
          name="name"
          type="text"
          placeholder="Your Name"
          value={post.name}
          handleChange={handleChange}
        />
        <FormField
          labelName="Prompt"
          name="prompt"
          type="text"
          placeholder="e.g. An ancient cobblestone street lined with quaint, rustic houses."
          value={post.prompt}
          handleChange={handleChange}
        />

        <div className="mt-2">
          <button
            type="button"
            onClick={generateImage}
            className="bg-[#646cff]"
          >
            {generating ? "Generating" : "Generate"}
          </button>
        </div>

        {generating ? (
          <div className="mx-auto mt-20">
            <Loader className="" />
          </div>
        ) : (
          <div className="">
            {post.photo ? (
              <img
                src={post.photo}
                alt={post.prompt}
                className="w-full h-full object-contain mx-auto"
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="w-9/12 h-9/12 object-contain opacity-40 mx-auto"
              />
            )}
          </div>
        )}
        <div className="mx-auto">
          <button type="submit" className="bg-[#646cff]">
            Publish Your Post
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
