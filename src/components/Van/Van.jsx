export default function Van({ vans }) {
  const simpleStyles = {
    backgroundColor: "#E17654",
    padding: "4px 20px",
    color: "white",
    borderRadius: "6px",
    width: "85px",
    textAlign: "center",
    fontWeight: "bold"
  };
  const ruggedStyles = {
    backgroundColor: "#115E59",
    padding: "4px 20px",
    color: "white",
    borderRadius: "6px",
    width: "85px",
    textAlign: "center",
    fontWeight: "bold"
  };
  const luxuryStyles = {
    backgroundColor: "#161616",
    padding: "4px 20px",
    color: "white",
    borderRadius: "6px",
    width: "85px",
    textAlign: "center",
    fontWeight: "bold"
  };
  return (
    <>
      <article className="">
        <div>
          <img src={vans.imageUrl} className="rounded-xl" />
        </div>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold p-2">{vans.name}</h1>
            <div className="px-2">
              {vans.type === "simple" && (
                <p style={simpleStyles}>{vans.type}</p>
              )}
              {vans.type === "rugged" && (
                <p style={ruggedStyles}>{vans.type}</p>
              )}
              {vans.type === "luxury" && (
                <p style={luxuryStyles}>{vans.type}</p>
              )}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold flex flex-col">
              ${vans.price} <span className="font-thin">/day</span>
            </h2>
          </div>
        </div>
      </article>
    </>
  );
}
