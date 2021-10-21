import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'

import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover p{
    color: #a0c93c;
  }

  &:hover img {
    transform: rotate(360deg);
    transition: 1s ease-out;
    opacity: 70%;
  }

  
`
const Logo = () => {
  const codeLogoImg = `/images/footprint${useColorModeValue('', '-dark')}.png`

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={codeLogoImg} width={20} height={20} alt="logo" borderRadius="md"/>
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}
          >
            Gabriel Arriaza
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
