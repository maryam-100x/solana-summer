// src/hooks/useSolanaSummerStats.js
import { useState, useEffect } from "react";

const MINT = import.meta.env.VITE_SUMMER_MINT;

export function useSolanaSummerStats() {
  const [stats, setStats] = useState({ marketCap: 0, volume24h: 0, holders: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!MINT) return;

    const fetchStats = async () => {
      try {
        // Token stats
// const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/bitquery?mint=${MINT}`);
const res = await fetch(`/api/bitquery?mint=${MINT}`);
        const json = await res.json();

        // Holders via Helius RPC
        const helius = await fetch(import.meta.env.VITE_HELIUS_RPC, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            jsonrpc: "2.0",
            id: "get-holders",
            method: "getTokenAccounts",
            params: {
              mint: MINT,
              limit: 1000,
            },
          }),
        });

        const data = await helius.json();
        const holders = new Set(data?.result?.token_accounts?.map(a => a.owner)).size || 0;

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
