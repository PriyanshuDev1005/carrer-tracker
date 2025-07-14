'use client'

import Script from 'next/script'

export default function Analytics() {
  return (
    <>
      {/* Meta Pixel Script */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s){
            if(f.fbq) return;
            n = f.fbq = function() {
              n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if(!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = true;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = true;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
          }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

          fbq('init', '1068740558110633');
          fbq('track', 'PageView');
        `}
      </Script>

      {/* Meta Pixel NoScript fallback */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=1068740558110633&ev=PageView&noscript=1"
        />
      </noscript>
    </>
  )
}
