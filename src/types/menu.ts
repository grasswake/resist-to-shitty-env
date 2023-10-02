import type { MenuProps } from 'antd'

export type MenuItems = NonNullable<MenuProps['items']>
export type MenuClickEventHandler = NonNullable<MenuProps['onClick']>
export type MenuInfo = Parameters<MenuClickEventHandler>[0]
