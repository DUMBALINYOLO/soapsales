import React from "react"


const Welcome = ({ element }) => {
  return (
    <main>
      <section className="welcome">
        <div ref={element}>
          <p>Even if you scroll, i will stick with you</p>
          <button className="welcome__cta-primary">Contact us</button>
        </div>
      </section>
    </main>
  )
}

export default Welcome;