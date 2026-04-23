import ReactFlow, {
  Background,
  Controls,
  MiniMap,
} from "reactflow";
import "reactflow/dist/style.css";

const nodes = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    data: { label: "🟢 Start" },
    style: { padding: 10, borderRadius: 10, background: "#bbf7d0" },
  },
  {
    id: "2",
    position: { x: 350, y: 100 },
    data: { label: "📄 Collect Documents" },
    style: { padding: 10, borderRadius: 10, background: "#bfdbfe" },
  },
  {
    id: "3",
    position: { x: 650, y: 100 },
    data: { label: "✅ Manager Approval" },
    style: { padding: 10, borderRadius: 10, background: "#fde68a" },
  },
  {
    id: "4",
    position: { x: 950, y: 100 },
    data: { label: "📧 Send Email" },
    style: { padding: 10, borderRadius: 10, background: "#e9d5ff" },
  },
  {
    id: "5",
    position: { x: 1250, y: 100 },
    data: { label: "🔴 End" },
    style: { padding: 10, borderRadius: 10, background: "#fecaca" },
  },
];

const edges = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e2-3", source: "2", target: "3", animated: true },
  { id: "e3-4", source: "3", target: "4", animated: true },
  { id: "e4-5", source: "4", target: "5", animated: true },
];

function App() {
  return (
    <div className="h-screen flex flex-col">
      <div className="h-14 bg-blue-600 text-white flex items-center px-6 text-xl font-bold">
        HR Workflow Designer
      </div>

      <div className="flex flex-1">

        {/* Left Sidebar */}
        <div className="w-60 bg-white border-r p-4">
          <h2 className="font-bold mb-4">Workflow Types</h2>
          <div className="space-y-3 text-sm">
            <div className="p-3 bg-gray-100 rounded">Onboarding</div>
            <div className="p-3 bg-gray-100 rounded">Leave Approval</div>
            <div className="p-3 bg-gray-100 rounded">Document Verification</div>
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1">
          <ReactFlow nodes={nodes} edges={edges} fitView>
            <MiniMap />
            <Controls />
            <Background />
          </ReactFlow>
        </div>

        {/* Right Panel */}
        <div className="w-72 bg-white border-l p-4">
          <h2 className="font-bold mb-4">Simulation</h2>
          <div className="space-y-2 text-sm text-gray-700">
            <p>✔ Start Triggered</p>
            <p>✔ Documents Collected</p>
            <p>✔ Approval Granted</p>
            <p>✔ Email Sent</p>
            <p>✔ Workflow Completed</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;