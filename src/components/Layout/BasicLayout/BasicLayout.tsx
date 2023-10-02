'use client'
import React from 'react'

import { Layout } from 'antd'

import { BasicHeader } from '@/components/Header'
import { BasicSider } from '@/components/Sider'

export const BasicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <BasicHeader />
      <Layout hasSider>
        <BasicSider />
        <Layout>{children}</Layout>
      </Layout>
    </Layout>
  )
}
