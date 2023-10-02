import '@/styles/globals.scss'

import { ConfigProvider } from 'antd'

import { BasicLayout } from '@/components/Layout'
import { themeConfig } from '@/config'
import { AntdProvider } from '@/providers'

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Resist To Shitty Environment',
  description: 'Generated by grasswake',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AntdProvider>
          <ConfigProvider theme={themeConfig}>
            <BasicLayout>{children}</BasicLayout>
          </ConfigProvider>
        </AntdProvider>
      </body>
    </html>
  )
}
