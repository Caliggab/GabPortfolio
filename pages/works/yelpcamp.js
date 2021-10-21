import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="YelpCamp">
    <Container>
      <Title>
        YelpCamp <Badge>2021</Badge>
      </Title>
      <P>
        A full-stack application with full CRUD functionality created without
        any Javascript Library. It features authentication and authorization
        with best security practices. Integrates automatic geo-localization for the
        entered camps.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://sheltered-basin-02687.herokuapp.com">
            https://sheltered-basin-02687.herokuapp.com{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JavaScript, NodeJS, MongoDB, Bootstrap, Heroku</span>
        </ListItem>
      </List>

      <WorkImage src="/images/Yelpcamp-work1.png" alt="YelpCamp" />
      <WorkImage src="/images/Yelpcamp-work2.png" alt="YelpCamp" />
    </Container>
  </Layout>
)

export default Work
