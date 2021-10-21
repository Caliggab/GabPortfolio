import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section'
import thumbYelpCamp from '../public/images/yelpCamp.png'
import thumbGreatQuotes from '../public/images/thumbGreatQuotes.png'
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
              id="yelpcamp"
              title="YelpCamp"
              thumbnail={thumbYelpCamp}
            >
              A full-stack CRUD app built with pure JS and Node.js with a
              MongoDB back-end
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="greatquotes"
              title="GreatQuotes"
              thumbnail={thumbGreatQuotes}
            >
              A React application to share and discuss famous quotes.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
