import Image from "next/image";
import yourAccountSettings from "../../../../public/static/posts/charts/yourAccountSettings.png";
import addingComparisonSymbol from "../../../../public/static/posts/charts/addingComparisonSymbol.png";

export default function ComparisonSymbols() {
  return (
    <>
      <h1>Comparison Symbols</h1>
      <div style={{ background: "pink" }}>
        <div>
          <p>
            Tradervue has the ability to add comparison symbols to your price
            charts.
          </p>
        </div>
        <div>
          <p>
            So for example, if you wanted to plot the price of the instrument
            you’re trading, and the SPY on the same chart for comparison, you
            could do so.
          </p>
        </div>
        <div>
          <p>
            We have made this easy by adding the comparison symbol to your
            default chart settings:
          </p>
          <Image
            alt="Your-account-settings"
            src={yourAccountSettings}
            quality={100}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        <div>
          <p>
            From the Dashboard, click Settings, go to the Chart Settings tab,
            and you’ll be able to add a comparison symbol for any of your
            default configured charts.
          </p>
        </div>
        <div>
          <p>It will present a chart similar to the example below:</p>
          <Image
            alt="adding-comparisons symbol"
            src={addingComparisonSymbol}
            quality={100}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        <div>
          <p>
            The price for the comparison symbol is normalized to the symbol
            you’re comparing it to, so they will fit nicely on the same chart.{" "}
          </p>
        </div>
        <div>
          <p>
            You can use the comparisons with markets, sectors, other
            stocks/futures, or whatever you like!
          </p>
        </div>
      </div>
    </>
  );
}
