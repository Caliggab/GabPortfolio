import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="greatquotes">
    <Container>
      <Title>
        GreatQuotes <Badge>2021</Badge>
      </Title>
      <P>
        A React application that explores Context and component interaction. It lets users post quotes and comment on them.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://quotesreact-13a4e.web.app/quotes">
            https://quotesreact-13a4e.web.app/quotes{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, NodeJS, Firebase</span>
        </ListItem>
      </List>

      <WorkImage src="/images/greatquotes-work1.png" alt="greatquotes" />
      <WorkImage src="/images/greatquotes-work2.png" alt="greatquotes" />
    </Container>
  </Layout>
)

export default Work
