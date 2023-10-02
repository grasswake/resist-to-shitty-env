'use client'
import React from 'react'

import { FileMarkdownOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import { useRouter } from 'next/navigation'

import { useCollapsed } from '@/hooks'

import styles from './BasicSider.module.scss'

import type { MenuProps } from 'antd'

const { Sider } = Layout

export const BasicSider = () => {
  const { collapsed, collapse } = useCollapsed()
  const router = useRouter()

  const menuItems: MenuProps['items'] = React.useMemo(
    () => [
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
    ],
    []
  )

  const handleMenuClick: NonNullable<MenuProps['onClick']> = (
    info: Parameters<NonNullable<MenuProps['onClick']>>[0]
  ) => {
    router.push(`/batch/${info.key}`)
  }

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={collapse}
      className={styles.sider}
    >
      <Menu
        data-testid="custom-element"
        theme="dark"
        mode="inline"
        items={menuItems}
        onClick={handleMenuClick}
      />
    </Sider>
  )
}
