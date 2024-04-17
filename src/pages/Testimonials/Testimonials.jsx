import "./Testimonials.css";
import icon_next from "../../assets/next-icon.png";
import icon_back from "../../assets/back-icon.png";
import user1 from "../../assets/avatar1.jpg";
import user2 from "../../assets/avatar2.jpg";
import user3 from "../../assets/avatar3.jpg";
import user4 from "../../assets/avatar6.jpg";
import { useRef } from "react";

export default function Testimonials() {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx < 0) {
      tx += 25;
    }
    console.log(slideForward);
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    console.log(slideBackward);
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <h1>TESTIMONIALS</h1>
      <img src={icon_next} alt="" className="next-btn" onClick={slideForward} />
      <img src={icon_back} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider-run">
        <ul ref={slider}>
          <li>
            <div className="slider-content">
              <div className="user-info">
                <img src={user1} alt="" />
                <div>
                  <h3>Maria Popa</h3>
                  <span>Bucharest, ROMANIA</span>
                </div>
              </div>
              <p>
                Curs HTML5 și CSS3: Perfect pentru începători! Instruire clară și practică utilă. Recomand tuturor cei
                ce își încep drumul în web development.
              </p>
            </div>
          </li>
          <li>
            <div className="slider-content">
              <div className="user-info">
                <img src={user2} alt="" />
                <div>
                  <h3>Ion Stoica</h3>
                  <span>Timisoara, ROMANIA</span>
                </div>
              </div>
              <p>
                Curs Python: Recenzie pozitivă! Structură clară, accesibil chiar și pentru cei fără experiență în
                programare. Exerciții practice și instrucțiuni clare.
              </p>
            </div>
          </li>
          <li>
            <div className="slider-content">
              <div className="user-info">
                <img src={user3} alt="" />
                <div>
                  <h3>Anna Müller</h3>
                  <span>Hamburg, GERMANY</span>
                </div>
              </div>
              <p>
                C++ Course: Powerful language, steep learning curve, but rewarding. Enables efficient and robust
                application development.
              </p>
            </div>
          </li>
          <li>
            <div className="slider-content">
              <div className="user-info">
                <img src={user4} alt="" />
                <div>
                  <h3>Ana Silva</h3>
                  <span>Lisabona, PORTUGAL</span>
                </div>
              </div>
              <p>
                JavaScript Course: Excellent for mastering fundamentals. Well-structured training covers basics like
                variables, functions, and control structures.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
