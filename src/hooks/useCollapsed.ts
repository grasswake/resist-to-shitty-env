import * as React from 'react'

import { CollapseType } from 'antd/es/layout/Sider'

export const useCollapsed = (initial = false) => {
  const [collapsed, setCollapsed] = React.useState(initial)

  const collapse = React.useCallback(
    (collapsed: boolean, _type: CollapseType) => setCollapsed(collapsed),
    []
  )

  return { collapsed, collapse }
}
