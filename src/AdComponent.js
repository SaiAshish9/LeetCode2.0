import { useEffect } from 'react';

const AdComponent = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <ins className="adsbygoogle"
         style={{ display: 'block' }}
         data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
         data-ad-slot="YOUR_AD_SLOT_ID"
         data-ad-format="auto"
         data-full-width-responsive="true" />
  );
};

export default AdComponent;
