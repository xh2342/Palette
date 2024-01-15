import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormField, Loader } from "../components";
import { preview } from "../assets";
const CreatePost = () => {
  const [post, setPost] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [generating, setGenerating] = useState(false);
  const [posting, setPosting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (post.name && post.prompt && post.photo) {
      console.log(post);
      try {
        setPosting(true);
        const response = await fetch("http://localhost:8080/api/post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(post),
        });

        const data = await response.json();
        console.log(data);

        navigate("/");
      } catch (error) {
        alert(error);
      } finally {
        setPosting(false);
      }
    } else {
      alert("The post must have a name, a prompt and a photo");
    }
  };

  const generateImage = async () => {
    if (post.prompt) {
      try {
        setGenerating(true);
        const response = await fetch("http://localhost:8080/api/dalle", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: post.prompt }),
        });

        if (!response.ok) {
          throw new Error(
            `Failed to generate image. Status: ${response.status}`
          );
        }
        const data = await response.json();

        // setPost({ ...post, photo: `data:image/jpeg;base64,${data.photo}` });
        setPost({ ...post, photo: data.photo });
      } catch (error) {
        console.log(error);
        alert(error);
      } finally {
        setGenerating(false);
      }
    } else {
      alert("The prompt is empty. Please enter a prompt.");
    }
  };

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
          isSurpriseMe
        />

        <div className="mt-2">
          <button
            type="button"
            onClick={generateImage}
            className="bg-[#646cff] text-white"
            disabled={generating}
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
          <button
            type="submit"
            className="bg-[#646cff] text-white"
            disabled={posting}
          >
            Publish Your Post
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
