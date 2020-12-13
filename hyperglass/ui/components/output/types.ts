import type { BoxProps, FlexProps, TextProps } from '@chakra-ui/react';
import type { CellProps } from 'react-table';

export interface TTextOutput extends Omit<BoxProps, 'children'> {
  children: string;
}

export interface TActive {
  isActive: boolean;
}

export interface TMonoField extends TextProps {
  v: React.ReactNode;
}

export interface TAge extends TextProps {
  inSeconds: number;
}

export interface TWeight extends TextProps {
  weight: number;
  winningWeight: 'low' | 'high';
}

export interface TASPath {
  path: number[];
  active: boolean;
}

export interface TCommunities {
  communities: string[];
}

export interface TRPKIState {
  state: 0 | 1 | 2 | 3;
  active: boolean;
}

export interface TCell {
  data: CellProps<TRouteField>;
  rawData: TStructuredResponse;
}

export interface TBGPTable extends Omit<FlexProps, 'children'> {
  children: TStructuredResponse;
}