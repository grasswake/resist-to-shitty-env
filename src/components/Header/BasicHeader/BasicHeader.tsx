'use client'
import React from 'react'

import { Layout, Menu } from 'antd'

import styles from './BasicHeader.module.scss'

const { Header } = Layout

export const BasicHeader = () => {
  return (
    <Header className={styles.header}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(3).fill(null).map((_, index) => ({
          key: String(index + 1),
          label: `nav ${index + 1}`,
        }))}
      />
    </Header>
  )
}
