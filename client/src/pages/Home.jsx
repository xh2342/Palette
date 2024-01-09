import { useState, useEffect } from "react";
import { FormField } from "../components";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState(null);
  const [searchText, setSerachText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchResults, setSearchResults] = useState(null);

  const handleSearchChange = (e) => {};

  return (
    <section className="flex flex-col gap-4 mx-4 w-auto md:w-1/2 xl:w-1/3">
      <div className="flex flex-col mt-4">
        <h1 className="text-3xl font-semibold">The Community Showcase</h1>
        <p className="text-sm mt-2">
          Browse through a collection of imaginative and visually stunning
          images generated by DALL-E AI
        </p>
      </div>

      <div>
        <FormField
          labelName="Search Post"
          type="text"
          name="search-posts"
          placeholder="Search..."
          value={searchText}
          handleChange={handleSearchChange}
          isSurpriseMe={true}
        />
      </div>
    </section>
  );
};

export default Home;