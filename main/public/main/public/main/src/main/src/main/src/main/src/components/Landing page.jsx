export default function LandingPage() {
  return (
    <div className="text-white bg-slate-900 p-10 text-center">
      <h1 className="text-5xl text-blue-500 mb-5">Chartbotaixtrade</h1>
      <a href="https://track.deriv.com/_BdWWYCtdLopZl7VyVw174GNd7ZgqdRLk/1/"
        className="bg-blue-500 p-3 rounded m-3 inline-block">Create Account</a>
      <a href="https://oauth.deriv.com/oauth2/authorize?app_id=76613&scope=payments%20read%20trading_information&redirect_uri=https://your-backend.onrender.com/oauth_callback"
        className="bg-green-500 p-3 rounded m-3 inline-block">Log in & Trade</a>
      <footer className="mt-8 text-sm text-slate-400">
        ⚠️ <strong className="text-red-400">Risk Warning:</strong> Trading involves risk.
        <br /><a href="/terms.html" className="text-blue-400 underline">Terms of Use</a>
      </footer>
    </div>
  )
}
