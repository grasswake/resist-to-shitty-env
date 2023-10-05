import { use } from 'react'

import fs from 'node:fs/promises'
import path from 'path'

import { Mermaid } from './Mermaid'

type MermaidViewProps = {
  fileName: string
}

type Props = {
  content: string
}

const readMermaidFile = (fileName: string): Promise<Props> => {
  return fs
    .readFile(
      path.resolve(process.cwd(), `src/features/mermaid/assets/${fileName}.md`),
      {
        encoding: 'utf8',
      }
    )
    .then((r) => {
      return {
        content: r.replace(/```/g, '').replace(/mermaid/g, ''),
      }
    })
}

const readModule = (fileName: string): Promise<() => void | undefined> => {
  return import(`../../assets/${fileName}`)
    .then((module) => {
      return module.default
    })
    .catch(() => {
      return undefined
    })
}

const readCssModule = (
  fileName: string
): Promise<
  | {
      readonly [key: string]: string
    }
  | undefined
> => {
  return import(`../../assets/${fileName}.module.scss`, {
    assert: { type: 'scss' },
  })
    .then((module) => {
      return module.default
    })
    .catch(() => {
      return undefined
    })
}

export const MermaidView = ({ fileName }: MermaidViewProps) => {
  const mermaidContent = use(readMermaidFile(fileName))
  const setEventListenersToWindow = use(readModule(fileName))
  const styleSheet = use(readCssModule(fileName))

  return (
    <Mermaid
      fileName={fileName}
      content={mermaidContent.content}
      setEventListenersToWindow={setEventListenersToWindow}
      styleSheet={styleSheet}
    />
  )
}
