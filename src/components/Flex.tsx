import * as React from 'react';
import styled from '../styled-components';

export interface FlexProps {
  // flex-wrap
  wrapReverse?: boolean,
  noWrap?: boolean,
  // justify-content
  justifyContent?: boolean,
  justifyAround?: boolean,
  justifyCenter?: boolean,
  justifyEnd?: boolean,
  justifyBetween?: boolean,
  // align-items
  alignItems?: boolean,
  alignStretch?: boolean,
  alignEnd?: boolean,
  alignCenter?: boolean,
  alignBaseline?: boolean,
  // align-content
  alignContent?: boolean,
  contentStart?: boolean,
  contentEnd?: boolean,
  contentCenter?: boolean,
  contentBetween?: boolean,
  contentAround?: boolean,
  content?: any,
  column?:  boolean,
}

const Flex = styled.div`
  display: flex;
    flex-wrap: ${(props: FlexProps) => {
    if (props.wrapReverse) return 'wrap-reverse'
    else if (props.noWrap) return 'nowrap'
    return 'wrap'
  }};

  justify-content: ${(props: FlexProps) => {
    //if (props.justifyContent) return props.justifyContent
    if (props.justifyCenter) return 'center'
    else if (props.justifyAround) return 'space-around'
    else if (props.justifyBetween) return 'space-between'
    else if (props.justifyEnd) return 'flex-end'
    return 'flex-start'
  }};
    
  align-items: ${(props: FlexProps) => {
    //if (props.alignItems) return props.alignItems
    if (props.alignStretch) return 'stretch'
    else if (props.alignEnd) return 'flex-end'
    if (props.alignCenter) return 'center'
    else if (props.alignBaseline) return 'baseline'
    return 'flex-start'
  }};

  align-content: ${(props: FlexProps) => {
    //if (props.alignContent) return props.content
    if (props.contentStart) return 'flex-start'
    else if (props.contentEnd) return 'flex-end'
    else if (props.contentCenter) return 'center'
    else if (props.contentBetween) return 'space-between'
    else if (props.contentAround) return 'contentAround'
    return 'stretch'
  }};

  flex-direction: ${(props: FlexProps) => (props.column ? 'column' : 'row')};
`;

export interface ColumnProps {
  three?: boolean,
  four?: boolean,
  noPadding?: boolean,
}

export const Column = styled.div`
  width: ${(props: ColumnProps) => {
    if (props.three) return '33.33%';
    if (props.four) return '25%';
    return '50%'
  }};

  padding: ${props => (props.noPadding ? 0 : '15px')};
`;


export default Flex;