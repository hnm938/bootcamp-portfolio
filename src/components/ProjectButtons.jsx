export const GitHubButton = (props) => {
  return (
    <button
      onClick={() => {
        window.open(`https://www.github.com/hnm938/${props.projectName}`);
      }}
    >
      GitHub
    </button>
  );
};

export const WebsiteButton = (props) => {
  return (
    <button
      onClick={() => {
        window.open(`${props.url}`);
      }}
    >
      Website
    </button>
  );
};
