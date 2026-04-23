import ReactFlow, {
  Background,
  Controls,
  MiniMap,
} from "reactflow";
import "reactflow/dist/style.css";

const nodes = [
  {
    id: "1",
    position: { x: 50, y: 100 },
    data: { label: "Start Process" },
    style: {
      padding: 12,
      borderRadius: 14,
      background: "#22c55e",
      color: "white",
      border: "none",
      fontWeight: "bold",
    },
  },
  {
    id: "2",
    position: { x: 320, y: 100 },
    data: { label: "Collect Documents" },
    style: {
      padding: 12,
      borderRadius: 14,
      background: "#3b82f6",
      color: "white",
      fontWeight: "bold",
    },
  },
  {
    id: "3",
    position: { x: 620, y: 100 },
    data: { label: "Manager Approval" },
    style: {
      padding: 12,
      borderRadius: 14,
      background: "#f59e0b",
      color: "white",
      fontWeight: "bold",
    },
  },
  {
    id: "4",
    position: { x: 920, y: 100 },
    data: { label: "Send Welcome Email" },
    style: {
      padding: 12,
      borderRadius: 14,
      background: "#8b5cf6",
      color: "white",
      fontWeight: "bold",
    },
  },
  {
    id: "5",
    position: { x: 1230, y: 100 },
    data: { label: "Completed" },
    style: {
      padding: 12,
      borderRadius: 14,
      background: "#ef4444",
      color: "white",
      fontWeight: "bold",
    },
  },
];

const edges = [
  { id: "e1", source: "1", target: "2", animated: true },
  { id: "e2", source: "2", target: "3", animated: true },
  { id: "e3", source: "3", target: "4", animated: true },
  { id: "e4", source: "4", target: "5", animated: true },
];

function App() {
  return (
    <div className="h-screen flex flex-col bg-slate-100">

      {/* Navbar */}
      <div className="h-16 bg-gradient-to-r from-indigo-600 to-blue-600 text-white flex items-center justify-between px-6 shadow-lg">
        <h1 className="text-2xl font-bold">HR Workflow Designer</h1>

        <div className="space-x-3">
          <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold">
            Save
          </button>

          <button className="bg-black text-white px-4 py-2 rounded-lg">
            Export JSON
          </button>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex flex-1">

        {/* Sidebar */}
        <div className="w-64 bg-white shadow-xl p-5">
          <h2 className="text-lg font-bold mb-5">Workflow Templates</h2>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-blue-50 hover:bg-blue-100 cursor-pointer">
              Employee Onboarding
            </div>

            <div className="p-4 rounded-xl bg-green-50 hover:bg-green-100 cursor-pointer">
              Leave Approval
            </div>

            <div className="p-4 rounded-xl bg-yellow-50 hover:bg-yellow-100 cursor-pointer">
              Document Verification
            </div>
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1 m-4 rounded-2xl overflow-hidden shadow-xl bg-white">
          <ReactFlow nodes={nodes} edges={edges} fitView>
            <MiniMap />
            <Controls />
            <Background gap={18} size={1} />
          </ReactFlow>
        </div>

        {/* Right Panel */}
        <div className="w-80 bg-white shadow-xl p-5">
          <h2 className="text-lg font-bold mb-4">Workflow Status</h2>

          <div className="space-y-3 text-sm">
            <div className="p-3 bg-green-50 rounded-lg">Start Triggered</div>
            <div className="p-3 bg-blue-50 rounded-lg">Documents Submitted</div>
            <div className="p-3 bg-yellow-50 rounded-lg">Approval Granted</div>
            <div className="p-3 bg-purple-50 rounded-lg">Email Sent</div>
            <div className="p-3 bg-red-50 rounded-lg">Workflow Completed</div>
          </div>

          <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl font-bold">
            Run Simulation
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;