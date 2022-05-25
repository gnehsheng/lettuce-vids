import React from "react";
import { generate as generateRandomUsername } from "canihazusername";
import { Flex, Heading, Button } from "@chakra-ui/react";
import Footer from "../shared/Footer";

function Home({ history }) {
  function createAndJoinRoom() {
    const roomID = generateRandomUsername();
    history.push(`/room/${roomID}`);
  }

  return (
    <div>

      <Flex
        bg="almostBlack"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        h="100vh"
      >
        <Flex>
          <Heading color="white" size="4xl">
            Lettuce
          </Heading>
          <Heading color="brand.400" size="4xl">
            Vids
          </Heading>
        </Flex>
        <Button mt={3} colorScheme="brand" size="lg" onClick={createAndJoinRoom}>
          Create a room
        </Button>
      </Flex>
      <Footer />
    </div>
  );
}

export default Home;
