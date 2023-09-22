'use client'

import { useEffect, useRef } from 'react'

import mermaid from 'mermaid'

type MermaidViewProps = {
  content: string
  setEventListenersToWindow?: () => void
  styleSheet?: {
    readonly [key: string]: string
  }
}

export const Mermaid = ({
  content = '',
  setEventListenersToWindow,
  styleSheet,
}: MermaidViewProps) => {
  const container = useRef<HTMLSpanElement>(null)

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
    <div className={styleSheet ? styleSheet['mermaid-container'] : undefined}>
      <pre
        contentEditable="true"
        dangerouslySetInnerHTML={{ __html: content }}
      ></pre>
      <span ref={container}></span>
    </div>
  )
}
