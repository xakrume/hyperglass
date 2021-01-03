import { Box, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { Markdown } from '~/components';
import { useColorValue, useBreakpointValue } from '~/context';
import { useOpposingColor } from '~/hooks';

import type { TFooterButton } from './types';

export const FooterButton = (props: TFooterButton) => {
  const { content, title, side, ...rest } = props;
  const placement = side === 'left' ? 'top' : side === 'right' ? 'top-end' : undefined;
  const bg = useColorValue('white', 'gray.900');
  const color = useOpposingColor(bg);
  const size = useBreakpointValue({ base: 'xs', lg: 'sm' });
  return (
    <Menu placement={placement} preventOverflow isLazy>
      <MenuButton
        as={Button}
        size={size}
        variant="ghost"
        aria-label={typeof title === 'string' ? title : undefined}>
        {title}
      </MenuButton>
      <MenuList
        px={6}
        py={4}
        bg={bg}
        color={color}
        boxShadow="2xl"
        textAlign="left"
        mx={{ base: 1, lg: 2 }}
        maxW={{ base: '100%', lg: '50vw' }}
        {...rest}>
        <Markdown content={content} />
      </MenuList>
    </Menu>
  );
};