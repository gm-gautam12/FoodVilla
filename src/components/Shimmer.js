
const Shimmer = () => {
    return (
      <div data-testid="shimmer-load">
        <div className="flex flex-wrap p-2 m-2 justify-center">
          {Array(20)
            .fill("")
            .map((e, index) => (
              <div
                key={index}
                className="w-64 h-80 m-5 p-2 shadow-xl border-solid border-gray-200 border-2"
              >
                <img className="m-2 w-56 h-32 bg-gray-300" />
                <h2 className="m-2 h-5 bg-gray-300"></h2>
                <h3 className="m-2 h-9 w-44 bg-gray-300" />
                <br />
                <h4 className="m-2 h-4 w-44 bg-gray-300" />
              </div>
            ))}
        </div>
      </div>
    );
  };
  
  export default Shimmer;
  