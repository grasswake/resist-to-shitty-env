'use client'
import React from 'react'

import { Layout, Menu } from 'antd'

import { useCollapsed } from '@/hooks'

import styles from './BasicSider.module.scss'

const { Sider } = Layout

import type { MenuItems, MenuClickEventHandler } from '@/types'

export type BasicSiderProps = {
  defaultCollapsed?: boolean
  menuItems: MenuItems
  onMenuClick?: MenuClickEventHandler
}

export const BasicSider = ({
  defaultCollapsed,
  menuItems,
  onMenuClick,
}: BasicSiderProps) => {
  const { collapsed, collapse } = useCollapsed(defaultCollapsed)

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={collapse}
      className={styles.sider}
    >
      <Menu
        theme="dark"
        mode="inline"
        items={React.useMemo(() => menuItems, [menuItems])}
        onClick={onMenuClick}
      />
    </Sider>
  )
}
