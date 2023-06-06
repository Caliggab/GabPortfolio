import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section'
import thumbYelpCamp from '../public/images/yelpCamp.png'
import thumbPokeApp from '../public/images/thumbPokeApp.png'
import thumbMyUni from '../public/images/thumbMyUni.png'
import GabMoviesThumb from '../public/images/GabMoviesThumb.png'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="gabmovies"
              title="GabMovies"
              thumbnail={GabMoviesThumb}
            >
              A React web application created with typescript that consumes the the movie database API with a responsive and slick design that makes for a great user experience. Contact me for login credentials. 
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="myunilibrary"
              title="MyUniLibrary"
              thumbnail={thumbMyUni}
            >
              A full stack library management application. With authentication and authorization. Built with React and a Postgresql backend.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="pokeapp"
              title="PokeApp"
              thumbnail={thumbPokeApp}
            >
              A full CRUD react application to store, search and learn about pokemon.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="yelpcamp"
              title="YelpCamp"
              thumbnail={thumbYelpCamp}
            >
              A full-stack CRUD app built with pure JS and Node.js with a
              MongoDB back-end
            </WorkGridItem>
          </Section>

        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
