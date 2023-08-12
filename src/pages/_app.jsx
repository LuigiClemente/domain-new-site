import dynamic from 'next/dynamic';
import IframeFood from '../components/iframeFood/IframeFood'; // Note the lowercase 'iframeFood'
import "../styles/index.css";

const DynamicIframeFood = dynamic(() => import('../components/iframeFood/IframeFood'));

export default function MyApp() {
  return (
    <DynamicIframeFood />
  );
}

