export default function TopHeader() {
  return (
    <div
      className="container-fluid d-flex align-items-center"
      style={{ backgroundColor: "#222", color: "white" }}
    >
     <div className="container top-header d-flex justify-content-between align-items-center" style={{ height: "9vh"}}>
       {/* Left: Contact Info (Column on small screens) */}
      <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center column-gap-3">
        <div className="d-flex align-items-center">
          <i className="fas fa-phone-alt me-2"></i>
          <span>+92 300 1234567</span>
        </div>
        <div className="d-flex align-items-center">
          <i className="fas fa-envelope me-2"></i>
          <span>email@example.com</span>
        </div>
      </div>

      {/* Right: Social Media */}
      <div className="d-flex accounts justify-content-center align-items-center gap-3">
        <a href="#" className="text-white"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="text-white"><i className="fab fa-twitter"></i></a>
        <a href="#" className="text-white"><i className="fab fa-google"></i></a>
        <a href="#" className="text-white"><i className="fab fa-linkedin-in"></i></a>
        <a href="#" className="text-white"><i className="fab fa-skype"></i></a>
      </div>
     </div>
    </div>
  );
}
