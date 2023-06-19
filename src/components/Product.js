import { Box, Button, HStack, Heading, Image, Stack, Tag, Text } from "@chakra-ui/react";

const Header = ({title}) => <Box p={4} shadow="md">    
    <Heading>{title}</Heading>
</Box>



function Product({ location }) {

    const { state } = location;
   
    if (!state){
        
        window.location = "/";
        
    }

    return (
       <Box>
        <Header title={state.title}/>
        <Box p={8} d="flex" alignItems="center">
            <Image w={48} src={state.image}/>
            <Box ml={4} p={3}>
                <Stack spacing={4}>
                    <Box>
                        <Heading>Price: ${state.price} </Heading>
                        <Tag mt="2 ">{state.category}</Tag>
                    </Box>
                    <Text>{state.description} </Text>
                    <HStack>
                        < Button w="xs" size="sm" colorScheme="green">Buy Now</Button>
                        <Button w="xs" size="sm">Share Product</Button>
                    </HStack>
                </Stack>
            </Box>
        </Box>
    </Box>

    );
}

export default Product;