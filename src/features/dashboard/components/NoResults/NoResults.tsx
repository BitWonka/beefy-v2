import { makeStyles } from '@material-ui/core';
import type { PropsWithChildren } from 'react';
import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonLink } from '../../../../components/Button';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { askForWalletConnection, doDisconnectWallet } from '../../../data/actions/wallet';
import { selectWalletAddressIfKnown } from '../../../data/selectors/wallet';
import { Section } from '../../../../components/Section';
import { styles } from './styles';
import iconEmptyState from '../../../../images/empty-state.svg';
import { AddressInput } from '../AddressInput';

const useStyles = makeStyles(styles);

interface NoResultsProps {
  error: boolean;
}

export const NoResults = memo<NoResultsProps>(function NoResults({ error }) {
  const { t } = useTranslation();
  const walletAddress = useAppSelector(selectWalletAddressIfKnown);
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const handleWalletConnect = useCallback(() => {
    if (walletAddress) {
      dispatch(doDisconnectWallet());
    } else {
      dispatch(askForWalletConnection());
    }
  }, [dispatch, walletAddress]);

  return (
    <Text error={error} walletAddress={walletAddress}>
      <div className={classes.actionsContainer}>
        <div className={classes.center}>
          {walletAddress ? (
            <ButtonLink className={classes.btn} to="/" variant="success">
              {t('NoResults-ViewAllVaults')}
            </ButtonLink>
          ) : (
            <Button className={classes.btn} onClick={handleWalletConnect} variant="success">
              {t('NoResults-ConnectWallet')}
            </Button>
          )}
        </div>
        <Divider />
        <AddressInput />
      </div>
    </Text>
  );
});

type TextProps = PropsWithChildren<{
  walletAddress?: string | null;
  error: boolean;
}>;
const Text = memo<TextProps>(function Text({ walletAddress, error, children }) {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Section>
      <div className={classes.container}>
        <div>
          <img className={classes.icon} src={iconEmptyState} alt="empty" />
        </div>
        <div className={classes.textContainer}>
          <div className={classes.title}>
            {error
              ? t('Dashboard-Invalid-Address')
              : walletAddress
              ? t('Dashboard-NoData')
              : t('Dashboard-NoAddress')}
          </div>
          <div className={classes.text}>
            {error ? t('Dashboard-Invalid') : walletAddress ? t('Dashboard-NoVaults') : null}
          </div>
        </div>
        {children}
      </div>
    </Section>
  );
});

const Divider = memo(function Divider() {
  const classes = useStyles();
  return (
    <div className={classes.center}>
      <div className={classes.dividerContainer}>
        <div className={classes.line} />
        <div className={classes.or}>OR</div>
        <div className={classes.line} />
      </div>
    </div>
  );
});
