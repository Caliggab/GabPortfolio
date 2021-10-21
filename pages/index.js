import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  SimpleGrid,
  List,
  ListItem,
  Link,
  Icon
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import { IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          mt={6}
          mb={6}
          p={3}
          align="center"
        >
          Hi! I'm a Web Developer and Musician based in Taiwan.
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Gabriel Arriaza
            </Heading>
            <p mb={2}>Digital Creator ( Developer | Musician | Designer )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/gabriel.jpg"
              alt="Profile Picture"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Gabriel is a web-developer and designer with a passion for learning
            and creating beautiful websites and applications. He also has
            a great drive to self-learn and discover new technologies in the
            ever-changing world of design and tech. Creativity tends to have no
            clear-cut boundaries, he is also a Musician and has played piano for
            more than 15 years. Currently he is located in Taipei.{' '}
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="green">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1993</BioYear>
            Born in El Salvador
          </BioSection>
          <BioSection>
            <BioYear>2009</BioYear>
            Started self-learning programming with Python.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Started to dedicate to Web-Development.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Graduated from National Taiwan Normal University in Piano Performance.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Things I ♥
          </Heading>
          <Paragraph>
            Music, Photography, Design, Playing Piano, learning languages, Art.
          </Paragraph>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Find me
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/Caliggab" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @caliggab
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.instagram.com/verdecaligine66/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @verdecaligine
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
