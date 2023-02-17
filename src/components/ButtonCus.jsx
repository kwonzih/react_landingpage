import { Box,Text } from "@chakra-ui/react";

export default function ButtonCus({text}) {
    return (
        <Box cursor="pointer" py={2} px="4" color={"white"} rounded="lg" _hover={{ color: "blue.500", bg: "white" }} bg="red.500">
            <Text>{text}</Text>
        </Box>
    )
}