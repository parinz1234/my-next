import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import { Button } from 'antd'

import 'antd/dist/antd.css'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default () => <div>
  <Head>
    <title>Index</title>
  </Head>
  <Title>My page</Title>
  <Button type="primary">Primary</Button>
</div>