            
import { Box, HStack, VStack, Image,Text } from "@chakra-ui/react";
import Smile from "./assets/img/smile.webp";
import { ImEnter } from "react-icons/im"
import TypeIt from "typeit-react";
import ButtonCus from "./components/ButtonCus";


function App() {
  return (
    
      <VStack w="full">
        {/* 메뉴 */}
        <HStack w="full" h="80px" justifyContent={"center"} boxShadow="sm">
          <HStack w="1280px" h="full" justifyContent={"space-between"}>
            <Box w="80px" h="80px" overflow={"hidden"}>
              <Image w="80px" h="80px" objectFit={"cover"} src={Smile} />
            </Box>
            <HStack spacing={8}>
              <Text>업체소개</Text>
              <Text>서비스소개</Text>
              <Text>포트폴리오</Text>
              <Text>커뮤니티</Text>
              <Text>고객센터</Text>
              <HStack bg="blue.400" px={4} py="2" rounded={"md"}>
                <Text color="white">프로젝트관리</Text>
                <ImEnter color="white" size={"20px"}/>
              </HStack>
            </HStack>
          </HStack>
        </HStack>
        {/* 슬라이드 */}
        <Box w="full" h="full" bg="yellow.400" position={"relative"}>
            <Image w={"full"} h="full" objectFit={"cover"} objectPosition="center" src="https://tse4.mm.bing.net/th?id=OIP.W8apTKARTqVhmLzMCisNmAHaEs&pid=Api&P=0"></Image>
            <Box position={"absolute"} w="full" h="full" left="0" bgGradient={"linear(to-r,rgba(255,255,255,0.5),rgba(255,255,255,0.7))"}></Box>
            <VStack w="full" h="full" top={"40%"} position={"absolute"} alignItems="center">
              <VStack w={"1280px"} h="500px" alignItems={"flex-start"} >
                <VStack alignItems={"flex-start"} spacing="-4" >
                  <Text fontWeight={"900"} fontSize="60px">랜딩페이지</Text>
                  <TypeIt>This will be typed in a `span` element!</TypeIt>
                </VStack>
                <VStack alignItems={"flex-start"} spacing="0" fontWeight={"600"}>
                  <Text fontSize={"24px"}>트렌드에 맞게</Text>
                  <Text>트렌드에 맞게</Text>
                  <Text>트렌드에 맞게</Text>
                </VStack>
                <ButtonCus text={"자세히보기"}/>
              </VStack>
            </VStack>
        </Box> 
      </VStack>
    
  );
}

export default App;
