import React, { memo } from 'react';
import { Menu, MenuList, Button } from 'bloomer';

export default memo(function Navigation() {
  return (
    <Menu className="menu">
      <MenuList className="menu__list">
        <li className="menu__item">
          <Button className="m-b-xs m-t-sm" isColor="dark" isOutlined>
            <span>Settings</span>&nbsp;
            <i className="fas fa-cog" />
          </Button>
        </li>
        <li className="menu__item">
          <Button className="m-b-xs m-t-xs" isColor="dark" isOutlined>
            <span>Theme</span>&nbsp;
            <i className="fas fa-palette" />
          </Button>
        </li>
      </MenuList>
    </Menu>
  );
});
