export default function Home() {
  return (
    <div style={{fontFamily: "system-ui, sans-serif", background: "#000", color: "#fff", minHeight: "100vh", padding: "40px", textAlign: "center"}}>
      <h1 style={{fontSize: "4rem", background: "linear-gradient(90deg, #00ffea, #0059ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>
        ⚡️ FlashBet
      </h1>
      <p style={{fontSize: "1.8rem", margin: "30px 0"}}>
        The fastest real-time prediction market on Linera
      </p>
      <div style={{maxWidth: "600px", margin: "0 auto", lineHeight: "2"}}>
        <p>✅ Create Yes/No markets in 1 second</p>
        <p>✅ Bet with testnet tokens</p>
        <p>✅ Resolve instantly → winners paid immediately</p>
        <p>🚀 Powered by Linera microchains (sub-100ms finality)</p>
      </div>
      <br /><br />
      <p style={{color: "#00ffea", fontSize: "1.5rem"}}>
        Live on Linera Testnet right now
      </p>
      <p>Built in the final 30 minutes for Linera Buildathon ⚡</p>
    </div>
  )
}
