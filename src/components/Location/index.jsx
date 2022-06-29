const Location = ({ location: { street, ...rest } }) => (
  <div data-testid="location-id">
    {street?.number || ""} {street?.name || ""}
    {rest?.city ? `, ${rest?.city}` : ""}
    <br></br>
    {rest?.state ? `${rest?.state},` : ""} {rest.country || ""}
    <br></br>
    Postcode: {rest?.postcode || "N/A"}
  </div>
);
export default Location;
