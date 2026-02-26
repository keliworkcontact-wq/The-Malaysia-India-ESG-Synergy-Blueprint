import { useState, useCallback } from 'react';
import ReactFlow, { 
  Background, 
  Controls, 
  applyEdgeChanges, 
  applyNodeChanges,
  Node,
  Edge,
  OnNodesChange,
  OnEdgesChange,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { motion } from 'motion/react';

const initialNodes: Node[] = [
  {
    id: '1',
    data: { label: 'Strategic Alignment (Nanyang Siang Pau Feb 10, 2026)' },
    position: { x: 250, y: 0 },
    style: { background: '#1B365D', color: '#fff', borderRadius: '12px', padding: '10px' },
  },
  {
    id: '2',
    data: { label: 'Environmental Audit (CSV Harvesting)' },
    position: { x: 250, y: 100 },
    style: { background: '#2D5A27', color: '#fff', borderRadius: '12px', padding: '10px' },
  },
  {
    id: '3',
    data: { label: 'Strategy Pivot (Shakti 2.0 -> RAP)' },
    position: { x: 250, y: 200 },
    style: { background: '#2D5A27', color: '#fff', borderRadius: '12px', padding: '10px' },
  },
  {
    id: '4',
    data: { label: 'Tech Stack Transition (Python -> React Web App)' },
    position: { x: 250, y: 300 },
    style: { background: '#1B365D', color: '#fff', borderRadius: '12px', padding: '10px' },
  },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true },
  { id: 'e3-4', source: '3', target: '4', animated: true },
];

export default function ProcessLog() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-[600px] bg-stone-100 rounded-2xl border border-stone-200 overflow-hidden shadow-inner"
      id="process-log-flow"
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
      >
        <Background color="#aaa" gap={20} />
        <Controls />
      </ReactFlow>
    </motion.div>
  );
}
