import React from 'react'
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div>
    
      <h2>Home Page</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi distinctio a placeat repellendus tenetur qui laboriosam veniam voluptatum. Enim pariatur deserunt voluptatum a, beatae nobis odio nisi, nulla, quis sunt et est consequatur tenetur possimus sint iusto minima officia aliquam fugiat voluptas ad nesciunt quas nam exercitationem. Veniam aliquam laborum odio earum rerum dolorum cumque dicta labore culpa sint rem, perspiciatis officia, deserunt exercitationem porro sequi minus quis vel eius totam. Ea aperiam voluptates, impedit, similique sunt ut, exercitationem reiciendis repellat modi blanditiis neque! In non illo repudiandae, praesentium ullam beatae rem earum quidem a quasi dolore distinctio tempora maiores!</p>
      
      <button>
      <Link to="/about">About</Link>
      </button>

    </div>

  )
}

export default Home