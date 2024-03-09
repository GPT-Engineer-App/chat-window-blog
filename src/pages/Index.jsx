import React from "react";
import { Box, VStack, Heading, Text, Button, useColorMode, useColorModeValue, Image, Divider, Link, Container, FormControl, Input, FormLabel } from "@chakra-ui/react";
import { FaSun, FaMoon, FaUser, FaEnvelope, FaPlus } from "react-icons/fa";

const sampleArticles = [
  {
    title: "Understanding React's Reconciliation Algorithm",
    date: "April 1, 2023",
    excerpt: "Dive deep into how React optimizes UI updates with its reconciliation algorithm...",
  },
  {
    title: "Building Scalable Web Applications",
    date: "April 5, 2023",
    excerpt: "Learn strategies to scale your web applications effectively to handle large user bases...",
  },
  {
    title: "Exploring the New Features in TypeScript 4.x",
    date: "April 10, 2023",
    excerpt: "Discover the exciting new features that TypeScript 4.x brings to developers...",
  },
  {
    title: "The Journey to Full Stack Development",
    date: "April 15, 2023",
    excerpt: "My personal journey and insights into becoming a full stack developer...",
  },
];

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "gray.100");

  return (
    <VStack p={5} spacing={8} align="stretch">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Heading>My Dev Blog</Heading>
        <Button onClick={toggleColorMode}>{colorMode === "light" ? <FaMoon /> : <FaSun />}</Button>
      </Box>
      <Divider />
      {sampleArticles.map((article, index) => (
        <Box key={index} p={5} borderWidth="1px" borderRadius="md" bg="gray.500" color={textColor}>
          <Heading size="md">{article.title}</Heading>
          <Text fontSize="sm">{article.date}</Text>
          <Text mt={4}>{article.excerpt}</Text>
          <Link color="teal.500" href="#">
            Read More
          </Link>
        </Box>
      ))}
      <Divider />
      <Heading size="lg" mb={4}>
        About the Author
      </Heading>
      <Container>
        <VStack spacing={3} alignItems="flex-start">
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEwMDE4NzA1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Author's Portrait" />
          <Text fontWeight="bold">Jane Doe - Software Engineer</Text>
          <Text>With over a decade of experience in the tech industry, Jane has contributed to numerous open source projects and led software development teams to build scalable, efficient, and user-friendly applications. She's passionate about teaching and often writes about modern web technologies.</Text>
          <Button leftIcon={<FaUser />} as="a" href="#" variant="outline">
            View Portfolio
          </Button>
        </VStack>
      </Container>
    </VStack>
  );
};

export default Index;
