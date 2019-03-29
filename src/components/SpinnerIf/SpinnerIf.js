import React from 'react';
import { ContainerSpinner, ContentSpinner, Spinner } from './SpinnerIfStyle';
import { colors } from '../../styles/styles';

const SpinnerIf = (props) => {
  const {
    show, color,
  } = props;

  if (show) {
    return (
      <ContainerSpinner container justify="center" alignItems="center" spacing={16}>
        <ContentSpinner item>
          <Spinner spinnercolor={color || colors.primary}/>
        </ContentSpinner>
      </ContainerSpinner>
    );
  }
  return false;
};

export default SpinnerIf;
