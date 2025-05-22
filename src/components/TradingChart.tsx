import { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "SAXO:XAUTHB",
        "interval": "D",
        "timezone": "Asia/Bangkok",
        "theme": "light",
        "style": "1",
        "locale": "th_TH",
        "allow_symbol_change": true,
        "support_host": "https://www.tradingview.com"
      }`;
    if (container.current) {
      container.current.innerHTML = "";
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div
      className="w-full"
      id="tradingview_gold"
      ref={container}
      style={{ height: "600px" }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
}

export default memo(TradingViewWidget);
