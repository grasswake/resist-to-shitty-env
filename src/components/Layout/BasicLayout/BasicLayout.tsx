'use client'
import React from 'react'

import { FileMarkdownOutlined } from '@ant-design/icons'
import { Layout } from 'antd'
import { useRouter } from 'next/navigation'

import { BasicHeader } from '@/components/Header'
import { BasicSider, BasicSiderProps } from '@/components/Sider'

export const BasicLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()

  const menuItems: BasicSiderProps['menuItems'] = [
    {
      key: 'mermaid',
      icon: React.createElement(FileMarkdownOutlined),
      label: `Mermaid`,

      children: [
        {
          key: 'batch_schedule',
          label: 'Batch Schedule',
        },
      ],
    },
  ]

  const onMenuClick: NonNullable<BasicSiderProps['onMenuClick']> =
    React.useCallback(
      (info) => {
        router.push(`/batch/${info.key}`)
      },
      [router]
    )

  return (
    <Layout>
      <BasicHeader menuItems={[]} />
      <Layout hasSider>
        <BasicSider menuItems={menuItems} onMenuClick={onMenuClick} />
        <Layout>{children}</Layout>
      </Layout>
    </Layout>
  )
}
