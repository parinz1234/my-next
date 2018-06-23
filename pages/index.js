import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default () => <div>
  <Head>
    <title>Index</title>
  </Head>
  <Title>My page</Title>
</div>