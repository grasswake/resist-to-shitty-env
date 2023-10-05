'use client'
import { useEffect, useRef } from 'react'

import { Breadcrumb, Layout, theme } from 'antd'
import mermaid from 'mermaid'

const { Content } = Layout
type MermaidViewProps = {
  fileName: string
  content: string
  setEventListenersToWindow?: () => void
  styleSheet?: {
    readonly [key: string]: string
  }
}

export const Mermaid = ({
  fileName = '',
  content = '',
  setEventListenersToWindow,
  styleSheet,
}: MermaidViewProps) => {
  const container = useRef<HTMLSpanElement>(null)
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  useEffect(() => {
    if (!container || !container.current) return
    ;(async () => {
      async function renderGantt() {
        if (setEventListenersToWindow) setEventListenersToWindow()
        const config = {
          startOnLoad: true,
          securityLevel: 'loose',
        }
        mermaid.initialize(config)

        const { svg, bindFunctions } = await mermaid.render('mermaid', content)

        if (!container.current) return

        container.current.innerHTML = svg
        if (bindFunctions) bindFunctions(container.current)
      }

      renderGantt()
    })()
  }, [content, setEventListenersToWindow])

  return (
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Mermaid</Breadcrumb.Item>
        <Breadcrumb.Item>{fileName}</Breadcrumb.Item>
      </Breadcrumb>
      <div
        style={{
          padding: 24,
          background: colorBgContainer,
        }}
      >
        <div
          className={styleSheet ? styleSheet['mermaid-container'] : undefined}
        >
          <pre
            contentEditable="true"
            dangerouslySetInnerHTML={{ __html: content }}
          ></pre>
          <span ref={container}></span>
        </div>
      </div>
    </Content>
  )
}
