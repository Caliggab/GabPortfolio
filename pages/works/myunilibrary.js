import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="myUniLibrary">
    <Container>
      <Title>
        MyUniLibrary <Badge>2022</Badge>
      </Title>
      <P>
        A full stack application built with a React front-end and a Postgresql back-end. Allows for the role of Student and Librarian in which students can checkout books and see them in their own "carts" and Librarians have full Admin capabilities to add and delete books and users.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://my-uni-library.herokuapp.com/">
            https://my-uni-library.herokuapp.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Postgresql, CSS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/myUni-work1.png" alt="myUni" />
      <WorkImage src="/images/myUni-work2.png" alt="myUni" />
    </Container>
  </Layout>
)

export default Work
