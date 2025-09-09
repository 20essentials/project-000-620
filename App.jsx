import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "virtual:windi.css"

function App() {
  return (
    <section className="relative animate-[move_5s_linear_infinite] w-[180px] h-[180px] md:w-[120px] md:h-[120px]">
      {Array.from({ length: 8 }, (_, i) => (
        <article
          key={i}
          className="absolute top-0 left-0 w-[180px] h-[180px] md:w-[120px] md:h-[120px]"
          style={{
            "--rot": i + 1,
            transform: `rotateY(calc(var(--rot) * 45deg)) translateZ(320px)`
          }}
        >
          <img
            src={`assets/g${i + 1}.avif`}
            alt={`Image Number ${i + 1}`}
            className="absolute top-0 left-0 w-full h-full"
          />
        </article>
      ))}
    </section>
  )
}

const root = document.createElement("div")
document.body.appendChild(root)
createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
)

const style = document.createElement("style")
style.textContent = `
  body {
    @apply h-screen w-full flex flex-wrap place-content-center bg-black overflow-hidden;
    transform-style: preserve-3d;
  }
  @keyframes move {
    0% { transform: perspective(1000px) rotateY(0deg); }
    100% { transform: perspective(1000px) rotateY(360deg); }
  }
  @keyframes circulin {
    0% { opacity: 0.5; width: 10px; height: 10px; }
    100% { opacity: 0; width: 300px; height: 300px; }
  }
  .item:hover::before {
    background-color: #fff;
    animation: circulin 0.3s linear forwards;
  }
  .item::before {
    content: '';
    position: absolute;
    top: 50%; left: 50%;
    width: 10px; height: 10px;
    transform: translate(-50%, -50%);
    z-index: 5;
    border-radius: 50%;
  }
`
document.head.appendChild(style)
