import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="PokeApp">
    <Container>
      <Title>
        PokeApp <Badge>2022</Badge>
      </Title>
      <P>
        A CRUD react app that consumes the poke-API. It displays all pokemon and
        their information and includes functionality to let you store favorite
        pokemon. Built with pure CSS and with a Firebase back-end. Deployed
        through Vercel.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://poke-app-phi.vercel.app/">
            https://poke-app-phi.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, CSS, HTML, Firebase</span>
        </ListItem>
      </List>

      <WorkImage src="/images/PokeApp-work1.png" alt="PokeApp" />
      <WorkImage src="/images/PokeApp-work2.png" alt="PokeApp" />
    </Container>
  </Layout>
)

export default Work
