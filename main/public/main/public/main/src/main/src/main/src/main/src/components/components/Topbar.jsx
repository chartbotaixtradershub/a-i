export default function Topbar() {
  return (
    <div className="flex justify-between items-center bg-slate-900 p-4 text-white">
      <div>Balance: <strong>$10,000.00</strong></div>
      <div className="space-x-3">
        <button className="bg-blue-500 px-3 py-1 rounded">Deposit</button>
        <button className="bg-green-500 px-3 py-1 rounded">Withdraw</button>
      </div>
    </div>
  )
}
