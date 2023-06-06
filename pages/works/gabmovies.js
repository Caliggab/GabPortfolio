import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
    <Layout title="myUniLibrary">
        <Container>
            <Title>
                GabMovies <Badge>2023</Badge>
            </Title>
            <P>
                A react web application created with typescript that consumes the the movie database API. It shows you info about your favorite movies and allows you to store your favorites. All with a responsive and slick design that makes for a great user experience. Contact me for login credentials.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://gabmovies.vercel.app/">
                        https://gabmovies.vercel.app/ <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>React, TypeScript, CSS</span>
                </ListItem>
            </List>

            <WorkImage src="/images/GabMovies-work1.png" alt="gabMovies" />
            <WorkImage src="/images/GabMovies-work2.png" alt="gabMovies" />
        </Container>
    </Layout>
)

export default Work
