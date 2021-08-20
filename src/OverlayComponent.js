function OverlayComponent() {
  let setOpacity = {
    position: "absolute",
    height: "100vh",
    width: "100%",
    fontWeight: "bold",
    color: "",
    zIndex: 100,
    backgroundColor: "rgba(0,0,0,0.73)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "215px",
    border: "1px solid green",
  };
  return (
    <div style={setOpacity}>
      <h2>Welcome To The Biggest Startup Event Of The Year</h2>
      <h2>HNGi8 Frontend Devs</h2>
      <button>Get in touch</button>
    </div>
  );
}
export default OverlayComponent;
