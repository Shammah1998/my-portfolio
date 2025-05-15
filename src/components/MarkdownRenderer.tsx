import React from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownRendererProps {
  content: string;
}

/**
 * A custom component to render markdown content without showing file paths
 */
const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  // Use a regular expression to extract only the actual markdown content
  // This strips any file path that might be at the end
  const cleanContent = content.replace(/\/my-portfolio\/src\/assets\/readme\/.*$/, '');
  
  return (
    <div className="markdown-content overflow-hidden">
      <ReactMarkdown>{cleanContent}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer; 