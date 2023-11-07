import Image from "next/image";
import chartstudies from "../../../../public/static/posts/charts/chartstudies.png";
import selectstudies from "../../../../public/static/posts/charts/selectstudies.png";
import accountsettings from "../../../../public/static/posts/charts/accountsettings.png";

export default function StudiesComparison() {
  return (
    <>
      <h1>Chart studies and comparisons</h1>
      <div>
        <div>
          <p>
            Tradervue supports adding studies and comparisons to the
            auto-generated price charts for silver and gold subscribers.{" "}
          </p>
        </div>
        <div>
          <p>
            If you normally use, say, an EMA(20) on the 5-minute chart when
            you’re trading, then you can see the same in your journal when
            you’re reviewing later.{" "}
          </p>
        </div>
        <div>
          <p>Here are a few examples of the new studies in action: </p>
        </div>
        <Image
          alt="studies and comparisons"
          src={chartstudies}
          quality={100}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <h3>The supported studies include:</h3>
        <ul>
          <li>Exponential Moving Average</li>
          <li>Simple Moving Average</li>
          <li>Bollinger Bands</li>
          <li>VWAP</li>
          <li>Donchian Channels</li>
          <li>Keltner Channel</li>
          <li>Average True Range</li>
          <li>MACD</li>
          <li>RSI</li>
          <li>Fast and Slow Stochastics</li>
          <li>CCI</li>
          <li>AD</li>
        </ul>
        <p>
          If you click the study icon above each chart (next to the zoom icon),
          you’ll see the study editor for that chart, where you can choose
          studies and edit parameters:
        </p>
        <Image
          alt="select studies tab"
          src={selectstudies}
          quality={100}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <div>
          <p>
            You can also set studies in your chart defaults, so all of your
            trades will start out with the same set of information. If you wish
            to setup your execution charts in this way, please follow these
            steps:
          </p>
          <ul>
            <li>{"1) Log-in to your Tradervue account "} </li>
            <li>
              {"2) Click on your username located on the top right corner "}{" "}
            </li>
            <li>{"3) Click on the Chart Settings tab on the left "} </li>
            <li>
              {
                "4)You can have up to four charts on each trade page; specify the default charts you would like for each  "
              }{" "}
            </li>
          </ul>
        </div>
        <Image
          alt="account settings tab"
          src={accountsettings}
          quality={100}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
    </>
  );
}
