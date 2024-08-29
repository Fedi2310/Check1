import { Card } from "react-bootstrap"
import product from "../product"

const Images =()=>{
    return(
        
          
            <Card.Img variant="top" src={product.url}/>
    )
}
export default Images