import React, { useState } from 'react';

// sample binary tree downline data
const initialTree = {
  name: 'You (Active)',
  rank: 'Gold Leader',
  left: {
    name: 'Sarah M.',
    rank: 'Silver (Leg L)',
    volume: '$2,400',
    left: { name: 'David K.', rank: 'Bronze', volume: '$800' },
    right: { name: 'Elena R.', rank: 'Starter', volume: '$450' }
  },
  right: {
    name: 'Michael T.',
    rank: 'Silver (Leg R)',
    volume: '$3,100',
    left: { name: 'Alex B.', rank: 'Starter', volume: '$300' },
    right: { name: 'Chloe W.', rank: 'Bronze', volume: '$1,200' }
  }
};

export default function NetworkTree() {
  const [selectedNode, setSelectedNode] = useState('You (Active)');
  // todo: add zoom & pan controls

  return (
    <section className="tree-section" id="tree">
      <div className="container">
        <div className="section-title">
          <h2>Binary Downline Structure</h2>
          <p>Visualize your 2-leg genealogy tree and volume balance</p>
        </div>

        <div className="tree-wrapper">
          {/* Root node */}
          <div className="tree-node root-node" onClick={() => setSelectedNode(initialTree.name)}>
            <div className="node-avatar">👤</div>
            <div className="node-info">
              <strong>{initialTree.name}</strong>
              <span>{initialTree.rank}</span>
            </div>
          </div>

          <div className="connector-line vertical-line"></div>

          {/* Level 1 branches */}
          <div className="tree-row">
            <div className="tree-branch left-branch">
              <div 
                className="tree-node"
                onClick={() => setSelectedNode(initialTree.left.name)}
              >
                <div className="node-avatar">👩</div>
                <div className="node-info">
                  <strong>{initialTree.left.name}</strong>
                  <span>{initialTree.left.rank}</span>
                  <small>{initialTree.left.volume}</small>
                </div>
              </div>
            </div>

            <div className="tree-branch right-branch">
              <div 
                className="tree-node"
                onClick={() => setSelectedNode(initialTree.right.name)}
              >
                <div className="node-avatar">👨</div>
                <div className="node-info">
                  <strong>{initialTree.right.name}</strong>
                  <span>{initialTree.right.rank}</span>
                  <small>{initialTree.right.volume}</small>
                </div>
              </div>
            </div>
          </div>

          {/* status note */}
          <div className="tree-status">
            <span>Selected Partner: <strong>{selectedNode}</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
}
