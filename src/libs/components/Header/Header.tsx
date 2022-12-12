import { Grid } from '@mui/material';
import { styled } from '@mui/system';
import { useTranslation } from 'react-i18next';
import { LanguageChange } from '@UG/libs/components';
import { Namespaces } from '@UG/libs/types';

const StyledLogoPL = styled('img')`
  height: 60px;
`;

const StyledFlag = styled('img')`
  height: 32px;
`;

const StyledLine = styled('div')`
  border-left: 3px solid ${({ theme }) => theme.palette.secondary.main};
  height: 50px;
`;

const StyledGridElement = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 35px;
`;

export const Header = () => {
  const { t } = useTranslation(Namespaces.LIBS);

  return (
    <Grid
      position="fixed"
      top={0}
      left={0}
      right={0}
      marginLeft="auto"
      marginRight="auto"
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        backgroundColor: 'primary.light',
        width: '100%',
        height: 90,
        px: 6,
      }}
      data-cy="header"
    >
      <StyledGridElement data-cy="header-left">
        <StyledLogoPL src={t('ug_logo') || ''} alt="blue UG logo" data-cy="header-ug-logo"></StyledLogoPL>
        <StyledLine data-cy="header-line" />
      </StyledGridElement>

      <StyledGridElement data-cy="header-right">
        <LanguageChange />
        <StyledLine data-cy="header-line" />
        <StyledFlag src="/src/assets/eu_flag.jpg" alt="European Union Flag" data-cy="header-eu-flag"></StyledFlag>
      </StyledGridElement>
    </Grid>
  );
};
