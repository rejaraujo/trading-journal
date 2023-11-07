import Image from "next/image";
import trades from "../../../../public/static/posts/charts/trades.png";
import table from "../../../../public/static/posts/charts/table.png";
import chartLarge from "../../../../public/static/posts/charts/chartsLarge.png";
import chartSmall from "../../../../public/static/posts/charts/ChartsSmall.png";

export default function DisplayMode() {
  return (
    <>
      <h1>Chart Display mode on Trades View</h1>
      <div style={{ background: "pink" }}>
        <div>
          <p>
            If you click on the Trades View section located on the navigation
            bar , you’ll see a Table, Charts (L), Charts (S) tab located on the
            center below the filtering bar
          </p>
        </div>
        <Image
          alt="trades view section"
          src={trades}
          quality={100}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <div>
          {" "}
          <p>There are three settings to choose from:</p>
          <ul>
            <li>Table (this is the default view)</li>
            <li>Charts (large)</li>
            <li>Charts (small)</li>
          </ul>
        </div>
        <div>
          <p>Here are examples of how each view looks.</p>
          <h4>Tables</h4>
          <Image
            alt="table"
            src={table}
            quality={100}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        <h4>Charts - Large</h4>
        <Image
          alt="chart-large"
          src={chartLarge}
          quality={100}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <h4>Charts - Small</h4>
        <Image
          alt="chart-small"
          src={chartSmall}
          quality={100}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <div>
          <p>
            The charts views can be very useful for quickly identifying patterns
            visually in your trades, without having to open the detail view for
            each trade.
          </p>
        </div>
        <div>
          <p>
            The charts displayed are automatically chosen from the charts you
            have configured for each trade, choosing the chart with the most
            detailed timeframe that will still show the entire trade (if
            possible). Any configured studies on the chosen chart will be shown.
          </p>
        </div>
      </div>
    </>
  );
}
