import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Vially Israel</Text>
            <Text color="gray.300" fontSize="small">email@email.com</Text>
          </Box>
        
      <Avatar size="md" name="Vially Israel" src="https://pbs.twimg.com/profile_images/1337888724303089672/ZcA265Fg_400x400.jpg"/>
    </Flex>

  );
}