import React from 'react'

import * as S from './styles'

interface NavigationButtonProps {
  children: React.ReactNode;
}

const NavigationButton = ({children}: NavigationButtonProps) => {
  return (
    <S.NavigationButton>
        {children}
    </S.NavigationButton>
  )
}

export default NavigationButton
