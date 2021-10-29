# Documentation

All KsfSwap pairs consist of two different tokens. KCS is not a native currency in KsfSwap, and is represented only by WKCS in the pairs. 

The canonical WKCS address used by the KsfSwap interface is `0x755d74d009f656ca1652cbdc135e3b6abfccc455`.

Results are cached for 5 minutes (or 300 seconds).

## [`/summary`](https://analytics.KsfSwap.info/api/summary)

Returns data for the top ~1000 KsfSwap pairs, sorted by reserves. 

### Request

`GET https://analytics.KsfSwap.info/api/summary`

### Response

```json5
{
  "updated_at": 1234567,              // UNIX timestamp
  "data": {
    "0x..._0x...": {                  // KRC20 token addresses, joined by an underscore
      "price": "...",                 // price denominated in token1/token0
      "base_volume": "...",           // last 24h volume denominated in token0
      "quote_volume": "...",          // last 24h volume denominated in token1
      "liquidity": "...",             // liquidity denominated in USD
      "liquidity_KCS": "..."          // liquidity denominated in KCS
    },
    // ...
  }
}
```

## [`/tokens`](https://analytics.KsfSwap.info/api/tokens)

Returns the tokens in the top ~1000 pairs on KsfSwap, sorted by reserves.

### Request

`GET https://analytics.KsfSwap.info/api/tokens`

### Response

```json5
{
  "updated_at": 1234567,              // UNIX timestamp
  "data": {
    "0x...": {                        // the address of the BEP20 token
      "name": "...",                  // not necessarily included for BEP20 tokens
      "symbol": "...",                // not necessarily included for BEP20 tokens
      "price": "...",                 // price denominated in USD
      "price_KCS": "...",             // price denominated in KCS
    },
    // ...
  }
}
```

## [`/tokens/0x...`](h https://analytics.KsfSwap.info/api/tokens/0x755d74d009f656ca1652cbdc135e3b6abfccc455)

Returns the token information, based on address.

### Request

`GET  https://analytics.KsfSwap.info/api/tokens/0x755d74d009f656ca1652cbdc135e3b6abfccc455`

### Response

```json5
{
  "updated_at": 1234567,              // UNIX timestamp
  "data": {
    "name": "...",                    // not necessarily included for BEP20 tokens
    "symbol": "...",                  // not necessarily included for BEP20 tokens
    "price": "...",                   // price denominated in USD
    "price_KCS": "...",               // price denominated in KCS
  }
}
```

## [`/pairs`]( https://analytics.KsfSwap.info/api/pairs)

Returns data for the top ~1000 KsfSwap pairs, sorted by reserves.

### Request

`GET  https://analytics.KsfSwap.info/api/pairs`

### Response

```json5
{
  "updated_at": 1234567,              // UNIX timestamp
  "data": {
    "0x..._0x...": {                  // the asset ids of KCS and BEP20 tokens, joined by an underscore
      "pair_address": "0x...",        // pair address
      "base_name": "...",             // token0 name
      "base_symbol": "...",           // token0 symbol
      "base_address": "0x...",        // token0 address
      "quote_name": "...",            // token1 name
      "quote_symbol": "...",          // token1 symbol
      "quote_address": "0x...",       // token1 address
      "price": "...",                 // price denominated in token1/token0
      "base_volume": "...",           // volume denominated in token0
      "quote_volume": "...",          // volume denominated in token1
      "liquidity": "...",             // liquidity denominated in USD
      "liquidity_KCS": "..."          // liquidity denominated in KCS
    },
    // ...
  }
}
```
