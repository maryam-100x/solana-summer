import { useState, useEffect } from "react";

const MINT = import.meta.env.VITE_SUMMER_MINT;

export function useSolanaSummerStats() {
  const [stats, setStats] = useState({ marketCap: 0, volume24h: 0, holders: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!MINT) return;

    const fetchHolderCount = async () => {
      const allOwners = new Set();
      let cursor = undefined;

      while (true) {
        const params = { mint: MINT, limit: 1000 };
        if (cursor) params.cursor = cursor;

        const heliusRes = await fetch(import.meta.env.VITE_HELIUS_RPC, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            jsonrpc: "2.0",
            id: "get-holders",
            method: "getTokenAccounts",
            params,
          }),
        });

        const json = await heliusRes.json();
        const accounts = json?.result?.token_accounts || [];

        accounts.forEach((acc) => allOwners.add(acc.owner));

        cursor = json?.result?.cursor;
        if (!cursor) break;
      }

      return allOwners.size;
    };

    const fetchStats = async () => {
      try {
        const res = await fetch(`/api/bitquery?mint=${MINT}`);
        const json = await res.json();

        const holders = await fetchHolderCount();

        setStats({
          marketCap: json.marketCap || 0,
          volume24h: json.volume24h || 0,
          holders,
        });
      } catch (err) {
        console.error("Error fetching Solana Summer stats:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 15000);
    return () => clearInterval(interval);
  }, []);

  return { ...stats, loading };
}
