import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="bg-slate-800 w-64 min-h-screen p-6 text-white space-y-6">
      <h1 className="text-3xl font-bold text-blue-500 mb-6">Chartbotaix</h1>
      <nav className="space-y-3">
        <Link to="/dashboard/trade">Trade</Link>
        <Link to="/dashboard/positions">Positions</Link>
        <Link to="/dashboard/bots">Bots</Link>
        <Link to="/dashboard/copytrade">CopyTrade</Link>
        <Link to="/dashboard/deposits">Deposits</Link>
        <Link to="/dashboard/withdrawals">Withdrawals</Link>
      </nav>
    </div>
  )
}
