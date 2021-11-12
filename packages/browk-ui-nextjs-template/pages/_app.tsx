import type {AppProps, NextWebVitalsMetric} from 'next/app';

export const MyApp: React.FC<AppProps> = ({Component, pageProps}) => {
  return <Component {...pageProps} />;
};

export function reportWebVitals(metric: NextWebVitalsMetric): void {
  console.log(metric);
}

export default MyApp;
