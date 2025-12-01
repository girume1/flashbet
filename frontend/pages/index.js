export default function Home() {
  return (
    <div style={{fontFamily:"system-ui,sans-serif",background:"#000",color:"#fff",minHeight:"100vh",padding:"40px",textAlign:"center"}}>
      <h1 style={{fontSize:"4rem",background:"linear-gradient(90deg,#00ffea,#0059ff)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
        ⚡️ FlashBet
      </h1>
      <p style={{fontSize:"1.8rem",margin:"30px 0"}}>The fastest real-time prediction market on Linera</p>
      <p>✅ Create Yes/No markets instantly<br/>✅ Resolve in &lt;1 second<br/>✅ Powered by Linera microchains</p>
      <p style={{marginTop:"50px",color:"#00ffea"}}>Built live in the final minutes for Linera Buildathon</p>
    </div>
  )
}
