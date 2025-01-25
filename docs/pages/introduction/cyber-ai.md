# Crypto Social Data All-in-One API

This API consolidates crypto-related social media analytics and project data into a single endpoint. It fetches and processes discussions from multiple social media platforms—like Twitter—alongside project-specific on-chain data. Below is a summary of the core functionalities and typical use cases.

## Example Use Cases

### 1. Text Analysis & Project Extraction

Given a passage:

> "Many investors are focused on ProjectX and Solana’s new AI token. Meanwhile, Base is seeing rapid growth as well."

The API can:

- Identify `ProjectX`, `Solana`s AI tokens, and `Base` as recognized projects.
- Return structured data:
  - **Name**: “ProjectX”, “Solana AI Token”, “Base”
  - **Twitter**: Official Twitter handles (if available)
  - **Contract Address**: On-chain references
  - **Network**: E.g., Ethereum mainnet, Solana, Base, etc.
  - **Summary & Description**
  - **Information Source**: URLs to relevant references

### 2. Trending Projects

- **Input**: Time period, e.g., “Last 7 days”
- **Output**: Projects with highest discussion volume across social media.
  - Useful for discovering up-and-coming tokens or confirming popularity trends.

### 3. Project Search & Discussion

- **Input**: “Search for TokenXYZ”
- **Output**:
  - Project introduction
  - Latest mentions and discussions (with links to source).

## Example Applications

### **Finding the Highest APY for USDC**

1. Search for all USDC pools or yield aggregators.
2. Analyze APY and assess yield opportunities relative to user’s risk appetite.
3. Provide a direct option for users to deposit USDC.

### **Comparing Sentiment of AI Tokens on Base vs. Solana**

1. Search for all AI tokens on Solana and Base.
2. Analyze average market cap (MCap), compare token quantity, evaluate Twitter sentiment (mindshare).
3. Summarize: for instance, tokens on Solana might be more numerous but smaller in average MCap, while Base might host fewer but larger-cap tokens. Provide top trending tokens for more informed decisions.

## Conclusion

This All-in-One Crypto Social API is designed to simplify the process of discovering, analyzing, and monitoring crypto projects across platforms. By integrating social discussion data with on-chain metrics, it provides a comprehensive view of each project's performance and sentiment, enabling better-informed investment strategies and community insights.
