import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ProductCard } from '../components/ProductCard'
import { databases } from '../db/AppwriteDB'

import React, { useEffect } from 'react'

export function Home( props ) {
    document.title = "Your new favourite wine is here!"

    const [products, setProducts] = React.useState([]);

    async function getColletcions() {
        const data = await databases.listDocuments('6746c4c7000bbc64cfbd', '6746c4d8002655e7d833');
        setProducts(data.documents);
    }

    useEffect(() => {
        getColletcions();
    }, []);

    return(
        <Container>
            <Row className="justify-content-md-center">
                 <h2>Our selection</h2>
                    {products.map((p) => (
                        <ProductCard name={p.Name} description={p.Description} pic={p.Pic} price={p.Price}></ProductCard>
                    ))}
            </Row>
        </Container>
    )
}