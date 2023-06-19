import{ useEffect, useRef, useState } from "react";
import { Box, Button,Flex, Heading, Input, SimpleGrid, Stack, Tag, Text, Image, GridItem, } from "@chakra-ui/react";
import axios from "axios";
import Header from "./Header";
import { Link } from "react-router-dom";



const StoreItem = ({title, price, image }) =>{
    return (
        <Box p={4} borderRadius="lg" borderWidth="1px">
            <center> 
                <Image src={image} w={24} />
            </center>
            <Heading mt={4} noOfLines={2} size="sm" fontWeight="normal" >
                {title}
            </Heading>
            <spacer/>
        <Tag mt={4}>${price}</Tag>

        </Box>
    );
};


function Store({ }) {
    const [storeItem, setStoreItem] = useState([]);
    const [filteredItems, setFilterdItems] = useState([]); 

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then(({ data }) => {
          setStoreItem(data);
          setFilterdItems(data);
        });
    
      }, [])

   
    return (
        <Box >
             <Header title="Your store" />
             <h1>Matheus Marques Oliveira Silva - Sistemas de Informação - Matricula:822379 </h1>
        <Box p={2}>
             <Input onChange={(e) =>{
                let f = storeItem.filter(item => 
                    item.title.toLowerCase().includes(e.target.value.toLowerCase())
                    );
                setFilterdItems(f);
             }} 
             placeholder="Search" 
             mt={4} 
             />
            <SimpleGrid columns={4} spacing={4} mt={4} >    
                {filteredItems.map((item) => {
                    return (
                    <GridItem> 
                        <Link 
                        
                        to={{
                            pathname:`/product/${item.id}`,                           
                            state: item,
                            
                        }}>
                         <StoreItem {...item} />;
                        </Link>
                        
                    </GridItem>
                    );
                })}
            </SimpleGrid>
        </Box>
        </Box>
    );
} 
 
export default Store;