import React from "react";
import styles from "./article.module.css";
const ArticleContent = () => {
  return (
    <article className={styles.prose}>
      <p className='pt-6'>
        In the most basic sense, the bidding price is the highest amount a
        person is willing to pay for an asset. The asking price is what the
        seller is willing to accept. This concept is related directly to supply
        and demand and isn’t exactly new – it’s been around for a long time.
      </p>
      <br />
      <p>
        To expand a bit more on the historical evolution of bid vs ask price,
        the concept became standardized when formal exchanges like the Amsterdam
        Stock Exchange (early 1600s) and the New York Stock Exchange (in 1792)
        were established.
      </p>
      <br />
      <p>
        Brokers and market makers (companies or individuals who provide
        liquidity by quoting bid and ask prices) became prominent in these
        exchanges, helping facilitate smooth trades. Today, however, digital
        exchange platforms like Interactive Broker for stocks or Paybis for
        cryptocurrencies have become the new standard, allowing users to review
        a vast amount of information and trade with ease.
      </p>
      <br />
      <h2 className={styles.heading}>Difference Between Bid and Ask</h2>
      <p>
        The bid and ask difference, or the amount a buyer can pay and the seller
        can accept for an asset, is known as the bid-ask spread. This spread
        represents a specific cost for traders because when a person buys, they
        typically pay the ask price. But when a person wants to sell assets,
        they get the bid price. This creates the grounds for the overall
        transaction cost for an asset.
      </p>
      <br />
      <p>
        The bid and ask spread can be wide and narrow. For example, a narrow
        spread usually indicates high liquid markets with higher trading
        volumes. This means that people can purchase assets more easily. A wider
        spread, on the other hand, happens when the markets have lower
        liquidity, which in turn leads to higher price ranges and volatility. To
        sum up, the bid-ask spread is used as a measure to evaluate how
        efficient markets are.
      </p>
      <br />
      <h2 className={styles.heading}>Bid and Ask Meaning</h2>
      <p>
        As we already mentioned, the bid and ask prices show the demand and
        supply dynamic, and influence the financial markets. Here’s a brief
        rundown of the key factors that are impacted by the bid and ask dynamic:
      </p>
      <br />
      <ul className='list-disc pl-8'>
        <li>
          <strong>Market liquidity:</strong> A narrow bid-ask spread usually
          indicates high liquidity, resulting in a more stabilized environment
          for purchasing and selling assets. Wider spreads show low liquidity,
          making it more difficult to trade due to higher prices.
        </li>
        <li>
          <strong>Price discovery:</strong> The bid and ask prices reflect the
          current market price for an asset, allowing buyers and sellers to
          settle on a certain price that’s generally accepted in the market.
        </li>
        <li>
          <strong>Trading costs:</strong> The bid-ask spreads have a huge impact
          on transaction costs. Buyers, especially day traders, have to observe
          the market price changes carefully as a wider spread can lead to
          higher transaction costs.
        </li>
        <li>
          <strong>Market volatility:</strong> When there’s a disagreement on an
          asset’s price, it can lead to a severe imbalance, resulting in high
          volatility and more expensive trades. This is especially evident with
          crypto prices.
        </li>
      </ul>
      <br />
      <h2 className={styles.heading}>Comparing Bid vs Ask Price</h2>
      <p>
        Now that we have a theoretical background on bid and ask prices, let’s
        look at some actual examples to help cement the concept.
      </p>
      <h3 className='text-xl my-4 font-light'>Example 1: Crypto Market</h3>
      <p>
        So, you’re looking to sell some of the most popular cryptocurrencies,
        like Bitcoin. For this example, let’s say you want to sell a single BTC
        for the US Dollar on a crypto exchange.
      </p>
      <br />
      <p className='mb-2'>
        One Bitcoin is currently worth a lot, so if you’d want to sell a single
        BTC, it would be around $95K (the price is subject to change rapidly).
        This would also be the bid price or the highest amount you’d be willing
        to pay. However, you might ask for $96K, creating a spread of $1000.
      </p>
    </article>
  );
};

export default ArticleContent;
