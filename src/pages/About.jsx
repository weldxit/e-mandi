
// import React from 'react'
// import Layout from './Layout'

// export default function About() {
//   return (
//     <Layout>

//     <div>About</div>
//     </Layout>
//   )
// }
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'gatsby'
import Box from '@mui/material/Box';
import Layout from './Layout';
import './css/about.css'
import Product from './Product';



function BasicExample() {
  return (
    <Layout>
<div className="about">

    <Box
    sx={{
      width: 1300,
      height: 770,
      backgroundColor: 'primary.light',
    }}
    >
      <h1> About E-Mandi</h1>

      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit sapiente, molestiae quidem a repellendus corrupti dicta nemo error quia optio repellat recusandae earum debitis velit praesentium. Debitis commodi quo voluptate.
      Placeat, officia. Totam, expedita magni et ad hic quisquam officiis, fugiat iusto accusantium aperiam voluptatibus qui tempore quis veniam! Ullam deleniti autem expedita corporis aut, cupiditate fuga excepturi exercitationem soluta.
      Nobis laboriosam non tempora cum sint aliquam voluptatibus reprehenderit sapiente nam pariatur? Doloremque iure quidem odit explicabo voluptatum amet aliquam! Voluptate deserunt rerum debitis vel ad rem omnis doloremque itaque.
      Recusandae at suscipit unde laborum inventore voluptate similique assumenda aperiam nam! Pariatur quia repellat eveniet adipisci laudantium iusto amet corrupti, incidunt dicta at qui nam sit ad quam odit! Porro?
      Aperiam quaerat nam mollitia blanditiis magnam? Voluptas aut nihil placeat id itaque eligendi necessitatibus obcaecati tempora. Laborum velit nam odio nesciunt et! Quaerat beatae ipsum aliquam vero eligendi et optio?
      Et eligendi expedita, possimus explicabo tempore facere quos. Veritatis asperiores beatae ut animi quis, ipsa dicta nesciunt consectetur incidunt perferendis reprehenderit doloremque et itaque adipisci. Veritatis reprehenderit eligendi placeat. Mollitia.
      Id a delectus temporibus natus alias ad quas iure error possimus aut dolorum atque eligendi, optio suscipit debitis! Nulla suscipit iure earum molestias rem eligendi unde error facilis totam aliquid?</p>


      
    
      </Box> 
  </div>
    </Layout>
        )
}

export default BasicExample;