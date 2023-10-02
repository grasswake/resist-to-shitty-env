'use client'
import React from 'react'

import { Layout, Menu } from 'antd'

import styles from './BasicHeader.module.scss'

const { Header } = Layout

import type { MenuItems, MenuClickEventHandler } from '@/types'

export type BasicHeaderProps = {
  menuItems: MenuItems
  onMenuClick?: MenuClickEventHandler
}

export const BasicHeader = ({ menuItems, onMenuClick }: BasicHeaderProps) => {
  return (
    <Header className={styles.header}>
      <Menu
        theme="dark"
        mode="horizontal"
        items={React.useMemo(() => menuItems, [menuItems])}
        onClick={onMenuClick}
      />
    </Header>
  )
}
