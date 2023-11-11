import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/NotFound.css"

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 2000);
  }, []);

  return (
    <main style={{ position: "fixed", marginTop:'5rem',width:"100vw",height:'100vh' }}>
     <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center">404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2">Look like you're lost</h3>

                <p>the page you are looking for not available!</p>

                <br />

                <span>Going back to the homepage in a few seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
}
