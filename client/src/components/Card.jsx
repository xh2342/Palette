const Card = ({ name, prompt, photo }) => {
  return (
    <div className="w-[144px]">
      <img src={photo} alt={prompt} />
      <div>
        <h1 name="creator">{name}</h1>
        <p name="prompt">{prompt}</p>
      </div>
    </div>
  );
};

export default Card;
