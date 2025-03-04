import { css } from '@repo/styles/css';

export const styles = {
  container: css.raw({
    height: '40px',
    border: 'none',
    borderRadius: '8px',
    columnGap: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    padding: '0px 16px 0px 0px',
  }),
  circleOuter: css.raw({
    width: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  circle: css.raw({
    width: '12px',
    height: '12px',
    borderRadius: '30px',
    '&.loading': {
      backgroundColor: 'indicators.loading',
    },
    '&.success': {
      backgroundColor: 'indicators.success',
    },
    '&.warning': {
      backgroundColor: 'indicators.warning',
    },
    position: 'relative',
  }),
  pulseCircle: css.raw({
    borderRadius: '50%',
    // w/h same as circle
    width: '12px',
    height: '12px',
    position: 'absolute',
    opacity: '0',
    animation: 'loadingPulse 4s infinite cubic-bezier(.36, .11, .89, .32)',
    '&.loading': {
      backgroundColor: 'indicators.loading',
    },
    '&.success': {
      backgroundColor: 'indicators.success',
    },
    '&.warning': {
      backgroundColor: 'indicators.warning',
    },
    '&.notLoading': {
      display: 'none',
    },
    '&:nth-child(1)': {
      animationDelay: '0s',
    },
    '&:nth-child(2)': {
      animationDelay: '1s',
    },
    '&:nth-child(3)': {
      animationDelay: '2s',
    },
    '&:nth-child(4)': {
      animationDelay: '3s',
    },
  }),
  dropdown: css.raw({
    display: 'flex',
    flexDirection: 'column',
    border: 'solid 2px {colors.background.content.dark}',
    minWidth: '280px',
    padding: '0px',
  }),
  titleContainer: css.raw({
    textStyle: 'body.med',
    color: 'text.light',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: 'background.content.dark',
    borderTopLeftRadius: 'inherit',
    borderTopRightRadius: 'inherit',
  }),
  title: css.raw({
    display: 'flex',
    alignItems: 'center',
    '& img': {
      height: '24px',
      margin: '0px 4px',
    },
  }),
  cross: css.raw({
    color: 'text.dark',
    '&:hover': {
      color: 'text.light',
      cursor: 'pointer',
    },
  }),
  content: css.raw({
    padding: '10px',
    backgroundColor: 'background.content',
    borderBottomLeftRadius: 'inherit',
    borderBottomRightRadius: 'inherit',
  }),
  contentTitle: css.raw({
    textStyle: 'subline.sm',
    fontWeight: '700',
    color: 'text.dark',
  }),
  contentDetail: css.raw({
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  }),
  popoverLine: css.raw({
    textStyle: 'body.sm',
    color: 'text.middle',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    '& .circle': {
      marginRight: '8px',
    },
  }),
  popoverHelpText: css.raw({
    textStyle: 'body.sm',
    marginTop: '8px',
  }),
  line: css.raw({
    height: '16px',
    width: '2px',
    borderRadius: '3px',
    backgroundColor: 'background.content.light',
  }),
  chain: css.raw({
    display: 'flex',
    alignItems: 'center',
    '& img': {
      height: '24px',
    },
  }),
};
