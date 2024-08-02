import { HStack, VStack, Img, Text, Heading } from "@chakra-ui/react";

export function EmployeeCard({ employee }) {
  const serverUrl = "http://localhost:3030";

  return (
    <HStack>
      <VStack m={5}>
        <Img
          boxSize="200px"
          src={`${serverUrl}/${employee.imageFilePath}`}
          alt={employee.firstName}
        />
      </VStack>
      <VStack alignItems="left">
        <HStack>
          <Heading>{employee.firstName}</Heading>
          <Text fontSize={25}>{employee.lastName}</Text>
        </HStack>
        <HStack>
          <Text fontSize={20}>{employee.jobTitle}</Text>
          <Text fontSize={15}>{`| ${employee.teamName}`}</Text>
        </HStack>
      </VStack>
    </HStack>
  );
}
